"use client";

import { logos } from "@/components/logos/logos";
import Image from "next/image";
import React from "react";

const ClientePage = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#020617] text-white">
      {/* Fondo decorativo con opacidad y patrón */}
      <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10 pointer-events-none"></div>

      {/* Imagen hero sutil */}
      <div className="absolute inset-x-0 top-0 h-64 bg-[url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30"></div>

      <div className="relative max-w-6xl mx-auto text-center px-6 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Nuestros clientes confían en nosotros
        </h2>

        <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
          Trabajamos junto a empresas líderes en tecnología, innovación y
          comunicación para crear soluciones digitales que generan impacto real
          y duradero.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`flex flex-col items-center gap-3 group transition-transform duration-300 hover:scale-110`}
            >
              <div
                className={`rounded-xl p-6 flex items-center justify-center w-36 h-36 border shadow-md backdrop-blur-sm transition-all duration-300
      ${
        logo.bg === "dark"
          ? "bg-white text-gray-900 border-white/10 hover:border-cyan-400/40"
          : "bg-neutral-900 text-white border-white/5 hover:border-cyan-400/40"
      }`}
              >
                <Image
                  alt={logo.name}
                  src={logo.url}
                  width={100}
                  height={100}
                  className="object-contain max-h-20"
                />
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientePage;
