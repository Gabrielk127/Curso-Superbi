"use client";
import CardModules from "@/components/Cards/CardModules";
import Carousel from "@/components/Carousels/Carousel";
import Header from "@/components/Header/Header";
import YouTubeVideo from "@/components/YoutubeVideo";
import { useEffect, useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import CarouselImage from "@/components/Carousels/CarouselImage";
import CardWhy from "@/components/Cards/CardWhy";
import Faq from "@/components/Faq";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLDivElement | null>(null); // Especifica o tipo da referência

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
    <div className="pb-56">
      <div className="">
        <header>
          <Header />
        </header>
      </div>
      <section className="px-8 max-w-[1200px] mx-auto z-[-10] flex flex-col justify-center items-center pt-52">
        <p className="text-gray-400 font-bold text-center px-4 py-2 glass-bg mb-8">
          Inscrições Abertas
        </p>
        <h1
          className="text-white font-bold text-center text-4xl
          md:text-6xl
          lg:text-8xl
          xl:text-9xl xl:pt-16 
        "
        >
          Método Superbi
        </h1>
        <motion.div
          className="h-1 bg-pink-500 mx-auto mt-4"
          initial={{ width: "0%" }}
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          aria-hidden="true"
        />
        <p
          className="text-gray-400 font-bold text-center pt-24
        xl:text-2xl xl:max-w-[800px] xl:mx-auto xl:pt-16
        "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pretium quis sapien in laoreet. Pellentesque sollicitudin finibus
          aliquam. Sed ac urna sapien.
        </p>
        <button
          className="glass-bg flex flex-row items-center gap-2 mx-auto mt-12 py-5 px-8"
          onClick={scrollToVideo} // Adiciona o manipulador de evento
        >
          Saiba mais <IoIosArrowDown size={24} />
        </button>
      </section>
      <section className="pt-12">
        <div ref={videoRef}>
          <YouTubeVideo />
        </div>
      </section>
      <section className="px-8">
        <p className="text-gray-400 font-bold text-center pt-4 pb-8">
          torne-se uma expert nas técnicas
        </p>
        <Carousel />
      </section>
      <section className="pt-32 max-w-[1200px] mx-auto px-8 relative">
        <div className="relative z-10">
          <CardWhy />
        </div>
      </section>
      <section className="py-24">
        <CarouselImage />
      </section>
      <section className=" max-w-[1200px] mx-auto px-8 relative">
        <CardModules />
      </section>
      <section className="max-w-[1200px] mx-auto pt-32">
        <Faq />
      </section>
      <section></section>
    </div>
  );
}
