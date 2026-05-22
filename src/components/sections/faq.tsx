"use client";

import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    q: "Posso correr sozinho ou tenho que estar em dupla?",
    a: "A Aurora Run é desenhada para duplas, mas a inscrição é individual. Você pode se inscrever sozinho e formar dupla com outro inscrito no dia. O importante é o espírito colaborativo do percurso.",
  },
  {
    q: "Idosos, PCDs e doadores de sangue têm desconto?",
    a: "Sim, 50% de desconto sobre o lote vigente. Envie a documentação comprobatória pelo e-mail informado no formulário de inscrição. A apresentação física do documento é exigida na retirada do kit.",
  },
  {
    q: "Qual a idade mínima para participar?",
    a: "16 anos completos no dia do evento, com autorização escrita do responsável legal para menores de 18. Crianças e adolescentes abaixo de 16 anos podem acompanhar nas atividades laterais, sem participar do percurso oficial.",
  },
  {
    q: "Posso cancelar minha inscrição?",
    a: "Cancelamentos com reembolso integral aceitos até 20/05/2026. Após essa data não há reembolso, mas você ainda pode retirar o kit (camisa + medalha) na semana do evento.",
  },
  {
    q: "Onde e quando retiro o kit?",
    a: "Retirada na Ápice Academia, R. Aldo de Melo Freire 1877, Capim Macio, entre 28 e 30 de maio das 9h às 19h. Apresentar documento de identidade. Retirada por terceiros mediante autorização assinada.",
  },
  {
    q: "Há serviço de guarda-volumes?",
    a: "Sim, gratuito, na Ápice Academia (largada e chegada). Recomendamos não levar objetos de valor — a organização não se responsabiliza por extravios.",
  },
];

export function Faq() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          index="05"
          title={
            <>
              Tirando suas <span className="italic text-apice-orange">dúvidas</span>.
            </>
          }
          description="Não achou o que procurava? Fale com a organização no Instagram @aurorarunoficial."
        />

        <div className="mt-12 max-w-3xl mx-auto divide-y divide-white/5 border-y border-white/5">
          {faqs.map((item, i) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.45,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group py-1"
            >
              <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:text-apice-orange transition-colors">
                <span className="text-base md:text-lg font-medium text-apice-white group-hover:text-apice-orange transition-colors">
                  {item.q}
                </span>
                <span className="shrink-0 size-8 rounded-full border border-white/10 flex items-center justify-center text-apice-sweat/60 group-hover:border-apice-orange group-hover:text-apice-orange transition-all">
                  <Plus className="size-4 transition-transform duration-300 group-open:rotate-45" />
                </span>
              </summary>
              <div className="pb-5 pr-12 text-sm md:text-base text-apice-sweat/60 leading-relaxed">
                {item.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
