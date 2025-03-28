"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import img1 from "@/app/assets/Clientes/img1.jpg";
import img3 from "@/app/assets/Clientes/img2.jpeg";
import img4 from "@/app/assets/Clientes/img3.jpeg";
import img5 from "@/app/assets/Clientes/img4.jpg";
import img6 from "@/app/assets/Clientes/img5.jpg";
import img7 from "@/app/assets/Clientes/img6.jpeg";
import img8 from "@/app/assets/Clientes/img7.jpg";
import img9 from "@/app/assets/Clientes/img8.jpg";
import img10 from "@/app/assets/Clientes/img9.jpg";
import img11 from "@/app/assets/Clientes/img10.jpg";
import img12 from "@/app/assets/Clientes/img11.jpg";
import img13 from "@/app/assets/Clientes/img12.jpg";
import img14 from "@/app/assets/Clientes/img13.jpeg";
import img15 from "@/app/assets/Clientes/img14.jpeg";

const images = [
  img6,
  img9,
  img7,
  img8,
  img10,
  img11,
  img13,
  img14,
  img12,
  img15,
  img1,
  img3,
  img4,
  img6,
  img7,
  img1,
  img3,
  img5,
  img4,
  img5,
];

export default function CarouselImage() {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Primeiro Carrossel: da esquerda para a direita */}
      <div className="overflow-hidden relative w-full mb-8">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none shadow-md z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none shadow-md z-10" />

        <div ref={carouselRef} className="flex animate-marquee-infinite">
          {/* Duplicando a lista de imagens para a animação infinita */}
          {[...images, ...images].map((src, index) => (
            <div key={index} className="flex-shrink-0 p-2 md:p-4">
              <Image
                src={src}
                alt={`Carousel Image ${index + 1}`}
                width={300}
                height={200}
                className="rounded-lg shadow-md object-cover w-72 h-80"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Segundo Carrossel: da direita para a esquerda (inverso) */}
      <div className="overflow-hidden relative w-full">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none shadow-lg z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none shadow-lg z-10" />

        <div className="flex animate-marquee-reverse-infinite">
          {/* Duplicando a lista de imagens para a animação reversa infinita */}
          {[...images, ...images]
            .slice()
            .reverse()
            .map((src, index) => (
              <div key={index} className="flex-shrink-0 p-2 md:p-4">
                <Image
                  src={src}
                  alt={`Carousel Image ${index + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md object-cover w-72 h-80"
                />
              </div>
            ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${carouselWidth}px);
          }
        }

        .animate-marquee-infinite {
          animation: marquee-infinite 100s linear infinite;
          display: flex;
        }

        @keyframes marquee-reverse-infinite {
          0% {
            transform: translateX(-300%);
          }
          100% {
            transform: translateX(50%);
          }
        }

        .animate-marquee-reverse-infinite {
          animation: marquee-reverse-infinite 100s linear infinite;
          display: flex;
        }
      `}</style>
    </div>
  );
}
