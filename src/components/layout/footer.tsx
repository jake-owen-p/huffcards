"use client";

import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME, SITE_TAGLINE } from "~/lib/constants";
import { useToast } from "~/components/ui/toast";
import {
  TwitterIcon,
  InstagramIcon,
  DiscordIcon,
  YouTubeIcon,
  VisaLogo,
  MastercardLogo,
  AmexLogo,
  PayPalLogo,
  ApplePayLogo,
  HuffcardsMark,
} from "~/components/ui/brand-icons";

const SOCIAL_LINKS = [
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Discord", href: "#", icon: DiscordIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
];

export function Footer() {
  const { addToast } = useToast();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Thanks for subscribing! This is a demo store.", "info");
  };

  return (
    <footer className="mt-20 bg-theme-footer text-theme-footer-text">
      {/* Newsletter strip */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-7xl px-4 py-12 md:flex md:items-center md:justify-between md:gap-12">
          <div className="mb-5 md:mb-0">
            <p className="eyebrow mb-2" style={{ color: "var(--ember-primary)" }}>
              Join the binder
            </p>
            <h3 className="text-heading-xl text-white">Drops, restocks, and set reviews</h3>
            <p className="mt-2 max-w-md text-sm text-theme-footer-muted">
              One email a week. No spam, no reselling — we hate that too.
            </p>
          </div>
          <form onSubmit={handleNewsletter} className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-[var(--ember-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--ember-primary)]"
            />
            <button
              type="submit"
              className="rounded-full bg-[var(--ember-primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--ember-primary-hover)] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <HuffcardsMark size={32} />
              <span className="font-heading text-xl text-white">
                {SITE_NAME}
                <span style={{ color: "var(--ember-primary)" }}>.</span>
              </span>
            </div>
            <p className="mb-4 max-w-xs font-body text-sm leading-relaxed text-theme-footer-muted">
              {SITE_TAGLINE}. Curated sealed product, honest pricing, and a team
              who actually play the games.
            </p>
            <p className="mb-5 font-body text-xs text-theme-footer-muted">
              42 Card Lane · Bristol BS1 4QA · UK
            </p>
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-[var(--ember-primary)] hover:text-[var(--ember-primary)] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white">
              Shop
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-theme-footer-muted hover:text-[var(--ember-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white">
              Info
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-theme-footer-muted hover:text-[var(--ember-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-theme-footer-muted hover:text-[var(--ember-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 flex flex-col items-center justify-between gap-6 pt-8 md:flex-row"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="font-body text-xs text-theme-footer-muted">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <VisaLogo />
            <MastercardLogo />
            <AmexLogo />
            <PayPalLogo />
            <ApplePayLogo />
          </div>
          <p className="max-w-xs text-center font-body text-[10px] leading-relaxed text-theme-footer-muted md:text-right">
            Pokémon, Yu-Gi-Oh!, and Magic: The Gathering are trademarks of their
            respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
