"use client";

import { motion } from "motion/react";
import { useLiteMotion } from "@/lib/use-lite-motion";

type Props = {
  count?: number;
  className?: string;
};

export function SpeedLines({ count = 6, className }: Props) {
  const lite = useLiteMotion();
  if (lite) return null;

  return (
    <div className={"pointer-events-none absolute inset-0 overflow-hidden " + (className ?? "")}>
      {Array.from({ length: count }).map((_, i) => {
        const top = 8 + ((i * 73) % 90);
        const width = 30 + ((i * 47) % 50);
        const delay = (i * 0.4) % 3;
        const duration = 5 + ((i * 1.7) % 4);
        return (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-apice-orange/40 to-transparent"
            style={{ top: `${top}%`, width: `${width}%` }}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "200%", opacity: [0, 0.8, 0] }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}
