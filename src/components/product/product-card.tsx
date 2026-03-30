import Link from "next/link";
import type { Product } from "~/data/types";
import { RetroCard } from "~/components/ui/retro-card";
import { ProductImage } from "./product-image";
import { PriceDisplay } from "./price-display";
import { ProductTypeBadge } from "./product-type-badge";
import { StockIndicator } from "./stock-indicator";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <RetroCard hover className="card-hover flex h-full flex-col overflow-hidden">
        <div className="card-image-wrap relative bg-theme-surface-alt p-4">
          <ProductImage
            image={product.image}
            name={product.name}
            size="md"
          />
          {product.isNew && (
            <span className="absolute top-2 right-2 text-heading-xs bg-theme-accent px-2 py-1 text-theme-text">
              NEW
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <div className="flex flex-wrap gap-1">
            <ProductTypeBadge productType={product.productType} />
          </div>
          <h3 className="flex-1 font-body text-sm font-bold leading-tight text-theme-text">
            {product.name}
          </h3>
          <p className="line-clamp-2 font-body text-xs text-theme-text-secondary">
            {product.description}
          </p>
          <div className="mt-auto flex items-center justify-between pt-2">
            <PriceDisplay price={product.price} originalPrice={product.originalPrice} size="sm" />
            <StockIndicator inStock={product.inStock} stockCount={product.stockCount} />
          </div>
        </div>
      </RetroCard>
    </Link>
  );
}
