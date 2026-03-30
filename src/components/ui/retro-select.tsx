import { cn } from "~/lib/cn";

type RetroSelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export function RetroSelect({
  children,
  className,
  ...props
}: RetroSelectProps) {
  return (
    <select
      className={cn(
        "w-full border-theme rounded-theme bg-theme-surface px-3 py-2 font-body text-sm text-theme-text",
        "focus:bg-[var(--theme-bg-input-focus)] focus:outline-none focus:ring-2 focus:ring-theme-ring",
        "transition-theme cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
