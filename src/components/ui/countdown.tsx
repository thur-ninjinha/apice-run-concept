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
    { label: "horas", value: time?.hours },
    { label: "min", value: time?.minutes },
    { label: "seg", value: time?.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 w-full max-w-xl">
      {items.map(({ label, value }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm py-4 px-2 sm:py-6 sm:px-4 transition-colors hover:border-apice-orange/40"
        >
          <div className="font-display text-3xl sm:text-5xl md:text-6xl leading-none text-apice-orange tabular-nums">
            {value === undefined ? "--" : String(value).padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs text-apice-sweat/50 uppercase tracking-[0.2em] mt-2 sm:mt-3">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
