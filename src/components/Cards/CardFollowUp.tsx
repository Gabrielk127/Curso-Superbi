"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../Button";

const CardFollowUp = () => {
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
      className=" px-6 sm:px-12 py-16 sm:py-24 flex flex-col items-center justify-center rounded-3xl"
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <p className="text-white glass-bg p-2 font-bold text-sm sm:text-base md:text-lg lg:text-xl">
        Muito mais que um curso
      </p>
      <h2 className="text-white text-2xl sm:text-3xl text-center lg:text-5xl font-bold pt-8">
        Um acompanhamento completo
      </h2>

      <div className="text-white grid grid-cols-1 sm:grid-cols-2 gap-6 pt-16">
        <div className="glass-effect p-6 rounded-xl backdrop-filter backdrop-blur-sm border border-gray-800">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gradient">
            Destaques
          </h3>
          <ul className="text-gray-300 text-sm sm:text-base space-y-2">
            <li>• Suporte por 6 meses para esclarecimento de dúvidas</li>
            <li>• Acompanhamento profissional personalizado</li>
            <li>• Certificado e kit completo para iniciar imediatamente</li>
            <li>• Aulas teóricas e práticas com modelos reais</li>
          </ul>
        </div>
        <div className="glass-effect p-6 rounded-xl backdrop-filter backdrop-blur-sm border border-gray-800">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gradient">
            Bônus exclusivos
          </h3>
          <ul className="text-gray-300 text-sm sm:text-base space-y-2">
            <li>• Aula de Gestão Financeira para o seu Studio</li>
            <li>• Materiais editáveis no Canva para redes sociais</li>
            <li>
              • Primeiro atendimento supervisionado no Studio Fernanda Superbi
              Beauty
            </li>
          </ul>
        </div>
      </div>
      <Button />
    </motion.div>
  );
};

export default CardFollowUp;
