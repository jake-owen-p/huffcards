import Link from "next/link";
import { RetroButton } from "~/components/ui/retro-button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
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
