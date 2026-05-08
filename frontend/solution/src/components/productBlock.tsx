import { useState, useMemo } from "react";
import type { CSSProperties } from "react";
import { Product, Variant } from "../types/product";
import ProductInfo from "./productInfo";
import QuantitySelector from "./quantitySelector";
import { memo } from "react";

function ProductBlock({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (
    productId: string,
    variant: Variant,
    qty: number
  ) => Promise<boolean>;
}) {
  const [color, setColor] = useState(product.variants[0].color);
  const [size, setSize] = useState(product.variants[0].size);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  const variant = useMemo(
    () =>
      product.variants.find(
        (v) => v.color === color && v.size === size
      ) || null,
    [product, color, size]
  );

  const colors = useMemo(
    () => [...new Set(product.variants.map((v) => v.color))],
    [product]
  );

  const sizes = useMemo(
    () =>
      [
        ...new Set(
          product.variants
            .filter((v) => v.color === color)
            .map((v) => v.size)
        ),
      ],
    [product, color]
  );

  if (!variant) return null;

  return (
    <div style={styles.card}>
      <div style={styles.grid}>
        <ProductInfo product={product} variant={variant} />

        <div style={styles.controls}>
          <h2>Select Options</h2>

          {/* COLOR */}
          <div>
            <p>Color</p>
            <div style={styles.optionRow}>
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  style={{
                    ...styles.optionBtn,
                    ...(color === c ? styles.optionActive : {}),
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div>
            <p>Size</p>
            <div style={styles.optionRow}>
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  style={{
                    ...styles.optionBtn,
                    ...(size === s ? styles.optionActive : {}),
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <p>
            {variant.stock > 0
              ? `In Stock: ${variant.stock}`
              : "Out of Stock"}
          </p>

          <QuantitySelector
            quantity={qty}
            setQuantity={setQty}
            max={variant.stock}
          />

          <button
            onClick={async () => {
                if (loading) return;

                setLoading(true);

                const success = await onAdd(product.id, variant, qty);

                if (success) setQty(1);

                setLoading(false);
            }}
            disabled={variant.stock === 0 || loading}
            style={{
                ...styles.button,
                background:
                variant.stock === 0
                    ? "#ccc"
                    : loading
                    ? "#999"
                    : "#4f46e5",
                cursor: loading ? "not-allowed" : "pointer",
            }}
            >
            {loading
                ? "Adding..."
                : variant.stock === 0
                ? "Out of Stock"
                : "Add to Cart"}
            </button>
        </div>
      </div>
    </div>
  );
}

export default memo(ProductBlock);

const styles: Record<string, CSSProperties> = {
  card: {
    marginBottom: 30,
    background: "#fff",
    borderRadius: 12,
    padding: 20,
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  optionRow: {
    display: "flex",
    gap: 8,
  },
  optionBtn: {
    padding: "6px 10px",
    border: "1px solid #ccc",
    borderRadius: 6,
    background: "#fff",
    cursor: "pointer",
  },
  optionActive: {
    background: "#4f46e5",
    color: "#fff",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: 8,
    color: "#fff",
    cursor: "pointer",
  },
};