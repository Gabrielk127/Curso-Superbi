"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../Button";

const CardTechniques = () => {
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
        Profissão
      </p>
      <h2 className="text-white text-3xl text-center lg:text-5xl font-bold pt-8">
        Domine os pilares da profissão
      </h2>

      <div className="text-white grid grid-cols-1 sm:grid-cols-2 gap-4 pt-16">
        {[
          {
            title: "Técnicas Profissionais",
            description: "Fio a Fio, Volume Brasileiro e Volume Intense.",
          },
          {
            title: "Atendimento de Alto Padrão",
            description: "Encante suas clientes e fidelize cada uma delas.",
          },
          {
            title: "Biossegurança",
            description:
              "Realize atendimentos seguros e com qualidade profissional.",
          },
          {
            title: "Retenção e Durabilidade",
            description:
              "Garanta resultados impecáveis e clientes satisfeitas.",
          },
        ].map((section, index) => (
          <div
            key={index}
            className="mb-8 bg-zinc-900 p-6 rounded-xl border border-gray-800"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gradient">
              {section.title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              {section.description}
            </p>
          </div>
        ))}
      </div>
      <Button />
    </motion.div>
  );
};

export default CardTechniques;
