"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O que é React?",
    answer:
      "React é uma biblioteca JavaScript para construir interfaces de usuário. É mantida pelo Facebook e uma comunidade de desenvolvedores individuais e empresas.",
  },
  {
    question: "O que é Framer Motion?",
    answer:
      "Framer Motion é uma biblioteca de animação para React que torna fácil criar animações complexas e interativas com uma API simples e poderosa.",
  },
  {
    question: "O que é Tailwind CSS?",
    answer:
      "Tailwind CSS é um framework CSS utilitário que permite você construir designs personalizados rapidamente, sem sair do seu HTML.",
  },
  {
    question: "Como posso começar com desenvolvimento web?",
    answer:
      "Comece aprendendo HTML, CSS e JavaScript. Em seguida, escolha um framework como React, Vue ou Angular para aprofundar seus conhecimentos em desenvolvimento web moderno.",
  },
];

export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Perguntas Frequentes
      </h2>
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="glass-bg overflow-hidden"
          initial={false}
        >
          <motion.button
            className="flex justify-between items-center w-full p-4 text-left glass-bg-faq"
            onClick={() => toggleExpand(index)}
          >
            <span className="font-medium text-white">{faq.question}</span>
            <motion.span
              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-200" />
            </motion.span>
          </motion.button>
          <AnimatePresence initial={false}>
            {expandedIndex === index && (
              <motion.div
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                variants={{
                  expanded: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="p-4 transparent">
                  <p className="text-gray-200">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
