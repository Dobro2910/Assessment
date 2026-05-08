import { render, screen } from "@testing-library/react";
import ProductInfo from "../components/productInfo";

const mockProduct = {
  id: "p1",
  name: "Test Product",
  description: "Test Description",
  variants: [],
};

const mockVariant = {
  sku: "sku1",
  color: "Red",
  size: "M",
  price: 100,
  stock: 5,
  image: "test.jpg",
};

describe("ProductInfo", () => {
  it("renders product info correctly", () => {
    render(<ProductInfo product={mockProduct} variant={mockVariant} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByText(/Stock: 5/)).toBeInTheDocument();
  });

  it("renders image with correct src", () => {
    render(<ProductInfo product={mockProduct} variant={mockVariant} />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "test.jpg");
  });
});