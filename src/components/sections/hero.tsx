"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Countdown } from "@/components/ui/countdown";
import { Marquee } from "@/components/ui/marquee";
import { SpeedLines } from "@/components/ui/speed-lines";
import { useLiteMotion } from "@/lib/use-lite-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const APICE_LETTERS = "ÁPICE".split("");

const apiceContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.5 },
  },
};

const apiceLetter: Variants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: EASE },
  },
};

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

const infoStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 1.4 } },
};

const ctaStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 2.0 } },
};

const MARQUEE_ITEMS = [
  "ÁPICE RUN 2026",
  "31 DE MAIO",
  "05H · DOMINGO",
  "5 KM",
  "AV. ROBERTO FREIRE",
  "NATAL · RN",
  "TREINE · CORRA · SUPERE",
];

export function Hero() {
  const lite = useLiteMotion();

  return (
    <section className="relative isolate min-h-[100svh] flex flex-col overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1486218119243-13883505764c?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-apice-black via-apice-black/85 to-apice-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-apice-black via-apice-black/20 to-apice-black/60" />
      </div>

      <SpeedLines count={5} className="-z-10" />

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: EASE }}
        className="pointer-events-none absolute -z-10 -bottom-[8vw] -right-[6vw] select-none"
      >
        <motion.span
          animate={lite ? undefined : { scale: [1, 1.03, 1] }}
          transition={
            lite
              ? undefined
              : { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }
          className="block font-display italic text-[42vw] leading-[0.7] tracking-tighter text-apice-orange/[0.08]"
        >
          5K
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-0 left-0 right-0 px-6 lg:px-12 py-6 flex items-center justify-between font-mono text-[11px] text-apice-sweat/40"
      >
        <span>Ápice Run</span>
        <span className="tabular-nums">31.05.26</span>
      </motion.div>

      <div className="relative flex-1 flex items-center container mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-6xl w-full">
          <h1 className="font-display uppercase tracking-tight leading-[0.85]">
            <motion.span
              variants={apiceContainer}
              initial="hidden"
              animate="visible"
              className="block text-[18vw] sm:text-[14vw] lg:text-[11rem] xl:text-[13rem] text-apice-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
              aria-label="Ápice"
            >
              {APICE_LETTERS.map((letter, i) => (
                <motion.span
                  key={i}
                  variants={apiceLetter}
                  className="inline-block"
                  aria-hidden="true"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
              className="block text-[18vw] sm:text-[14vw] lg:text-[11rem] xl:text-[13rem] text-apice-orange -mt-2 sm:-mt-4 drop-shadow-[0_4px_30px_rgba(242,111,44,0.3)]"
            >
              Run
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25, ease: EASE }}
            className="mt-8 max-w-xl border-l-2 border-apice-orange pl-5"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-apice-white leading-relaxed font-medium">
              Mais que uma corrida.
              <br />
              <span className="italic text-apice-orange">É uma corrida com um amigo.</span>
            </p>
          </motion.div>

          <motion.div
            variants={infoStagger}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm md:text-base font-medium"
          >
            {[
              { Icon: Calendar, label: "31 de maio · domingo" },
              { Icon: Clock, label: "05h00" },
              { Icon: MapPin, label: "Av. Roberto Freire — Natal/RN" },
            ].map(({ Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex items-center gap-2 text-apice-sweat"
              >
                <Icon className="size-5 text-apice-orange" aria-hidden="true" />
                <span>{label}</span>
              </motion.div>
            ))}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 text-apice-orange"
            >
              <span className="text-apice-orange/60">→</span>
              <span className="font-display text-base md:text-lg">Lote 2 · R$ 119</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.7, ease: EASE }}
            className="mt-12"
          >
            <Countdown />
          </motion.div>

          <motion.div
            variants={ctaStagger}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              variants={fadeUp}
              href="#inscricao"
              className="group inline-flex items-center justify-center h-[52px] px-7 rounded-md bg-apice-orange text-apice-black font-bold text-sm uppercase tracking-wider shadow-[0_6px_18px_rgba(242,111,44,0.25)] transition-all duration-300 hover:bg-apice-orange-light hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(242,111,44,0.5)] active:translate-y-0 active:shadow-[0_4px_12px_rgba(242,111,44,0.3)]"
            >
              Garantir minha vaga
              <span aria-hidden="true" className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.a>
            <motion.a
              variants={fadeUp}
              href="#percurso"
              className="inline-flex items-center justify-center h-[52px] px-7 rounded-md border-[1.5px] border-apice-white text-apice-white font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:bg-apice-white hover:text-apice-black"
            >
              Ver percurso
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.3 }}
        className="relative border-y border-apice-orange/20 bg-apice-black/60 backdrop-blur-sm"
      >
        <Marquee
          items={MARQUEE_ITEMS}
          speed={50}
          className="py-4 font-display uppercase text-2xl md:text-3xl tracking-wide text-apice-orange"
          separator={
            <span className="mx-8 inline-block text-apice-orange/40 align-middle">/</span>
          }
        />
      </motion.div>
    </section>
  );
}
