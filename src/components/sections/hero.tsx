"use client";

import { motion, type Variants } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;
const APICE_LETTERS = "ÁPICE".split("");

const apiceContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.45 } },
};

const apiceLetter: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

const fadeUp: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: EASE } },
};

const lineStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 1.4 } },
};

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-apice-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-6 lg:px-12 py-6 flex items-center justify-between font-mono text-[11px] tracking-[0.18em] uppercase text-apice-sweat/40"
      >
        <span>Ápice Run · Edição 01</span>
        <span className="tabular-nums">31.05.26 →</span>
      </motion.div>

      <div className="relative flex-1 flex items-center container mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="w-full max-w-6xl">
          <h1 className="font-display uppercase leading-[0.95]">
            <motion.span
              variants={apiceContainer}
              initial="hidden"
              animate="visible"
              className="block text-[16vw] sm:text-[12vw] lg:text-[9rem] xl:text-[11rem] text-apice-white"
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
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.95, ease: EASE }}
              className="block text-[16vw] sm:text-[12vw] lg:text-[9rem] xl:text-[11rem] text-apice-orange -mt-2 sm:-mt-3"
            >
              Run
            </motion.span>
          </h1>

          <motion.div
            variants={lineStagger}
            initial="hidden"
            animate="visible"
            className="mt-12 md:mt-16 max-w-xl"
          >
            <motion.p
              variants={fadeUp}
              className="font-display uppercase text-3xl sm:text-4xl md:text-5xl text-apice-white leading-[1.05]"
            >
              5 km.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-display uppercase text-3xl sm:text-4xl md:text-5xl text-apice-white leading-[1.05] mt-1"
            >
              Dois pares de tênis.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-display uppercase text-3xl sm:text-4xl md:text-5xl text-apice-orange leading-[1.05] mt-1"
            >
              Uma linha de chegada.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.95, ease: EASE }}
            className="mt-14 md:mt-20 border-t border-white/10 pt-6 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-6 font-mono text-[11px] uppercase tracking-[0.16em] text-apice-sweat/70"
          >
            <div>
              <span className="block text-apice-sweat/40 mb-1.5">Data</span>
              <span className="text-apice-white">31 maio · dom</span>
            </div>
            <div>
              <span className="block text-apice-sweat/40 mb-1.5">Largada</span>
              <span className="text-apice-white">05h00</span>
            </div>
            <div>
              <span className="block text-apice-sweat/40 mb-1.5">Local</span>
              <span className="text-apice-white">Av. Roberto Freire</span>
            </div>
            <div>
              <span className="block text-apice-sweat/40 mb-1.5">Cidade</span>
              <span className="text-apice-white">Natal · RN</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.15, ease: EASE }}
            className="mt-12 md:mt-14"
          >
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
          </motion.div>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4 }}
        className="px-6 lg:px-12 pb-6 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-apice-sweat/30"
      >
        <span>↓ role para continuar</span>
        <span>§ 01—07</span>
      </motion.div>
    </section>
  );
}
