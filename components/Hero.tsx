"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText, CheckCircle } from "lucide-react";
import Image from "next/image";

const WHATSAPP = "5511949690130";

const badges = [
  "Mais de 15 anos de experiência",
  "Atendimento especializado",
  "Equipamentos de última geração",
  "Garantia nos serviços",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Oficina MJR Imports"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 overlay-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/90 via-[#0B0B0B]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-wide">
              Oficina de Alto Padrão
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Cuidamos do seu
            <span className="text-gold-gradient block">
              veículo com excelência
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            Diagnóstico avançado, manutenção preventiva e corretiva para todos
            os tipos de veículos. Para quem exige qualidade, transparência e
            resultado.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href={`https://wa.me/${WHATSAPP}?text=Olá! Gostaria de solicitar um orçamento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base text-black gold-gradient hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-xl shadow-[#C9A84C]/30 animate-pulse-gold"
            >
              <FileText size={18} />
              Solicitar Orçamento
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base text-white border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all duration-200"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {badges.map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 text-sm text-gray-300"
              >
                <CheckCircle size={16} className="text-[#C9A84C] shrink-0" />
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 tracking-widest uppercase">
          Role para baixo
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#C9A84C] to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
