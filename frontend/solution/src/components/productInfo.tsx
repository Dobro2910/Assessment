import { Product, Variant } from "../types/product";
import { memo } from "react";

function ProductInfo({
  product,
  variant,
}: {
  product: Product;
  variant: Variant;
}) {
  return (
    <div>
      <img
        src={variant.image}
        alt={product.name}
        loading="lazy"
        style={{
          width: "100%",
          maxWidth: 300,
          height: 300,
          objectFit: "cover",
          borderRadius: 8,
          display: "block",
        }}
      />

      <h2>{product.name}</h2>
      <p>{product.description}</p>

      <h3>${variant.price}</h3>
      <p>Stock: {variant.stock}</p>
    </div>
  );
}

export default memo(ProductInfo);