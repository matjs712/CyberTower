"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Mision() {
  const t = useTranslations("mission");
  const locale = useLocale();
  const cards = t.raw("cards") as { title: string; description: string }[];

  return (
    <section
      id="mision"
      aria-labelledby="mision-heading"
      className="relative py-28 px-6 md:px-10 bg-secondary-color text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* === LADO IZQUIERDO === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <header>
            <span className="text-secondary-light-color text-sm uppercase tracking-widest font-semibold mb-2 block">
              {t("whyTitle")}
            </span>
            <h2
              id="mision-heading"
              className="text-4xl md:text-5xl font-bold leading-tight text-white"
            >
              {t("heading")}
            </h2>
          </header>

          <p className="text-neutral-100 text-lg leading-relaxed max-w-lg">
            {t("description")}
          </p>

          <Link
            href={`/${locale}/nosotros`}
            aria-label={`${t("readMore")} misión`}
            className="inline-flex items-center gap-2 text-white font-medium hover:text-secondary-light-color transition-colors"
          >
            {t("readMore")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>

        {/* === LADO DERECHO (CARDS + IMAGEN) === */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <Image
              src="/proteccion.png"
              alt={t("ariaImage")}
              fill
              className="object-cover object-center opacity-20 rounded-3xl"
            />
          </div>

          {/* Cards superpuestas */}
          <ul className="relative grid gap-6 z-10">
            {cards.map((card, i) => (
              <motion.li
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg hover:bg-white/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <MissionIcon index={i} />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
                    <p className="text-neutral-200 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Degradado decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}

/* === ICONOS CON ESTILO UNIFICADO === */
function MissionIcon({ index }: { index: number }) {
  const base =
    "h-8 w-8 text-secondary-light-color flex-shrink-0 drop-shadow-md";
  const icons = [
    <svg
      key={0}
      xmlns="http://www.w3.org/2000/svg"
      className={base}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 3v18h18" />
      <path d="M18.7 8.3L13 14l-3-3L3.3 19" />
    </svg>,
    <svg
      key={1}
      xmlns="http://www.w3.org/2000/svg"
      className={base}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M15 10v.01" />
      <path d="M10.9 17.5l-.9-1.3C8.9 14.8 8 13.5 8 12c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.5-.9 2.8-2 4.2l-1.3.9" />
      <path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2" />
    </svg>,
    <svg
      key={2}
      xmlns="http://www.w3.org/2000/svg"
      className={base}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M10 15h4M10 11h4" />
    </svg>,
  ];
  return icons[index] ?? icons[0];
}
