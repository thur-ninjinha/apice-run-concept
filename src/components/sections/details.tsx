"use client";

import { motion } from "motion/react";
import { Route, Shirt, Sparkles, Camera, Droplets, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  {
    Icon: Route,
    title: "5 KM",
    desc: "Percurso plano e desafiador pela Av. Roberto Freire — uma das vias mais marcantes de Natal.",
  },
  {
    Icon: Shirt,
    title: "Camisa Oficial",
    desc: "Tecido dry-fit em algodão técnico. Estampa exclusiva da edição 2026 com numeração.",
  },
  {
    Icon: Award,
    title: "Medalha Exclusiva",
    desc: "Para todos que cruzarem a linha de chegada. Acabamento metálico, fita personalizada.",
  },
  {
    Icon: Sparkles,
    title: "Recovery Vértice",
    desc: "Massoterapia profissional pós-prova oferecida pela Vértice. Recupere antes de comemorar.",
  },
  {
    Icon: Camera,
    title: "Fotos profissionais",
    desc: "Cobertura completa pela TRYX Esportiva. Suas fotos no percurso e na chegada, gratuitas.",
  },
  {
    Icon: Droplets,
    title: "Hidratação no trajeto",
    desc: "Pontos de água ao longo do percurso e frutas + isotônicos na chegada.",
  },
];

export function Details() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          index="01"
          title={
            <>
              Tudo pensado pra você <span className="italic text-apice-orange">correr leve</span>.
            </>
          }
          description="Inscrição completa com kit, recovery, fotografia e estrutura de apoio. Sem letras miúdas."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map(({ Icon, title, desc }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative p-6 md:p-8 rounded-2xl border border-white/5 bg-apice-asphalt/40 hover:border-apice-orange/40 hover:bg-apice-asphalt/80 transition-all"
            >
              <div className="size-12 rounded-xl bg-apice-orange/10 border border-apice-orange/20 flex items-center justify-center mb-6 group-hover:bg-apice-orange group-hover:text-apice-black transition-all">
                <Icon
                  className="size-6 text-apice-orange group-hover:text-apice-black transition-colors"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-display uppercase text-2xl md:text-3xl text-apice-white tracking-wide leading-tight">
                {title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-apice-sweat/60 leading-relaxed">
                {desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
