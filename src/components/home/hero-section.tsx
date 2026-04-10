/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getFeaturedProducts } from "~/data";

export function HeroSection() {
  // Pull 4 real product images to fan into the hero composition
  const heroStack = getFeaturedProducts(8).slice(0, 4);

  return (
    <section
      className="parchment-grain relative overflow-hidden"
      style={{
        borderBottom: "1px solid var(--theme-border-primary)",
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 md:grid-cols-[1.1fr_1fr] md:gap-8 md:py-24 lg:py-28">
        {/* Left: copy */}
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-5">Trading cards · Est. 2020 · Bristol</p>
          <h1 className="text-heading-2xl md:text-heading-3xl mb-6 text-theme-text">
            Sealed product.
            <br />
            Fair prices.
            <br />
            <span style={{ color: "var(--ember-primary)" }}>
              Real card shop.
            </span>
          </h1>
          <p className="mb-8 max-w-lg font-body text-base leading-relaxed text-theme-text-secondary md:text-lg">
            Pokémon, Yu-Gi-Oh! and Magic: The Gathering — booster boxes, ETBs,
            collection boxes, and singles curated by people who actually play
            the games.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/pokemon"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110"
              style={{ background: "var(--ink)" }}
            >
              Shop Pokémon →
            </Link>
            <Link
              href="/search?q=new"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:bg-theme-surface-alt"
              style={{
                border: "1px solid var(--theme-border-primary)",
                color: "var(--ink)",
              }}
            >
              New arrivals
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-theme-text-secondary">
            <span className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--ember-success)" }}
              />
              Free UK shipping £50+
            </span>
            <span className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--ember-success)" }}
              />
              100% authentic
            </span>
            <span className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--ember-success)" }}
              />
              14-day returns
            </span>
          </div>
        </div>

        {/* Right: layered product stack */}
        <div className="relative hidden h-[460px] md:block">
          {/* Soft radial highlight */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 55% 50%, rgba(193, 92, 10, 0.12) 0%, transparent 60%)",
            }}
          />
          {heroStack.map((p, i) => {
            const positions = [
              { rot: -14, x: -120, y: 20, z: 1 },
              { rot: -4, x: -40, y: -10, z: 2 },
              { rot: 6, x: 40, y: 10, z: 3 },
              { rot: 16, x: 120, y: 40, z: 2 },
            ];
            const pos = positions[i]!;
            return (
              <div
                key={p.id}
                className="absolute left-1/2 top-1/2 h-[340px] w-[240px] overflow-hidden rounded-xl bg-white transition-transform duration-500 hover:z-50 hover:-translate-y-2"
                style={{
                  transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) rotate(${pos.rot}deg)`,
                  boxShadow: "0 30px 60px -20px rgba(30, 18, 8, 0.25), 0 8px 20px -8px rgba(30, 18, 8, 0.15)",
                  border: "1px solid var(--theme-border-primary)",
                  zIndex: pos.z,
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-contain p-4"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {/* Mobile: horizontal scroll of 4 product thumbs */}
        <div className="flex gap-3 overflow-x-auto pb-2 md:hidden">
          {heroStack.map((p) => (
            <div
              key={p.id}
              className="flex h-48 w-36 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-3"
              style={{
                border: "1px solid var(--theme-border-primary)",
                boxShadow: "0 8px 20px -8px rgba(30, 18, 8, 0.15)",
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
      </div>
    </section>
  );
}
