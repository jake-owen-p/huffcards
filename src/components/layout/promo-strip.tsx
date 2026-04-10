import { TruckIcon, ShieldIcon, ReturnIcon } from "~/components/ui/icons";

export function PromoStrip() {
  return (
    <div
      className="relative z-50 text-xs"
      style={{ background: "var(--ink)", color: "#e8d9b8" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
        <div className="hidden items-center gap-5 md:flex">
          <span className="flex items-center gap-1.5">
            <TruckIcon size={12} className="text-[var(--ember-primary)]" />
            Free UK shipping over £50
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldIcon size={12} className="text-[var(--ember-primary)]" />
            100% authentic, sealed
          </span>
          <span className="flex items-center gap-1.5">
            <ReturnIcon size={12} className="text-[var(--ember-primary)]" />
            14-day returns
          </span>
        </div>
        <div className="flex md:hidden">
          <span className="flex items-center gap-1.5">
            <TruckIcon size={12} className="text-[var(--ember-primary)]" />
            Free UK shipping over £50
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="hidden sm:inline" style={{ color: "#b59a6a" }}>
            Bristol, UK
          </span>
          <a
            href="mailto:hello@huffcards.co.uk"
            className="hover:text-[var(--ember-primary)] transition-colors"
          >
            hello@huffcards.co.uk
          </a>
        </div>
      </div>
    </div>
  );
}
