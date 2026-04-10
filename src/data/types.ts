export type Category = "pokemon" | "yugioh" | "magic";

export type ProductType =
  | "booster-box"
  | "elite-trainer-box"
  | "booster-pack"
  | "collection-box"
  | "starter-deck"
  | "tin"
  | "bundle"
  | "accessory";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  productType: ProductType;
  price: number; // in pence
  originalPrice?: number; // in pence, for showing discounts
  description: string;
  longDescription: string;
  setName: string;
  inStock: boolean;
  stockCount: number;
  releaseDate: string; // ISO date
  tags: string[];
  featured: boolean;
  isNew: boolean;
  image: string; // path in /public, e.g. "/products/pokemon/123.png"
  relatedProductIds: string[];
  rating?: number; // 3.5 – 5.0, seeded deterministically from id
  reviewCount?: number; // 8 – 520, seeded deterministically from id
};

export type CategoryMeta = {
  slug: Category;
  name: string;
  shortName: string;
  description: string;
  color: string;
  secondaryColor: string;
  productCount: number;
};

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  category: Category;
  productType: ProductType;
  image: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
