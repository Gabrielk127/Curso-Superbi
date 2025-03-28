"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Check, Star, Award, Clock, Calendar, Users } from "lucide-react";

interface CourseCardProps {
  whatsappLink: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ whatsappLink }) => {
  const benefits = [
    "Apostila completa",
    "Certificado Profissional",
    "Kit Iniciante",
    "Aulas Teóricas e Práticas",
    "Treinos Práticos",
  ];

  const handleClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 mx-auto shadow-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-500 w-full max-w-3xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      id="curso"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl" />

      {/* Badge */}
      <div className="flex justify-center mb-6">
        <motion.div
          className="bg-gradient-to-r from-yellow-600 to-yellow-500 px-4 py-1.5 rounded-full flex items-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Award className="w-4 h-4 mr-2" />
          <span className="text-xs font-bold">
            PREÇO EXCLUSIVO DE LANÇAMENTO
          </span>
        </motion.div>
      </div>

      {/* Title */}
      <motion.div
        className="text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          Método{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text">
            Superbi
          </span>
        </h2>
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Transforme sua carreira com nosso método exclusivo
        </motion.p>
      </motion.div>

      {/* Course stats */}
      <motion.div
        className="grid grid-cols-3 gap-2 my-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800/50">
          <Clock className="h-5 w-5 text-yellow-400 mb-1" />
          <span className="text-xs text-gray-300 text-center text-nowrap">
            12 Semanas
          </span>
        </div>
        <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800/50">
          <Calendar className="h-5 w-5 text-yellow-400 mb-1" />
          <span className="text-xs text-gray-300 text-center text-nowrap">
            Acesso Vitalício
          </span>
        </div>
        <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800/50">
          <Users className="h-5 w-5 text-yellow-400 mb-1" />
          <span className="text-xs text-gray-300 text-center text-nowrap">
            Suporte 1:1
          </span>
        </div>
      </motion.div>

      {/* Price */}
      <motion.div
        className="bg-gray-800/50 rounded-2xl p-6 text-center my-8 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-yellow-500/20 rounded-full blur-2xl" />
        <p className="text-sm text-gray-400 mb-2">Investimento único</p>
        <div className="flex items-center justify-center">
          <span className="text-gray-400 line-through text-lg mr-3">
            R$ 599,99
          </span>
          <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text">
            R$ 349,99
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-2">ou 12x de R$ 32,99</p>

        <motion.div
          className="absolute -rotate-45 bg-yellow-500 text-xs font-bold text-black py-1 px-3 md:px-8 right-0 top-4"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ delay: 1, type: "spring" }}
        >
          42% OFF
        </motion.div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        className="bg-gray-800/30 rounded-2xl p-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="font-bold text-lg mb-4 flex items-center">
          <Star className="mr-2 text-yellow-400 h-5 w-5" />O que está incluso
        </h3>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              className="flex items-start text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.9 }}
            >
              <div className="bg-yellow-500/20 p-1 rounded-full mr-3 mt-0.5">
                <Check className="text-yellow-400 h-3 w-3" />
              </div>
              <span className="text-gray-300">{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.button
          onClick={handleClick}
          className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-bold py-4 px-6 rounded-full w-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 relative z-10"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Garantir minha vaga agora
        </motion.button>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full blur-xl opacity-30 -z-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      {/* Footer */}
      <p className="text-center text-gray-500 text-xs mt-6">
        Vagas limitadas • Oferta por tempo limitado
      </p>
    </motion.div>
  );
};

export default CourseCard;
