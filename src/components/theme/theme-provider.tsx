"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Theme = "retro" | "catalogue" | "vault";

export const THEMES: { id: Theme; label: string; description: string }[] = [
  { id: "retro", label: "Retro Pixel", description: "Nostalgic card shop vibes" },
  { id: "catalogue", label: "Catalogue", description: "Clean & polished store" },
  { id: "vault", label: "Collector's Vault", description: "Premium dark mode" },
];

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "retro",
  setTheme: () => undefined,
});

export function useTheme() {
  return useContext(ThemeContext);
}

const STORAGE_KEY = "huffcards-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("retro");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored && THEMES.some((t) => t.id === stored)) {
      setThemeState(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem(STORAGE_KEY, t);
  }, []);

  return (
    <ThemeContext value={{ theme, setTheme }}>
      {children}
    </ThemeContext>
  );
}
