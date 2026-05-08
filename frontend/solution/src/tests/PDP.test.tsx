import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PDP from "../pages/PDP";
import * as api from "../api/productApi";

jest.mock("../api/productApi");

const mockProducts = [
  {
    id: "p1",
    name: "Test Product",
    description: "desc",
    variants: [
      {
        sku: "1",
        color: "Red",
        size: "M",
        price: 10,
        stock: 5,
        image: "",
      },
    ],
  },
];

describe("PDP", () => {
  it("shows loading initially", () => {
    (api.getProduct as jest.Mock).mockResolvedValue([]);
    render(<PDP />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it("renders products after load", async () => {
    (api.getProduct as jest.Mock).mockResolvedValue(mockProducts);

    render(<PDP />);

    expect(await screen.findByText("Test Product")).toBeInTheDocument();
  });

  it("adds to cart and shows toast", async () => {
    (api.getProduct as jest.Mock).mockResolvedValue(mockProducts);
    (api.addToCart as jest.Mock).mockResolvedValue({ success: true });

    render(<PDP />);

    await screen.findByText("Test Product");

    await userEvent.click(screen.getByText("Add to Cart"));

    await waitFor(() =>
      expect(screen.getByText(/Added 1 item/)).toBeInTheDocument()
    );
  });

  it("shows error toast when API fails", async () => {
    (api.getProduct as jest.Mock).mockRejectedValue(new Error());

    render(<PDP />);

    await waitFor(() =>
      expect(screen.getByText(/Failed to load products/)).toBeInTheDocument()
    );
  });
});