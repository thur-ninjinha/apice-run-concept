"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useLiteMotion } from "@/lib/use-lite-motion";

type Props = {
  items: string[];
  speed?: number;
  reverse?: boolean;
  className?: string;
  separator?: React.ReactNode;
};

export function Marquee({
  items,
  speed = 40,
  reverse = false,
  className,
  separator,
}: Props) {
  const lite = useLiteMotion();
  const sep = separator ?? (
    <span className="mx-6 inline-block size-2 rounded-full bg-current opacity-40 align-middle" />
  );

  const content = (
    <div className="flex shrink-0 items-center whitespace-nowrap">
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span>{item}</span>
          {sep}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "relative flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent_0,black_8%,black_92%,transparent_100%)]",
        className
      )}
    >
      <motion.div
        className="flex"
        animate={lite ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={
          lite
            ? undefined
            : { duration: speed, ease: "linear", repeat: Infinity }
        }
      >
        {content}
        {content}
      </motion.div>
    </div>
  );
}
