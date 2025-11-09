"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NosotrosPage() {
  const t = useTranslations("aboutPage");
  const values = t.raw("values");
  const globalIdentity = t.raw("globalIdentity");

  return (
    <main className="bg-foreground text-white overflow-hidden">
      {/* === HERO === */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 md:px-10 pt-[120px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-fallback.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-foreground/80" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-secondary-color to-secondary-light-color bg-clip-text text-transparent">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>
          <Link
            href="mailto:contacto@Cyberhub.cl"
            target="_blank"
            className="inline-block px-10 py-4 rounded-full bg-secondary-color text-white font-semibold text-lg shadow-md hover:shadow-xl hover:bg-secondary-light-color transition-all duration-300"
          >
            {t("hero.cta")}
          </Link>
        </motion.div>
      </section>

      {/* === NUESTRA IDENTIDAD GLOBAL === */}
      <section className="py-28 bg-foreground relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {globalIdentity.title}
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              {globalIdentity.paragraphs[0]}
            </p>
            <p className="text-neutral-400">{globalIdentity.paragraphs[1]}</p>
          </motion.div>

          {/* Logos de identidad */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {/* Cyberhub */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:shadow-xl hover:border-secondary-color/40 transition-all duration-300">
              <div className="relative w-40 h-40 mb-6 mx-auto">
                <Image
                  src="/logo-b.svg"
                  alt="Cyberhub"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center">
                Cyberhub
              </h3>
              <p className="text-xs uppercase tracking-wide text-secondary-color font-medium text-center mb-3">
                Latinoamérica
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed text-center">
                {globalIdentity.chile}
              </p>
            </div>

            {/* Cyber-Tower */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:shadow-xl hover:border-secondary-color/40 transition-all duration-300">
              <div className="relative w-40 h-40 mb-6 mx-auto">
                <Image
                  src="/Logo_Final_Cyber_TowerLOWRES-03-recortada.png"
                  alt="Cyber-Tower"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center">
                Cyber-Tower
              </h3>
              <p className="text-xs uppercase tracking-wide text-secondary-color font-medium text-center mb-3">
                Global (EE.UU., Europa, Asia)
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed text-center">
                {globalIdentity.tower}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === NUESTROS VALORES === */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-secondary-light-color to-secondary-color bg-clip-text text-transparent">
            {t("valuesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(
              (
                value: { title: string; description: string },
                index: number
              ) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-secondary-color/50 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-secondary-color transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {value.description}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-secondary-color/0 via-secondary-light-color/50 to-secondary-color/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="relative py-24 md:py-32 text-center bg-gradient-to-br from-secondary-color to-secondary-light-color text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            {t("cta.description")}
          </p>
          <Link
            href="mailto:contacto@Cyberhub.cl"
            target="_blank"
            className="inline-block px-10 py-4 rounded-full bg-white text-secondary-color font-semibold text-lg shadow-md hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
