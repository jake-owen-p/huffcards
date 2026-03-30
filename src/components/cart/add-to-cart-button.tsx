"use client";

import { useState } from "react";
import type { Product } from "~/data/types";
import { useCart } from "./cart-provider";
import { useToast } from "~/components/ui/toast";
import { RetroButton } from "~/components/ui/retro-button";

export function AddToCartButton({
  product,
  quantity = 1,
}: {
  product: Product;
  quantity?: number;
}) {
  const { addItem } = useCart();
  const { addToast } = useToast();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!product.inStock) return;
    addItem(product, quantity);
    setAdded(true);
    addToast(`${product.name} added to cart!`);
    setTimeout(() => setAdded(false), 1500);
  };

  if (!product.inStock) {
    return (
      <RetroButton disabled variant="secondary" className="w-full">
        Out of Stock
      </RetroButton>
    );
  }

  return (
    <RetroButton
      onClick={handleAdd}
      variant="primary"
      size="lg"
      className="w-full"
    >
      {added ? "+ Added!" : "+ Add to Cart"}
    </RetroButton>
  );
}
