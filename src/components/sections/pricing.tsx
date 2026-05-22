"use client";

import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { Countdown } from "@/components/ui/countdown";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLiteMotion } from "@/lib/use-lite-motion";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const SPOTS_TOTAL = 300;
const SPOTS_FILLED = 213;
const SPOT_SEGMENTS = 15;

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
  const lite = useLiteMotion();
  const priceMv = useMotionValue(0);
  const priceText = useTransform(priceMv, (v) => Math.round(v).toString());
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;
    if (lite) {
      priceMv.set(active.price);
      return;
    }
    const controls = animate(priceMv, active.price, { duration: 1.1, ease: EASE });
    return () => controls.stop();
  }, [hasAnimated, lite, active.price, priceMv]);

  const filledSegments = Math.round((SPOTS_FILLED / SPOTS_TOTAL) * SPOT_SEGMENTS);

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
            onViewportEnter={() => setHasAnimated(true)}
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
              <span
                className="font-display text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] leading-[0.85] text-apice-white tabular-nums tracking-tight"
                aria-label={`R$ ${active.price}`}
              >
                <motion.span aria-hidden="true">{priceText}</motion.span>
              </span>
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-apice-sweat/55">
              {active.note}
            </p>

            <a
              href="#inscricao"
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

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              transition={{ staggerChildren: 0.04, delayChildren: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
              aria-label={`${SPOTS_FILLED} de ${SPOTS_TOTAL} vagas preenchidas`}
            >
              <div className="flex items-center gap-[3px]" aria-hidden="true">
                {Array.from({ length: SPOT_SEGMENTS }).map((_, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { scaleY: 0, opacity: 0 },
                      visible: { scaleY: 1, opacity: 1 },
                    }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className={cn(
                      "block h-3.5 w-1.5 origin-bottom rounded-[1px]",
                      i < filledSegments ? "bg-apice-orange" : "bg-apice-sweat/15",
                    )}
                  />
                ))}
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-apice-sweat/55">
                <span className="text-apice-white tabular-nums">{SPOTS_FILLED}</span>
                <span className="text-apice-sweat/40"> / {SPOTS_TOTAL} vagas preenchidas</span>
              </span>
            </motion.div>
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

            <div className="mt-14 border-t border-white/10 pt-6 space-y-1">
              {lots.map((lot) => {
                const isActive = lot.status === "active";
                return (
                  <div
                    key={lot.name}
                    className={cn(
                      "grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 py-3 px-3 -mx-3 rounded-r transition-colors",
                      isActive
                        ? "bg-apice-orange/[0.04] border-l-2 border-apice-orange text-apice-white"
                        : "border-l-2 border-transparent text-apice-sweat/40",
                    )}
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
                      {lot.name}
                    </span>
                    <motion.span
                      animate={isActive && !lite ? { opacity: [0.7, 1, 0.7] } : undefined}
                      transition={isActive && !lite ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : undefined}
                      className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.18em] truncate",
                        isActive ? "text-apice-orange" : "text-apice-sweat/30",
                      )}
                    >
                      {lot.note}
                    </motion.span>
                    <span
                      className={cn(
                        "font-display text-lg md:text-xl tabular-nums",
                        lot.status === "closed" && "line-through decoration-apice-sweat/30",
                      )}
                    >
                      R$ {lot.price}
                    </span>
                  </div>
                );
              })}
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
