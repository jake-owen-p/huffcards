import type { Category, CategoryMeta, Product, ProductType } from "./types";
import { categories as categoryData } from "./categories";
import { pokemonProducts } from "./pokemon";
import { yugiohProducts } from "./yugioh";
import { magicProducts } from "./magic";

export const allProducts: Product[] = [
  ...pokemonProducts,
  ...yugiohProducts,
  ...magicProducts,
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
    sort?: "price-asc" | "price-desc" | "name" | "newest";
    minPrice?: number;
    maxPrice?: number;
    limit?: number;
    offset?: number;
  },
): { products: Product[]; total: number } {
  let filtered = allProducts.filter((p) => p.category === category);

  if (options?.productType) {
    filtered = filtered.filter((p) => p.productType === options.productType);
  }
  if (options?.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= options.minPrice!);
  }
  if (options?.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= options.maxPrice!);
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
