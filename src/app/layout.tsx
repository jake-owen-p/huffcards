import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { CartProvider } from "~/components/cart/cart-provider";
import { ToastProvider } from "~/components/ui/toast";
import { PromoStrip } from "~/components/layout/promo-strip";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "~/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Your Friendly Online Card Shop`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
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

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "opsz"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col">
        <TRPCReactProvider>
          <CartProvider>
            <ToastProvider>
              <PromoStrip />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </ToastProvider>
          </CartProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
