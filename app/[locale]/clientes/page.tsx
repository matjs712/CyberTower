"use client";

import { logos } from "@/components/logos/logos";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default function ClientesPage() {
  const t = useTranslations("clientsPage");

  return (
    <section className="relative bg-foreground text-white overflow-hidden pt-[120px] pb-24">
      {/* === FONDO === */}
      <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-0 bg-foreground" />

      {/* === HERO TEXT === */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary-color to-secondary-light-color bg-clip-text text-transparent">
          {t("heading")}
        </h1>

        <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
          {t("description")}
        </p>
      </div>

      {/* === LOGOS GRID === */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-6 md:px-10">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center bg-secondary-color rounded-2xl border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover:border-secondary-light-color/40 transition-all duration-300">
              <Image
                src={logo.url}
                alt={logo.name}
                width={100}
                height={100}
                className="object-contain max-h-16 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
            <span className="text-sm text-neutral-400 font-medium group-hover:text-secondary-color transition-colors duration-300">
              {logo.name}
            </span>
          </div>
        ))}
      </div>

      {/* === DECORATIVE LINE === */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-color to-secondary-light-color opacity-70" />
    </section>
  );
}
