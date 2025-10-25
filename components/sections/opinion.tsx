"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const TestimonialsAndStats = () => {
  const t = useTranslations("testimonialsAndStats");
  const testimonials = t.raw("testimonials");
  const certifications = t.raw("certifications");

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-heading"
      className="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#1f2937]"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER & STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Texto principal */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center text-secondary-color text-sm font-semibold uppercase tracking-wider mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-8.707l2-2a1 1 0 00-1.414-1.414L10 8.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{t("sectionLabel")}</span>
            </div>

            <h2
              id="testimonios-heading"
              className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white"
            >
              {t("heading")}
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Estadísticas */}
          <aside
            className="p-8 md:p-10 rounded-2xl border border-gray-800 bg-[#0f172a]/50 shadow-2xl flex flex-col justify-between backdrop-blur-sm"
            aria-label="Estadísticas de satisfacción de clientes"
          >
            <div className="mb-8">
              <div className="flex -space-x-3 mb-4" aria-hidden="true">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="h-10 w-10 rounded-full bg-gradient-to-tr from-secondary-color to-secondary-light-color border-2 border-gray-900"
                  />
                ))}
              </div>
              <h3 className="text-xl font-bold text-white">{t("statTitle")}</h3>
            </div>

            <dl className="flex gap-10 mb-10">
              <div>
                <dt className="sr-only">{t("stat1Label")}</dt>
                <dd className="text-4xl font-extrabold text-secondary-light-color mb-1">
                  {t("stat1Value")}
                </dd>
                <p className="text-sm text-gray-400">{t("stat1Label")}</p>
              </div>
              <div>
                <dt className="sr-only">{t("stat2Label")}</dt>
                <dd className="text-4xl font-extrabold text-secondary-light-color mb-1">
                  {t("stat2Value")}
                </dd>
                <p className="text-sm text-gray-400">{t("stat2Label")}</p>
              </div>
            </dl>

            <ul className="flex flex-wrap gap-3">
              {certifications.map((tag: string) => (
                <li
                  key={tag}
                  className="px-4 py-2 text-xs font-medium border border-secondary-color text-secondary-light-color rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* TESTIMONIOS */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(
            (
              testimonial: {
                name: string;
                title: string;
                quote: string;
              },
              i: number
            ) => (
              <motion.li
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 md:p-8 rounded-2xl border border-gray-800 shadow-xl bg-[#161b22] relative"
              >
                <figure>
                  <blockquote className="relative">
                    <div
                      className="absolute top-4 right-4 text-secondary-color opacity-20 text-6xl font-serif leading-none"
                      aria-hidden="true"
                    >
                      “
                    </div>
                    <StarRating rating={5} />
                    <p className="mt-4 mb-6 italic text-gray-300">
                      “{testimonial.quote}”
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center gap-4 mt-auto">
                    <Image
                      src="/user.jpg"
                      alt={`Foto de ${testimonial.name}`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <cite className="text-sm text-gray-400 not-italic">
                        {testimonial.title}
                      </cite>
                    </div>
                  </figcaption>
                </figure>
              </motion.li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

/* --- Componentes auxiliares --- */

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex space-x-1 text-secondary-color">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-secondary-color" : "fill-gray-600"
        }`}
      />
    ))}
  </div>
);

export default TestimonialsAndStats;
