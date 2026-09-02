export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  images: {
    front: string;
    back: string;
  };
  collection: string;
  description: string;
  sizes: Size[];
  colors: Color[];
  isNew?: boolean;
  isSale?: boolean;
  salePercentage?: number;
}

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type Color =
  | "Black"
  | "White"
  | "Red"
  | "Blue"
  | "Green"
  | "Grey";

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: Product[];
}
