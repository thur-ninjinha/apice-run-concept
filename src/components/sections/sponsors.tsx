"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";

const EASE = [0.16, 1, 0.3, 1] as const;

const officials = ["QUARK", "VÉRTICE"];
const supporters = ["BOKUS", "CAICÓ", "TRYX", "ÁPICE"];

export function Sponsors() {
  return (
    <section className="relative py-32 md:py-48 border-t border-white/5 bg-apice-black">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          index="06"
          label="Quem corre com a gente"
          title={
            <>
              Marcas que <br />
              <span className="text-apice-orange">tornam isso possível.</span>
            </>
          }
        />

        <div className="mt-20 md:mt-28 space-y-16 md:space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-apice-orange/70 mb-6">
              Patrocínio oficial
            </p>
            <div className="flex flex-wrap items-baseline gap-x-8 md:gap-x-14 gap-y-3 font-display uppercase text-5xl md:text-7xl lg:text-8xl text-apice-white leading-[1.05]">
              {officials.map((name, i) => (
                <span key={name} className="flex items-baseline">
                  <span>{name}</span>
                  {i < officials.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="ml-8 md:ml-14 text-apice-orange/40 text-3xl md:text-5xl"
                    >
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-apice-orange/70 mb-6">
              Apoio
            </p>
            <div className="flex flex-wrap items-baseline gap-x-6 md:gap-x-10 gap-y-2 font-display uppercase text-2xl md:text-4xl lg:text-5xl text-apice-sweat/75 leading-[1.15]">
              {supporters.map((name, i) => (
                <span key={name} className="flex items-baseline">
                  <span>{name}</span>
                  {i < supporters.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="ml-6 md:ml-10 text-apice-sweat/25"
                    >
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 md:mt-28 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-apice-sweat/45"
        >
          Quer apoiar?{" "}
          <a
            href="#"
            className="text-apice-orange hover:text-apice-orange-light transition-colors"
          >
            @aurorarunoficial
          </a>
        </motion.p>
      </div>
    </section>
  );
}
