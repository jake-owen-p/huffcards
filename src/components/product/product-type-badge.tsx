import type { ProductType } from "~/data/types";
import { cn } from "~/lib/cn";

const config: Record<ProductType, { label: string; bg: string; text: string; border: string }> = {
  "booster-box": {
    label: "Booster Box",
    bg: "bg-blue-100 [html[data-theme='vault']_&]:bg-blue-900/30",
    text: "text-blue-700 [html[data-theme='vault']_&]:text-blue-300",
    border: "border-blue-300 [html[data-theme='vault']_&]:border-blue-700",
  },
  "elite-trainer-box": {
    label: "ETB",
    bg: "bg-purple-100 [html[data-theme='vault']_&]:bg-purple-900/30",
    text: "text-purple-700 [html[data-theme='vault']_&]:text-purple-300",
    border: "border-purple-300 [html[data-theme='vault']_&]:border-purple-700",
  },
  "booster-pack": {
    label: "Booster Pack",
    bg: "bg-sky-100 [html[data-theme='vault']_&]:bg-sky-900/30",
    text: "text-sky-700 [html[data-theme='vault']_&]:text-sky-300",
    border: "border-sky-300 [html[data-theme='vault']_&]:border-sky-700",
  },
  "collection-box": {
    label: "Collection",
    bg: "bg-amber-100 [html[data-theme='vault']_&]:bg-amber-900/30",
    text: "text-amber-700 [html[data-theme='vault']_&]:text-amber-300",
    border: "border-amber-300 [html[data-theme='vault']_&]:border-amber-700",
  },
  "starter-deck": {
    label: "Starter Deck",
    bg: "bg-green-100 [html[data-theme='vault']_&]:bg-green-900/30",
    text: "text-green-700 [html[data-theme='vault']_&]:text-green-300",
    border: "border-green-300 [html[data-theme='vault']_&]:border-green-700",
  },
  tin: {
    label: "Tin",
    bg: "bg-orange-100 [html[data-theme='vault']_&]:bg-orange-900/30",
    text: "text-orange-700 [html[data-theme='vault']_&]:text-orange-300",
    border: "border-orange-300 [html[data-theme='vault']_&]:border-orange-700",
  },
  bundle: {
    label: "Bundle",
    bg: "bg-rose-100 [html[data-theme='vault']_&]:bg-rose-900/30",
    text: "text-rose-700 [html[data-theme='vault']_&]:text-rose-300",
    border: "border-rose-300 [html[data-theme='vault']_&]:border-rose-700",
  },
  accessory: {
    label: "Accessory",
    bg: "bg-gray-100 [html[data-theme='vault']_&]:bg-gray-800/50",
    text: "text-gray-600 [html[data-theme='vault']_&]:text-gray-300",
    border: "border-gray-300 [html[data-theme='vault']_&]:border-gray-600",
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
