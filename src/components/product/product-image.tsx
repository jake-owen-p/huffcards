/* eslint-disable @next/next/no-img-element */
import { cn } from "~/lib/cn";

export function ProductImage({
  image,
  name,
  size = "md",
  className,
}: {
  image: string;
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <img
      src={image}
      alt={name}
      className={cn(
        "mx-auto object-contain",
        size === "sm" && "h-20 w-20",
        size === "md" && "h-48 w-auto",
        size === "lg" && "h-72 w-auto",
        className,
      )}
      loading="lazy"
    />
  );
}
