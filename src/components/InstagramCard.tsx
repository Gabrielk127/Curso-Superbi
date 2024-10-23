"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function InstagramCard() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex items-center justify-center p-4 min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden"
      >
        <motion.div className="p-8">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            className="w-24 h-24 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg"
          >
            <Instagram size={48} color="white" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center text-white mb-4"
          >
            Siga-nos no Instagram
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-300 mb-8"
          >
            Fique por dentro das últimas tendências de beleza e dicas
            exclusivas!
          </motion.p>
          <motion.a
            href="https://www.instagram.com/seuprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-full text-center transition duration-300 ease-in-out transform hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            @seuprofile
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
