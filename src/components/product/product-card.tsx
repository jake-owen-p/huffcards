"use client";

import Link from "next/link";
import type { Product } from "~/data/types";
import { RetroCard } from "~/components/ui/retro-card";
import { ProductImage } from "./product-image";
import { PriceDisplay } from "./price-display";
import { ProductTypeBadge } from "./product-type-badge";
import { StockIndicator } from "./stock-indicator";
import { useTheme } from "~/components/theme/theme-provider";
import { useCart } from "~/components/cart/cart-provider";
import { useToast } from "~/components/ui/toast";
import { StarIcon } from "~/components/ui/icons";

export function ProductCard({ product }: { product: Product }) {
  const { theme } = useTheme();
  const { addItem } = useCart();
  const { addToast } = useToast();
  const isRetro = theme === "retro";
  const isVault = theme === "vault";
  const isCatalogue = theme === "catalogue";

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    addItem(product);
    addToast(`${product.name} added to cart!`);
  };

  return (
    <Link href={`/products/${product.slug}`}>
      <RetroCard hover className={`card-hover flex h-full flex-col overflow-hidden ${isVault ? "vault-card-minimal" : ""}`}>
        <div className="card-image-wrap relative bg-theme-surface-alt p-4">
          <ProductImage image={product.image} name={product.name} size="md" />
          {product.isNew && !isVault && (
            <span className="absolute top-2 right-2 text-heading-xs bg-theme-accent px-2 py-1 text-theme-text rounded-theme-sm">
              NEW
            </span>
          )}
          {/* Catalogue: quick view overlay */}
          {isCatalogue && (
            <div className="card-quick-view absolute inset-0 flex items-center justify-center bg-black/30 rounded-theme">
              <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900">
                Quick View
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          {/* Badges - hidden on vault */}
          {!isVault && (
            <div className="card-badges flex flex-wrap gap-1">
              <ProductTypeBadge productType={product.productType} />
            </div>
          )}
          <h3 className="flex-1 font-body text-sm font-bold leading-tight text-theme-text">
            {product.name}
          </h3>
          {/* Catalogue: star rating placeholder */}
          {isCatalogue && (
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <StarIcon key={i} size={12} filled={i <= 4} className={i <= 4 ? "text-yellow-400" : "text-gray-300"} />
              ))}
              <span className="ml-1 text-[10px] text-[var(--theme-text-muted)]">(4.0)</span>
            </div>
          )}
          {/* Description - hidden on vault */}
          {!isVault && (
            <p className="card-description line-clamp-2 font-body text-xs text-theme-text-secondary">
              {product.description}
            </p>
          )}
          {/* Vault: "Market Price" label */}
          {isVault && (
            <p className="font-body text-[10px] uppercase tracking-widest text-[#666] mt-1">Market Price</p>
          )}
          <div className="mt-auto flex items-center justify-between pt-2">
            <PriceDisplay price={product.price} originalPrice={product.originalPrice} size="sm" />
            {!isVault && (
              <span className="card-stock">
                <StockIndicator inStock={product.inStock} stockCount={product.stockCount} />
              </span>
            )}
          </div>
          {/* Catalogue: quick add button */}
          {isCatalogue && product.inStock && (
            <button
              onClick={handleQuickAdd}
              className="mt-2 w-full rounded-lg bg-[var(--theme-accent-primary)] py-2 text-xs font-semibold text-white hover:opacity-90 transition-opacity"
            >
              + Add to Cart
            </button>
          )}
        </div>
      </RetroCard>
    </Link>
  );
}
