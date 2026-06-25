"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const WHATSAPP = "5511949690130";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const services = [
  "Revisão Completa",
  "Diagnóstico Eletrônico",
  "Troca de Óleo",
  "Suspensão e Freios",
  "Injeção Eletrônica",
  "Motor e Câmbio",
  "Ar Condicionado",
  "Elétrica Automotiva",
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contato" className="bg-[#0B0B0B] border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                <span className="text-black font-bold text-sm">MJR</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-lg tracking-wider">
                  MJR
                </span>
                <span className="text-[10px] text-[#C9A84C] tracking-[0.2em] uppercase font-medium">
                  Imports
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Especialistas em manutenção automotiva com qualidade, transparência
              e tecnologia de ponta para todos os tipos de veículos.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/oficinamjrimports/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-all"
                aria-label="Instagram MJR Imports"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-all"
                aria-label="WhatsApp MJR Imports"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">
              Menu
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-gray-500 hover:text-[#C9A84C] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-gray-500 hover:text-[#C9A84C] transition-colors cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-500">
                  Av. Engenheiro Heitor Antonio Eiras Garcia, 1157
                  <br />
                  São Paulo - SP, 05588-001
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-[#C9A84C] shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  className="text-sm text-gray-500 hover:text-[#C9A84C] transition-colors"
                >
                  (11) 94969-0130
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-[#C9A84C] shrink-0" />
                <a
                  href="mailto:contato@mjrimports.com.br"
                  className="text-sm text-gray-500 hover:text-[#C9A84C] transition-colors"
                >
                  contato@mjrimports.com.br
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <div className="text-sm text-gray-500">
                  <div>Seg–Sex: 08h às 18h</div>
                  <div>Sáb: 08h às 13h</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl overflow-hidden border border-white/5 h-56"
        >
          <iframe
            src="https://maps.google.com/maps?q=Av.+Engenheiro+Heitor+Antonio+Eiras+Garcia,+1157,+S%C3%A3o+Paulo,+SP,+05588-001&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização MJR Imports"
          />
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} MJR Imports. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-gray-600">
            Desenvolvido por{" "}
            <span className="text-[#C9A84C] font-semibold">GC</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
