import type { Metadata } from "next";
import "./globals.css";
import { cn, constructMetadata } from "@/lib/utils";
import Header from "@/components/sections/header";

export const metadata: Metadata = constructMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased w-full mx-auto scroll-smooth",
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
