import { cn } from "~/lib/cn";

type RetroCardProps = React.HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
};

export function RetroCard({
  children,
  hover = false,
  className,
  ...props
}: RetroCardProps) {
  return (
    <div
      className={cn(
        "border-theme rounded-theme bg-theme-surface shadow-theme",
        hover && "retro-card-hover transition-theme",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
