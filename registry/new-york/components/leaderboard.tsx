"use client";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Minus,
  Trophy,
} from "lucide-react";
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type LeaderboardEntry = {
  id: string;
  name: string;
  avatar?: string;
  score: number;
  rank: number;
  rankColor?: string;
  rankNode?: React.ReactNode;
  isCurrentUser?: boolean;
  className?: string;
  trend?: number;
  trendClassName?: string;
};

export interface LeaderboardProps extends React.ComponentProps<typeof Card> {
  title?: string;
  description?: string;
  entries: LeaderboardEntry[];
  limit?: number;
  pageSize?: number;
  paginate?: boolean;
}

export function Leaderboard({
  title = "Leaderboard",
  description,
  entries,
  limit,
  pageSize = 5,
  paginate = false,
  className,
  ...props
}: LeaderboardProps) {
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalEntries = limit ? entries.slice(0, limit) : entries;
  const totalPages = Math.ceil(totalEntries.length / pageSize);

  const displayEntries = paginate
    ? totalEntries.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : totalEntries.slice(0, limit || 5);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const defaultRankColors: Record<number, string> = {
    1: "text-yellow-500",
    2: "text-gray-400",
    3: "text-amber-600",
  };

  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-4">
          {displayEntries.map((entry) => (
            <div
              key={entry.id}
              className={cn(
                "flex items-center gap-4 rounded-lg p-2 transition-colors",
                entry.isCurrentUser ? "bg-muted" : "hover:bg-muted/50",
                entry.className,
              )}
            >
              <div className="flex w-8 items-center justify-center font-bold text-muted-foreground">
                {entry.rankNode ||
                  (entry.rank <= 3 ? (
                    <Trophy
                      className={cn(
                        "h-4 w-4",
                        entry.rankColor || defaultRankColors[entry.rank],
                      )}
                    />
                  ) : (
                    entry.rank
                  ))}
              </div>
              <Avatar className="h-9 w-9">
                <AvatarImage src={entry.avatar} alt={entry.name} />
                <AvatarFallback>{getInitials(entry.name)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium leading-none">
                    {entry.name}
                    {entry.isCurrentUser && (
                      <span className="ml-2 text-[10px] text-muted-foreground uppercase">
                        (You)
                      </span>
                    )}
                  </p>
                  {entry.trend !== undefined && (
                    <Badge
                      variant="outline"
                      className={cn(
                        "flex items-center gap-0.5",
                        entry.trendClassName,
                      )}
                    >
                      {entry.trend > 0 && (
                        <ChevronUp className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                      )}
                      {entry.trend < 0 && (
                        <ChevronDown className="h-3 w-3 text-red-600 dark:text-red-400" />
                      )}
                      {entry.trend === 0 && (
                        <Minus className="h-3 w-3 text-muted-foreground" />
                      )}
                      {entry.trend !== 0 && (
                        <span
                          className={cn(
                            "text-[10px] font-medium",
                            entry.trend > 0 &&
                              "text-emerald-600 dark:text-emerald-400",
                            entry.trend < 0 && "text-red-600 dark:text-red-400",
                          )}
                        >
                          {Math.abs(entry.trend)}
                        </span>
                      )}
                    </Badge>
                  )}
                </div>
              </div>
              <div className="text-sm font-bold">
                {entry.score.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        {paginate && totalPages > 1 && (
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Leaderboard;
