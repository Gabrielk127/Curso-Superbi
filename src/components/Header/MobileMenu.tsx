"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones de menu e X

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    }),
  };

  return (
    <div className="relative">
      {/* Header fixo com o ícone do menu */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-lg shadow-lg py-4 max-w-[1200px] rounded-3xl mt-4 mx-4 flex justify-between items-center px-6">
        <div className="text-white text-xl font-bold">Método Superbi</div>{" "}
        {/* Placeholder para o logo */}
        <button onClick={toggleMenu} className="z-50">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <FiX className="h-8 w-8 text-white" />
            ) : (
              <FiMenu className="h-10 w-10 text-white" />
            )}
          </motion.div>
        </button>
      </header>

      {/* Menu de navegação */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className=" fixed inset-x-0 z-40 flex flex-col items-center justify-start h-full bg-black bg-opacity-30 backdrop-blur-lg shadow-lg text-white py-16 px-8 mx-4 mt-20 rounded-3xl rounded-b-xl"
          >
            <motion.ul className="space-y-8 text-center">
              {["Início", "Sobre", "Conteúdo", "Técnicas", "FAQ"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    className="text-xl hover:text-pink-500 cursor-pointer transition duration-300"
                  >
                    {item}
                  </motion.li>
                )
              )}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
              className="mt-8"
            >
              <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300">
                Garanta seu Acesso
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
