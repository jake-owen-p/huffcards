import { cn } from "~/lib/cn";

export function PixelDivider({ className }: { className?: string }) {
  return (
    <div className={cn("py-4", className)} role="separator">
      <div className="retro-only">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-theme-text-muted" />
            <div className="h-2 w-2 bg-theme-accent" />
            <div className="h-1 w-4 bg-theme-text-muted" />
            <div className="h-2 w-2 bg-theme-accent" />
            <div className="h-1 w-8 bg-theme-text-muted" />
            <div className="h-2 w-2 bg-theme-accent" />
            <div className="h-1 w-4 bg-theme-text-muted" />
            <div className="h-2 w-2 bg-theme-accent" />
            <div className="h-1 w-8 bg-theme-text-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}
