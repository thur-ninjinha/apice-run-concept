"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  index?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  index,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-apice-white">
        {index && (
          <span className="font-mono text-apice-orange/60 text-2xl md:text-3xl tracking-normal mr-3 align-top">
            {index}
          </span>
        )}
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base sm:text-lg text-apice-sweat/70 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
