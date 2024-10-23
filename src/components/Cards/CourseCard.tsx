"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface CourseCardProps {
  whatsappLink: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ whatsappLink }) => {
  const benefits = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt",
    "Ut labore et dolore magna aliqua",
    "Ut enim ad minim veniam",
  ];

  const handleClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 mx-auto shadow-lg hover:shadow-pink-500/20 transition-all duration-300 w-full max-w-[500px] overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.p
        className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center text-sm font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Preço exclusivo de Lançamento
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Método <span className="text-pink-500">Superbi</span>
      </motion.h2>
      <motion.p
        className="text-center text-3xl mt-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-5xl font-bold text-pink-500">R$ 349,99</span>{" "}
        <span className="text-xl">à vista</span>
      </motion.p>
      <motion.hr
        className="border-t border-gray-700 my-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
      <ul className="space-y-4">
        {benefits.map((benefit, index) => (
          <motion.li
            key={index}
            className="flex items-center text-sm md:text-base"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            <Star className="mr-3 text-pink-500 h-5 w-5" />
            {benefit}
          </motion.li>
        ))}
      </ul>
      <motion.button
        onClick={handleClick}
        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-4 px-6 rounded-full w-full mt-8 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Entre em contato
      </motion.button>
    </motion.div>
  );
};

export default CourseCard;
