"use client";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CardModules = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="glass-effect px-12 py-24 flex flex-col items-center justify-center rounded-3xl"
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"} // Somente animações no cliente
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <p className="text-white glass-bg p-2 font-bold text-sm sm:text-base md:text-lg lg:text-xl">
        Módulos
      </p>
      <h2 className="text-white text-3xl text-center lg:text-5xl font-bold pt-8">
        Conteúdo do Curso
      </h2>

      <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-16">
        {[
          {
            title: "introdução",
            description:
              "de início você será introduzida ao curso e terá todas as orientações necessárias para a realização das aulas até a conclusão do curso",
          },
          {
            title: "materiais utilizados",
            description:
              "você também irá saber todos os materiais que foram utilizados durante a aula, desde os tipos de fios até as pinças e colas",
          },
          {
            title: "teorias e conceitos",
            description:
              "você aprenderá todos os conceitos e dicas, de topline e wispy até visagismo e curvaturas",
          },
          {
            title: "mapeamentos",
            description:
              "todos os mapeamentos das técnicas serão explicados e todas as dicas pra cada técnica serão passadas a você",
          },
          {
            title: "aulas práticas",
            description:
              "você também poderá acompanhar as aulas práticas sem cortes, podendo assistir na íntegra a aplicação das técnicas em modelos reais",
          },
          {
            title: "aulas bônus",
            description:
              "além de aulas teóricas e práticas, você também terá acesso a conteúdo bônus como dicas de edição de vídeo e fotos",
          },
        ].map((section, index) => (
          <div
            key={index}
            className="mb-8 glass-effect p-6 rounded-xl backdrop-filter backdrop-blur-sm border border-gray-800"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-pink-500">
              {section.title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              {section.description}
            </p>
          </div>
        ))}
      </div>
      <motion.button
        className="mt-16 py-4 px-8 text-xl bg-pink-500 flex flex-row gap-4 rounded-3xl items-center"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Garanta seu acesso! <IoIosArrowDown size={32} />
      </motion.button>
    </motion.div>
  );
};

export default CardModules;
