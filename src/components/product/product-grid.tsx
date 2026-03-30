import type { Product } from "~/data/types";
import { ProductCard } from "./product-card";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="border-theme bg-theme-surface p-12 text-center">
        <p className="text-heading-sm text-theme-text-secondary">No products found</p>
        <p className="mt-2 font-body text-sm text-theme-text-muted">
          Try adjusting your filters or search terms.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{gap: 'var(--theme-grid-gap)'}}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
