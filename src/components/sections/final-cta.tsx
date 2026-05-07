"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";

const EASE = [0.16, 1, 0.3, 1] as const;

const lineStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.85, ease: EASE } },
};

export function FinalCta() {
  return (
    <section className="relative py-32 md:py-48 border-t border-white/5 bg-apice-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionHeading
          index="07"
          label="Última palavra"
          title={
            <motion.span
              variants={lineStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15%" }}
              className="block"
            >
              <motion.span
                variants={fadeUp}
                className="block text-apice-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
              >
                Vai ser
              </motion.span>
              <motion.span
                variants={fadeUp}
                className="block text-apice-orange text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
              >
                em dupla.
              </motion.span>
            </motion.span>
          }
        />

        <div className="mt-16 md:mt-20 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="lg:col-span-7"
          >
            <p className="text-base md:text-lg text-apice-sweat/70 leading-[1.8] max-w-xl">
              31 de maio · 05h · Capim Macio. Você, seu amigo e cinco
              quilômetros pela frente. Duas medalhas no fim.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
              <a
                href="#inscricao"
                className="group inline-flex items-center justify-center h-[54px] px-8 rounded-md bg-apice-orange text-apice-black font-bold text-sm uppercase tracking-wider shadow-[0_6px_18px_rgba(242,111,44,0.25)] transition-all duration-300 hover:bg-apice-orange-light hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(242,111,44,0.5)] active:translate-y-0"
              >
                Garantir minha vaga
                <span
                  aria-hidden="true"
                  className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <a
                href="https://www.instagram.com/apicerunoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center font-mono text-[11px] uppercase tracking-[0.22em] text-apice-sweat/60 hover:text-apice-orange transition-colors duration-300"
              >
                <span className="border-b border-current pb-0.5">
                  Falar com a organização
                </span>
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-md overflow-hidden border border-white/10 bg-apice-asphalt">
              <Image
                src="/images/runner.png"
                alt="Atleta correndo em ritmo de prova"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover saturate-[0.9]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-apice-black/40 to-transparent"
              />
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
