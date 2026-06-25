"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Gustavo Ribeiro",
    role: "Cliente Google ⭐⭐⭐⭐⭐",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    text: "Excelente oficina! Levei meu carro com um problema que ninguém conseguia resolver e eles identificaram na hora com o diagnóstico eletrônico. Atendimento honesto, orçamento justo e serviço entregue antes do prazo. Recomendo demais!",
  },
  {
    name: "Patricia Oliveira",
    role: "Cliente Google ⭐⭐⭐⭐⭐",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
    text: "Melhor oficina que já fui! A equipe é super atenciosa e profissional. Me explicaram cada detalhe do que precisava ser feito antes de começar qualquer serviço. Transparência total! Já indiquei para toda minha família.",
  },
  {
    name: "Ricardo Nascimento",
    role: "Cliente Google ⭐⭐⭐⭐⭐",
    photo: "https://randomuser.me/api/portraits/men/67.jpg",
    stars: 5,
    text: "Fui indicado por um amigo e não me arrependi nem um pouco. Ótimo atendimento desde o primeiro contato pelo WhatsApp. Serviço de qualidade, prazo cumprido e com garantia. Com certeza voltarei sempre!",
  },
  {
    name: "Juliana Campos",
    role: "Cliente Google ⭐⭐⭐⭐⭐",
    photo: "https://randomuser.me/api/portraits/women/18.jpg",
    stars: 5,
    text: "Nunca imaginei encontrar uma oficina tão séria e organizada. Fui bem recebida, o ambiente é limpo e moderno, e o serviço foi impecável. A revisão ficou perfeita e o carro voltou como novo. Nota 10!",
  },
  {
    name: "Alexandre Ferreira",
    role: "Cliente Google ⭐⭐⭐⭐⭐",
    photo: "https://randomuser.me/api/portraits/men/51.jpg",
    stars: 5,
    text: "Profissionalismo de alto nível. Tive um problema sério no câmbio e a MJR resolveu tudo com eficiência, me mantendo informado em cada etapa. Peças de qualidade e mão de obra excelente. Recomendo sem hesitar!",
  },
  {
    name: "Mariana Costa",
    role: "Cliente Google ⭐⭐⭐⭐⭐",
    photo: "https://randomuser.me/api/portraits/women/62.jpg",
    stars: 5,
    text: "Atendimento diferenciado do início ao fim. O pessoal é muito capacitado e honesto — me disseram exatamente o que precisava, sem tentar vender serviço desnecessário. Isso é muito raro hoje em dia. Parabéns à equipe!",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const prev = () => {
    setAutoPlay(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setAutoPlay(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-24 section-dark-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            O que dizem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Depoimentos dos Clientes
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="relative bg-[#0B0B0B] rounded-3xl p-8 sm:p-10 border border-white/5"
            >
              <Quote
                className="absolute top-6 right-8 text-[#C9A84C]/20"
                size={60}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].stars }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-[#C9A84C] fill-[#C9A84C]"
                    />
                  )
                )}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C9A84C]/30">
                  <Image
                    src={testimonials[current].photo}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm text-[#C9A84C]">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoPlay(false); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-[#C9A84C]" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
