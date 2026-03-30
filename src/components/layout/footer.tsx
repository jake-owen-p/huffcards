"use client";

import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME, SITE_TAGLINE } from "~/lib/constants";
import { PixelCoin } from "~/components/ui/pixel-coin";
import { PixelDivider } from "~/components/ui/pixel-divider";
import { useTheme } from "~/components/theme/theme-provider";
import { useToast } from "~/components/ui/toast";

export function Footer() {
  const { theme } = useTheme();
  const { addToast } = useToast();
  const isRetro = theme === "retro";
  const isCatalogue = theme === "catalogue";
  const isVault = theme === "vault";

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Thanks for subscribing! This is a demo store.", "info");
  };

  return (
    <footer className="mt-16 border-t border-[var(--theme-border-primary)] bg-theme-footer text-theme-footer-text">
      {/* Catalogue: Newsletter strip */}
      {isCatalogue && (
        <div className="border-b border-[var(--theme-border-primary)]">
          <div className="mx-auto max-w-7xl px-4 py-10 md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-base font-bold text-white">Stay in the loop</h3>
              <p className="text-sm text-gray-400">New drops, exclusive deals, and restocks</p>
            </div>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input type="email" placeholder="you@example.com" className="rounded-full border border-gray-600 bg-transparent px-5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none w-64" />
              <button type="submit" className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
      )}

      {/* Vault: Collector's Circle */}
      {isVault && (
        <div className="border-b border-[#1a1a1a]">
          <div className="mx-auto max-w-7xl px-4 py-12 text-center">
            <h3 className="text-lg text-[#c9a84c] mb-2" style={{fontFamily: 'var(--theme-font-heading)', letterSpacing: '0.05em'}}>Collector&apos;s Circle</h3>
            <p className="text-sm text-[#666] mb-6">Early access to limited drops and market insights</p>
            <form onSubmit={handleNewsletter} className="flex justify-center gap-2 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 border border-[#333] bg-transparent px-4 py-2.5 text-sm text-[#e8e8e8] placeholder:text-[#555] focus:border-[#c9a84c] focus:outline-none" />
              <button type="submit" className="border border-[#c9a84c] bg-transparent px-6 py-2.5 text-sm text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black transition-all duration-300 tracking-wider uppercase">Join</button>
            </form>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              {isRetro && <span className="retro-only"><PixelCoin size={20} /></span>}
              <span className="text-heading-sm text-theme-footer-heading">{SITE_NAME}</span>
            </div>
            <p className="font-body text-xs text-theme-text-muted">
              {isVault ? "Curated trading cards for the discerning collector" : SITE_TAGLINE}
            </p>
            <p className="mt-3 font-body text-xs text-theme-text-secondary">
              42 Card Lane, Bristol, BS1 4QA
            </p>
            {/* Catalogue: social icons */}
            {isCatalogue && (
              <div className="mt-4 flex gap-3">
                {["Twitter", "Instagram", "Discord", "YouTube"].map(s => (
                  <span key={s} className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-[10px] text-gray-400 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer">{s[0]}</span>
                ))}
              </div>
            )}
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-heading-xs mb-3 text-theme-footer-heading">Shop</h3>
            <ul className="space-y-1.5">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-xs text-theme-text-muted hover:text-theme-accent transition-theme">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-heading-xs mb-3 text-theme-footer-heading">Info</h3>
            <ul className="space-y-1.5">
              {FOOTER_LINKS.info.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-xs text-theme-text-muted hover:text-theme-accent transition-theme">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-heading-xs mb-3 text-theme-footer-heading">Legal</h3>
            <ul className="space-y-1.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-xs text-theme-text-muted hover:text-theme-accent transition-theme">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isRetro && <div className="retro-only"><PixelDivider className="my-8" /></div>}

        <div className={`flex flex-col items-center justify-between gap-4 md:flex-row ${isRetro ? "" : "mt-10 border-t border-[var(--theme-border-primary)] pt-6"}`}>
          <p className="font-body text-xs text-theme-text-secondary">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          {/* Catalogue: payment icons */}
          {isCatalogue && (
            <div className="flex items-center gap-2 text-[10px] text-gray-500">
              {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map(p => (
                <span key={p} className="rounded border border-gray-700 px-2 py-1">{p}</span>
              ))}
            </div>
          )}
          <p className="font-body text-xs text-theme-footer-muted">
            Pokemon, Yu-Gi-Oh!, and Magic: The Gathering are trademarks of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
