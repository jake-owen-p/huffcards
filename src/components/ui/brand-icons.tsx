type IconProps = {
  size?: number;
  className?: string;
};

type LogoProps = {
  className?: string;
};

/* ============================================================
   SOCIAL ICONS — monochrome, respect currentColor
   ============================================================ */

export function TwitterIcon({ size = 18, className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function DiscordIcon({ size = 18, className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function YouTubeIcon({ size = 18, className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/* ============================================================
   PAYMENT LOGOS — simplified glyphs in small pill format
   ============================================================ */

function PaymentPill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex h-7 w-11 items-center justify-center rounded-md bg-white text-[9px] font-bold tracking-tight ${className ?? ""}`}
      style={{ border: "1px solid rgba(255,255,255,0.12)" }}
    >
      {children}
    </span>
  );
}

export function VisaLogo({ className }: LogoProps) {
  return (
    <PaymentPill className={className}>
      <span style={{ color: "#1a1f71", letterSpacing: "-0.02em" }}>VISA</span>
    </PaymentPill>
  );
}

export function MastercardLogo({ className }: LogoProps) {
  return (
    <PaymentPill className={className}>
      <span className="relative inline-block h-4 w-6">
        <span className="absolute left-0 top-0 h-4 w-4 rounded-full" style={{ background: "#eb001b" }} />
        <span className="absolute right-0 top-0 h-4 w-4 rounded-full" style={{ background: "#f79e1b", mixBlendMode: "multiply" }} />
      </span>
    </PaymentPill>
  );
}

export function AmexLogo({ className }: LogoProps) {
  return (
    <PaymentPill className={className}>
      <span style={{ color: "#006fcf" }}>AMEX</span>
    </PaymentPill>
  );
}

export function PayPalLogo({ className }: LogoProps) {
  return (
    <PaymentPill className={className}>
      <span>
        <span style={{ color: "#003087" }}>Pay</span>
        <span style={{ color: "#009cde" }}>Pal</span>
      </span>
    </PaymentPill>
  );
}

export function ApplePayLogo({ className }: LogoProps) {
  return (
    <PaymentPill className={className}>
      <span style={{ color: "#000", display: "inline-flex", alignItems: "center", gap: 1 }}>
        <svg width="8" height="9" viewBox="0 0 14 17" fill="currentColor"><path d="M11.624 9.009c-.02-2.03 1.66-3.007 1.735-3.053-.944-1.378-2.414-1.568-2.94-1.59-1.252-.125-2.443.736-3.078.736-.637 0-1.613-.717-2.654-.697C3.31 4.43 2.05 5.17 1.36 6.328c-1.4 2.423-.357 6.01 1.01 7.98.67.965 1.466 2.049 2.506 2.01 1.007-.04 1.388-.652 2.607-.652s1.562.652 2.63.631c1.086-.02 1.775-.984 2.44-1.953.77-1.122 1.087-2.212 1.106-2.268-.025-.01-2.12-.813-2.034-3.067zM9.672 3.014c.552-.668.924-1.6.822-2.527-.795.032-1.755.53-2.326 1.198-.51.59-.957 1.533-.836 2.446.885.067 1.788-.45 2.34-1.117z"/></svg>
        Pay
      </span>
    </PaymentPill>
  );
}

/* ============================================================
   BRAND MARK — used in header next to wordmark
   ============================================================ */

export function HuffcardsMark({ size = 36, className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 200 200" className={className}>
      <rect x="64" y="28" width="72" height="96" rx="8" fill="#1e1208" stroke="#c15c0a" strokeWidth="3" />
      <rect x="72" y="36" width="56" height="80" rx="4" fill="none" stroke="#c15c0a" strokeWidth="1" opacity="0.55" />
      <polygon points="100,54 106,68 120,68 110,78 114,94 100,84 86,94 90,78 80,68 94,68" fill="#c15c0a" />
      <ellipse cx="100" cy="138" rx="22" ry="10" fill="#c15c0a" opacity="0.25" />
      <path d="M82,124 Q92,134 100,126 Q108,138 118,124 Q112,148 104,156 Q100,164 96,156 Q88,148 82,124Z" fill="#c15c0a" />
      <path d="M90,128 Q98,138 100,130 Q102,142 110,128 Q106,152 102,158 Q100,162 98,158 Q94,152 90,128Z" fill="#e8a04b" />
      <path d="M96,132 Q100,140 104,132 Q102,154 100,160 Q98,154 96,132Z" fill="#fef9c3" />
    </svg>
  );
}
