import Link from "next/link";
import { RetroButton } from "~/components/ui/retro-button";
import { PixelCoin } from "~/components/ui/pixel-coin";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <div className="retro-only">
          <div className="mb-4 flex justify-center gap-2">
            <PixelCoin size={32} className="opacity-30" />
            <PixelCoin size={48} className="opacity-50" />
            <PixelCoin size={32} className="opacity-30" />
          </div>
        </div>
        <h1 className="text-heading-2xl mb-2 text-theme-text">404</h1>
        <p className="text-heading-sm mb-2 text-theme-text-secondary">Page Not Found</p>
        <p className="mb-8 font-body text-sm text-theme-text-muted">
          Looks like this card got lost in the trade binder.
        </p>
        <Link href="/">
          <RetroButton variant="primary">Back to Home</RetroButton>
        </Link>
      </div>
    </div>
  );
}
