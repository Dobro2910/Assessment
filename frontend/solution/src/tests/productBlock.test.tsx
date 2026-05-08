import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductBlock from "../components/productBlock";
import { Product, Variant } from "../types/product";

const mockProduct: Product = {
  id: "p1",
  name: "Test Product",
  description: "desc",
  variants: [
    { sku: "1", color: "Red", size: "M", price: 10, stock: 5, image: "" },
    { sku: "2", color: "Blue", size: "M", price: 10, stock: 0, image: "" },
  ],
};

describe("ProductBlock", () => {
  it("renders product", () => {
    render(
      <ProductBlock
        product={mockProduct}
        onAdd={jest.fn().mockResolvedValue(true)}
      />
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  it("calls onAdd when clicking button", async () => {
    const onAdd = jest.fn<
      Promise<boolean>,
      [string, Variant, number]
    >().mockResolvedValue(true);

    render(<ProductBlock product={mockProduct} onAdd={onAdd} />);

    fireEvent.click(screen.getByRole("button", { name: /add to cart/i }));

    await waitFor(() => {
      expect(onAdd).toHaveBeenCalledWith("p1", expect.any(Object), 1);
    });
  });

  it("disables button when out of stock", () => {
    const product: Product = {
      ...mockProduct,
      variants: [
        { sku: "1", color: "Red", size: "M", price: 10, stock: 0, image: "" },
      ],
    };

    render(
      <ProductBlock
        product={product}
        onAdd={jest.fn().mockResolvedValue(true)}
      />
    );

    const button = screen.getByRole("button", { name: /out of stock/i });
    expect(button).toBeDisabled();
  });

  it("shows loading state", async () => {
    const onAdd = jest.fn<
      Promise<boolean>,
      [string, Variant, number]
    >(
      () =>
        new Promise((resolve) => {
          setTimeout(() => resolve(true), 100);
        })
    );

    render(<ProductBlock product={mockProduct} onAdd={onAdd} />);

    fireEvent.click(screen.getByRole("button", { name: /add to cart/i }));

    // loading text appears
    expect(await screen.findByText("Adding...")).toBeInTheDocument();

    // and disappears after resolve
    await waitFor(() => {
        expect(
            screen.getByRole("button", { name: /add to cart/i })
        ).toHaveTextContent("Add to Cart");
    });
  });
});