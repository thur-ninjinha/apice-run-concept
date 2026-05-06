"use client";

import { motion } from "motion/react";
import { Countdown } from "@/components/ui/countdown";
import { SectionHeading } from "@/components/ui/section-heading";

const EASE = [0.16, 1, 0.3, 1] as const;

type LotInfo = {
  name: string;
  price: number;
  status: "closed" | "active" | "upcoming";
  note: string;
};

const lots: LotInfo[] = [
  { name: "Lote 01", price: 89, status: "closed", note: "encerrado" },
  { name: "Lote 02", price: 119, status: "active", note: "atual · até 22.04.26" },
  { name: "Lote 03", price: 149, status: "upcoming", note: "abre 20.05.26" },
];

export function Pricing() {
  const active = lots.find((l) => l.status === "active")!;

  return (
    <section
      id="inscricao"
      className="relative py-32 md:py-48 border-t border-white/5 bg-apice-asphalt"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          index="05"
          label="Inscrição"
          title={
            <>
              Marca um amigo. <br />
              <span className="text-apice-orange">Cada um faz a sua.</span>
            </>
          }
          description="A inscrição é individual, e o evento é em dupla. Combinem o ritmo, o tênis e a hora de acordar — o resto a gente cuida."
        />

        <div className="mt-20 md:mt-28 grid lg:grid-cols-12 gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.85, ease: EASE }}
            className="lg:col-span-7 lg:col-start-1"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-apice-orange/70 mb-5">
              Lote em curso
            </p>
            <div className="flex items-start gap-3">
              <span className="font-display text-base md:text-xl text-apice-sweat/55 mt-4 md:mt-6">
                R$
              </span>
              <span className="font-display text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] leading-[0.85] text-apice-white tabular-nums tracking-tight">
                {active.price}
              </span>
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-apice-sweat/55">
              {active.note}
            </p>

            <a
              href="#"
              className="group mt-10 md:mt-12 inline-flex items-center justify-center h-[54px] px-8 rounded-md bg-apice-orange text-apice-black font-bold text-sm uppercase tracking-wider shadow-[0_6px_18px_rgba(242,111,44,0.25)] transition-all duration-300 hover:bg-apice-orange-light hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(242,111,44,0.5)] active:translate-y-0"
            >
              Inscrever agora
              <span
                aria-hidden="true"
                className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-apice-orange/70 mb-5">
              Faltam
            </p>
            <Countdown />

            <div className="mt-14 border-t border-white/10 pt-6 space-y-4">
              {lots.map((lot) => (
                <div
                  key={lot.name}
                  className={
                    "grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 " +
                    (lot.status === "active"
                      ? "text-apice-white"
                      : "text-apice-sweat/40")
                  }
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
                    {lot.name}
                  </span>
                  <span
                    className={
                      "font-mono text-[10px] uppercase tracking-[0.18em] truncate " +
                      (lot.status === "active"
                        ? "text-apice-orange"
                        : "text-apice-sweat/30")
                    }
                  >
                    {lot.note}
                  </span>
                  <span
                    className={
                      "font-display text-lg md:text-xl tabular-nums " +
                      (lot.status === "closed"
                        ? "line-through decoration-apice-sweat/30"
                        : "")
                    }
                  >
                    R$ {lot.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 md:mt-24 max-w-2xl text-sm text-apice-sweat/45 leading-relaxed"
        >
          Cupom de embaixador (−20% no lote atual):{" "}
          <span className="font-mono uppercase tracking-wider text-apice-sweat/70">
            embaixador20
          </span>
          . Cancelamentos até 20.05.26 com reembolso integral.
        </motion.p>
      </div>
    </section>
  );
}
