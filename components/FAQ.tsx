"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Vocês atendem todos os tipos de veículos?",
    a: "Sim! Atendemos todos os tipos de veículos, independente da marca, modelo ou ano. Nossa equipe é treinada para trabalhar com carros nacionais e importados.",
  },
  {
    q: "Como faço para agendar um serviço?",
    a: "O agendamento é feito pelo WhatsApp de forma rápida e prática. É só nos enviar uma mensagem que nosso time te atenderá e encontrará o melhor horário para você.",
  },
  {
    q: "Os serviços possuem garantia?",
    a: "Sim! Todos os serviços realizados na MJR Imports têm garantia. Ao retirar seu veículo, você recebe um laudo completo com os serviços executados e o prazo de garantia.",
  },
  {
    q: "Posso aprovar o orçamento antes do serviço ser feito?",
    a: "Sempre! Nossa política é de total transparência: nenhum serviço é iniciado sem antes apresentarmos o orçamento detalhado e obtermos sua aprovação.",
  },
  {
    q: "Vocês usam peças originais?",
    a: "Trabalhamos com peças originais ou de qualidade equivalente certificada. Sempre informamos ao cliente qual tipo de peça será utilizada antes de qualquer serviço.",
  },
  {
    q: "Qual o prazo médio para realização dos serviços?",
    a: "O prazo varia conforme o tipo e complexidade do serviço. Após o diagnóstico e aprovação do orçamento, informamos o prazo estimado e fazemos o possível para cumpri-lo ou superá-lo.",
  },
  {
    q: "Vocês realizam diagnóstico eletrônico?",
    a: "Sim! Contamos com equipamentos de diagnóstico eletrônico de última geração, compatíveis com praticamente todas as marcas e modelos do mercado.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 section-dark-2">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400">
            Respondemos as dúvidas mais comuns dos nossos clientes.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-[#0B0B0B] border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <span
                  className={`font-medium text-sm sm:text-base transition-colors ${
                    open === i ? "text-[#C9A84C]" : "text-white group-hover:text-[#C9A84C]"
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all ${
                    open === i
                      ? "bg-[#C9A84C] text-black"
                      : "bg-white/5 text-gray-400 group-hover:bg-[#C9A84C]/20 group-hover:text-[#C9A84C]"
                  }`}
                >
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
