"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const images = [
  {
    // mechanic with obd scanner diagnostic tool
    src: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?q=80&w=1260&auto=format&fit=crop",
    label: "Diagnóstico Eletrônico",
  },
  {
    // mechanic working on car engine
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1260&auto=format&fit=crop",
    label: "Revisão de Motor",
  },
  {
    // mechanic changing tire / wheel work
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1260&auto=format&fit=crop",
    label: "Pneus e Suspensão",
  },
  {
    // interior of professional auto workshop
    src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=1260&auto=format&fit=crop",
    label: "Oficina Especializada",
  },
  {
    // car being serviced / lifted on ramp
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1260&auto=format&fit=crop",
    label: "Veículos Atendidos",
  },
  {
    // group of auto mechanics working together
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1260&auto=format&fit=crop",
    label: "Equipe Especializada",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const prev = () =>
    setSelected((s) => (s !== null ? (s - 1 + images.length) % images.length : 0));
  const next = () =>
    setSelected((s) => (s !== null ? (s + 1) % images.length : 0));

  return (
    <section className="py-24 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Conheça um pouco do nosso dia a dia e dos serviços que realizamos
            com dedicação.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(i)}
              className="relative h-56 rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="text-white mb-2" size={28} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white text-sm font-medium">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 sm:left-8 text-white/60 hover:text-white transition-colors"
            >
              <ChevronLeft size={40} />
            </button>
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[60vh] rounded-2xl overflow-hidden"
            >
              <Image
                src={images[selected].src}
                alt={images[selected].label}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/60 rounded-full">
                <span className="text-white text-sm font-medium">
                  {images[selected].label}
                </span>
              </div>
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 sm:right-8 text-white/60 hover:text-white transition-colors"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
