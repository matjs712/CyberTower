"use client";

import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const Mision = () => {
  const t = useTranslations("mission");
  const locale = useLocale();
  const cards = t.raw("cards");

  return (
    <section
      id="mision"
      aria-labelledby="mision-heading"
      className="py-16 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* === LEFT COLUMN (CARDS) === */}
        <ul className="flex flex-col gap-4">
          {cards.map(
            (card: { title: string; description: string }, i: number) => (
              <li
                key={card.title}
                className="p-6 md:p-8 rounded-2xl shadow-lg flex items-start gap-5"
              >
                <div className="flex-shrink-0 mt-1" aria-hidden="true">
                  <MissionIcon index={i} />
                </div>

                <article className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-neutral-800 text-sm mb-3">
                    {card.description}
                  </p>
                  <Link
                    href={`/${locale}/nosotros`}
                    aria-label={`${t("readMore")} ${card.title}`}
                    className="flex items-center text-primary-light-color text-sm font-neutral hover:text-secondary-color transition-colors"
                  >
                    {t("readMore")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </article>
              </li>
            )
          )}
        </ul>

        {/* === RIGHT COLUMN (TEXT + IMAGE) === */}
        <div className="flex flex-col gap-6">
          <header>
            <div className="flex items-center text-primary-light-color text-sm font-semibold uppercase tracking-wider mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{t("whyTitle")}</span>
            </div>
            <h2
              id="mision-heading"
              className="text-4xl font-bold leading-tight bg-gradient-to-r from-neutral-800 to-white bg-clip-text text-transparent"
            >
              {t("heading")}
            </h2>
          </header>

          <p className="text-neutral-800 text-lg">{t("description")}</p>

          <figure className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/proteccion.png"
              alt={t("ariaImage")}
              fill
              className="rounded-2xl object-cover"
            />
            <figcaption className="sr-only">{t("ariaImage")}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

/* === ICONOS DINÁMICOS SEGÚN ÍNDICE === */
function MissionIcon({ index }: { index: number }) {
  const icons = [
    // Riesgo
    <svg
      key={0}
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-primary-light-color"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 3v18h18" />
      <path d="M18.7 8.3L13 14l-3-3L3.3 19" />
    </svg>,
    // Tecnología + Estrategia
    <svg
      key={1}
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-primary-light-color"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M15 10v.01" />
      <path d="M10.9 17.5l-.9-1.3C8.9 14.8 8 13.5 8 12c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.5-.9 2.8-2 4.2l-1.3.9" />
      <path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2" />
    </svg>,
    // Transparencia
    <svg
      key={2}
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-primary-light-color"
      viewBox="0 0 24 24"
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

export default Mision;
