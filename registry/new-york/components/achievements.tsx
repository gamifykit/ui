import { Check, Lock } from "lucide-react";
import type * as React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  badgeClassName?: string;
  unlockedAt?: Date | string;
  progress?: number;
  total?: number;
  progressClassName?: string;
  isLocked?: boolean;
  isSecret?: boolean;
};

export interface AchievementsProps extends React.ComponentProps<typeof Card> {
  title?: string;
  description?: string;
  achievements: Achievement[];
}

export function Achievements({
  title = "Achievements",
  description,
  achievements,
  className,
  ...props
}: AchievementsProps) {
  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Badge variant="secondary">
            {achievements.filter((a) => !a.isLocked).length} /{" "}
            {achievements.length}
          </Badge>
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="grid gap-6">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="flex items-start gap-4">
            <div
              className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2",
                achievement.isLocked
                  ? "bg-muted text-muted-foreground border-dashed"
                  : "bg-primary/10 text-primary border-primary/20",
                achievement.badgeClassName,
              )}
            >
              {achievement.isSecret && achievement.isLocked ? (
                <Lock className="h-6 w-6" />
              ) : (
                achievement.icon ||
                (achievement.isLocked ? (
                  <Lock className="h-6 w-6" />
                ) : (
                  <Check className="h-6 w-6" />
                ))
              )}
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium leading-none">
                  {achievement.isSecret && achievement.isLocked
                    ? "Secret Achievement"
                    : achievement.title}
                </p>
                {achievement.unlockedAt && !achievement.isLocked && (
                  <span className="text-[10px] text-muted-foreground uppercase">
                    {new Date(achievement.unlockedAt).toLocaleDateString()}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {achievement.isSecret && achievement.isLocked
                  ? "Keep playing to reveal this achievement"
                  : achievement.description}
              </p>
              {achievement.isLocked &&
                typeof achievement.progress === "number" &&
                typeof achievement.total === "number" && (
                  <div className="pt-2">
                    <div className="flex justify-between text-[10px] mb-1 text-muted-foreground">
                      <span>Progress</span>
                      <span>
                        {achievement.progress} / {achievement.total}
                      </span>
                    </div>
                    <Progress
                      value={(achievement.progress / achievement.total) * 100}
                      className={cn("h-1", achievement.progressClassName)}
                    />
                  </div>
                )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default Achievements;
