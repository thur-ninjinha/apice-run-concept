"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";

const officials = [
  { name: "QUARK", tagline: "Tecnologia · Inovação" },
  { name: "VÉRTICE", tagline: "Massoterapia · Recovery" },
];

const supporters = [
  { name: "BOKUS", tagline: "Pipoca" },
  { name: "CAICÓ", tagline: "Restaurante · Tirol" },
  { name: "TRYX", tagline: "Fotografia esportiva" },
  { name: "ÁPICE", tagline: "Realização" },
];

export function Sponsors() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5 bg-apice-asphalt">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          index="04"
          title={
            <>
              Marcas que <span className="italic text-apice-orange">correm com a gente</span>.
            </>
          }
          description="Patrocinadores e apoiadores que tornam possível uma corrida com kit completo, recovery e fotografia profissional."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-4 md:gap-6">
          {officials.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative aspect-[16/7] md:aspect-[3/1] rounded-2xl border border-apice-orange/20 bg-gradient-to-br from-apice-black to-apice-asphalt overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-apice-orange/0 to-apice-orange/0 group-hover:from-apice-orange/15 group-hover:to-apice-orange/5 transition-all duration-700" />

              <div className="absolute inset-0 flex items-center justify-center px-8">
                <div className="text-center">
                  <span className="block font-display uppercase text-5xl md:text-6xl tracking-tight text-apice-white group-hover:text-apice-orange transition-colors">
                    {s.name}
                  </span>
                  <span className="block mt-2 text-sm text-apice-sweat/40 font-light">
                    {s.tagline}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-sm text-apice-sweat/40 italic mb-6 text-center">
            e quem caminha com a gente —
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {supporters.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative aspect-[5/2] rounded-xl border border-white/8 bg-apice-black/40 overflow-hidden flex items-center justify-center hover:border-apice-orange/30 transition-all"
              >
                <div className="text-center px-3">
                  <span className="block font-display uppercase text-2xl md:text-3xl tracking-tight text-apice-sweat group-hover:text-apice-orange transition-colors">
                    {s.name}
                  </span>
                  <span className="block mt-0.5 text-[10px] text-apice-sweat/30">
                    {s.tagline}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="mt-14 text-center text-xs text-apice-sweat/30 italic">
          Quer apoiar? Fale com a organização: <span className="text-apice-orange not-italic">@apicerunoficial</span>
        </p>
      </div>
    </section>
  );
}
