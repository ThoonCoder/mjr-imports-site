"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP = "5511949690130";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#1a1200] to-[#0B0B0B]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A84C]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />
      </div>
      {/* Gold border top/bottom */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-[#C9A84C] text-sm font-medium">
              Atendimento disponível
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Seu veículo merece um{" "}
            <span className="text-gold-gradient">atendimento de excelência</span>
          </h2>

          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Agende agora pelo WhatsApp e experimente o padrão de qualidade que
            nossos clientes já conhecem. Orçamento rápido e sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`https://wa.me/${WHATSAPP}?text=Olá! Gostaria de solicitar um orçamento.`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-black gold-gradient shadow-2xl shadow-[#C9A84C]/30 text-lg"
            >
              <MessageCircle size={22} />
              Solicitar Orçamento pelo WhatsApp
            </motion.a>
            <motion.a
              href={`tel:+${WHATSAPP}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors text-lg"
            >
              <Phone size={20} />
              Ligar Agora
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
