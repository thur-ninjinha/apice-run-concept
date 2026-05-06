"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLiteMotion } from "@/lib/use-lite-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const checkpoints = [
  {
    km: "0 KM",
    label: "Largada",
    place: "Ápice Academia · Capim Macio",
    accent: true,
  },
  {
    km: "1.5 KM",
    label: "1º apoio",
    place: "Av. Roberto Freire · sentido praia",
  },
  {
    km: "3 KM",
    label: "Retorno",
    place: "Ponto de virada",
  },
  {
    km: "4 KM",
    label: "2º apoio",
    place: "Av. Roberto Freire · sentido academia",
  },
  {
    km: "5 KM",
    label: "Chegada",
    place: "Ápice Academia · arena de premiação",
    accent: true,
  },
];

export function Route() {
  const lite = useLiteMotion();

  return (
    <section
      id="percurso"
      className="relative py-32 md:py-48 border-t border-white/5 bg-apice-asphalt overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          index="03"
          label="O percurso"
          title={
            <>
              Largada e chegada <br />
              <span className="text-apice-orange">no mesmo lugar.</span>
            </>
          }
          description="Cinco quilômetros pela orla de Natal. Ida e volta, dois pontos de hidratação, estrutura do começo ao fim."
        />

        <div className="mt-20 md:mt-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="lg:col-span-7 relative aspect-[4/3] rounded-md border border-white/10 bg-apice-black overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />

            <svg
              viewBox="0 0 400 300"
              className="absolute inset-0 w-full h-full p-8"
              role="img"
              aria-label="Mapa esquemático do percurso de 5 km"
            >
              <defs>
                <linearGradient
                  id="routeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f26f2c" />
                  <stop offset="100%" stopColor="#ff8c4d" />
                </linearGradient>
                <radialGradient id="runnerGlow">
                  <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                  <stop offset="60%" stopColor="#f26f2c" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f26f2c" stopOpacity="0" />
                </radialGradient>
                <filter
                  id="routeShadow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
                </filter>
              </defs>

              <path
                id="runnerPath"
                d="M 60 220 Q 120 180 160 200 T 280 140 Q 320 120 340 80"
                fill="none"
                stroke="none"
              />

              <motion.path
                d="M 60 220 Q 120 180 160 200 T 280 140 Q 320 120 340 80"
                stroke="#f26f2c"
                strokeOpacity="0.4"
                strokeWidth="9"
                fill="none"
                strokeLinecap="round"
                filter="url(#routeShadow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M 60 220 Q 120 180 160 200 T 280 140 Q 320 120 340 80"
                stroke="url(#routeGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />

              {!lite && (
                <g>
                  <circle r="12" fill="url(#runnerGlow)">
                    <animateMotion
                      dur="9s"
                      repeatCount="indefinite"
                      begin="2.5s"
                    >
                      <mpath href="#runnerPath" />
                    </animateMotion>
                  </circle>
                  <circle r="3.5" fill="#fff">
                    <animateMotion
                      dur="9s"
                      repeatCount="indefinite"
                      begin="2.5s"
                    >
                      <mpath href="#runnerPath" />
                    </animateMotion>
                  </circle>
                </g>
              )}

              <motion.circle
                cx="60"
                cy="220"
                r="14"
                fill="#f26f2c"
                fillOpacity="0.18"
                initial={{ scale: 0 }}
                whileInView={lite ? { scale: 1 } : { scale: [1, 1.5, 1] }}
                viewport={
                  lite ? { once: true, margin: "-10%" } : { once: false }
                }
                transition={
                  lite
                    ? { duration: 0.5, ease: EASE }
                    : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }
              />
              <motion.circle
                cx="60"
                cy="220"
                r="6"
                fill="#f26f2c"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />

              <motion.circle
                cx="340"
                cy="80"
                r="14"
                fill="#f26f2c"
                fillOpacity="0.18"
                initial={{ scale: 0 }}
                whileInView={lite ? { scale: 1 } : { scale: [1, 1.5, 1] }}
                viewport={
                  lite ? { once: true, margin: "-10%" } : { once: false }
                }
                transition={
                  lite
                    ? { duration: 0.5, delay: 0.3, ease: EASE }
                    : {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.2,
                      }
                }
              />
              <motion.circle
                cx="340"
                cy="80"
                r="6"
                fill="#f26f2c"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: 1.5 }}
              />

              <text
                x="60"
                y="252"
                textAnchor="middle"
                fill="#e8e1d5"
                fillOpacity="0.55"
                className="font-mono"
                fontSize="9"
                letterSpacing="2.5"
              >
                START
              </text>
              <text
                x="340"
                y="58"
                textAnchor="middle"
                fill="#e8e1d5"
                fillOpacity="0.55"
                className="font-mono"
                fontSize="9"
                letterSpacing="2.5"
              >
                FINISH
              </text>
            </svg>
          </motion.div>

          <ol className="lg:col-span-5 space-y-0">
            {checkpoints.map(({ km, label, place, accent }, i) => (
              <motion.li
                key={`${km}-${label}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: EASE,
                }}
                className="grid grid-cols-[auto_1fr] gap-5 items-baseline border-b border-white/10 py-5 last:border-b-0"
              >
                <span
                  className={
                    "font-mono text-[11px] uppercase tracking-[0.22em] " +
                    (accent ? "text-apice-orange" : "text-apice-sweat/40")
                  }
                >
                  0{i + 1}
                </span>
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-2xl md:text-3xl text-apice-white tracking-tight leading-none">
                      {km}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-apice-sweat/55">
                      {label}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-apice-sweat/55 leading-relaxed">
                    {place}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
