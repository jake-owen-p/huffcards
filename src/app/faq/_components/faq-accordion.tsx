"use client";

import { useState } from "react";
import { cn } from "~/lib/cn";
import { useTheme } from "~/components/theme/theme-provider";

export function FaqAccordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const isRetro = theme === "retro";

  return (
    <div className="border-theme bg-theme-surface">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between p-4 text-left transition-theme hover:bg-theme-surface-alt"
      >
        <span className="font-body text-sm font-bold text-theme-text">
          {question}
        </span>
        <span className="ml-4 shrink-0 font-body text-theme-text-secondary">
          {isRetro ? (open ? "[-]" : "[+]") : (open ? "\u2212" : "+")}
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <p className="border-t border-theme-border-secondary px-4 py-3 font-body text-sm text-theme-text-secondary">
          {answer}
        </p>
      </div>
    </div>
  );
}
