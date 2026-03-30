import type { Metadata } from "next";
import { Breadcrumbs } from "~/components/layout/breadcrumbs";
import { RetroCard } from "~/components/ui/retro-card";
import { PixelDivider } from "~/components/ui/pixel-divider";
import { PixelCoin } from "~/components/ui/pixel-coin";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "HuffCards is your friendly online card shop. Learn about our story, values, and passion for trading card games.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs items={[{ label: "About Us" }]} />

      <div className="mb-8 text-center">
        <PixelCoin size={48} className="mx-auto mb-4" />
        <h1 className="text-heading-xl mb-2 text-theme-text">About HuffCards</h1>
        <p className="font-body text-sm text-theme-text-secondary">
          Your Friendly Local Card Shop, Online
        </p>
      </div>

      <RetroCard className="p-8">
        <div className="space-y-6 font-body text-sm leading-relaxed text-theme-text">
          <div>
            <h2 className="text-heading-sm mb-3 text-theme-accent">Our Story</h2>
            <p className="text-theme-text-secondary">
              HuffCards was born from a simple idea: bring the warmth and
              community of your favourite local card shop to the internet. We&apos;re
              a team of lifelong card game enthusiasts based in Bristol, UK, who
              grew up cracking booster packs, trading at league nights, and
              building decks at kitchen tables.
            </p>
            <p className="mt-3 text-theme-text-secondary">
              We know the thrill of pulling a chase card from a fresh pack. We know
              the satisfaction of finding just the right card to complete your deck.
              And we know that feeling of walking into a friendly card shop where
              everyone knows your name. That&apos;s the feeling we want to give you,
              every time you visit HuffCards.
            </p>
          </div>

          <PixelDivider />

          <div>
            <h2 className="text-heading-sm mb-3 text-theme-accent">Our Values</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="border-theme-secondary p-4">
                <p className="text-heading-xs mb-1 text-theme-text">Community First</p>
                <p className="text-xs text-theme-text-secondary">
                  We exist because of you. Every decision we make starts with
                  what&apos;s best for the community of collectors and players we serve.
                </p>
              </div>
              <div className="border-theme-secondary p-4">
                <p className="text-heading-xs mb-1 text-theme-text">Fair Pricing</p>
                <p className="text-xs text-theme-text-secondary">
                  No scalping, no gouging. We believe everyone deserves access to
                  the hobby they love at prices that make sense.
                </p>
              </div>
              <div className="border-theme-secondary p-4">
                <p className="text-heading-xs mb-1 text-theme-text">Expert Curation</p>
                <p className="text-xs text-theme-text-secondary">
                  Our team plays the games we sell. We hand-pick our inventory
                  and can help you find exactly what you need.
                </p>
              </div>
              <div className="border-theme-secondary p-4">
                <p className="text-heading-xs mb-1 text-theme-text">Quality Guaranteed</p>
                <p className="text-xs text-theme-text-secondary">
                  Every sealed product is genuine and stored in climate-controlled
                  conditions. Your cards deserve the best care.
                </p>
              </div>
            </div>
          </div>

          <PixelDivider />

          <div>
            <h2 className="text-heading-sm mb-3 text-theme-accent">Where to Find Us</h2>
            <p className="text-theme-text-secondary">
              HuffCards operates online from our base in Bristol. While we don&apos;t
              have a physical storefront (yet!), we&apos;re always available via email
              at{" "}
              <span className="text-theme-accent">support@huffcards.co.uk</span>{" "}
              and we attend local card game events across the South West.
            </p>
          </div>
        </div>
      </RetroCard>
    </div>
  );
}
