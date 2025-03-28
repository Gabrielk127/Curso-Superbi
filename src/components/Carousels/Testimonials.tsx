"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const depoimentos = [
  {
    nome: "Maria Silva",
    texto:
      "Este curso mudou minha vida! Aprendi habilidades que me ajudaram a conseguir meu emprego dos sonhos.",
  },
  {
    nome: "Ana Oliveira",
    texto:
      "A qualidade do conteúdo e o suporte da equipe são excepcionais. Recomendo a todos!",
  },
  {
    nome: "Carla Santos",
    texto:
      "Incrível como o curso é prático e alinhado com as demandas do mercado. Valeu cada centavo!",
  },
  {
    nome: "Juliana Mendes",
    texto:
      "Os instrutores são incríveis e o material didático é de alta qualidade. Superou todas as minhas expectativas!",
  },
  {
    nome: "Fernanda Lima",
    texto:
      "Graças a este curso, consegui fazer uma transição de carreira bem-sucedida. Sou muito grata pela oportunidade!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % depoimentos.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + depoimentos.length) % depoimentos.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-avança a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white text-center mb-8">
        O que nossas alunas dizem
      </h2>
      <div className="relative max-w-5xl mx-auto px-8">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="glass-effect rounded-lg p-8 h-full flex flex-col justify-between">
                  <div>
                    <Quote className="text-[#ffec8b] mb-4" size={24} />
                    <p className="text-gray-300 text-lg mb-4">
                      {depoimento.texto}
                    </p>
                  </div>
                  <p className="text-gradient font-semibold text-right">
                    {depoimento.nome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-zinc-800 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-300 -ml-4"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-zinc-800 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-300 -mr-4"
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
