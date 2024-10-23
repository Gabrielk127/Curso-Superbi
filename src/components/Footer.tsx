import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Conteúdo", href: "#conteudo" },
    { label: "Técnicas", href: "#tecnicas" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white py-8">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.div
              className="text-white text-3xl font-bold cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <a href="#inicio">
                Método <span className="text-pink-500">Superbi</span>
              </a>
            </motion.div>
          </div>
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end gap-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white hover:text-pink-500 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
