"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../Button";

const CardWhy = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
        Por que escolher o Método Superbi?
      </p>
      <h2 className="text-white text-3xl text-center lg:text-5xl font-bold pt-8">
        Se destaque no mercado!
      </h2>
      <p className="text-gray-400 text-lg text-center pt-6">
        Mais que um curso, o Método Superbi é o caminho para se tornar uma
        profissional de sucesso em extensão de cílios. Um treinamento completo
        que une técnica, atendimento e empreendedorismo para você alcançar o
        sucesso no mercado da beleza.
      </p>
      <Button />
    </motion.div>
  );
};

export default CardWhy;
