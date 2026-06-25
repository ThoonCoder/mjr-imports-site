"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Car,
  Scan,
  ClipboardCheck,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Agende pelo WhatsApp",
    desc: "Entre em contato e escolha o melhor horário para você.",
  },
  {
    icon: Car,
    title: "Leve seu Veículo",
    desc: "Traga seu carro na data agendada e nós cuidamos do resto.",
  },
  {
    icon: Scan,
    title: "Diagnóstico",
    desc: "Realizamos uma análise completa com equipamentos de última geração.",
  },
  {
    icon: ClipboardCheck,
    title: "Aprovação do Orçamento",
    desc: "Apresentamos o orçamento detalhado e só executamos com sua aprovação.",
  },
  {
    icon: Wrench,
    title: "Execução do Serviço",
    desc: "Serviço executado com qualidade e dentro do prazo acordado.",
  },
  {
    icon: CheckCircle2,
    title: "Entrega do Veículo",
    desc: "Entregamos seu veículo revisado, com laudo e garantia do serviço.",
  },
];

export default function Process() {
  return (
    <section className="py-24 section-dark relative overflow-hidden">
      {/* bg deco */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A84C]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            Como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Processo de Atendimento
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Do agendamento à entrega, cada etapa é planejada para garantir a
            melhor experiência para você.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (i + 1) % 3 !== 0 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%_-_12px)] w-[calc(100%_-_24px)] h-px bg-gradient-to-r from-[#C9A84C]/30 to-transparent z-10" />
                )}

                <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-white/5 group-hover:border-[#C9A84C]/20 transition-all duration-300 card-hover h-full">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-black font-bold text-sm shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="h-px flex-1 bg-[#C9A84C]/20" />
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-4 group-hover:bg-[#C9A84C]/20 transition-colors">
                    <Icon size={22} className="text-[#C9A84C]" />
                  </div>

                  <h3 className="font-bold text-white mb-2 group-hover:text-[#C9A84C] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
