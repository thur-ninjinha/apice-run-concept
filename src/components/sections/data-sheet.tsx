"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";

const EASE = [0.16, 1, 0.3, 1] as const;

const fields = [
  { label: "Data", value: "31.05.2026", note: "domingo" },
  { label: "Largada", value: "05h00", note: "Capim Macio" },
  { label: "Distância", value: "5 km", note: "ida e volta" },
  { label: "Lote 02", value: "R$ 119", note: "até abr/2026" },
];

export function DataSheet() {
  return (
    <section className="relative py-32 md:py-48 border-t border-white/5 bg-apice-black">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          index="02"
          label="A ficha"
          title={
            <>
              5 km <br />
              <span className="text-apice-orange">pela Roberto Freire.</span>
            </>
          }
        />

        <div className="mt-20 md:mt-28 grid lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.05, ease: EASE }}
            className="lg:col-span-7 lg:col-start-1"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-apice-orange/70 mb-5">
              Percurso
            </p>
            <p className="text-base md:text-lg text-apice-sweat/80 leading-[1.8] max-w-xl">
              Largada na{" "}
              <span className="text-apice-white">Ápice Academia</span>, em
              Capim Macio. Ida pela Av. Roberto Freire sentido praia,
              retorno depois do ponto de virada nos 3&nbsp;km. Chegada de
              volta na arena de premiação.
            </p>
            <p className="mt-6 text-sm md:text-base text-apice-sweat/55 leading-[1.8] max-w-xl">
              Percurso plano, asfalto, dois pontos de hidratação no
              trajeto. Frutas e isotônico na chegada. Estrutura
              completa de apoio.
            </p>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
            className="lg:col-span-5 lg:col-start-8 divide-y divide-white/10 border-y border-white/10"
          >
            {fields.map(({ label, value, note }) => (
              <div
                key={label}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 py-5"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-apice-sweat/45 whitespace-nowrap">
                  {label}
                </dt>
                <dd className="text-right">
                  <span className="block font-display text-2xl md:text-3xl text-apice-white tracking-tight leading-none">
                    {value}
                  </span>
                  <span className="block mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-apice-sweat/40">
                    {note}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
