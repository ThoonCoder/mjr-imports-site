"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "BMW", letter: "B" },
  { name: "Mercedes-Benz", letter: "★" },
  { name: "Audi", letter: "A" },
  { name: "Volkswagen", letter: "VW" },
  { name: "Toyota", letter: "T" },
  { name: "Honda", letter: "H" },
  { name: "Chevrolet", letter: "C" },
  { name: "Fiat", letter: "F" },
  { name: "Ford", letter: "F" },
  { name: "Hyundai", letter: "H" },
  { name: "Renault", letter: "R" },
  { name: "Porsche", letter: "P" },
  { name: "Jeep", letter: "J" },
  { name: "Land Rover", letter: "LR" },
  { name: "Volvo", letter: "V" },
  { name: "Mini Cooper", letter: "M" },
  { name: "Jaguar", letter: "J" },
  { name: "Nissan", letter: "N" },
];

export default function Brands() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-20 section-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            Atendemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Todas as Marcas
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Nossa equipe está preparada para atender veículos de qualquer marca
            e modelo com a mesma qualidade e cuidado.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Brands */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10" />

        <div className="flex overflow-hidden">
          <div className="brands-scroll flex gap-6 shrink-0">
            {doubled.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="shrink-0 flex flex-col items-center justify-center w-32 h-24 rounded-xl border border-white/8 bg-[#1A1A1A] hover:border-[#C9A84C]/40 hover:bg-[#1A1A1A]/80 transition-all duration-300 group cursor-default"
              >
                <span className="text-2xl font-bold text-[#C9A84C]/60 group-hover:text-[#C9A84C] transition-colors mb-1">
                  {brand.letter}
                </span>
                <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors font-medium text-center px-2 leading-tight">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
