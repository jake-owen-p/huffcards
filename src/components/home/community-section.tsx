import { ShieldIcon, TruckIcon, ReturnIcon, StarIcon } from "~/components/ui/icons";

const TRUST_POINTS = [
  {
    icon: TruckIcon,
    title: "Free UK shipping",
    body: "On orders over £50, dispatched within 24 hours from our Bristol warehouse.",
  },
  {
    icon: ShieldIcon,
    title: "100% authentic",
    body: "Every sealed product verified. Sourced directly or from trusted distributors.",
  },
  {
    icon: ReturnIcon,
    title: "14-day returns",
    body: "Changed your mind? Return any unopened product for a full refund.",
  },
  {
    icon: StarIcon,
    title: "Real people",
    body: "Questions? A human who plays the game will answer you, usually within the hour.",
  },
];

const TESTIMONIALS = [
  {
    initials: "JH",
    name: "James H.",
    location: "Manchester",
    rating: 5,
    quote:
      "Ordered a Scarlet & Violet booster box on Tuesday, arrived Thursday morning, perfectly sealed. Exactly the card shop experience I was missing.",
  },
  {
    initials: "AP",
    name: "Aisha P.",
    location: "London",
    rating: 5,
    quote:
      "I spent ages looking for the right MTG bundle and the team actually recommended one they thought I'd like. It was spot on. Will be back.",
  },
  {
    initials: "TO",
    name: "Tom O.",
    location: "Edinburgh",
    rating: 5,
    quote:
      "Fair prices, honest stock counts, fast shipping. What more do you want from a card shop? Already ordered twice this month.",
  },
];

function InitialAvatar({ initials }: { initials: string }) {
  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-heading text-sm font-semibold"
      style={{
        background: "var(--ink)",
        color: "var(--parchment-base)",
        border: "2px solid var(--ember-primary)",
      }}
    >
      {initials}
    </div>
  );
}

export function CommunitySection() {
  return (
    <>
      {/* Trust points */}
      <section
        className="py-16"
        style={{
          background: "var(--theme-bg-surface-alt)",
          borderTop: "1px solid var(--theme-border-primary)",
          borderBottom: "1px solid var(--theme-border-primary)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {TRUST_POINTS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: "var(--theme-bg-surface)",
                    border: "1px solid var(--theme-border-primary)",
                    color: "var(--ember-primary)",
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="mb-1 font-heading text-base font-semibold text-theme-text">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-theme-text-secondary">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-3">Word of mouth</p>
            <h2 className="text-heading-xl md:text-heading-2xl text-theme-text">
              Loved by collectors
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col gap-5 p-6"
                style={{
                  background: "var(--theme-bg-surface)",
                  border: "1px solid var(--theme-border-primary)",
                  borderRadius: "var(--theme-radius-lg)",
                  boxShadow: "0 4px 20px -8px rgba(30, 18, 8, 0.06)",
                }}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon
                      key={i}
                      size={14}
                      filled
                      className="text-[var(--ember-primary)]"
                    />
                  ))}
                </div>
                <blockquote className="flex-1 font-body text-[15px] leading-relaxed text-theme-text">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <InitialAvatar initials={t.initials} />
                  <div>
                    <p className="text-sm font-semibold text-theme-text">
                      {t.name}
                    </p>
                    <p className="text-xs text-theme-text-muted">
                      {t.location}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
