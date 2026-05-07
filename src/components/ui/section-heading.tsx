"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  index?: string;
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  index,
  label,
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
      {(index || label) && (
        <p
          className={cn(
            "font-mono text-[11px] tracking-[0.24em] uppercase text-apice-orange/70 mb-6 md:mb-10 flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          {index && <span>§{index}</span>}
          {index && label && (
            <span aria-hidden="true" className="text-apice-orange/30">
              ──
            </span>
          )}
          {label && <span>{label}</span>}
        </p>
      )}
      <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-apice-white">
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
