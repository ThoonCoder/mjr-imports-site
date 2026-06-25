"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Heart } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Missão",
    desc: "Oferecer serviços automotivos de excelência, garantindo a segurança, confiança e satisfação de cada cliente.",
  },
  {
    icon: Eye,
    title: "Visão",
    desc: "Ser referência em manutenção automotiva na região, reconhecida pela qualidade técnica e atendimento diferenciado.",
  },
  {
    icon: Heart,
    title: "Valores",
    desc: "Honestidade, transparência, compromisso com a qualidade e respeito ao cliente em cada serviço realizado.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 section-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=1260&auto=format&fit=crop"
                alt="Equipe MJR Imports"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-[#1A1A1A] border border-[#C9A84C]/30 rounded-2xl p-5 shadow-2xl"
            >
              <div className="text-3xl font-bold text-gold-gradient">15+</div>
              <div className="text-sm text-gray-400 font-medium mt-1">
                Anos de Tradição
              </div>
              <div className="text-xs text-[#C9A84C] mt-1">e experiência</div>
            </motion.div>

            {/* Gold accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#C9A84C]/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
              Quem somos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6">
              Mais de 15 anos cuidando{" "}
              <span className="text-gold-gradient">do seu veículo</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              A MJR Imports nasceu da paixão por automóveis e do compromisso com
              a excelência. Ao longo de mais de 15 anos, construímos uma
              reputação sólida baseada em transparência, qualidade técnica e
              respeito pelo cliente.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Nossa equipe é formada por profissionais altamente capacitados,
              com treinamentos constantes e acesso às melhores ferramentas de
              diagnóstico do mercado. Atendemos todos os tipos de veículos com o
              mesmo nível de dedicação e cuidado.
            </p>

            {/* Pillars */}
            <div className="space-y-4">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-4 p-4 rounded-xl bg-[#1A1A1A] border border-white/5 hover:border-[#C9A84C]/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        {p.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
