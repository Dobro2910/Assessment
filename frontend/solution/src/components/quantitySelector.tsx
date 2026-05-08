import { memo } from "react";

function QuantitySelector({
  quantity,
  setQuantity,
  max,
}: {
  quantity: number;
  setQuantity: (n: number) => void;
  max: number;
}) {
  return (
    <div>
      <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
      <span style={{ margin: "0 10px" }}>{quantity}</span>
      <button onClick={() => setQuantity(Math.min(max, quantity + 1))}>+</button>
    </div>
  );
}

export default memo(QuantitySelector);