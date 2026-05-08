import { Product } from "../types/product";

const product: Product[] = [
  {
    id: "p1",
    name: "Classic T-Shirt",
    description: "Comfortable cotton t-shirt",
    variants: [
      { sku: "p1-red-s", color: "Red", size: "S", price: 25, stock: 10, image: "https://placehold.co/300x300/ff0000/ffffff?text=Red+S" },
      { sku: "p1-red-m", color: "Red", size: "M", price: 25, stock: 8, image: "https://placehold.co/300x300/ff0000/ffffff?text=Red+M" },
      { sku: "p1-blue-s", color: "Blue", size: "S", price: 27, stock: 5, image: "https://placehold.co/300x300/0000ff/ffffff?text=Blue+S" },
      { sku: "p1-blue-m", color: "Blue", size: "M", price: 27, stock: 0, image: "https://placehold.co/300x300/0000ff/ffffff?text=Blue+M" },
    ],
  },

  {
    id: "p2",
    name: "Hoodie",
    description: "Warm hoodie",
    variants: [
      { sku: "p2-black-m", color: "Black", size: "M", price: 60, stock: 6, image: "https://placehold.co/300x300/000000/ffffff?text=Black+M" },
      { sku: "p2-black-l", color: "Black", size: "L", price: 60, stock: 4, image: "https://placehold.co/300x300/000000/ffffff?text=Black+L" },
      { sku: "p2-gray-m", color: "Gray", size: "M", price: 58, stock: 7, image: "https://placehold.co/300x300/808080/ffffff?text=Gray+M" },
      { sku: "p2-gray-l", color: "Gray", size: "L", price: 58, stock: 3, image: "https://placehold.co/300x300/808080/ffffff?text=Gray+L" },
    ],
  },

  {
    id: "p3",
    name: "Running Shoes",
    description: "Lightweight running shoes",
    variants: [
      { sku: "p3-white-42", color: "White", size: "42", price: 120, stock: 5, image: "https://placehold.co/300x300/ffffff/000000?text=White+42" },
      { sku: "p3-white-43", color: "White", size: "43", price: 120, stock: 6, image: "https://placehold.co/300x300/ffffff/000000?text=White+43" },
      { sku: "p3-black-42", color: "Black", size: "42", price: 125, stock: 3, image: "https://placehold.co/300x300/000000/ffffff?text=Black+42" },
      { sku: "p3-black-43", color: "Black", size: "43", price: 125, stock: 2, image: "https://placehold.co/300x300/000000/ffffff?text=Black+43" },
    ],
  },

  {
    id: "p4",
    name: "Jeans",
    description: "Slim fit denim jeans",
    variants: [
      { sku: "p4-blue-30", color: "Blue", size: "30", price: 80, stock: 7, image: "https://placehold.co/300x300/0000ff/ffffff?text=Blue+30" },
      { sku: "p4-blue-32", color: "Blue", size: "32", price: 80, stock: 5, image: "https://placehold.co/300x300/0000ff/ffffff?text=Blue+32" },
      { sku: "p4-black-30", color: "Black", size: "30", price: 85, stock: 6, image: "https://placehold.co/300x300/000000/ffffff?text=Black+30" },
      { sku: "p4-black-32", color: "Black", size: "32", price: 85, stock: 4, image: "https://placehold.co/300x300/000000/ffffff?text=Black+32" },
    ],
  },

  {
    id: "p5",
    name: "Cap",
    description: "Adjustable cap",
    variants: [
      { sku: "p5-red-one", color: "Red", size: "One", price: 20, stock: 12, image: "https://placehold.co/300x300/ff0000/ffffff?text=Red" },
      { sku: "p5-black-one", color: "Black", size: "One", price: 20, stock: 10, image: "https://placehold.co/300x300/000000/ffffff?text=Black" },
    ],
  },

  {
    id: "p6",
    name: "Jacket",
    description: "Outdoor jacket",
    variants: [
      { sku: "p6-green-m", color: "Green", size: "M", price: 150, stock: 5, image: "https://placehold.co/300x300/008000/ffffff?text=Green+M" },
      { sku: "p6-green-l", color: "Green", size: "L", price: 150, stock: 2, image: "https://placehold.co/300x300/008000/ffffff?text=Green+L" },
      { sku: "p6-black-m", color: "Black", size: "M", price: 155, stock: 4, image: "https://placehold.co/300x300/000000/ffffff?text=Black+M" },
      { sku: "p6-black-l", color: "Black", size: "L", price: 155, stock: 1, image: "https://placehold.co/300x300/000000/ffffff?text=Black+L" },
    ],
  },

  {
    id: "p7",
    name: "Backpack",
    description: "Travel backpack",
    variants: [
      { sku: "p7-gray-20", color: "Gray", size: "20L", price: 70, stock: 8, image: "https://placehold.co/300x300/808080/ffffff?text=Gray+20L" },
      { sku: "p7-black-20", color: "Black", size: "20L", price: 75, stock: 6, image: "https://placehold.co/300x300/000000/ffffff?text=Black+20L" },
    ],
  },

  {
    id: "p8",
    name: "Smart Watch",
    description: "Fitness smartwatch",
    variants: [
      { sku: "p8-black", color: "Black", size: "Std", price: 200, stock: 3, image: "https://placehold.co/300x300/000000/ffffff?text=Black" },
      { sku: "p8-silver", color: "Silver", size: "Std", price: 210, stock: 2, image: "https://placehold.co/300x300/c0c0c0/000000?text=Silver" },
    ],
  },

  {
    id: "p9",
    name: "Sunglasses",
    description: "UV protection glasses",
    variants: [
      { sku: "p9-black", color: "Black", size: "One", price: 50, stock: 9, image: "https://placehold.co/300x300/000000/ffffff?text=Black" },
      { sku: "p9-brown", color: "Brown", size: "One", price: 50, stock: 7, image: "https://placehold.co/300x300/8B4513/ffffff?text=Brown" },
    ],
  },

  {
    id: "p10",
    name: "Sneakers",
    description: "Casual sneakers",
    variants: [
      { sku: "p10-white-41", color: "White", size: "41", price: 90, stock: 6, image: "https://placehold.co/300x300/ffffff/000000?text=White+41" },
      { sku: "p10-white-42", color: "White", size: "42", price: 90, stock: 5, image: "https://placehold.co/300x300/ffffff/000000?text=White+42" },
      { sku: "p10-black-41", color: "Black", size: "41", price: 95, stock: 4, image: "https://placehold.co/300x300/000000/ffffff?text=Black+41" },
      { sku: "p10-black-42", color: "Black", size: "42", price: 95, stock: 3, image: "https://placehold.co/300x300/000000/ffffff?text=Black+42" },
    ],
  },
];

export default product;