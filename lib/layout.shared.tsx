import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/favicon-32x32.png";

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
          <span className="font-rany font-bold">Gamify</span>
          <span className="font-inter font-inter-stylized font-normal">
            Kit
          </span>
        </span>
      ),
    },
    githubUrl: "https://github.com/gamifykit/ui",
    children: <Link href="/docs">Docs</Link>,
  };
}
