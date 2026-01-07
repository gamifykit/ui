import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/favicon-32x32.png";
import localFont from "next/font/local";

// Rany is not available on Google Font and Fontsource
const Rany = localFont({
    src: [
        {
            path: "../app/fonts/Rany.woff",
            weight: "400",
        },
        {
            path: "../app/fonts/Rany-Bold.woff",
            weight: "700",
        },
    ],
    display: "swap",
    fallback: ["sans-serif"],
    variable: "--font-rany",
    preload: true,
});

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span>
          <Image
            src={Icon.src}
            alt="GamifyKit"
            width={20}
            height={20}
            className="inline-block mr-2"
          />
          <span className={`${Rany.className} font-bold`}>Gamify</span>
          <span className="font-inter font-inter-stylized font-normal">
            Kit
          </span>
        </span>
      ),
    },
    githubUrl: "https://github.com/gamifykit/ui",
    links: [
        {
            type: "custom",
            children: <Link href="/docs">Docs</Link>,
        },
    ],
  };
}
