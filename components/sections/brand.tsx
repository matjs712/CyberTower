"use client";
import React from "react";
import { useTranslations } from "next-intl";

const BrandLogos = () => {
  const t = useTranslations("brands");
  const brands: string[] = t.raw("list");

  return (
    <section
      id="brand-logos"
      aria-labelledby="brand-logos-heading"
      className="py-16 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-5xl mx-auto border rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
          <div className="w-full md:w-1/3">
            <h2
              id="brand-logos-heading"
              className="text-3xl md:text-4xl font-bold leading-tight"
            >
              {t("title")}
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-300 text-base">{t("description")}</p>
          </div>
        </header>

        {/* SR Text (para accesibilidad) */}
        <p className="sr-only">{t("srHint")}</p>

        {/* LISTA DE MARCAS */}
        <ul
          role="list"
          aria-label={t("ariaLabel")}
          className="flex flex-wrap items-center gap-4 pb-4 -mx-12 px-12 md:-mx-12 md:px-12 lg:-mx-20 lg:px-16"
        >
          {brands.map((name, index) => (
            <li
              key={name}
              className="flex items-center flex-shrink-0 px-5 py-3 border border-secondary-color/50 rounded-xl transition-colors cursor-default font-semibold text-lg hover:border-secondary-color/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 mr-3 ${
                  index === 0
                    ? "text-primary-color"
                    : "text-primary-light-color"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrandLogos;
