"use client";
import CardModules from "@/components/Cards/CardModules";
// import Carousel from "@/components/Carousels/Carousel";
import Header from "@/components/Header/Header";
import YouTubeVideo from "@/components/YoutubeVideo";
import { useEffect, useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import CarouselImage from "@/components/Carousels/CarouselImage";
import CardWhy from "@/components/Cards/CardWhy";
import Faq from "@/components/Faq";
import About from "@/components/About";
import CourseCard from "@/components/Cards/CourseCard";
import Footer from "@/components/Footer";
import CardTechniques from "@/components/Cards/CardTechniques";
import CardFollowUp from "@/components/Cards/CardFollowUp";
import Testimonials from "@/components/Carousels/Testimonials";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToVideo = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({
        behavior: "smooth", // Deslocamento suave
        block: "center", // Centraliza verticalmente
      });
    }
  };

  if (!isClient) return null;
  return (
    <div>
      <div className="">
        <header>
          <Header />
        </header>
      </div>
      <section
        id="inicio"
        className="px-8 max-w-[1200px] mx-auto z-[-10] flex flex-col justify-center items-center pt-44"
      >
        <h1
          className="text-white font-bold text-center text-3xl
          md:text-5xl
          xl:text-5xl xl:pt-16 
        "
        >
          Transforme sua vida com o Método Superbi
        </h1>
        <motion.div
          className="h-1 bg-gradient mx-auto mt-4"
          initial={{ width: "0%" }}
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          aria-hidden="true"
        />
        <p
          className="text-gray-400 font-bold text-center pt-24
        xl:text-2xl max-w-[1000px] xl:mx-auto xl:pt-16
        "
        >
          O curso mais completo de extensão de cílios em Londrina! Aprenda
          técnicas profissionais, domine as redes sociais e inicie uma nova
          carreira com confiança e excelência.
        </p>
        <button
          className="glass-bg flex flex-row items-center gap-2 mx-auto mt-12 py-5 px-8"
          onClick={scrollToVideo} // Adiciona o manipulador de evento
        >
          Garanta sua vaga agora! <IoIosArrowDown size={24} />
        </button>
      </section>
      <section className="pt-12">
        <div ref={videoRef}>
          <YouTubeVideo />
        </div>
      </section>
      <section className="pt-32 max-w-[1200px] mx-auto px-4 relative">
        <div className="relative z-10">
          <CardWhy />
        </div>
      </section>
      <section className="py-24">
        <CarouselImage />
      </section>
      <section id="conteudo" className=" max-w-[1200px] mx-auto px-4 relative">
        <CardTechniques />
      </section>
      <section className="mx-auto relative pt-24 ">
        <CardFollowUp />
      </section>
      <section className=" max-w-[1200px] mx-auto px-4 relative pt-24">
        <CardModules />
      </section>
      <section id="sobre" className="pt-32 px-4 max-w-[1200px] mx-auto">
        <About />
      </section>
      <section id="sobre" className="pt-32 px-4">
        <Testimonials />
      </section>

      <section
        id="curso"
        className="max-w-[1200px] mx-auto pt-32 px-4 flex flex-col items-center"
      >
        <p className="text-gray-400 font-bold text-center px-4 py-2 glass-bg mb-4">
          Acesso ao Curso
        </p>
        <h1
          className="text-white font-bold text-center text-3xl
          md:text-5xl
          xl:text-5xl xl:pt-16 
        "
        >
          Pronta para transformar sua vida?
        </h1>
        <motion.div
          className="h-1 bg-principal mx-auto mt-1"
          initial={{ width: "0%" }}
          animate={{ width: ["0%", "50%", "0%"] }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          aria-hidden="true"
        />
        <p
          className="text-gray-400 font-bold text-center py-8
        xl:text-2xl max-w-[800px] xl:mx-auto
        "
        >
          Não perca a oportunidade de fazer parte do curso mais completo de
          Londrina e iniciar sua carreira com o suporte e a qualidade do Studio
          Fernanda Superbi Beauty. Vagas limitadas!
        </p>
        <CourseCard
          whatsappLink="https://wa.me/5543996033429?text=Ol%C3%A1,%20tenho%20interesse%20no%20M%C3%A9todo%20Superbi!
"
        />
      </section>
      <section id="redes" className="mx-auto pt-32">
        <ContactSection />
      </section>
      <section
        id="perguntas frequentes"
        className="max-w-[1200px] mx-auto pt-32 pb-24"
      >
        <Faq />
      </section>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
