/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { categories } from "~/data";
import { RetroCard } from "~/components/ui/retro-card";

const categoryLogos: Record<string, string> = {
  pokemon: "/logos/pokemon.svg",
  yugioh: "/logos/yugioh.png",
  magic: "/logos/magic.png",
};

export function CategoryCards() {
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
