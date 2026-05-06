"use client";

import { motion } from "motion/react";
import { Flag, Droplet, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const checkpoints = [
  {
    km: "0 KM",
    label: "Largada",
    place: "Ápice Academia · Capim Macio",
    Icon: Flag,
    accent: true,
  },
  {
    km: "1.5 KM",
    label: "1º apoio",
    place: "Av. Roberto Freire · sentido praia",
    Icon: Droplet,
  },
  {
    km: "3 KM",
    label: "Retorno",
    place: "Ponto de virada · curva do percurso",
    Icon: MapPin,
  },
  {
    km: "4 KM",
    label: "2º apoio",
    place: "Av. Roberto Freire · sentido academia",
    Icon: Droplet,
  },
  {
    km: "5 KM",
    label: "Chegada",
    place: "Ápice Academia · arena de premiação",
    Icon: Flag,
    accent: true,
  },
];

export function Route() {
  return (
    <section id="percurso" className="relative py-24 md:py-32 border-t border-white/5 bg-apice-asphalt overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,_rgba(242,111,44,0.15),_transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          index="02"
          title={
            <>
              5 quilômetros <br />
              <span className="italic text-apice-orange">pela Roberto Freire</span>.
            </>
          }
          description="Largada e chegada na Ápice Academia, percurso fechado pela orla de Natal. Ida e volta com 2 pontos de hidratação."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-apice-black to-apice-asphalt overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />

            <svg
              viewBox="0 0 400 300"
              className="absolute inset-0 w-full h-full p-6"
              role="img"
              aria-label="Mapa esquemático do percurso de 5 km"
            >
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f26f2c" />
                  <stop offset="100%" stopColor="#ff8c4d" />
                </linearGradient>
                <radialGradient id="runnerGlow">
                  <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                  <stop offset="60%" stopColor="#f26f2c" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f26f2c" stopOpacity="0" />
                </radialGradient>
              </defs>

              <motion.path
                id="routePath"
                d="M 60 220 Q 120 180 160 200 T 280 140 Q 320 120 340 80"
                stroke="url(#routeGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="6 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M 340 80 Q 320 120 280 140 T 160 200 Q 120 180 60 220"
                stroke="rgba(242,111,44,0.4)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
              />

              <g>
                <circle r="14" fill="url(#runnerGlow)">
                  <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#routePath" />
                  </animateMotion>
                </circle>
                <circle r="4" fill="#fff">
                  <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#routePath" />
                  </animateMotion>
                </circle>
              </g>

              <motion.circle
                cx="60"
                cy="220"
                r="14"
                fill="#f26f2c"
                fillOpacity="0.3"
                initial={{ scale: 0 }}
                whileInView={{ scale: [1, 1.6, 1] }}
                viewport={{ once: false }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                cx="60"
                cy="220"
                r="8"
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
                fillOpacity="0.3"
                initial={{ scale: 0 }}
                whileInView={{ scale: [1, 1.6, 1] }}
                viewport={{ once: false }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.circle
                cx="340"
                cy="80"
                r="8"
                fill="#f26f2c"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: 1.5 }}
              />
            </svg>
          </motion.div>

          <ol className="lg:col-span-5 space-y-3 relative">
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-apice-orange via-apice-orange/40 to-transparent" />
            {checkpoints.map(({ km, label, place, Icon, accent }, i) => (
              <motion.li
                key={`${km}-${label}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex gap-4 items-start pl-1"
              >
                <div
                  className={
                    "relative z-10 shrink-0 size-10 rounded-full flex items-center justify-center border " +
                    (accent
                      ? "bg-apice-orange border-apice-orange text-apice-black"
                      : "bg-apice-asphalt border-white/15 text-apice-sweat")
                  }
                >
                  <Icon className="size-4" aria-hidden="true" />
                </div>
                <div className="flex-1 pb-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl text-apice-white">{km}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-apice-orange">
                      {label}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-apice-sweat/60">{place}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
