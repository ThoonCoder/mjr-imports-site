"use client";

import { motion } from "framer-motion";
import {
  Award,
  Scan,
  Package,
  ShieldCheck,
  Eye,
  Users,
} from "lucide-react";

const diffs = [
  {
    icon: Award,
    title: "Equipe Especializada",
    desc: "Profissionais certificados com anos de experiência em diversas marcas e modelos.",
  },
  {
    icon: Scan,
    title: "Diagnóstico Avançado",
    desc: "Equipamentos de diagnóstico eletrônico originais e de última geração.",
  },
  {
    icon: Package,
    title: "Peças de Qualidade",
    desc: "Trabalhamos apenas com peças originais ou de qualidade equivalente certificada.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de Serviço",
    desc: "Todos os serviços realizados possuem garantia e documentação completa.",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    desc: "Orçamento aprovado pelo cliente antes de qualquer serviço ser executado.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    desc: "Cada cliente recebe atenção individualizada e acompanhamento do serviço.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 section-dark-2 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C9A84C]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            O que nos torna a escolha certa para cuidar do seu veículo com
            segurança e qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diffs.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-7 rounded-2xl bg-[#0B0B0B] border border-white/5 hover:border-[#C9A84C]/30 transition-all duration-300 card-hover"
              >
                {/* Number */}
                <div className="absolute top-5 right-5 text-5xl font-bold text-white/3 group-hover:text-[#C9A84C]/8 transition-colors select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 flex items-center justify-center mb-5 group-hover:from-[#C9A84C]/30 group-hover:to-[#C9A84C]/10 transition-all">
                  <Icon size={26} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3 group-hover:text-[#C9A84C] transition-colors">
                  {d.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
