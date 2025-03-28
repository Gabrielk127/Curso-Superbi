import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const Button = () => {
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div>
      <a href="#curso">
        <motion.button
          className="mt-16 py-4 px-8 text-lg w-80 justify-between md:text-xl bg-gradient flex flex-row gap-4 rounded-3xl items-center"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Garanta seu acesso! <IoIosArrowDown size={32} />
        </motion.button>
      </a>
    </div>
  );
};

export default Button;
