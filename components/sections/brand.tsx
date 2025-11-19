"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const BrandLogos = () => {
  const t = useTranslations("brands");

  // Puedes usar URLs de logos o solo nombres si no hay imágenes
  const brands = (t.raw("list") as string[]) ?? [];

  return (
    <section
      id="brand-logos"
      aria-labelledby="brand-logos-heading"
      className="relative py-24 overflow-hidden bg-black"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          id="brand-logos-heading"
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
        >
          {t("title")}
        </h2>
        <p className="text-neutral-200 max-w-2xl mx-auto">{t("description")}</p>
      </div>

      {/* === MARQUEE DE LOGOS === */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-2 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="flex items-center justify-center flex-shrink-0 w-fit h-20 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 backdrop-blur-sm px-2"
            >
              <span className="text-lg font-semibold text-neutral-200 tracking-tight hover:text-secondary-color transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandLogos;
