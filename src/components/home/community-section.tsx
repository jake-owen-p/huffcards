"use client";

import { PixelCoin } from "~/components/ui/pixel-coin";
import { PixelDivider } from "~/components/ui/pixel-divider";
import { ShieldIcon, TruckIcon, ReturnIcon } from "~/components/ui/icons";
import { useTheme } from "~/components/theme/theme-provider";

function RetroCommunitySection() {
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

function CatalogueCommunitySection() {
  return (
    <section className="py-16" style={{ background: '#f0f7ff' }}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <TruckIcon size={32} className="mx-auto mb-3 text-blue-600" />
            <h3 className="text-base font-bold text-gray-900 mb-1">Free UK Shipping</h3>
            <p className="text-sm text-gray-500">On all orders over £50</p>
          </div>
          <div>
            <ShieldIcon size={32} className="mx-auto mb-3 text-blue-600" />
            <h3 className="text-base font-bold text-gray-900 mb-1">100% Authentic</h3>
            <p className="text-sm text-gray-500">Every product guaranteed genuine</p>
          </div>
          <div>
            <ReturnIcon size={32} className="mx-auto mb-3 text-blue-600" />
            <h3 className="text-base font-bold text-gray-900 mb-1">14-Day Returns</h3>
            <p className="text-sm text-gray-500">Hassle-free return policy</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VaultCommunitySection() {
  return (
    <section className="py-20" style={{ background: '#0a0a0a' }}>
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2
          className="text-2xl mb-12 text-[#c9a84c]"
          style={{ fontFamily: 'var(--theme-font-heading)', letterSpacing: '0.05em' }}
        >
          The Vault Promise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-t-2 border-[#c9a84c] pt-6">
            <h3 className="text-base font-medium text-[#e8e8e8] mb-2">Authentication</h3>
            <p className="text-sm text-[#888]">Every product verified genuine. No fakes, no reprints, no compromises.</p>
          </div>
          <div className="border-t-2 border-[#c9a84c] pt-6">
            <h3 className="text-base font-medium text-[#e8e8e8] mb-2">Protected Storage</h3>
            <p className="text-sm text-[#888]">Climate-controlled warehouse. Your investment treated with the care it deserves.</p>
          </div>
          <div className="border-t-2 border-[#c9a84c] pt-6">
            <h3 className="text-base font-medium text-[#e8e8e8] mb-2">Expert Curation</h3>
            <p className="text-sm text-[#888]">Hand-selected inventory by collectors who understand the market.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CommunitySection() {
  const { theme } = useTheme();

  if (theme === "catalogue") return <CatalogueCommunitySection />;
  if (theme === "vault") return <VaultCommunitySection />;
  return <RetroCommunitySection />;
}
