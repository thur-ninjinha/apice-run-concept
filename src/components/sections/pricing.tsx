"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

type Status = "closed" | "active" | "upcoming";

type Lot = {
  name: string;
  price: number;
  status: Status;
  caption: string;
  perks: string[];
};

const lots: Lot[] = [
  {
    name: "1º Lote",
    price: 89,
    status: "closed",
    caption: "Encerrado",
    perks: ["Camisa oficial", "Medalha exclusiva", "Hidratação completa"],
  },
  {
    name: "2º Lote",
    price: 119,
    status: "active",
    caption: "Lote atual · vagas limitadas",
    perks: [
      "Camisa oficial",
      "Medalha exclusiva",
      "Hidratação completa",
      "Recovery Vértice",
      "Fotos profissionais TRYX",
    ],
  },
  {
    name: "3º Lote",
    price: 149,
    status: "upcoming",
    caption: "Abre 20/05 · semana do evento",
    perks: [
      "Camisa oficial",
      "Medalha exclusiva",
      "Hidratação completa",
      "Recovery Vértice",
      "Fotos profissionais TRYX",
    ],
  },
];

export function Pricing() {
  return (
    <section
      id="inscricao"
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          index="03"
          title={
            <>
              Garanta sua vaga <span className="italic text-apice-orange">por R$ 119</span>.
            </>
          }
          description="A inscrição é individual e o evento é em dupla. Marque um amigo e cada um faz sua inscrição. Vagas limitadas."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {lots.map((lot, i) => (
            <motion.div
              key={lot.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "relative rounded-2xl p-8 border flex flex-col transition-all duration-500",
                lot.status === "active" &&
                  "bg-apice-orange text-apice-black border-apice-orange shadow-2xl shadow-apice-orange/30 md:scale-[1.04] md:-translate-y-2",
                lot.status === "closed" &&
                  "bg-apice-asphalt/30 border-white/5 text-apice-sweat/40",
                lot.status === "upcoming" &&
                  "bg-apice-asphalt/60 border-white/10 text-apice-white hover:border-apice-orange/40 hover:-translate-y-1"
              )}
            >
              {lot.status === "active" && (
                <motion.div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-[20px] bg-apice-orange/30 -z-10 blur-2xl"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <p
                    className={cn(
                      "font-display text-xl md:text-2xl",
                      lot.status === "active" ? "text-apice-black" : "text-apice-orange"
                    )}
                  >
                    {lot.name}
                  </p>
                  {lot.status === "active" && (
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-apice-black/70">
                      <span className="size-1.5 rounded-full bg-apice-black animate-pulse" />
                      em curso
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-sm font-medium opacity-60">R$</span>
                  <span
                    className={cn(
                      "font-display text-6xl md:text-7xl leading-none",
                      lot.status === "closed" && "line-through decoration-2 decoration-apice-sweat/20"
                    )}
                  >
                    {lot.price}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-2 text-xs italic",
                    lot.status === "active" ? "text-apice-black/60" : "text-apice-sweat/50"
                  )}
                >
                  {lot.caption}
                </p>
              </div>

              <ul className="space-y-3 flex-1">
                {lot.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-2.5 text-sm leading-relaxed"
                  >
                    <Check
                      className={cn(
                        "size-4 mt-0.5 shrink-0",
                        lot.status === "active" && "text-apice-black",
                        lot.status === "upcoming" && "text-apice-orange",
                        lot.status === "closed" && "text-apice-sweat/30"
                      )}
                      aria-hidden="true"
                    />
                    <span className={cn(lot.status === "closed" && "line-through")}>
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                disabled={lot.status !== "active"}
                className={cn(
                  "mt-8 w-full rounded-full py-3.5 text-sm font-bold uppercase tracking-wide transition-all",
                  lot.status === "active" &&
                    "bg-apice-black text-apice-orange hover:bg-apice-black/90 hover:scale-[1.02] active:scale-[0.98] cursor-pointer",
                  lot.status === "closed" &&
                    "bg-white/5 text-apice-sweat/30 cursor-not-allowed",
                  lot.status === "upcoming" &&
                    "bg-white/5 border border-white/10 text-apice-sweat/60 cursor-not-allowed"
                )}
                aria-disabled={lot.status !== "active"}
              >
                {lot.status === "active" && "Inscrever agora"}
                {lot.status === "closed" && "Esgotado"}
                {lot.status === "upcoming" && "Em breve"}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-apice-sweat/40 max-w-xl mx-auto">
          Inscrições com cupom de embaixador (-20% no 2º lote): EMBAIXADOR20.
          Cancelamentos até 20/05/2026 com reembolso integral.
        </p>
      </div>
    </section>
  );
}
