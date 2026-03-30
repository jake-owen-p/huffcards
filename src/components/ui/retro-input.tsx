import { cn } from "~/lib/cn";

type RetroInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function RetroInput({ className, ...props }: RetroInputProps) {
  return (
    <input
      className={cn(
        "w-full border-theme rounded-theme bg-theme-surface px-3 py-2 font-body text-sm text-theme-text",
        "placeholder:text-theme-text-secondary",
        "focus:bg-[var(--theme-bg-input-focus)] focus:outline-none focus:ring-2 focus:ring-theme-ring",
        "transition-theme",
        className,
      )}
      {...props}
    />
  );
}
