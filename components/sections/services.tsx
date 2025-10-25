"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const CoreServices = () => {
  const t = useTranslations("coreServices");
  const locale = useLocale();
  const services = t.raw("services");

  return (
    <section
      id="core-services"
      aria-labelledby="core-services-heading"
      className="py-16 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-5xl mx-auto">
        {/* === HEADER === */}
        <header className="text-center mb-16">
          <span className="text-secondary-color text-sm font-semibold uppercase tracking-wider mb-2 block">
            {t("sectionLabel")}
          </span>
          <h2
            id="core-services-heading"
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            {t("title")}
          </h2>
        </header>

        {/* === SERVICES GRID === */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(
            (
              service: { title: string; description: string; id: string },
              i: number
            ) => (
              <li
                key={service.title}
                className="p-6 md:p-8 rounded-2xl shadow-sm transition-all duration-300 bg-background hover:shadow-lg"
              >
                <article className="flex flex-col h-full">
                  {/* ICON */}
                  <div
                    className="mb-4 p-3 rounded-lg inline-flex items-center justify-center border border-secondary-color relative overflow-hidden"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-[url('/bg-pattern-cyber.webp')] bg-cover bg-center opacity-20 dark:opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-light-color/20 to-transparent" />
                    <div className="relative z-10">
                      <ServiceIcon index={i} />
                    </div>
                  </div>

                  {/* TITLE + DESCRIPTION */}
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={`/${locale}/soluciones/${service.id
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    aria-label={`${t("ariaLabel")} ${service.title}`}
                    className="flex items-center justify-between mt-auto w-full group"
                  >
                    <span className="text-secondary-color font-semibold text-sm group-hover:underline">
                      {t("seeDetails")}
                    </span>
                    <div className="p-2 rounded-full bg-secondary-light-color group-hover:bg-secondary-color transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </a>
                </article>
              </li>
            )
          )}
        </ul>

        {/* === FOOTER === */}
        <footer className="text-center mt-16 text-gray-400 text-sm">
          {t("footer")}{" "}
          <a
            href={`/${locale}/contacto`}
            aria-label={t("ariaLabel")}
            className="text-secondary-light-color font-semibold hover:text-secondary-color transition-colors"
          >
            {t("cta")}
          </a>
        </footer>
      </div>
    </section>
  );
};

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    // Vulnerabilidades
    <svg
      key={0}
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-secondary-light-color"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
      <path d="M12 8v4l2 2" />
    </svg>,
    // Pentesting
    <svg
      key={1}
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-secondary-light-color"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 13l4 4L19 7" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
    </svg>,
    // Gobernanza
    <svg
      key={2}
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-secondary-light-color"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 3h18v18H3z" />
      <path d="M7 12h10" />
      <path d="M7 16h10" />
      <path d="M7 8h10" />
    </svg>,
    // Monitoreo
    <svg
      key={3}
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-secondary-light-color"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
    </svg>,
    // DevSecOps
    <svg
      key={4}
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-secondary-light-color"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 4h16v16H4z" />
      <path d="M8 8l8 8" />
      <path d="M16 8l-8 8" />
    </svg>,
    // Respuesta a incidentes
    <svg
      key={5}
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-secondary-light-color"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2L2 12h10v10l10-10H12z" />
      <path d="M12 8v4l2 2" />
    </svg>,
  ];

  return icons[index] ?? icons[0];
}

export default CoreServices;
