import Hero from "@/components/sections/customHero";

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 gap-8 justify-center md:px-8">
      <Hero
        // pill={{
        //   text: "Coming soon",
        // }}
        content={{
          description:
            "A fully customizable component library for gamification built on top of shadcn/ui. Beautiful, accessible, and ready for production.",
          // primaryAction: {
          //   href: "/docs",
          //   text: "Documentation (coming soon)",
          //   icon: <Icons.book className="h-4 w-4" />,
          // },
          // secondaryAction: {
          //   href: "/docs",
          //   text: "Components",
          //   icon: <Icons.component className="h-4 w-4" />,
          // },
        }}
      />
    </main>
  );
}
