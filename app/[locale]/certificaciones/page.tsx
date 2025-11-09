"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CertificacionesPage() {
  const t = useTranslations("certificationsPage");
  const s = useTranslations("certifications");
  const categories = t.raw("categories");
  const certificaciones = s.raw("list");

  return (
    <main className="bg-[#0f0f0f] text-white">
      {/* === HERO === */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src="/cert.jpg"
          alt="Certificaciones ISO"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#0f0f0f]" />

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg">
            {t.rich("intro", {
              strong: (chunks) => (
                <strong className="text-secondary-color font-semibold">
                  {chunks}
                </strong>
              ),
              iso: (chunks) => <span className="font-semibold">{chunks}</span>,
            })}
          </p>
        </motion.div>
      </section>

      {/* === SECCIONES DE CATEGORÍAS === */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 space-y-24">
        {categories.map(
          (
            cat: { nombre: string; descripcion: string; items: string[] },
            i: number
          ) => {
            const certItems = certificaciones.filter((cert: { id: string }) =>
              cat.items.includes(cert.id)
            );

            return (
              <motion.section
                key={cat.nombre}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                {/* Encabezado */}
                <header className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-bold text-white border-l-4 border-secondary-color pl-4">
                    {cat.nombre}
                  </h2>
                  <p className="text-neutral-400 max-w-3xl">
                    {cat.descripcion}
                  </p>
                </header>

                {/* Grid de certificaciones */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {certItems.map(
                    (cert: {
                      id: string;
                      image: string;
                      slug: string;
                      title: string;
                      description: string;
                    }) => (
                      <Link
                        key={cert.id}
                        href={`/certificaciones/${cert.slug}`}
                        className="group"
                      >
                        <Card
                          className="relative overflow-hidden bg-white/5 border border-white/10
                                     rounded-2xl backdrop-blur-sm hover:bg-white/10 
                                     transition-all duration-500 shadow-md hover:shadow-xl"
                        >
                          {/* Imagen superior */}
                          <div className="relative w-full h-48 overflow-hidden">
                            <Image
                              src={"/auditoria.png"}
                              alt={cert.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
                          </div>

                          {/* Contenido */}
                          <CardContent className="p-6 flex flex-col justify-between h-[230px]">
                            <h3 className="text-xl font-semibold mb-3 text-secondary-color transition-colors">
                              {cert.title}
                            </h3>
                            <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-4">
                              {cert.description}
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
              </motion.section>
            );
          }
        )}
      </section>
    </main>
  );
}
