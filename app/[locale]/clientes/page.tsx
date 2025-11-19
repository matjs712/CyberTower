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
      <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10 pointer-events-none"></div>

      {/* Imagen hero */}
      <div className="absolute inset-x-0 top-0 h-64 bg-[url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-80"></div>

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

      {/* === TESTIMONIOS === */}
      <div className="mt-24 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("testimonialsTitle", {
            default: "Testimonios de nuestros clientes",
          })}
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {/* === FALABELLA === */}
          <TestimonialCard
            img="/Falabella.svg.png"
            company={t("testimonials.falabella.company")}
            author={t("testimonials.falabella.author")}
            quote={t("testimonials.falabella.quote")}
          />

          {/* === SQM === */}
          <TestimonialCard
            img="/logo-SQM.png"
            company={t("testimonials.sqm.company")}
            author={t("testimonials.sqm.author")}
            quote={t("testimonials.sqm.quote")}
          />

          {/* === AGROSUPER === */}
          <TestimonialCard
            img="/Logo-agrosuper.png"
            company={t("testimonials.agrosuper.company")}
            author={t("testimonials.agrosuper.author")}
            quote={t("testimonials.agrosuper.quote")}
          />

          {/* === AQUACHILE === */}
          <TestimonialCard
            img="/logo-AquaChile.png"
            company={t("testimonials.aquachile.company")}
            author={t("testimonials.aquachile.author")}
            quote={t("testimonials.aquachile.quote")}
          />

          {/* === BANCO DE CHILE (span 2 columns) === */}
          <div className="md:col-span-2">
            <TestimonialCard
              img="/logo-BancoDeChile.png"
              company={t("testimonials.bancochile.company")}
              author={t("testimonials.bancochile.author")}
              quote={t("testimonials.bancochile.quote")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* === COMPONENTE REUTILIZABLE === */
function TestimonialCard({
  img,
  company,
  author,
  quote,
}: {
  img: string;
  company: string;
  author: string;
  quote: string;
}) {
  return (
    <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-800 transition duration-300">
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={img}
          alt={company}
          width={60}
          height={60}
          className="object-contain rounded-xl"
        />
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">
            {company}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{author}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
        “{quote}”
      </p>
    </div>
  );
}
