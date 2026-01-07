import { cva } from "class-variance-authority";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type StreakDay = {
  date: Date | string;
  done: boolean;
};

export interface DailyStreakProps extends React.ComponentProps<typeof Card> {
  title?: string;
  currentStreak: number;
  bestStreak?: number;
  days?: StreakDay[];
  daysToShow?: number; // default 7
  showBestBadge?: boolean;
  showLabels?: boolean; // show weekday labels beneath dots
}

const dotVariants = cva(
  "size-8 rounded-full border transition-all duration-200",
  {
    variants: {
      state: {
        on: "bg-primary border-primary/80 shadow-[0_0_0_3px] shadow-primary/20",
        off: "bg-muted border-border",
        todayOn:
          "bg-primary border-primary/80 ring-2 ring-offset-2 ring-primary/40",
        todayOff:
          "bg-muted border-border ring-2 ring-offset-2 ring-muted-foreground/20",
      },
      size: {
        sm: "size-6",
        md: "size-8",
        lg: "size-10",
      },
    },
    defaultVariants: {
      state: "off",
      size: "md",
    },
  },
);

function normalizeDays(
  days?: StreakDay[],
  daysToShow = 7,
): { date: Date; done: boolean }[] {
  const today = new Date();
  // If not provided, generate an empty array of last N days with done=false
  const arr: { date: Date; done: boolean }[] = [];
  if (!days || days.length === 0) {
    for (let i = daysToShow - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      arr.push({ date: d, done: false });
    }
    return arr;
  }
  // Map input to a dictionary by yyyy-mm-dd
  const toKey = (d: Date) => d.toISOString().slice(0, 10);
  const map = new Map<string, boolean>();
  for (const item of days) {
    const d = typeof item.date === "string" ? new Date(item.date) : item.date;
    map.set(toKey(d), !!item.done);
  }
  for (let i = daysToShow - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = toKey(d);
    arr.push({ date: d, done: map.get(key) ?? false });
  }
  return arr;
}

function weekdayShort(date: Date) {
  return date.toLocaleDateString(undefined, { weekday: "short" });
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function DailyStreak({
  title = "DAILY STREAK",
  currentStreak,
  bestStreak,
  days,
  daysToShow = 7,
  showBestBadge = true,
  showLabels = true,
  className,
  ...props
}: DailyStreakProps) {
  const normalized = React.useMemo(
    () => normalizeDays(days, daysToShow),
    [days, daysToShow],
  );
  const today = new Date();

  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium tracking-widest text-muted-foreground">
          {title}
        </CardTitle>
        {showBestBadge && typeof bestStreak === "number" && (
          <Badge variant="secondary" className="gap-1">
            🔥 Best {bestStreak}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-3xl font-bold leading-none">
              {currentStreak}
            </div>
            <p className="text-xs text-muted-foreground">day streak</p>
          </div>
          <div className="flex items-center gap-2 text-amber-500">
            <span aria-hidden>🔥</span>
            <span className="sr-only">Flame icon</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-7 gap-2">
          {normalized.map((item, idx) => {
            const todayFlag = isSameDay(item.date, today);
            const state = item.done
              ? todayFlag
                ? "todayOn"
                : "on"
              : todayFlag
                ? "todayOff"
                : "off";
            return (
              <div key={idx} className="flex flex-col items-center gap-1">
                <div
                  className={cn(
                    dotVariants({ state: state as any, size: "md" }),
                  )}
                  title={`${weekdayShort(item.date)} - ${item.done ? "Done" : "Missed"}`}
                  role="img"
                  aria-label={`${weekdayShort(item.date)} ${item.done ? "completed" : "missed"}`}
                />
                {showLabels && (
                  <span className="text-[10px] text-muted-foreground">
                    {weekdayShort(item.date).slice(0, 2)}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default DailyStreak;
