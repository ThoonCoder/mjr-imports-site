"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP = "5511949690130";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const tooltipTimer = setTimeout(() => {
      setVisible(true);
      setShowTooltip(true);
    }, 3000);
    const hideTooltip = setTimeout(() => setShowTooltip(false), 7000);
    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltip);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-4 shadow-2xl max-w-[220px] relative"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-white transition-colors"
                >
                  <X size={12} />
                </button>
                <p className="text-sm text-white font-medium mb-1">
                  Fale conosco! 👋
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Solicite um orçamento agora mesmo pelo WhatsApp.
                </p>
                {/* Arrow */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-[#1A1A1A] border-r border-b border-white/10 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={`https://wa.me/${WHATSAPP}?text=Olá! Vim pelo site e gostaria de um orçamento.`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-[#25D366]/40 relative"
          >
            <MessageCircle size={26} className="text-white fill-white" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
