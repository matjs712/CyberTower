"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export default function CoreServices() {
  const t = useTranslations("coreServices");
  const a = useTranslations("AllSolutions");
  const locale = useLocale();
  const services = a.raw("list");

  return (
    <section
      id="core-services"
      aria-labelledby="core-services-heading"
      className="relative w-full bg-foreground text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6">
        {/* === HEADER === */}
        <header className="text-center mb-12">
          <span className="text-secondary-color text-sm font-semibold uppercase tracking-widest mb-3 block">
            {t("sectionLabel")}
          </span>
          <h2
            id="core-services-heading"
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            {t("title")}
          </h2>
        </header>

        {/* === GRID SIN GAPS === */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10 rounded-xl overflow-hidden">
          {services.map(
            (
              service: {
                title: string;
                description: string;
                slug: string;
              },
              i: number
            ) => (
              <motion.li
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-r border-white/10 bg-white/5 backdrop-blur-sm hover:bg-secondary-color/20 transition-colors duration-300"
              >
                <Link
                  href={`/${locale}/soluciones/${service.slug}`}
                  aria-label={`${t("ariaLabel")} ${service.title}`}
                  className="flex flex-col justify-between h-full p-8 group"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary-color transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <span className="text-sm font-medium text-secondary-color group-hover:underline">
                      {t("seeDetails")}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-secondary-color group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              </motion.li>
            )
          )}
        </ul>

        {/* === FOOTER CTA === */}
        <footer className="text-center mt-16 text-sm text-neutral-400">
          {t("footer")}{" "}
          <Link
            href="mailto:contacto@Cyberhub.cl"
            aria-label="Correo"
            className="text-secondary-color font-semibold hover:text-secondary-color transition-colors"
          >
            {t("cta")}
          </Link>
        </footer>
      </div>
    </section>
  );
}
