"use client";

import { logos } from "@/components/logos/logos";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const ClientePage = () => {
  const t = useTranslations("clientsPage");

  return (
    <section className="relative overflow-hidden py-24">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10 pointer-events-none"></div>

      {/* Imagen hero */}
      <div className="absolute inset-x-0 top-0 h-64 bg-[url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-80"></div>

      <div className="relative max-w-6xl mx-auto text-center px-6 z-10">
        <div className="bg-white rounded-t-2xl pt-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text">
            {t("heading")}
          </h2>

          <p className="text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center gap-3 group transition-transform duration-300 hover:scale-110"
            >
              <div
                className={`rounded-xl p-6 flex items-center justify-center w-36 h-36 border shadow-md backdrop-blur-sm transition-all duration-300 bg-white text-gray-900 border-white/10 hover:border-cyan-400/40`}
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
