import type { ProductType } from "~/data/types";
import { cn } from "~/lib/cn";

const config: Record<ProductType, { label: string; bg: string; text: string; border: string }> = {
  "booster-box": {
    label: "Booster Box",
    bg: "bg-blue-100",
    text: "text-blue-700",
    border: "border-blue-300",
  },
  "elite-trainer-box": {
    label: "ETB",
    bg: "bg-purple-100",
    text: "text-purple-700",
    border: "border-purple-300",
  },
  "booster-pack": {
    label: "Booster Pack",
    bg: "bg-sky-100",
    text: "text-sky-700",
    border: "border-sky-300",
  },
  "collection-box": {
    label: "Collection",
    bg: "bg-amber-100",
    text: "text-amber-700",
    border: "border-amber-300",
  },
  "starter-deck": {
    label: "Starter Deck",
    bg: "bg-green-100",
    text: "text-green-700",
    border: "border-green-300",
  },
  tin: {
    label: "Tin",
    bg: "bg-orange-100",
    text: "text-orange-700",
    border: "border-orange-300",
  },
  bundle: {
    label: "Bundle",
    bg: "bg-rose-100",
    text: "text-rose-700",
    border: "border-rose-300",
  },
  accessory: {
    label: "Accessory",
    bg: "bg-gray-100",
    text: "text-gray-600",
    border: "border-gray-300",
  },
};

export function ProductTypeBadge({
  productType,
}: {
  productType: ProductType;
}) {
  const c = config[productType];
  return (
    <span
      className={cn(
        "inline-block px-2 py-0.5 font-body text-xs font-bold uppercase",
        "border",
        c.bg,
        c.text,
        c.border,
      )}
      style={{ borderRadius: "var(--theme-radius-sm)" }}
    >
      {c.label}
    </span>
  );
}
