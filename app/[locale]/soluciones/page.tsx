"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ServiciosPage() {
  const t = useTranslations("servicesPage");
  const s = useTranslations("AllSolutions");

  const categories = t.raw("categories");
  const soluciones = s.raw("list");

  return (
    <main className="bg-foreground text-white">
      {/* === HERO === */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-8"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-72 h-72 md:w-96 md:h-96 opacity-80"
        >
          <Image
            src="/soluciones.png"
            alt={t("hero.alt")}
            fill
            className="object-contain"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-foreground" />
      </section>

      {/* === INTRO === */}
      <section className="max-w-4xl mx-auto text-center px-6 md:px-12 py-12">
        <p className="text-lg text-neutral-300 leading-relaxed">
          {t.rich("intro", {
            strong: (chunks) => (
              <strong className="font-semibold text-secondary-color">
                {chunks}
              </strong>
            ),
            bold: (chunks) => <span className="font-semibold">{chunks}</span>,
          })}
        </p>
      </section>

      {/* === CATEGORÍAS === */}
      <section className="max-w-6xl mx-auto space-y-20 px-6 md:px-10 pb-24">
        {categories.map(
          (
            cat: { nombre: string; descripcion: string; items: string[] },
            i: number
          ) => {
            const services = soluciones.filter((service: { id: string }) =>
              cat.items.includes(service.id)
            );

            return (
              <motion.div
                key={cat.nombre}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                {/* HEADER */}
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-white border-l-4 border-secondary-color pl-4">
                    {cat.nombre}
                  </h2>
                  <p className="text-neutral-400 max-w-3xl">
                    {cat.descripcion}
                  </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map(
                    (service: {
                      id: string;
                      image: string;
                      title: string;
                      slug: string;
                      description: string;
                    }) => (
                      <Link
                        key={service.id}
                        href={`/soluciones/${service.slug}`}
                        className="group"
                      >
                        <Card
                          className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 
                                     rounded-2xl overflow-hidden shadow-md hover:shadow-xl 
                                     transition-all duration-300"
                        >
                          {/* Imagen superior */}
                          <div className="relative w-full h-40 overflow-hidden">
                            <Image
                              src={service.image || "/auditoria.png"}
                              alt={service.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />
                          </div>

                          {/* Contenido */}
                          <CardContent className="p-6 flex flex-col justify-between h-[230px]">
                            <h3 className="text-xl font-semibold mb-3 text-secondary-color transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-sm text-neutral-300 mb-4 leading-relaxed line-clamp-3">
                              {service.description}
                            </p>
                            <span className="text-secondary-color text-sm font-semibold group-hover:underline">
                              {t("viewDetails")} →
                            </span>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  )}
                </div>
              </motion.div>
            );
          }
        )}
      </section>
    </main>
  );
}
