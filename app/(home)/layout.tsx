import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { Metadata } from "next";
import Footer from "@/components/sections/footer";
import constructMetadata from "@/lib/construct-metadata";
import { baseOptions } from "@/lib/layout.shared";

export const metadata: Metadata = constructMetadata({
  image: "./gamifykit-opengraph.png",
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout {...baseOptions()}>
      {children}
      <Footer />
    </HomeLayout>
  );
}
