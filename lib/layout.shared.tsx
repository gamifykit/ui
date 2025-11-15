import { Logo } from "@/components/logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Link from "next/link";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "GamifyKit",
    },
    githubUrl: "https://github.com/gamifykit/ui",
    children: <Link href="/docs">Docs</Link>,
  };
}
