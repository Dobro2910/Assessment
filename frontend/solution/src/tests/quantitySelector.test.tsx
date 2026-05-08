import { render, screen, fireEvent } from "@testing-library/react";
import QuantitySelector from "../components/quantitySelector";

describe("QuantitySelector", () => {
  it("increments and decrements correctly", () => {
    const setQuantity = jest.fn();

    render(
      <QuantitySelector quantity={2} setQuantity={setQuantity} max={5} />
    );

    fireEvent.click(screen.getByText("+"));
    expect(setQuantity).toHaveBeenCalledWith(3);

    fireEvent.click(screen.getByText("-"));
    expect(setQuantity).toHaveBeenCalledWith(1);
  });

  it("does not go below 1", () => {
    const setQuantity = jest.fn();

    render(
      <QuantitySelector quantity={1} setQuantity={setQuantity} max={5} />
    );

    fireEvent.click(screen.getByText("-"));
    expect(setQuantity).toHaveBeenCalledWith(1);
  });

  it("does not exceed max", () => {
    const setQuantity = jest.fn();

    render(
      <QuantitySelector quantity={5} setQuantity={setQuantity} max={5} />
    );

    fireEvent.click(screen.getByText("+"));
    expect(setQuantity).toHaveBeenCalledWith(5);
  });
});