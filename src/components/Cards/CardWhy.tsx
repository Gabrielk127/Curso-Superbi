"use client";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CardWhy = () => {
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
        Por que ser uma aluna?
      </p>
      <h2 className="text-white text-3xl text-center lg:text-5xl font-bold pt-8">
        Se destaque no mercado!
      </h2>
      <p className="text-gray-400 text-lg pt-6">
        Descubra como transformar sua carreira
      </p>
      <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-16 ">
        {[
          {
            title: "Técnicas Inovadoras",
            description:
              "Tenha acesso a métodos avançados que ainda estão em alta no Brasil.",
          },
          {
            title: "Impulsione",
            description:
              "Com um novo conjunto de estratégias, você atrairá mais clientes na sua região e verá seu faturamento disparar!",
          },
          {
            title: "Suporte",
            description:
              "Junte-se a uma rede de profissionais dispostos a compartilhar experiências e oferecer apoio contínuo.",
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

export default CardWhy;
