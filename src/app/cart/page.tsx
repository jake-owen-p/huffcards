"use client";

import Link from "next/link";
import { useCart } from "~/components/cart/cart-provider";
import { CartItemRow } from "~/components/cart/cart-item";
import { CartSummary } from "~/components/cart/cart-summary";
import { Breadcrumbs } from "~/components/layout/breadcrumbs";
import { RetroButton } from "~/components/ui/retro-button";

export default function CartPage() {
  const { items, clearCart } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Cart" }]} />
      <h1 className="text-heading-xl mb-8 text-theme-text">Your Cart</h1>

      {items.length === 0 ? (
        <div className="border-theme bg-theme-surface p-12 text-center">
          <p className="text-heading-sm mb-2 text-theme-text-muted">
            Your cart is empty
          </p>
          <p className="mb-6 font-body text-sm text-theme-text-muted">
            Looks like you haven&apos;t added any cards yet.
          </p>
          <Link href="/pokemon">
            <RetroButton variant="primary">Browse Cards</RetroButton>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <CartItemRow key={item.productId} item={item} />
            ))}
            <div className="mt-4 flex justify-between">
              <Link href="/pokemon">
                <RetroButton variant="ghost" size="sm">
                  &larr; Continue Shopping
                </RetroButton>
              </Link>
              <RetroButton
                variant="ghost"
                size="sm"
                onClick={clearCart}
              >
                Clear Cart
              </RetroButton>
            </div>
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
}
