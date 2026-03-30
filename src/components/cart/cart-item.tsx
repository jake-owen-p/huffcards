"use client";

import Link from "next/link";
import type { CartItem as CartItemType } from "~/data/types";
import { useCart } from "./cart-provider";
import { ProductImage } from "~/components/product/product-image";
import { formatPrice } from "~/lib/format-price";

export function CartItemRow({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 border-b border-[var(--theme-border-primary)] py-4">
      <div className="w-16 shrink-0">
        <ProductImage
          image={item.image}
          name={item.name}
          size="sm"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <Link
          href={`/products/${item.slug}`}
          className="font-body text-sm font-bold text-theme-text hover:text-theme-accent transition-theme"
        >
          {item.name}
        </Link>
        <p className="font-body text-xs text-theme-text-secondary">
          {formatPrice(item.price)} each
        </p>
        <div className="mt-1 flex items-center gap-2">
          <button
            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
            className="flex h-7 w-7 cursor-pointer items-center justify-center border-theme font-body text-sm hover:bg-theme-surface-hover transition-theme"
          >
            -
          </button>
          <span className="w-8 text-center font-body text-sm font-bold">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
            className="flex h-7 w-7 cursor-pointer items-center justify-center border-theme font-body text-sm hover:bg-theme-surface-hover transition-theme"
          >
            +
          </button>
          <button
            onClick={() => removeItem(item.productId)}
            className="ml-auto cursor-pointer font-body text-xs text-theme-error hover:underline transition-theme"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="shrink-0 text-right">
        <span className="font-body text-sm font-bold text-theme-price">
          {formatPrice(item.price * item.quantity)}
        </span>
      </div>
    </div>
  );
}
