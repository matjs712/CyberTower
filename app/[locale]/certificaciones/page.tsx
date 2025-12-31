"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AgendaDialog from "@/components/AgendaDialog";
import { ActionButton } from "@/components/sections/howWeWork";
import { Link } from "@/i18n/navigation";

export default function CertificacionesPage() {
  const t = useTranslations("certificationsPage");
  const s = useTranslations("certifications");
  const h = useTranslations("howWeWork.puntual");
  const l = useTranslations("solucionDetail");

  const categories = t.raw("categories");
  const certificaciones = s.raw("list");

  return (
    <div className="mb-20">
      {/* HERO */}
      <div className="relative w-full px-8 pt-24 pb-32">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/certifications/NIST.jpg"
            alt={"alt"}
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/40 via-white/80 to-white pointer-events-none" />
        </div>

        <div className="max-w-5xl space-y-6 mb-4 mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-700">
            {t("hero.subtitle")}
          </p>
          <AgendaDialog
            trigger={
              <ActionButton
                className="bg-secondary-color text-white rounded-full!"
                text={h("cta.primary")}
              />
            }
          />
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <p className="text-lg text-gray-500 leading-relaxed text-justify">
          {t.rich("intro", {
            strong: (chunks) => (
              <span className="font-semibold text-secondary-color">
                {chunks}
              </span>
            ),
            iso: (chunks) => <span className="font-semibold">{chunks}</span>,
          })}
        </p>
      </div>

      {/* CATEGORÍAS */}
      <div className="max-w-7xl mx-auto px-8 space-y-12">
        {/* --- PRIMERA CATEGORÍA SOLO --- */}
        {(() => {
          const first = categories[0];
          const certItems = certificaciones.filter((cert: { id: string }) =>
            first.items.includes(cert.id)
          );

          return (
            <section key={first.nombre} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2 border-l-4 border-secondary-color pl-3">
                  {first.nombre}
                </h2>
                <p className="text-gray-500">{first.descripcion}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {certItems.map(
                  (cert: {
                    id: string;
                    slug: string;
                    image: string;
                    title: string;
                    description: string;
                  }) => (
                    <Card
                      key={cert.id}
                      className="flex flex-col overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      {/* Imagen */}
                      <div className="relative w-full aspect-[3/2] overflow-hidden">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-all duration-300"
                          // grayscale group-hover:grayscale-0
                        />
                      </div>

                      {/* Contenido */}
                      <CardContent className="flex flex-col flex-grow px-5 py-4">
                        <h3 className="text-base font-semibold mb-1">
                          {cert.title}
                        </h3>

                        <p className="text-xs text-gray-600 mb-3 line-clamp-3 text-justify">
                          {cert.description}
                        </p>

                        {/* Empuja los botones al fondo */}
                        <div className="mt-auto flex flex-col items-start gap-2">
                          <Link
                            href={`/certificaciones/${cert.slug}`}
                            className="text-secondary-color text-sm font-semibold hover:underline"
                          >
                            {t("viewDetails")} →
                          </Link>

                          <Link
                            href={`mailto:contact@cybertower.com?subject=Request%20for%20Quote%20-%20${encodeURIComponent(
                              cert.title
                            )}&body=Hello,%20I%20would%20like%20to%20request%20a%20quote%20for%20the%20service:%20${encodeURIComponent(
                              cert.title
                            )}.%0A%0AThank%20you.`}
                            className="rounded-lg bg-secondary-color hover:bg-primary-color text-white font-semibold py-2 px-3 text-sm transition-all"
                          >
                            {l("cta")}
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  )
                )}
              </div>
            </section>
          );
        })()}

        {/* --- TODAS LAS CATEGORÍAS RESTANTES EN 2 COLUMNAS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories
            .slice(1)
            .map(
              (cat: {
                nombre: string;
                descripcion: string;
                items: string[];
              }) => {
                const cert = certificaciones.find((c: { id: string }) =>
                  cat.items.includes(c.id)
                );
                if (!cert) return null;

                return (
                  <section key={cat.nombre} className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2 border-l-4 border-secondary-color pl-3">
                        {cat.nombre}
                      </h2>
                      <p className="text-gray-500">{cat.descripcion}</p>
                    </div>

                    <Card className="flex flex-col overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                      {/* Imagen */}
                      <div className="relative w-full aspect-[3/2] overflow-hidden">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-all duration-300"
                          // grayscale group-hover:grayscale-0
                        />
                      </div>

                      {/* Contenido */}
                      <CardContent className="flex flex-col grow px-5 py-4">
                        <h3 className="text-base font-semibold mb-1">
                          {cert.title}
                        </h3>

                        <p className="text-xs text-gray-600 mb-3 line-clamp-3 text-justify">
                          {cert.description}
                        </p>
                        {/* Empuja los botones al fondo */}
                        <div className="mt-auto flex flex-col items-start gap-2">
                          <Link
                            href={`/certificaciones/${cert.slug}`}
                            className="text-secondary-color text-sm font-semibold hover:underline"
                          >
                            {t("viewDetails")} →
                          </Link>

                          <Link
                            href={`mailto:contact@cybertower.com?subject=Request%20for%20Quote%20-%20${encodeURIComponent(
                              cert.title
                            )}&body=Hello,%20I%20would%20like%20to%20request%20a%20quote%20for%20the%20service:%20${encodeURIComponent(
                              cert.title
                            )}.%0A%0AThank%20you.`}
                            className="rounded-lg bg-secondary-color hover:bg-primary-color text-white font-semibold py-2 px-3 text-sm transition-all"
                          >
                            {l("cta")}
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </section>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
}
