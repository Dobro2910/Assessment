import { Product } from "../types/product";
import { AddToCartPayload } from "../types/cart";
import product from "../data/product";

export const getProduct = async (): Promise<Product[]> => {
  await new Promise((r) => setTimeout(r, 500));

  // simulate error (10% chance)
  if (Math.random() < 0.1) {
    throw new Error("Failed to fetch products");
  }

  return product;
};

export const addToCart = async (
  payload: AddToCartPayload
): Promise<{ success: boolean }> => {
  console.log("API CALL → addToCart", payload);

  // simulate error (10% chance)
  if (Math.random() < 0.1) {
    throw new Error("Failed to add item to cart");
  }

  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true }), 500)
  );
};