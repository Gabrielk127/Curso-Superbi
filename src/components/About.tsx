"use client";

import React from "react";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import img from "@/app/assets/profile.jpg";

export default function SobreProfessora3() {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="glass-effect bg-opacity-30 backdrop-blur-lg shadow-lg py-4 max-w-[1200px] rounded-3xl mx-auto px-4 overflow-hidden"
    >
      <div className="relative">
        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, transition: { duration: 0.6 } },
            hidden: { opacity: 0 },
          }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div
            style={{ y }}
            className="relative w-full h-[400px] sm:h-[500px] max-w-[400px] mx-auto aspect-auto rounded-lg overflow-hidden"
          >
            <Image
              src={img}
              alt="Professora Ana Silva"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <motion.div
              initial={{ height: "100%" }}
              animate={{ height: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient z-10"
            />
          </motion.div>

          <motion.div
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.3 },
              },
              hidden: { opacity: 0, y: 50 },
            }}
            className="space-y-6 text-center mt-12 md:mt-0 md:text-start"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gradient">
              Fernanda Superbi
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-300">
              Especialista em Beleza e Estética
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              Eu sou Fernanda, mãe de uma criança abençoada, o Samuel, e esposa
              de um marido dedicado, o Andriw. Sou empreendedora, proprietária
              do Studio Fernanda Superbi Beauty, e mentora de mulheres incríveis
              que tomaram a decisão de transformar suas vidas, assim como eu fiz
              há alguns anos.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Me especializei com profissionais renomadas, com formações tanto
              no Brasil quanto no exterior, sempre buscando a excelência na área
              de extensão de cílios. Hoje, vivo o sonho de ter meu espaço em uma
              das regiões mais bem localizadas de Londrina.
            </p>
            {/* <motion.div
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.6 },
                },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              <a
                href="#"
                className="inline-block bg-pink-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Conheça o Curso
              </a>
            </motion.div> */}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="absolute -bottom-20 -left-20 w-20 h-20 bg-gradient rounded-full opacity-20 blur-xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient rounded-full opacity-20 blur-xl"
        />
      </div>
    </section>
  );
}
