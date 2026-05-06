"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-05-31T05:00:00-03:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calc(): TimeLeft {
  const diff = Math.max(0, TARGET_DATE - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  };
}

export function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(calc());
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "dias", value: time?.days },
    { label: "h", value: time?.hours },
    { label: "min", value: time?.minutes },
    { label: "seg", value: time?.seconds },
  ];

  return (
    <div className="flex flex-wrap items-baseline gap-x-5 sm:gap-x-7 gap-y-3">
      {items.map(({ label, value }) => (
        <div key={label} className="flex items-baseline gap-1.5">
          <span className="font-display text-3xl sm:text-4xl md:text-5xl text-apice-white tabular-nums leading-none">
            {value === undefined ? "--" : String(value).padStart(2, "0")}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-apice-sweat/45">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
