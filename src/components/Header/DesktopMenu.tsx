"use client";
import { motion } from "framer-motion";

const DesktopMenu = () => {
  const menuItems = ["Início", "Sobre", "Conteúdo", "Técnicas", "FAQ"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-lg shadow-lg py-4 max-w-[1200px] rounded-3xl mx-auto mt-4">
      <div className="container mx-auto flex justify-between items-center px-8 ">
        {/* Logo ou Nome do Site */}
        <motion.div
          className="text-white text-3xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#">
            Método <span className="text-pink-500">Superbi</span>
          </a>
        </motion.div>

        {/* Menu Links */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1, duration: 0.5 },
              }}
            >
              <a
                href="#"
                className="text-white text-lg hover:text-pink-500 transition"
              >
                {item}
              </a>

              {/* Barra deslizante abaixo do texto ao passar o mouse */}
              <motion.div
                className="absolute left-0 bottom-0 h-0.5 bg-pink-500 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                layoutId="underline"
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              />
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default DesktopMenu;