import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Press_Start_2P, Playfair_Display } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/components/theme/theme-provider";
import { ThemeBanner } from "~/components/theme/theme-banner";
import { CartProvider } from "~/components/cart/cart-provider";
import { ToastProvider } from "~/components/ui/toast";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "~/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Your Friendly Online Card Shop`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Your Friendly Online Card Shop`,
    description: SITE_DESCRIPTION,
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${pressStart.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("huffcards-theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <TRPCReactProvider>
            <CartProvider>
              <ToastProvider>
                <ThemeBanner />
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </ToastProvider>
            </CartProvider>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
