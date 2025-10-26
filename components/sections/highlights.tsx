"use client";

import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { caseStudiesData as caseStudiesDataEs } from "../data/caseStudiesData.es";
import { caseStudiesData as caseStudiesDataEn } from "../data/caseStudiesData.en";

const Highlights = () => {
  const t = useTranslations("highlights");
  const locale = useLocale();

  // Cargar data según idioma
  const caseStudiesData =
    locale === "en" ? caseStudiesDataEn : caseStudiesDataEs;

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="py-16 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-5xl mx-auto">
        {/* === HEADER === */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <span className="text-primary-light-color text-sm font-semibold uppercase tracking-wider mb-2 block">
              {t("sectionLabel")}
            </span>
            <h2
              id="case-studies-heading"
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              {t("title")}
            </h2>
          </div>

          <div className="lg:w-1/2 flex flex-col items-start lg:items-end">
            <p className="text-neutral-800 text-lg mb-6 lg:text-right">
              {t("description")}
            </p>
            <Link
              href={`/${locale}/blog`}
              aria-label={t("ariaViewAll")}
              className="flex items-center text-primary-light-color font-semibold hover:text-purple-300 transition-colors"
            >
              {t("viewAll")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </header>

        {/* === CASE STUDIES === */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudiesData.map((study, index) => (
            <li
              key={study.id || index}
              className={`relative rounded-xl overflow-hidden shadow-lg flex flex-col justify-end p-6 ${
                index === 0 ? "md:col-span-2 h-[300px]" : "min-h-[200px]"
              }`}
              style={{
                backgroundImage: `url(${study.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-600/70 to-transparent" />
              <article className="relative z-10 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  <Link
                    href={`/${locale}/blog/${study.id}`}
                    aria-label={`${t("ariaViewAll")}: ${study.title}`}
                  >
                    {study.title}
                  </Link>
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {study.description}
                </p>
                <ul className="flex flex-wrap gap-1">
                  {study.tags.map((tag) => (
                    <li
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-white bg-primary-light-color rounded-sm"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
