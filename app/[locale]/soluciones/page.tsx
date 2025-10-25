"use client";

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
    <div className="mb-20">
      {/* HERO */}
      <div className="p-8 space-y-6 flex flex-col sm:flex-row justify-between relative items-center max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold sm:absolute max-w-3xl leading-tight">
          {t("hero.title")}
        </h1>
        <div></div>
        <div>
          <Image
            src="/soluciones.png"
            alt={t("hero.alt")}
            width={400}
            height={400}
            className="rounded-md object-cover"
          />
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-6xl mx-auto px-8 mb-16">
        <p className="text-lg text-gray-700 leading-relaxed">
          {t.rich("intro", {
            strong: (chunks) => (
              <strong className="font-semibold text-primary-color">
                {chunks}
              </strong>
            ),
            bold: (chunks) => <span className="font-semibold">{chunks}</span>,
          })}
        </p>
      </div>

      {/* CATEGORÍAS */}
      <div className="max-w-6xl mx-auto space-y-12 px-8">
        {categories.map(
          (cat: { nombre: string; descripcion: string; items: string[] }) => {
            const services = soluciones.filter((service: { id: string }) =>
              cat.items.includes(service.id)
            );

            return (
              <section key={cat.nombre} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2 border-l-4 border-primary-color pl-3">
                    {cat.nombre}
                  </h2>
                  <p className="text-gray-600">{cat.descripcion}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {services.map(
                    (service: {
                      id: string;
                      image: string;
                      title: string;
                      description: string;
                    }) => (
                      <Card
                        key={service.id}
                        className="overflow-hidden border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                      >
                        <Link
                          href={`/soluciones/${service.id}`}
                          className="block h-full"
                        >
                          {/* Imagen */}
                          <div className="flex justify-center items-center p-0 mb-4">
                            <div className="relative size-30 md:w-72 md:h-32 rounded-xs overflow-hidden">
                              <Image
                                src={service.image || "/soluciones/default.jpg"}
                                alt={service.title}
                                fill
                                className="object-cover p-0 transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          </div>

                          {/* Contenido */}
                          <CardContent className="px-6 pb-6 flex flex-col justify-between h-[200px]">
                            <h3 className="text-lg font-semibold mb-2 max-w-60">
                              {service.title}
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
                              {service.description}
                            </p>
                            <span className="text-primary-color text-sm font-semibold group-hover:underline">
                              {t("viewDetails")} →
                            </span>
                          </CardContent>
                        </Link>
                      </Card>
                    )
                  )}
                </div>
              </section>
            );
          }
        )}
      </div>
    </div>
  );
}
