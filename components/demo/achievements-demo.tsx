import { Achievements, type Achievement } from "@/registry/new-york/components/achievements";
import { Trophy, Zap, Star, Target, Crown } from "lucide-react";

const demoAchievements: Achievement[] = [
  {
    id: "1",
    title: "First Steps",
    description: "Complete your first daily task",
    icon: <Zap className="h-6 w-6" />,
    unlockedAt: "2025-12-10",
  },
  {
    id: "2",
    title: "Consistency King",
    description: "Maintain a 7-day streak",
    icon: <Trophy className="h-6 w-6" />,
    unlockedAt: "2025-12-17",
  },
  {
    id: "3",
    title: "Early Bird",
    description: "Complete a task before 7 AM",
    icon: <Star className="h-6 w-6" />,
    progress: 3,
    total: 5,
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
