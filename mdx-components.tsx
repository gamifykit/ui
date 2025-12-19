import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { PreviewComponents } from "@/components/preview-components";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import DailyStreakDemo from "@/components/demo/daily-streak-demo";
import AchievementsDemo from "@/components/demo/achievements-demo";
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    PreviewComponents,
    DailyStreakDemo,
    AchievementsDemo,
    ...TabsComponents,
  };
}
