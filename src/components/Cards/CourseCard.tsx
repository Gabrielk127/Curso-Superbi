import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface CourseCardProps {
  whatsappLink: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ whatsappLink }) => {
  const benefits = [
    {
      icon: <FaStar className="text-white" />,
      label: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <FaStar className="text-white" />,
      label: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <FaStar className="text-white" />,
      label: "Lorem ipsum dolor sit amet",
    },

    {
      icon: <FaStar className="text-white" />,
      label: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <FaStar className="text-white" />,
      label: "Lorem ipsum dolor sit amet",
    },
  ];
  const handleClick = () => {
    window.open(whatsappLink, "_blank");
  };
  return (
    <motion.div
      className="glass-effect text-white rounded-3xl p-12 mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full max-w-[500px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className=" flex flex-col justify-between">
        <div>
          <motion.p
            className="glass-effect w-full text-center rounded-3xl p-2 text-white mb-8"
            initial={{ textShadow: "0 0 5px rgba(255, 0, 255, 0.5)", scale: 1 }}
            animate={{
              textShadow: [
                "0 0 5px rgba(255, 0, 255, 0.5)",
                "0 0 15px rgba(255, 0, 255, 1)",
                "0 0 5px rgba(255, 0, 255, 0.5)",
              ],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Preço exclusivo de Lançamento
          </motion.p>
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Método <span className="text-pink-500">Superbi</span>
          </h2>
          <p className="text-white text-2xl mt-8">
            <span className="text-4xl font-bold">R$ 349,99</span> à/vista
          </p>
          <div className="border-b border-[0.5] border-gray-500 my-12" />
        </div>
        <div>
          <ul className="space-y-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-3 text-lg">{benefit.icon}</span>
                {benefit.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="bg-pink-500 text-white font-bold py-4 px-4 rounded transition duration-200 w-full mt-12"
      >
        Entre em contato
      </button>
    </motion.div>
  );
};

export default CourseCard;
