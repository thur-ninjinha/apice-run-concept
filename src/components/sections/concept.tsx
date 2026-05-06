"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useLiteMotion } from "@/lib/use-lite-motion";

function ConceptParallaxBg({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ y: y1 }}
        className="absolute -top-20 right-0 lg:right-[5%] pointer-events-none select-none"
      >
        <span className="block font-display italic text-[28vw] lg:text-[16vw] leading-[0.8] tracking-tighter text-apice-orange/[0.06]">
          dupla
        </span>
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={{ y: y2 }}
        className="absolute bottom-0 -left-[5%] pointer-events-none select-none"
      >
        <span className="block font-display text-[24vw] lg:text-[14vw] leading-[0.8] tracking-tighter text-apice-orange/[0.04]">
          02→04
        </span>
      </motion.div>
    </>
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
      {lite ? (
        <>
          <div
            aria-hidden="true"
            className="absolute -top-20 right-0 lg:right-[5%] pointer-events-none select-none"
          >
            <span className="block font-display italic text-[28vw] lg:text-[16vw] leading-[0.8] tracking-tighter text-apice-orange/[0.06]">
              dupla
            </span>
          </div>
          <div
            aria-hidden="true"
            className="absolute bottom-0 -left-[5%] pointer-events-none select-none"
          >
            <span className="block font-display text-[24vw] lg:text-[14vw] leading-[0.8] tracking-tighter text-apice-orange/[0.04]">
              02→04
            </span>
          </div>
        </>
      ) : (
        <ConceptParallaxBg targetRef={ref} />
      )}

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92]">
              <span className="block text-apice-white">Você corre.</span>
              <span className="block text-apice-white">Ele corre.</span>
              <span className="block italic text-apice-orange">A chegada é de vocês.</span>
            </h2>
          </motion.div>

          <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 lg:col-start-1"
            >
              <p className="text-base md:text-lg text-apice-sweat/70 leading-[1.7] max-w-md">
                A Ápice Run é a primeira corrida de rua de Natal pensada
                para ser feita em dupla. Convide um amigo, um irmão, um pai —
                e cada um faz a sua inscrição. No domingo, vocês cruzam a
                largada juntos. Cinco quilômetros de Avenida Roberto Freire
                pela frente. Duas medalhas no fim.
              </p>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 lg:col-start-7 relative"
            >
              <span
                aria-hidden="true"
                className="absolute -top-6 -left-2 font-display text-7xl text-apice-orange/30 leading-none select-none"
              >
                &ldquo;
              </span>
              <blockquote className="font-display uppercase text-2xl md:text-3xl lg:text-4xl leading-[1.1] text-apice-white pl-8 border-l border-apice-orange">
                Ninguém cruza a linha de chegada{" "}
                <span className="italic text-apice-orange">sozinho</span>.
              </blockquote>
              <p className="mt-5 pl-8 text-xs uppercase tracking-[0.25em] text-apice-sweat/40">
                — manifesto da edição 01
              </p>
            </motion.aside>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden"
          >
            {[
              { value: "5", suffix: "km", label: "percurso plano" },
              { value: "05", suffix: "h", label: "horário da largada" },
              { value: "01", suffix: "ª", label: "edição em 2026" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-apice-asphalt p-6 md:p-10 flex flex-row sm:flex-col items-end sm:items-stretch justify-between sm:min-h-[180px] gap-4 sm:gap-0"
              >
                <p className="text-xs text-apice-sweat/40 leading-snug max-w-[16ch] order-2 sm:order-1">
                  {stat.label}
                </p>
                <p className="font-display text-6xl md:text-7xl lg:text-8xl text-apice-white leading-none sm:mt-6 order-1 sm:order-2">
                  {stat.value}
                  <span className="text-apice-orange italic text-3xl md:text-4xl lg:text-5xl ml-1 align-top">
                    {stat.suffix}
                  </span>
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
