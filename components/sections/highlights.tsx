"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

type CaseStudy = {
  id: number | string;
  image: string;
  tags: string[];
  description: string;
  title: string;
  slug: string;
};

const Highlights = () => {
  const t = useTranslations("highlights");
  const locale = useLocale();
  const caseStudiesData = (t.raw("list") as CaseStudy[]) ?? [];

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="py-24 px-4 md:px-10 bg-foreground text-white"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* === HEADER === */}
        <header className="text-center space-y-4">
          <span className="text-secondary-color text-sm font-semibold uppercase tracking-widest">
            {t("sectionLabel")}
          </span>
          <h2
            id="case-studies-heading"
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            {t("title")}
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            {t("description")}
          </p>
          <Link
            href={`/${locale}/blog`}
            aria-label={t("ariaViewAll")}
            className="inline-flex items-center text-secondary-color font-semibold hover:text-secondary-light-color transition-colors mt-4"
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
        </header>

        {/* === CASE STUDIES MOSAICO === */}
        {caseStudiesData.length === 0 ? (
          <p className="text-sm text-neutral-500 text-center">
            No case studies available.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 rounded-2xl overflow-hidden">
            {caseStudiesData.map((study, index) => (
              <motion.div
                key={study.id ?? index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group rounded-2xl overflow-hidden ${
                  index === 0
                    ? "md:col-span-3 h-[400px]" // caso destacado grande
                    : "h-[250px]"
                }`}
              >
                <Link
                  href={`/${locale}/blog/${study.slug}`}
                  aria-label={study.title}
                >
                  {/* Fondo */}
                  <img
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Contenido */}
                  <div className="absolute bottom-0 p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-color transition-colors">
                      {study.title}
                    </h3>
                    {study.description && (
                      <p className="text-sm text-neutral-300 line-clamp-2 mb-3">
                        {study.description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {study.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-secondary-color/90 text-white rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Highlights;
