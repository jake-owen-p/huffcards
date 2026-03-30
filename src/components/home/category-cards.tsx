/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { categories } from "~/data";
import { RetroCard } from "~/components/ui/retro-card";
import { useTheme } from "~/components/theme/theme-provider";

const categoryLogos: Record<string, string> = {
  pokemon: "/logos/pokemon.svg",
  yugioh: "/logos/yugioh.png",
  magic: "/logos/magic.png",
};

function RetroCategoryCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-heading-lg mb-8 text-center text-theme-text">
        Shop by Game
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/${cat.slug}`}>
            <RetroCard hover className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-20 w-48 items-center justify-center">
                <img
                  src={categoryLogos[cat.slug]}
                  alt={cat.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-heading-sm mb-2 text-theme-text">
                {cat.shortName}
              </h3>
              <p className="font-body text-xs text-theme-text-secondary">
                {cat.productCount} products
              </p>
            </RetroCard>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CatalogueCategoryCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-heading-lg mb-8 text-center text-theme-text">
        Shop by Game
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/${cat.slug}`}>
            <div
              className="group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${cat.color}15, ${cat.color}30)` }}
            >
              <div className="mx-auto mb-4 flex h-24 w-52 items-center justify-center">
                <img
                  src={categoryLogos[cat.slug]}
                  alt={cat.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-[var(--theme-text-primary)] mb-2">
                {cat.shortName}
              </h3>
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-medium"
                style={{ background: `${cat.color}20`, color: cat.color }}
              >
                {cat.productCount} products
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function VaultCategoryCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-heading-lg mb-8 text-center text-theme-text">
        Collections
      </h2>
      <div className="space-y-4">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/${cat.slug}`}>
            <div
              className="group relative flex items-center justify-center py-10 border border-[#1a1a1a] hover:border-[#c9a84c33] transition-all duration-500"
              style={{ background: `linear-gradient(135deg, #0d0d0d, ${cat.color}08)` }}
            >
              <img
                src={categoryLogos[cat.slug]}
                alt={cat.name}
                className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <span className="absolute right-8 text-xs text-[#666] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function CategoryCards() {
  const { theme } = useTheme();

  if (theme === "catalogue") return <CatalogueCategoryCards />;
  if (theme === "vault") return <VaultCategoryCards />;
  return <RetroCategoryCards />;
}
