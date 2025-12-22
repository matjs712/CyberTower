"use client";

import { logos } from "@/components/logos/logos";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

interface Testimonial {
  name: string;
  author: string;
  quote: string;
}

const testimonialLogos: Record<string, string> = {
  Falabella: "/Logo_Falabella.png",
  SQM: "/logo-SQM.png",
  Agrosuper: "/logo-Agrosuper.png",
  AquaChile: "/logo-AquaChile.png",
  "Banco de Chile": "/logo-BancoDeChile.png",
};

const ClientePage = () => {
  const t = useTranslations("clientsPage");

  const testimonials = t.raw("testimonials") as Record<string, Testimonial>;

  return (
    <section className="relative overflow-hidden py-24 pt-0">
      {/* HERO */}
      {/* HERO HEADER */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[420px]">
        <Image
          src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=80"
          alt="Clients"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/10" />

        <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col justify-center text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {t("heading")}
          </h2>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>
      </div>

      {/* LOGOS */}
      <div className="relative max-w-6xl mx-auto px-6 mt-24 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center gap-3 group hover:scale-105 transition-transform"
            >
              <div className="rounded-2xl p-6 flex items-center justify-center w-36 h-36 border shadow-md bg-white dark:bg-gray-800">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={100}
                  height={100}
                  className="object-contain max-h-20"
                />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-cyan-400">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIOS */}
      <div className="mt-24 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("testimonialsTitle")}
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(testimonials).map(([key, item]) => (
            <div
              key={key}
              className={`p-8 rounded-3xl bg-white dark:bg-gray-900 shadow-lg border ${
                key === "bancoChile" ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonialLogos[item.name] ?? "/placeholder.png"}
                  alt={item.name ?? "Logo"}
                  width={60}
                  height={60}
                  className="object-contain rounded-xl"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.author}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                “{item.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientePage;
