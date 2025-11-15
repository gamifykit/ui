import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import constructMetadata from "@/lib/construct-metadata";

export const metadata: Metadata = constructMetadata({});

// Using local Inter font because font files from Google Font and Fontsource don't come with font features like stylistic sets
const Inter = localFont({
  src: [
    {
      path: "./fonts/InterVariable.woff2",
    },
    {
      path: "./fonts/InterVariable-Italic.woff2",
      style: "italic",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-inter",
  preload: true,
});

// Rany is not available on Google Font and Fontsource
const Rany = localFont({
  src: [
    {
      path: "./fonts/Rany.woff",
      weight: "400",
    },
    {
      path: "./fonts/Rany-Bold.woff",
      weight: "700",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-rany",
  preload: true,
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={Inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
