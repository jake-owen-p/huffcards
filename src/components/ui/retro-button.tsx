import { cn } from "~/lib/cn";

type RetroButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function RetroButton({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: RetroButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex cursor-pointer items-center justify-center font-body font-bold transition-theme",
        "border-theme",
        "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        variant === "primary" &&
          "border-[var(--theme-btn-primary-border)] bg-theme-btn-primary text-theme-btn-primary-text shadow-theme hover:shadow-theme-hover rounded-theme-sm",
        variant === "secondary" &&
          "border-theme-border bg-theme-btn-secondary text-theme-btn-secondary-text shadow-theme hover:shadow-theme-hover rounded-theme-sm",
        variant === "ghost" &&
          "border-transparent bg-transparent text-theme-text hover:border-theme-border hover:bg-theme-surface-hover",
        size === "sm" && "px-3 py-1.5 text-xs",
        size === "md" && "px-5 py-2.5 text-sm",
        size === "lg" && "px-7 py-3.5 text-base",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
