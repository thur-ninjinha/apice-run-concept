"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";

const EASE = [0.16, 1, 0.3, 1] as const;

const items = [
  {
    title: "Camisa Oficial",
    desc: "Dry-fit técnico, estampa exclusiva da edição 2026.",
  },
  {
    title: "Medalha Exclusiva",
    desc: "Acabamento metálico, fita personalizada — pra todos que cruzarem a chegada.",
  },
  {
    title: "Recovery Vértice",
    desc: "Massoterapia profissional pós-prova oferecida pela Vértice.",
  },
  {
    title: "Fotos profissionais",
    desc: "Cobertura completa pela TRYX. Suas fotos no percurso e na chegada, gratuitas.",
  },
  {
    title: "Hidratação no trajeto",
    desc: "Pontos de água ao longo do percurso. Frutas e isotônico na chegada.",
  },
  {
    title: "Estrutura completa",
    desc: "Apoio do começo ao fim. Sinalização, segurança, cronometragem oficial.",
  },
];

export function Details() {
  return (
    <section className="relative py-32 md:py-48 border-t border-white/5 bg-apice-black">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          index="04"
          label="Kit da edição"
          title={
            <>
              Inscrição completa,{" "}
              <span className="text-apice-orange">sem letras miúdas.</span>
            </>
          }
          description="Tudo o que tá incluso na sua vaga. Você corre — a gente cuida do resto."
        />

        <div className="mt-20 md:mt-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.85, ease: EASE }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-md overflow-hidden border border-white/10 bg-apice-orange">
              <Image
                src="/images/kit.png"
                alt="Kit oficial da Ápice Run 2026: camisa, short, tote bag, boné e garrafa"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-apice-sweat/45">
              Kit completo · Edição 01
            </figcaption>
          </motion.figure>

          <ul className="lg:col-span-7 border-t border-white/10">
            {items.map(({ title, desc }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.06,
                  ease: EASE,
                }}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 md:gap-x-8 border-b border-white/10 py-5 md:py-6"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-apice-sweat/40">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display uppercase text-xl md:text-2xl text-apice-white tracking-tight leading-tight">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm text-apice-sweat/55 leading-relaxed max-w-[44ch]">
                    {desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="mt-24 md:mt-32 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          <figure className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-md overflow-hidden border border-white/10 bg-apice-asphalt">
              <Image
                src="/images/medal.png"
                alt="Medalha oficial da Ápice Run 2026"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="sr-only">
              Medalha oficial da edição 01.
            </figcaption>
          </figure>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-apice-orange/70 mb-5">
              Medalha oficial
            </p>
            <h3 className="font-display uppercase text-3xl md:text-5xl lg:text-6xl text-apice-white leading-[0.95]">
              Pra você levar pra casa{" "}
              <span className="text-apice-orange">
                no domingo de manhã.
              </span>
            </h3>
            <p className="mt-6 text-sm md:text-base text-apice-sweat/65 leading-relaxed max-w-md">
              Acabamento metálico, fita personalizada, design exclusivo da
              edição 2026. Todo mundo que cruzar a linha de chegada leva uma.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
