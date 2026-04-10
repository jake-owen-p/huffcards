"use client";

import Link from "next/link";
import type { Product } from "~/data/types";
import { ProductImage } from "./product-image";
import { PriceDisplay } from "./price-display";
import { StockIndicator } from "./stock-indicator";
import { useCart } from "~/components/cart/cart-provider";
import { useToast } from "~/components/ui/toast";
import { StarIcon } from "~/components/ui/icons";

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon
            key={i}
            size={12}
            filled={i < Math.round(rating)}
            className={i < Math.round(rating) ? "text-[var(--ember-primary)]" : "text-theme-border"}
          />
        ))}
      </div>
      <span className="text-[11px] font-medium text-theme-text-secondary">
        {rating.toFixed(1)}{" "}
        <span className="text-theme-text-muted">({count})</span>
      </span>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { addToast } = useToast();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    addItem(product);
    addToast(`${product.name} added to cart!`);
  };

  const discountPct =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100,
        )
      : null;

  return (
    <Link href={`/products/${product.slug}`} className="group block h-full">
      <div
        className="retro-card-hover flex h-full flex-col overflow-hidden bg-theme-surface"
        style={{
          border: "1px solid var(--theme-border-primary)",
          borderRadius: "var(--theme-radius-md)",
          boxShadow: "0 1px 3px rgba(30, 18, 8, 0.04)",
        }}
      >
        <div
          className="card-image-wrap relative overflow-hidden p-5"
          style={{ background: "var(--theme-bg-surface-alt)" }}
        >
          <ProductImage image={product.image} name={product.name} size="md" />

          {/* Top-left: discount or NEW */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {discountPct !== null && (
              <span
                className="rounded-full px-2.5 py-1 text-[10px] font-bold text-white"
                style={{ background: "var(--ember-primary)" }}
              >
                −{discountPct}%
              </span>
            )}
            {product.isNew && (
              <span
                className="rounded-full px-2.5 py-1 text-[10px] font-bold"
                style={{ background: "var(--ink)", color: "var(--parchment-base)" }}
              >
                NEW
              </span>
            )}
          </div>

          {/* Quick view hover overlay */}
          <div className="card-quick-view absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/40 via-transparent to-transparent p-4">
            <span className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-theme-text shadow-md">
              Quick view
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-theme-text-muted">
            {product.setName}
          </p>
          <h3 className="line-clamp-2 flex-1 font-heading text-[15px] font-semibold leading-snug text-theme-text group-hover:text-[var(--ember-primary)] transition-colors">
            {product.name}
          </h3>

          {product.rating !== undefined && product.reviewCount !== undefined && (
            <StarRating rating={product.rating} count={product.reviewCount} />
          )}

          <div className="mt-auto flex items-end justify-between pt-2">
            <PriceDisplay
              price={product.price}
              originalPrice={product.originalPrice}
              size="sm"
            />
            <span className="card-stock">
              <StockIndicator
                inStock={product.inStock}
                stockCount={product.stockCount}
              />
            </span>
          </div>

          {product.inStock && (
            <button
              onClick={handleQuickAdd}
              className="mt-2 w-full rounded-full py-2.5 text-xs font-semibold text-white transition-all hover:brightness-110"
              style={{ background: "var(--ink)" }}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
