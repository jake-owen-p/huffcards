import type { Category, CategoryMeta, Product, ProductType } from "./types";
import { categories as categoryData } from "./categories";
import { pokemonProducts } from "./pokemon";
import { yugiohProducts } from "./yugioh";
import { magicProducts } from "./magic";

// Deterministic rating + review count seeded from the product id, so
// values are stable across reloads without needing a real review system.
function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seedRating(id: string): number {
  const h = hashString(id + ":rating");
  // Bias toward 4.0 – 5.0 (real stores rarely show sub-4 averages)
  const r = 3.8 + (h % 121) / 100; // 3.80 – 5.00
  return Math.round(r * 10) / 10;
}

function seedReviewCount(id: string): number {
  const h = hashString(id + ":reviews");
  // Spread between 12 and 520 with a long tail
  return 12 + (h % 509);
}

function enrich(product: Product): Product {
  return {
    ...product,
    rating: seedRating(product.id),
    reviewCount: seedReviewCount(product.id),
  };
}

export const allProducts: Product[] = [
  ...pokemonProducts.map(enrich),
  ...yugiohProducts.map(enrich),
  ...magicProducts.map(enrich),
];

export const categories: CategoryMeta[] = categoryData.map((cat) => ({
  ...cat,
  productCount: allProducts.filter((p) => p.category === cat.slug).length,
}));

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  category: Category,
  options?: {
    productType?: ProductType;
    productTypes?: ProductType[];
    sort?: "price-asc" | "price-desc" | "name" | "newest";
    minPrice?: number;
    maxPrice?: number;
    inStockOnly?: boolean;
    limit?: number;
    offset?: number;
  },
): { products: Product[]; total: number } {
  let filtered = allProducts.filter((p) => p.category === category);

  if (options?.productType) {
    filtered = filtered.filter((p) => p.productType === options.productType);
  }
  if (options?.productTypes && options.productTypes.length > 0) {
    const set = new Set(options.productTypes);
    filtered = filtered.filter((p) => set.has(p.productType));
  }
  if (options?.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= options.minPrice!);
  }
  if (options?.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= options.maxPrice!);
  }
  if (options?.inStockOnly) {
    filtered = filtered.filter((p) => p.inStock);
  }

  const total = filtered.length;

  switch (options?.sort) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "newest":
      filtered.sort(
        (a, b) =>
          new Date(b.releaseDate).getTime() -
          new Date(a.releaseDate).getTime(),
      );
      break;
  }

  if (options?.offset) {
    filtered = filtered.slice(options.offset);
  }
  if (options?.limit) {
    filtered = filtered.slice(0, options.limit);
  }

  return { products: filtered, total };
}

export function getFeaturedProducts(limit = 8): Product[] {
  return allProducts.filter((p) => p.featured).slice(0, limit);
}

export function getNewProducts(limit = 8): Product[] {
  return allProducts
    .filter((p) => p.isNew)
    .sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(),
    )
    .slice(0, limit);
}

export function getRelatedProducts(
  productId: string,
  limit = 4,
): Product[] {
  const product = allProducts.find((p) => p.id === productId);
  if (!product) return [];

  const related = product.relatedProductIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);

  if (related.length < limit) {
    const more = allProducts
      .filter(
        (p) =>
          p.category === product.category &&
          p.id !== product.id &&
          !product.relatedProductIds.includes(p.id),
      )
      .slice(0, limit - related.length);
    return [...related, ...more].slice(0, limit);
  }

  return related.slice(0, limit);
}

export function searchProducts(query: string, limit = 20): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return allProducts
    .filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.setName.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q)) ||
        p.category.includes(q),
    )
    .slice(0, limit);
}

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}

export { type Product, type Category, type ProductType, type CategoryMeta } from "./types";
