"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function InstagramCard() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="glass-bg rounded-3xl shadow-2xl overflow-hidden w-full"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="p-8"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-20 h-20 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto"
          >
            <Instagram size={40} color="white" />
          </motion.div>
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Siga-nos no Instagram
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Fique por dentro das últimas tendências de beleza e dicas
            exclusivas!
          </p>
          <motion.a
            href="https://www.instagram.com/seuprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full text-center transition duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            @seuprofile
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
