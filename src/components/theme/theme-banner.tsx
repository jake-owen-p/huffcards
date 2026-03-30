"use client";

import { useState } from "react";
import { useTheme, THEMES, type Theme } from "./theme-provider";
import { cn } from "~/lib/cn";

export function ThemeBanner() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50 border-b border-[var(--theme-border-primary)] bg-[var(--theme-bg-surface-alt)]">
      {/* Desktop: inline pills */}
      <div className="mx-auto hidden max-w-7xl items-center justify-center gap-1 px-4 py-1.5 md:flex">
        <span className="mr-2 text-xs font-medium text-[var(--theme-text-secondary)] font-[var(--theme-font-body)]">
          Theme:
        </span>
        {THEMES.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={cn(
              "cursor-pointer px-3 py-1 text-xs transition-all duration-200",
              "border",
              theme === t.id
                ? "border-[var(--theme-accent-primary)] bg-[var(--theme-accent-primary)] text-[var(--theme-accent-text-on-primary)] font-bold"
                : "border-[var(--theme-border-primary)] bg-transparent text-[var(--theme-text-secondary)] hover:border-[var(--theme-accent-primary)] hover:text-[var(--theme-text-primary)]",
            )}
            style={{ borderRadius: "var(--theme-radius-sm)" }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Mobile: dropdown toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full cursor-pointer items-center justify-between px-4 py-2 text-xs text-[var(--theme-text-secondary)]"
        >
          <span>
            Theme: <strong className="text-[var(--theme-text-primary)]">{THEMES.find((t) => t.id === theme)?.label}</strong>
          </span>
          <span>{open ? "▲" : "▼"}</span>
        </button>
        {open && (
          <div className="border-t border-[var(--theme-border-primary)] px-4 pb-3 pt-1">
            <div className="grid grid-cols-2 gap-2">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "cursor-pointer px-3 py-2 text-left text-xs transition-all duration-200",
                    "border",
                    theme === t.id
                      ? "border-[var(--theme-accent-primary)] bg-[var(--theme-accent-primary)] text-[var(--theme-accent-text-on-primary)] font-bold"
                      : "border-[var(--theme-border-primary)] bg-transparent text-[var(--theme-text-secondary)] hover:border-[var(--theme-accent-primary)]",
                  )}
                  style={{ borderRadius: "var(--theme-radius-sm)" }}
                >
                  <div className="font-bold">{t.label}</div>
                  <div className="mt-0.5 opacity-70">{t.description}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
