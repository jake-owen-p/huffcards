import { cn } from "~/lib/cn";
import { formatPrice } from "~/lib/format-price";

export function PriceDisplay({
  price,
  originalPrice,
  size = "md",
  className,
}: {
  price: number;
  originalPrice?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      <span
        className={cn(
          "font-body font-bold text-theme-price",
          size === "sm" && "text-sm",
          size === "md" && "text-lg",
          size === "lg" && "text-2xl",
        )}
      >
        {formatPrice(price)}
      </span>
      {hasDiscount && (
        <span className="font-body text-xs text-theme-text-secondary line-through">
          {formatPrice(originalPrice)}
        </span>
      )}
    </div>
  );
}
