import * as TabsComponents from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import AchievementsDemo from "@/components/demo/achievements-demo";
import DailyStreakDemo from "@/components/demo/daily-streak-demo";
import LeaderboardDemo from "@/components/demo/leaderboard-demo";
import { PreviewComponents } from "@/components/preview-components";
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    PreviewComponents,
    DailyStreakDemo,
    AchievementsDemo,
    LeaderboardDemo,
    ...TabsComponents,
  };
}
