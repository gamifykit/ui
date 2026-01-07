import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/contexts/theme-context";

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

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={Inter.className} suppressHydrationWarning>
      <meta
        name="robots"
        content="noindex, nofollow, noarchive, nosnippet, noimageindex"
      />
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <RootProvider>{children}</RootProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
