"use client";

import Link from "next/link";
import { RetroButton } from "~/components/ui/retro-button";
import { PixelCoin } from "~/components/ui/pixel-coin";
import { useTheme } from "~/components/theme/theme-provider";
import { allProducts } from "~/data";

function RetroHero() {
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

function CatalogueHero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Your Favourite Trading Cards, Delivered
        </h1>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Pokemon, Yu-Gi-Oh! and Magic: The Gathering — sealed products at great prices
        </p>
        <Link href="/pokemon">
          <button className="bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-full text-base hover:bg-blue-50 transition-all">
            Shop Now
          </button>
        </Link>
        <div className="flex items-center justify-center gap-8 mt-12 text-sm text-blue-200">
          <span>{allProducts.length}+ Products</span>
          <span className="w-1 h-1 rounded-full bg-blue-400" />
          <span>Free UK Shipping Over £50</span>
          <span className="w-1 h-1 rounded-full bg-blue-400" />
          <span>100% Authentic</span>
        </div>
      </div>
    </section>
  );
}

function VaultHero() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: '#0d0d0d' }}>
      <div className="vault-hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h1
          className="text-4xl md:text-6xl text-[#c9a84c] mb-6"
          style={{ fontFamily: 'var(--theme-font-heading)', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          The Collector&apos;s Vault
        </h1>
        <p className="text-lg text-[#a0a0a0] mb-10 tracking-wide">
          Curated. Authenticated. Yours.
        </p>
        <Link href="/pokemon">
          <button className="border border-[#c9a84c] bg-transparent text-[#c9a84c] px-10 py-3.5 text-sm tracking-widest uppercase hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-all duration-300">
            Explore the Collection
          </button>
        </Link>
      </div>
    </section>
  );
}

export function HeroSection() {
  const { theme } = useTheme();

  if (theme === "catalogue") return <CatalogueHero />;
  if (theme === "vault") return <VaultHero />;
  return <RetroHero />;
}
