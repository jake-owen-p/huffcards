/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { categories, allProducts } from "~/data";
import type { Category } from "~/data/types";

const categoryLogos: Record<string, string> = {
  pokemon: "/logos/pokemon.svg",
  yugioh: "/logos/yugioh.png",
  magic: "/logos/magic.png",
};

const taglines: Record<string, string> = {
  pokemon: "Gotta catch 'em all",
  yugioh: "It's time to duel",
  magic: "Planeswalkers, assemble",
};

function previewProducts(category: Category) {
  return allProducts
    .filter((p) => p.category === category && p.featured)
    .slice(0, 3);
}

export function CategoryCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="eyebrow mb-2">Browse the binder</p>
          <h2 className="text-heading-xl md:text-heading-2xl text-theme-text">
            Shop by game
          </h2>
        </div>
        <Link
          href="/search"
          className="hidden text-sm font-medium text-theme-text-secondary hover:text-[var(--ember-primary)] md:inline-block"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {categories.map((cat) => {
          const previews = previewProducts(cat.slug);
          return (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="group relative flex flex-col overflow-hidden bg-theme-surface transition-all hover:-translate-y-1"
              style={{
                border: "1px solid var(--theme-border-primary)",
                borderRadius: "var(--theme-radius-lg)",
                boxShadow: "0 4px 20px -8px rgba(30, 18, 8, 0.08)",
              }}
            >
              {/* Color strip */}
              <div
                className="h-1.5 w-full"
                style={{ background: cat.color }}
              />

              {/* Header */}
              <div className="flex items-center justify-between gap-4 px-6 pt-6 pb-4">
                <div>
                  <p className="eyebrow mb-1" style={{ color: cat.color }}>
                    {cat.productCount} products
                  </p>
                  <h3 className="font-heading text-2xl font-semibold text-theme-text">
                    {cat.shortName}
                  </h3>
                  <p className="mt-1 text-sm text-theme-text-secondary">
                    {taglines[cat.slug]}
                  </p>
                </div>
                <div className="flex h-14 w-20 shrink-0 items-center justify-center">
                  <img
                    src={categoryLogos[cat.slug]}
                    alt={cat.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Product preview strip */}
              <div
                className="relative mt-auto flex h-44 items-end justify-center gap-2 px-6 pt-4 pb-6"
                style={{
                  background: `linear-gradient(180deg, transparent 0%, ${cat.color}12 100%)`,
                  borderTop: "1px solid var(--theme-border-secondary)",
                }}
              >
                {previews.map((p, i) => (
                  <div
                    key={p.id}
                    className="flex h-32 w-24 items-center justify-center overflow-hidden rounded-md bg-white p-2 transition-transform group-hover:translate-y-[-4px]"
                    style={{
                      transform: `rotate(${(i - 1) * 4}deg)`,
                      transformOrigin: "bottom",
                      transitionDelay: `${i * 40}ms`,
                      border: "1px solid rgba(30,18,8,0.08)",
                      boxShadow: "0 6px 16px -8px rgba(30,18,8,0.25)",
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div
                className="flex items-center justify-between px-6 py-4 text-sm font-semibold text-theme-text"
                style={{ borderTop: "1px solid var(--theme-border-secondary)" }}
              >
                Shop {cat.shortName}
                <span
                  className="transition-transform group-hover:translate-x-1"
                  style={{ color: "var(--ember-primary)" }}
                >
                  →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
