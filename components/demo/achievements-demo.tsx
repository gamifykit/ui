import { Crown, Star, Target, Trophy, Zap } from "lucide-react";
import {
  type Achievement,
  Achievements,
} from "@/registry/new-york/components/achievements";

const demoAchievements: Achievement[] = [
  {
    id: "1",
    title: "First Steps",
    description: "Complete your first daily task",
    icon: <Zap fill="currentColor" className="h-6 w-6" />,
    badgeClassName: "bg-yellow-500 border-yellow-500 text-white",
    unlockedAt: "2025-12-10",
  },
  {
    id: "2",
    title: "Consistency King",
    description: "Maintain a 7-day streak",
    icon: <Trophy className="h-6 w-6" />,
    badgeClassName: "bg-purple-500/10 border-purple-500/20 text-purple-500",
    unlockedAt: "2025-12-17",
  },
  {
    id: "3",
    title: "Early Bird",
    description: "Complete a task before 7 AM",
    icon: <Star className="h-6 w-6" />,
    badgeClassName: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
    progress: 3,
    total: 5,
    progressClassName: "[&>div]:bg-emerald-500",
    isLocked: true,
  },
  {
    id: "4",
    title: "Master Planner",
    description: "Create 10 custom goals",
    icon: <Target className="h-6 w-6" />,
    progress: 8,
    total: 10,
    isLocked: true,
  },
  {
    id: "5",
    title: "Secret Legend",
    description: "???",
    icon: <Crown className="h-6 w-6" />,
    isLocked: true,
    isSecret: true,
  },
];

export function AchievementsDemo() {
  return (
    <Achievements
      title="My Achievements"
      description="Track your progress and unlock rewards"
      achievements={demoAchievements}
      className="max-w-md mx-auto"
    />
  );
}

export default AchievementsDemo;
