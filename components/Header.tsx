"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP = "5511949690130";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B0B0B]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={() => handleNav("#inicio")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
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
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-gray-300 hover:text-[#C9A84C] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Instagram + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/oficinamjrimports/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram MJR Imports"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Olá! Gostaria de agendar um serviço.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-black gold-gradient hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-[#C9A84C]/20"
            >
              <Phone size={15} />
              Agendar pelo WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0B0B0B]/98 backdrop-blur-md border-t border-white/5">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-base font-medium text-gray-300 hover:text-[#C9A84C] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP}?text=Olá! Gostaria de agendar um serviço.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-black gold-gradient mt-2"
            >
              <Phone size={15} />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
