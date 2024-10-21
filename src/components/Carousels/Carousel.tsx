"use client";
import React from "react";

function Carousel() {
  const row1 = ["Text", "Text", "Text", "Text", "Text", "Text"];

  return (
    <div className="flex items-center justify-center">
      {/* Carrossel para a primeira linha de texto */}
      <div className="overflow-hidden relative max-w-[1100px] w-full">
        {/* Efeito de sombra nas bordas */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none shadow-md z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none shadow-md z-10" />

        <div className="flex whitespace-nowrap animate-marquee relative z-0">
          {row1.map((el, index) => (
            <div
              key={index}
              className="flex-shrink-0 pt-2 px-4 md:pt-4 md:px-14 text-2xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {el}
            </div>
          ))}
          {row1.map((el, index) => (
            <div
              key={index + row1.length}
              className="flex-shrink-0 pt-2 px-4 md:pt-4 md:px-14 text-2xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {el}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Carousel;
