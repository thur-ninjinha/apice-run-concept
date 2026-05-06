"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";

const EASE = [0.16, 1, 0.3, 1] as const;

const items = [
  {
    title: "Camisa Oficial",
    desc: "Dry-fit técnico, estampa exclusiva da edição 2026.",
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Tecido técnico de camisa esportiva em close",
  },
  {
    title: "Medalha Exclusiva",
    desc: "Acabamento metálico, fita personalizada para todos que cruzarem.",
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Medalha metálica em close",
  },
  {
    title: "Recovery Vértice",
    desc: "Massoterapia profissional pós-prova oferecida pela Vértice.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Sessão de massagem esportiva",
  },
  {
    title: "Fotos profissionais",
    desc: "Cobertura completa pela TRYX Esportiva. Suas fotos no percurso e na chegada, gratuitas.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Corredor cruzando linha de chegada",
  },
  {
    title: "Hidratação no trajeto",
    desc: "Pontos de água ao longo do percurso. Frutas e isotônico na chegada.",
    image:
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Splash de água com gotas suspensas",
  },
  {
    title: "Estrutura completa",
    desc: "Apoio do começo ao fim. Sinalização, segurança, cronometragem oficial.",
    image:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Vista aérea de avenida urbana",
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

        <ul className="mt-20 md:mt-24 border-t border-white/10">
          {items.map(({ title, desc, image, imageAlt }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: EASE,
              }}
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-x-6 md:gap-x-10 border-b border-white/10 py-7 md:py-8 transition-colors duration-300 hover:bg-apice-carbon/40"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-apice-sweat/40 group-hover:text-apice-orange/80 transition-colors">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display uppercase text-2xl md:text-4xl text-apice-white tracking-tight leading-tight">
                  {title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-apice-sweat/60 leading-relaxed max-w-[48ch]">
                  {desc}
                </p>
              </div>
              <div className="flex items-center gap-5 md:gap-7">
                <div className="hidden lg:block relative w-16 h-16 rounded-md overflow-hidden opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="80px"
                    className="object-cover saturate-75"
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="font-mono text-sm md:text-base text-apice-sweat/30 group-hover:text-apice-orange transition-colors duration-300"
                >
                  →
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
