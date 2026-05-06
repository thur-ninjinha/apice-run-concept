"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLiteMotion } from "@/lib/use-lite-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const lineStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { y: 26, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

function AmbientWord({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ y }}
      className="absolute -bottom-8 -right-[6%] pointer-events-none select-none"
    >
      <span className="block font-display uppercase text-[28vw] lg:text-[18vw] leading-[0.8] tracking-tighter text-apice-orange/[0.04]">
        dupla
      </span>
    </motion.div>
  );
}

export function Concept() {
  const ref = useRef<HTMLElement>(null);
  const lite = useLiteMotion();

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 border-t border-white/5 bg-apice-asphalt overflow-hidden"
    >
      {!lite && <AmbientWord targetRef={ref} />}

      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionHeading
          index="01"
          label="A ideia"
          title={
            <motion.span
              variants={lineStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15%" }}
              className="block"
            >
              <motion.span variants={fadeUp} className="block text-apice-white">
                Você corre.
              </motion.span>
              <motion.span variants={fadeUp} className="block text-apice-white">
                Ele corre.
              </motion.span>
              <motion.span variants={fadeUp} className="block text-apice-orange">
                A chegada é de vocês.
              </motion.span>
            </motion.span>
          }
        />

        <div className="mt-20 md:mt-28 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="lg:col-span-6 lg:col-start-1"
          >
            <p className="text-base md:text-lg text-apice-sweat/75 leading-[1.8] max-w-xl">
              A Ápice Run é a primeira corrida de rua de Natal pensada
              para ser feita em{" "}
              <span className="text-apice-white">dupla</span>. Convide um
              amigo, um irmão, um pai — e cada um faz a sua inscrição.
              No domingo, vocês cruzam a largada juntos. Cinco quilômetros
              de Avenida Roberto Freire pela frente.{" "}
              <span className="text-apice-white">Duas medalhas no fim.</span>
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            className="lg:col-span-5 lg:col-start-8 relative"
          >
            <blockquote className="font-display uppercase text-2xl md:text-3xl lg:text-4xl leading-[1.15] text-apice-white pl-6 border-l border-apice-orange">
              Ninguém cruza a linha de chegada{" "}
              <span className="text-apice-orange">sozinho</span>.
            </blockquote>
            <p className="mt-5 pl-6 font-mono text-[11px] uppercase tracking-[0.22em] text-apice-sweat/40">
              — manifesto da edição 01
            </p>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-24 md:mt-32 border-t border-white/10 pt-6 flex flex-wrap gap-x-10 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em] text-apice-sweat/55"
        >
          <span>5 km</span>
          <span className="text-apice-sweat/25">/</span>
          <span>05h00</span>
          <span className="text-apice-sweat/25">/</span>
          <span>01ª edição</span>
          <span className="text-apice-sweat/25">/</span>
          <span>em dupla</span>
        </motion.div>
      </div>
    </section>
  );
}
