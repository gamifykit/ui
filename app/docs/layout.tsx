import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
// import { Icons } from "@/components/icons";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      // links={[
      //   {
      //     type: "button",
      //     text: "llms-full.txt",
      //     url: "/llms-full.txt",
      //     active: "none",
      //     icon: <Icons.book />,
      //   },
      // ]}
    >
      {children}
    </DocsLayout>
  );
}
