import { memo } from "react";

function CartBadge({ count }: { count: number }) {
  return (
    <div style={{ position: "fixed", top: 20, right: 20 }}>
      🛒 {count}
    </div>
  );
}

export default memo(CartBadge);