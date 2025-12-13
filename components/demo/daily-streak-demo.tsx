"use client";
import * as React from "react";

import DailyStreak, {
  type StreakDay,
} from "@/registry/new-york/components/daily-streak";

function generateSample(days = 7): StreakDay[] {
  const today = new Date();
  const arr: StreakDay[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    // simple pattern: last 3 days done, 2 missed before that, then done
    const idx = days - 1 - i;
    const done = idx >= days - 3 || idx % 2 === 0;
    arr.push({ date: d, done });
  }
  return arr;
}

export default function DailyStreakDemo() {
  const [daysToShow] = React.useState(7);
  const [days] = React.useState(generateSample(daysToShow));

  const currentStreak = days.reduceRight((acc, cur) => {
    if (!cur.done) return acc > 0 ? acc : 0;
    return acc + 1;
  }, 0);

  return (
    <DailyStreak
      title="DAILY STREAK"
      currentStreak={currentStreak}
      bestStreak={5}
      days={days}
      daysToShow={daysToShow}
      className="w-full max-w-md"
    />
  );
}
