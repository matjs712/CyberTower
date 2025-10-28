"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const CoreServices = () => {
  const t = useTranslations("coreServices");
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
          <span className="text-primary-light-color text-sm font-semibold uppercase tracking-wider mb-2 block">
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
            (service: {
              title: string;
              description: string;
              id: string;
              slug: string;
            }) => (
              <li
                key={service.title}
                className="p-6 md:p-8 rounded-2xl shadow-sm transition-all duration-300 bg-background hover:shadow-lg"
              >
                <article className="flex flex-col h-full">
                  {/* TITLE + DESCRIPTION */}
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-neutral-800 text-sm mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/soluciones/${service.slug
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    aria-label={`${t("ariaLabel")} ${service.title}`}
                    className="flex items-center justify-between mt-auto w-full group"
                  >
                    <span className="text-secondary-color font-neutral text-sm group-hover:underline">
                      {t("seeDetails")}
                    </span>
                    <div className="p-2 rounded-full bg-secondary-color group-hover:bg-secondary-color transition-colors duration-300">
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
                  </Link>
                </article>
              </li>
            )
          )}
        </ul>

        {/* === FOOTER === */}
        <footer className="text-center mt-16 text-gray-400 text-sm">
          {t("footer")}{" "}
          <Link
            href={`/contacto`}
            aria-label={t("ariaLabel")}
            className="text-secondary-light-color font-semibold hover:text-secondary-color transition-colors"
          >
            {t("cta")}
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default CoreServices;
