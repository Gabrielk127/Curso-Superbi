"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  BookOpen,
  GraduationCap,
  PencilRuler,
  Coffee,
  ClipboardList,
  FileText,
  Presentation,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface CourseItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

// Lista de itens do curso (declarada no topo para evitar erros)
const courseItems: CourseItem[] = [
  {
    title: "Apostila completa",
    description: "Material atualizado e abrangente para seu aprendizado.",
    icon: <BookOpen className="w-10 h-10 text-white" />,
  },
  {
    title: "Certificado profissional",
    description: "Reconhecimento oficial da sua formação.",
    icon: <GraduationCap className="w-10 h-10 text-white" />,
  },
  {
    title: "Kit iniciante",
    description: "Todos os materiais essenciais para começar sua jornada.",
    icon: <PencilRuler className="w-10 h-10 text-white" />,
  },
  {
    title: "Coffee Break",
    description: "Momento de pausa e networking durante o curso.",
    icon: <Coffee className="w-10 h-10 text-white" />,
  },
  {
    title: "Aulas teóricas e práticas",
    description: "Experiência com atendimento real para aprendizado completo.",
    icon: <Presentation className="w-10 h-10 text-white" />,
  },
  {
    title: "Ficha de Anamnese",
    description: "Personalizada e editável para uso profissional.",
    icon: <ClipboardList className="w-10 h-10 text-white" />,
  },
  {
    title: "Treinos práticos",
    description: "Exercícios para casa com acompanhamento personalizado.",
    icon: <FileText className="w-10 h-10 text-white" />,
  },
];

const CardModules = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Verificar se estamos no modo mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== "undefined") {
      checkMobile();
      window.addEventListener("resize", checkMobile);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkMobile);
      }
    };
  }, []);

  // Autoplay para o carrossel
  useEffect(() => {
    if (!autoplay || !isMobile) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === courseItems.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, isMobile]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === courseItems.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? courseItems.length - 1 : prev - 1));
  };

  // Renderizar um card
  const renderCard = (item: CourseItem, index: number) => (
    <div
      key={index}
      className="glass-effect p-6 rounded-xl backdrop-filter backdrop-blur-sm border border-gray-800 transform hover:scale-105 transition-transform duration-300 w-full"
    >
      <div className="text-center mb-4 flex justify-center">{item.icon}</div>
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gradient text-center">
        {item.title}
      </h3>
      <p className="text-gray-400 text-sm sm:text-base text-center">
        {item.description}
      </p>
    </div>
  );

  // Calcular se o último item está sozinho na última linha
  const isLastItemAlone = courseItems.length % 3 === 1;

  // Calcular quantos itens fictícios precisamos adicionar para centralizar o último
  const getGridItems = () => {
    if (!isLastItemAlone || isMobile) {
      return courseItems.map((item, index) => (
        <div key={index}>{renderCard(item, index)}</div>
      ));
    }

    // Se o último item está sozinho, adicionamos um item invisível antes e depois
    return [
      ...courseItems
        .slice(0, courseItems.length - 1)
        .map((item, index) => <div key={index}>{renderCard(item, index)}</div>),
      // Item invisível para empurrar o último para o centro
      <div key="spacer-1" className="lg:block hidden"></div>,
      // O último item
      <div key={courseItems.length - 1}>
        {renderCard(
          courseItems[courseItems.length - 1],
          courseItems.length - 1
        )}
      </div>,
      // Item invisível para manter o último centralizado
      <div key="spacer-2" className="lg:block hidden"></div>,
    ];
  };

  return (
    <div className="relative py-16 sm:py-24 flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            O que está incluso no curso?
          </h2>
          <p className="text-xl text-gray-400">
            Tudo que você precisa para se tornar um profissional de sucesso
          </p>
        </div>

        {isMobile ? (
          <div className="relative w-full">
            <div className="px-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="w-full"
                >
                  {renderCard(courseItems[current], current)}
                </motion.div>
              </AnimatePresence>
            </div>
            <button
              onClick={prev}
              className="absolute left-[-15px] top-1/3 bg-zinc-800 p-2 rounded-full"
            >
              <ChevronLeft className="h-5 w-5 text-white " />
            </button>
            <button
              onClick={next}
              className="absolute right-[-15px] top-1/3 bg-zinc-800 p-2 rounded-full"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>

            <div className="flex justify-center mt-6 space-x-2 overflow-x-auto py-2">
              {courseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrent(index);
                  }}
                  className={`h-2 w-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                    current === index ? "bg-amber-500 w-6" : "bg-gray-500"
                  }`}
                  aria-label={`Go to item ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white ${
              isLastItemAlone ? "lg:grid-last-centered" : ""
            }`}
          >
            {getGridItems()}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardModules;
