import { render, screen } from "@testing-library/react";
import CartBadge from "../components/cartBadge";

describe("CartBadge", () => {
  it("renders cart count correctly", () => {
    render(<CartBadge count={5} />);
    expect(screen.getByText(/🛒 5/i)).toBeInTheDocument();
  });

  it("updates when count changes", () => {
    const { rerender } = render(<CartBadge count={1} />);
    expect(screen.getByText(/1/)).toBeInTheDocument();

    rerender(<CartBadge count={3} />);
    expect(screen.getByText(/3/)).toBeInTheDocument();
  });
});