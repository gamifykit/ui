import type { Metadata } from "next";
import "./globals.css";
import { cn, constructMetadata } from "@/lib/utils";
import "@fontsource-variable/roboto-serif/full.css";
import localFont from "next/font/local";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = constructMetadata({});

// Using local Mona Sans font because font files from Google Font and Fontsource don't come with font features like stylistic sets
const MonaSans = localFont({
  src: [
    {
      path: "./fonts/MonaSansVF-Regular.woff2",
      weight: "200 900",
    },
  ],

  declarations: [
    {
      prop: "font-stretch",
      value: "75% 125%",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-mona-sans",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-mona-sans">
      <body
        className={cn(
          "min-h-screen bg-background antialiased w-full mx-auto scroll-smooth",
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
