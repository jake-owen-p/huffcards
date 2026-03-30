import Link from "next/link";
import { RetroButton } from "~/components/ui/retro-button";
import { PixelCoin } from "~/components/ui/pixel-coin";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--theme-border-primary)] bg-theme-surface py-16 md:py-24">
      {/* Decorative coins */}
      <div className="retro-only">
        <div className="pointer-events-none absolute top-6 left-8 opacity-20">
          <PixelCoin size={48} />
        </div>
        <div className="pointer-events-none absolute right-12 bottom-10 opacity-15">
          <PixelCoin size={64} />
        </div>
        <div className="pointer-events-none absolute top-1/3 right-1/4 opacity-10">
          <PixelCoin size={32} />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-heading-2xl md:text-heading-3xl mb-4 text-theme-text">
          HuffCards
        </h1>
        <p className="mx-auto mb-2 max-w-xl font-body text-lg text-theme-price">
          Your Friendly Local Card Shop, Online
        </p>
        <p className="mx-auto mb-8 max-w-lg font-body text-sm text-theme-text-secondary">
          Pokemon &bull; Yu-Gi-Oh! &bull; Magic: The Gathering
          <br />
          Booster boxes, ETBs, singles & more at great prices.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/pokemon">
            <RetroButton variant="primary" size="lg">
              Browse Cards
            </RetroButton>
          </Link>
          <Link href="/search?q=new">
            <RetroButton variant="secondary" size="lg">
              New Arrivals
            </RetroButton>
          </Link>
        </div>

        {/* Retro decorative bar */}
        <div className="retro-only">
          <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="h-2 w-2 bg-theme-accent"
                style={{ opacity: i % 2 === 0 ? 1 : 0.4 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
