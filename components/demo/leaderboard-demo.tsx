import { Medal } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Leaderboard,
  type LeaderboardEntry,
} from "@/registry/new-york/components/leaderboard";

const demoEntries: LeaderboardEntry[] = [
  {
    id: "1",
    name: "Alex Johnson",
    score: 12500,
    rank: 1,
    rankColor: "text-yellow-500",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    trend: 2,
    className:
      "bg-yellow-500/20 dark:bg-yellow-500/10 border border-yellow-500",
  },
  {
    id: "2",
    name: "Sarah Smith",
    score: 11200,
    rank: 2,
    rankNode: (
      <Avatar>
        <AvatarFallback className="bg-slate-400">
          <Medal className="h-4 w-4 text-white" />
        </AvatarFallback>
      </Avatar>
    ),
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    trend: -1,
  },
  {
    id: "3",
    name: "Michael Brown",
    score: 10800,
    rank: 3,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    trend: 0,
  },
  {
    id: "4",
    name: "Emma Wilson",
    score: 9400,
    rank: 4,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    isCurrentUser: true,
    trend: 5,
    trendClassName:
      "border-none bg-emerald-100 dark:bg-emerald-200/30 px-1 rounded text-emerald-700 dark:text-emerald-300",
  },
  {
    id: "5",
    name: "James Davis",
    score: 8900,
    rank: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
  {
    id: "6",
    name: "Olivia Garcia",
    score: 8500,
    rank: 6,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
  },
  {
    id: "7",
    name: "William Martinez",
    score: 8200,
    rank: 7,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=William",
  },
  {
    id: "8",
    name: "Sophia Rodriguez",
    score: 7900,
    rank: 8,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
  },
];

export function LeaderboardDemo() {
  return (
    <Leaderboard
      title="Global Leaderboard"
      description="Top performers across all categories"
      entries={demoEntries}
      paginate={true}
      pageSize={4}
      className="max-w-md mx-auto"
    />
  );
}

export default LeaderboardDemo;
