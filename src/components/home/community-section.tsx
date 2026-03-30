import { PixelCoin } from "~/components/ui/pixel-coin";
import { PixelDivider } from "~/components/ui/pixel-divider";

export function CommunitySection() {
  return (
    <section className="border-t border-[var(--theme-border-primary)] bg-theme-surface py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="retro-only"><PixelDivider /></div>
        <div className="retro-only">
          <div className="mb-6 flex justify-center gap-3">
            <PixelCoin size={24} />
            <PixelCoin size={24} />
            <PixelCoin size={24} />
          </div>
        </div>
        <h2 className="text-heading-lg mb-4 text-theme-text">
          Welcome to the Community
        </h2>
        <p className="mx-auto mb-6 max-w-lg font-body text-sm text-theme-text-secondary">
          HuffCards isn&apos;t just a shop &mdash; it&apos;s a community. Whether you&apos;re
          a seasoned collector or cracking your first pack, you&apos;ll find friendly
          advice, fair prices, and a passion for the game.
        </p>
        <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-3">
          <div className="border-theme bg-theme-surface-alt p-5">
            <p className="text-heading-xs mb-2 text-theme-accent">01 // Fair Prices</p>
            <p className="font-body text-xs text-theme-text-secondary">
              We keep our prices competitive so everyone can enjoy the hobby.
              No scalping, no gouging.
            </p>
          </div>
          <div className="border-theme bg-theme-surface-alt p-5">
            <p className="text-heading-xs mb-2 text-theme-accent">02 // Fast Shipping</p>
            <p className="font-body text-xs text-theme-text-secondary">
              Orders dispatched within 24 hours. Free UK delivery over &pound;50.
              Your cards, quickly and safely.
            </p>
          </div>
          <div className="border-theme bg-theme-surface-alt p-5">
            <p className="text-heading-xs mb-2 text-theme-accent">03 // Card Shop Vibes</p>
            <p className="font-body text-xs text-theme-text-secondary">
              That feeling of walking into your local game store? We bring
              that energy online. Pull up a chair.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
