"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Droplets,
  Cpu,
  Settings2,
  Circle,
  Zap,
  Cog,
  Wind,
  Bolt,
  Code2,
  ShieldCheck,
  Car,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Revisão Completa",
    desc: "Revisão geral do seu veículo com checklist completo e laudo detalhado.",
  },
  {
    icon: Droplets,
    title: "Troca de Óleo",
    desc: "Troca com óleos de alta qualidade adequados para cada tipo de motor.",
  },
  {
    icon: Cpu,
    title: "Diagnóstico Eletrônico",
    desc: "Scanner automotivo de última geração para identificar qualquer falha.",
  },
  {
    icon: Settings2,
    title: "Suspensão",
    desc: "Alinhamento, balanceamento e revisão completa da suspensão.",
  },
  {
    icon: Circle,
    title: "Freios",
    desc: "Revisão e substituição de pastilhas, discos e fluido de freio.",
  },
  {
    icon: Zap,
    title: "Injeção Eletrônica",
    desc: "Limpeza, calibração e manutenção do sistema de injeção.",
  },
  {
    icon: Cog,
    title: "Motor",
    desc: "Reparo e revisão de motores com peças originais ou de qualidade equivalente.",
  },
  {
    icon: Settings2,
    title: "Câmbio",
    desc: "Manutenção e reparo de câmbios automáticos, CVT e manuais.",
  },
  {
    icon: Wind,
    title: "Ar Condicionado",
    desc: "Recarga, higienização e manutenção completa do sistema de A/C.",
  },
  {
    icon: Bolt,
    title: "Elétrica",
    desc: "Diagnóstico e reparo de toda a parte elétrica do veículo.",
  },
  {
    icon: Code2,
    title: "Programação e Codificação",
    desc: "Programação de módulos, chaves e atualizações de software.",
  },
  {
    icon: ShieldCheck,
    title: "Manutenção Preventiva",
    desc: "Plano de manutenção preventiva para evitar problemas futuros.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 section-dark-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Oferecemos uma gama completa de serviços automotivos com
            profissionais treinados e equipamentos de última geração.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative p-6 rounded-2xl bg-[#0B0B0B] border border-white/5 card-hover cursor-default overflow-hidden"
              >
                {/* Gold accent corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#C9A84C]/5 rounded-bl-[100%] group-hover:bg-[#C9A84C]/10 transition-colors" />

                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-4 group-hover:bg-[#C9A84C]/20 transition-colors">
                  <Icon
                    size={22}
                    className="text-[#C9A84C] group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-[#C9A84C] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={`https://wa.me/5511949690130?text=Olá! Gostaria de saber mais sobre os serviços.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black gold-gradient hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-[#C9A84C]/20"
          >
            <Car size={18} />
            Ver todos os serviços
          </a>
        </motion.div>
      </div>
    </section>
  );
}
