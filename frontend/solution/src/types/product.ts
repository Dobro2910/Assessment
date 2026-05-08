export interface Variant {
  sku: string;
  color: string;
  size: string;
  price: number;
  stock: number;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  variants: Variant[];
}