import { cn } from "~/lib/cn";

type RetroBadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  className?: string;
};

export function RetroBadge({
  children,
  variant = "default",
  className,
}: RetroBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block border-theme px-2 py-0.5 font-body text-xs font-bold uppercase",
        variant === "default" &&
          "border-theme-border bg-theme-surface-hover text-theme-text",
        variant === "success" &&
          "border-theme-success bg-theme-success/10 text-theme-success",
        variant === "warning" &&
          "border-theme-warning bg-theme-warning/10 text-theme-price",
        variant === "error" &&
          "border-theme-error bg-theme-error/10 text-theme-error",
        variant === "info" &&
          "border-theme-border bg-theme-surface-alt text-theme-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
