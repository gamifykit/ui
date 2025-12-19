export const BLUR_FADE_DELAY = 0.15;

export const siteConfig: SiteConfig = {
  name: "GamifyKit",
  description: "Gamify your app with GamifyKit",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["SaaS", "Gamifyit", "shadcn/ui", "Tailwind CSS", "gamification"],
  links: {
    // email: "support@gamifykit.com",
    bluesky: "https://bsky.app/profile/gamifykit.com",
    twitter: "https://twitter.com/gamifykit",
    // discord: "https://discord.gg/",
    github: "https://github.com/gamifykit",
    // instagram: "https://instagram.com/gamifykit/",
  },
  header: [
    // {
    //   href: "/docs",
    //   label: "Docs",
    // },
    // {
    //   href: "/docs/components",
    //   label: "Components",
    // },
    // {
    //   href: "/blog",
    //   label: "Blog",
    // },
  ],
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  keywords: string[];
  links: {
    email?: string;
    bluesky: string;
    twitter: string;
    discord?: string;
    github: string;
    instagram?: string;
  };
  header: {
    href: string;
    label: string;
    trigger?: string;
    content?: {
      main: {
        href: string;
        icon: string;
        title: string;
        description: string;
      };
      items: {
        href: string;
        title: string;
        description: string;
      }[];
    };
  }[];
};
