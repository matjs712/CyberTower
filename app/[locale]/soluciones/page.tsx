"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
// import Link from "next/link";
import { useTranslations } from "next-intl";
import { ActionButton } from "@/components/sections/howWeWork";
import AgendaDialog from "@/components/AgendaDialog";
import { Link } from "@/i18n/navigation";

type Category = {
  nombre: string;
  descripcion: string;
  items: string[];
};

type Service = {
  id: string;
  title: string;
  slug: string;
  href: string;
  description: string;
  content: string;
  image: string;
  duration: string;
  includes: string[];
};

export default function ServiciosPage() {
  const t = useTranslations("servicesPage");
  const s = useTranslations("AllSolutions");
  const h = useTranslations("howWeWork.puntual");

  const categories = t.raw("categories") as Category[];
  const rawServices = s.raw("list") as Service[];

  const soluciones: Service[] = rawServices.map((srv) => {
    const parsed = { duration: "Según proyecto", includes: [] };
    return { ...srv, duration: parsed.duration, includes: parsed.includes };
  });

  return (
    <div className="mb-20">
      {/* HERO */}
      <div className="relative max-w-7xl mx-auto px-8 pt-24 pb-32">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/soluciones.png"
            alt={t("hero.alt")}
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white pointer-events-none" />
        </div>

        <div className="max-w-3xl space-y-6 mb-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
            {t("hero.title")}
          </h1>
        </div>

        <AgendaDialog
          trigger={
            <ActionButton
              className="bg-secondary-color text-white !rounded-full"
              text={h("cta.primary")}
            />
          }
        />
      </div>

      {/* CATEGORÍAS */}
      <div className="max-w-7xl mx-auto px-8 space-y-16">
        {/* === PRIMERA CATEGORÍA === */}
        {(() => {
          const first = categories[0];
          const services = soluciones.filter((s) => first.items.includes(s.id));

          return (
            <section key={first.nombre} className="space-y-6">
              <CategoryBlock category={first} services={services} />
            </section>
          );
        })()}

        {/* === SEGUNDA CATEGORÍA === */}
        {(() => {
          const second = categories[1];
          const services = soluciones.filter((s) =>
            second.items.includes(s.id)
          );

          return (
            <section key={second.nombre} className="space-y-6">
              <CategoryBlock category={second} services={services} />
            </section>
          );
        })()}

        {/* RESTO EN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.slice(2).map((cat) => {
            const services = soluciones.filter((s) => cat.items.includes(s.id));

            return (
              <section key={cat.nombre} className="space-y-6">
                <CategoryBlock category={cat} services={services} />
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ========================= COMPONENTES ============================= */

function CategoryBlock({
  category,
  services,
}: {
  category: Category;
  services: Service[];
}) {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-2 border-l-4 border-primary-color pl-3">
          {category.nombre}
        </h2>
        <p className="text-gray-600">{category.descripcion}</p>
      </div>

      <div
        className={`grid gap-6 ${
          services.length >= 3
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : services.length === 2
            ? "grid-cols-1 sm:grid-cols-2"
            : "grid-cols-1"
        }`}
      >
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const t = useTranslations("servicesPage.card"); // 👈 NUEVO: traducciones del card

  return (
    <Card className="border border-gray-200 shadow-sm rounded-2xl hover:shadow-lg transition-all duration-300 p-6 flex flex-col">
      {/* ICONO + TÍTULO */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary-color/10 flex items-center justify-center overflow-hidden relative">
          <Image src={service.image} alt="" fill className="object-cover" />
        </div>
        <h3 className="text-xl font-semibold">{service.title}</h3>
      </div>

      {/* SUBTÍTULO */}
      <p className="text-sm text-gray-600 mt-2">{service.description}</p>

      {/* DURACIÓN */}
      <div className="border rounded-xl p-4 mt-4 bg-gray-50">
        <p className="text-xs text-gray-500">{t("durationLabel")}</p>
        <p className="font-semibold text-gray-900">
          {service.duration ?? t("defaultDuration")}
        </p>
      </div>

      {/* INCLUYE */}
      {service.includes && service.includes.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="text-sm font-medium">{t("includesLabel")}:</p>
          <ul className="space-y-1 text-sm text-gray-600">
            {service.includes.slice(0, 5).map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-primary-color">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* BOTONES */}
      <div className="mt-auto flex flex-col gap-3 pt-6">
        {/* CTA dinámico */}
        <Link
          href={`mailto:contacto@cyberhub.cl?subject=${encodeURIComponent(
            t("cta")
          )}%20-%20${encodeURIComponent(
            service.title
          )}&body=${encodeURIComponent(`${t("emailBody")} ${service.title}`)}.`}
          className="w-full px-10 rounded-xl text-center bg-secondary-color hover:bg-primary-color text-white font-semibold py-3 transition-all"
        >
          {t("cta")}
        </Link>

        {/* Ver detalles */}
        <Link
          href={`/soluciones/${service.slug}`}
          className="text-primary-color text-sm font-medium text-center hover:underline"
        >
          {t("seeDetails")} →
        </Link>
      </div>
    </Card>
  );
}
