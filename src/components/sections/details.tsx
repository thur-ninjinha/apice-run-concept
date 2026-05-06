"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  {
    title: "5 KM",
    desc: "Percurso plano e desafiador pela Av. Roberto Freire — uma das vias mais marcantes de Natal.",
    image:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Vista aérea de avenida urbana ao amanhecer",
  },
  {
    title: "Camisa Oficial",
    desc: "Tecido dry-fit em algodão técnico. Estampa exclusiva da edição 2026 com numeração.",
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Close-up de tecido técnico de camisa esportiva",
  },
  {
    title: "Medalha Exclusiva",
    desc: "Para todos que cruzarem a linha de chegada. Acabamento metálico, fita personalizada.",
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Medalha metálica em close-up com brilho dourado",
  },
  {
    title: "Recovery Vértice",
    desc: "Massoterapia profissional pós-prova oferecida pela Vértice. Recupere antes de comemorar.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Sessão de massagem esportiva pós-treino",
  },
  {
    title: "Fotos profissionais",
    desc: "Cobertura completa pela TRYX Esportiva. Suas fotos no percurso e na chegada, gratuitas.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Corredor cruzando a linha de chegada",
  },
  {
    title: "Hidratação no trajeto",
    desc: "Pontos de água ao longo do percurso e frutas + isotônicos na chegada.",
    image:
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Splash de água com gotas suspensas",
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

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map(({ title, desc, image, imageAlt }, i) => (
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
              className="group relative aspect-[4/5] rounded-md overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-1"
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover saturate-75 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-apice-orange/15 mix-blend-multiply"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-apice-black/90 via-apice-black/70 to-apice-black/40 transition-opacity duration-500 group-hover:opacity-90"
              />
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-display uppercase text-2xl md:text-3xl text-apice-white tracking-wide leading-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-apice-sweat/80 leading-relaxed max-w-[28ch]">
                  {desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
