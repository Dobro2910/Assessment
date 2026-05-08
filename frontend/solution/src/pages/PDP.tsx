import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { getProduct, addToCart } from "../api/productApi";
import { Product, Variant } from "../types/product";
import CartBadge from "../components/cartBadge";
import ProductBlock from "../components/productBlock";
import { trackEvent } from "../utils/analytics";

export default function PDP() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getProduct()
      .then(setProducts)
      .catch(() => {
        setError("Failed to load products");
        setTimeout(() => setError(""), 3000);
      });
  }, []);

  const handleAdd = async (
    productId: string,
    variant: Variant,
    qty: number
  ): Promise<boolean> => {
    try {
      const res = await addToCart({
        sku: variant.sku,
        quantity: qty,
      });

      if (!res.success) throw new Error();

      // update cart count
      setCart((c) => c + qty);

      // update stock
      setProducts((prev) =>
        prev.map((p) =>
          p.id === productId
            ? {
                ...p,
                variants: p.variants.map((v) =>
                  v.sku === variant.sku
                    ? { ...v, stock: Math.max(0, v.stock - qty) }
                    : v
                ),
              }
            : p
        )
      );

      // success toast
      setMessage(`Added ${qty} item(s) to cart`);
      setTimeout(() => setMessage(""), 2000);

      trackEvent({
        type: "add_to_cart",
        sku: variant.sku,
        quantity: qty,
        timestamp: Date.now(),
      });

      return true;
    } catch {
      // error toast
      setError("Failed to add to cart");
      setTimeout(() => setError(""), 3000);
      return false;
    }
  };

  // loading state
  if (!products.length && !error) {
    return <p style={styles.loading}>Loading...</p>;
  }

  return (
    <div style={styles.page}>
      <CartBadge count={cart} />

      {message && <div style={styles.toast}>{message}</div>}

      {error && <div style={styles.errorToast}>{error}</div>}

      {products.map((product) => (
        <ProductBlock
          key={product.id}
          product={product}
          onAdd={handleAdd}
        />
      ))}
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    padding: 40,
    background: "#f3f4f6",
  },

  loading: {
    textAlign: "center",
    marginTop: 100,
  },

  toast: {
    position: "fixed",
    top: 20,
    right: 20,
    background: "#16a34a",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: 8,
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    fontWeight: "bold",
    zIndex: 999,
  },

  errorToast: {
    position: "fixed",
    top: 70,
    right: 20,
    background: "#dc2626",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: 8,
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    fontWeight: "bold",
    zIndex: 999,
  },
};