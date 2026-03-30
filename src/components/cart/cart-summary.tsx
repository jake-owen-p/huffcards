"use client";

import { useCart } from "./cart-provider";
import { useToast } from "~/components/ui/toast";
import { RetroButton } from "~/components/ui/retro-button";
import { formatPrice } from "~/lib/format-price";
import { FREE_SHIPPING_THRESHOLD } from "~/lib/constants";

export function CartSummary() {
  const { subtotal, itemCount } = useCart();
  const { addToast } = useToast();
  const freeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingCost = freeShipping ? 0 : 399;
  const total = subtotal + shippingCost;

  return (
    <div className="border-theme bg-theme-surface p-6 shadow-theme">
      <h2 className="text-heading-sm mb-4 text-theme-text">Order Summary</h2>
      <div className="space-y-2 font-body text-sm">
        <div className="flex justify-between">
          <span className="text-theme-text-secondary">Items ({itemCount})</span>
          <span className="text-theme-text">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-theme-text-secondary">Shipping</span>
          <span className="text-theme-text">
            {freeShipping ? "FREE" : formatPrice(shippingCost)}
          </span>
        </div>
        {!freeShipping && (
          <p className="text-xs text-theme-text-muted">
            Free shipping on orders over {formatPrice(FREE_SHIPPING_THRESHOLD)}!
          </p>
        )}
        <div className="border-t border-[var(--theme-border-primary)] pt-2">
          <div className="flex justify-between font-bold">
            <span className="text-theme-text">Total</span>
            <span className="text-theme-price">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
      <RetroButton
        onClick={() => addToast("Checkout coming soon! This is a demo store.", "info")}
        variant="primary"
        size="lg"
        className="mt-6 w-full"
      >
        Proceed to Checkout
      </RetroButton>
    </div>
  );
}
