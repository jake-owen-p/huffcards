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
        hover &&
          "transition-theme hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-theme-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
