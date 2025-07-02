import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DesignSystemProvider } from "@repo/design-system";
import { fonts } from "@repo/design-system/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Zopio Marketplace",
    template: "%s | Zopio Marketplace",
  },
  description: "Discover and install plugins for your Zopio environment",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={fonts} suppressHydrationWarning>
      <body>
        <DesignSystemProvider>
          {children}
        </DesignSystemProvider>
      </body>
    </html>
  );
}
