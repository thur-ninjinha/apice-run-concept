"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-apice-orange" />

      <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute -top-20 -right-20 size-[400px] rounded-full bg-apice-black/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 size-[400px] rounded-full bg-apice-black/10 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-apice-black/60 font-bold mb-6">
            Falta pouco
          </p>
          <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-apice-black">
            Vai ficar
            <br />
            <span className="italic">de fora?</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg sm:text-xl text-apice-black/70 leading-relaxed">
            31 de maio · 05h · Ápice Academia. Você, seu amigo e 5 quilômetros
            de Avenida Roberto Freire. Duas medalhas no fim.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#inscricao"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-apice-black text-apice-orange font-bold text-base hover:bg-apice-black/90 transition-all uppercase tracking-wide hover:scale-[1.02] active:scale-[0.98]"
            >
              Garantir minha vaga
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://www.instagram.com/apicerunoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-apice-black/30 text-apice-black font-bold text-base hover:bg-apice-black/5 hover:border-apice-black/50 transition-all uppercase tracking-wide"
            >
              Falar com a organização
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
