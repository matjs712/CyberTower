import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import SolucionDetail from "../components/detail";
import { Metadata } from "next/types";
import Image from "next/image";

// ✅ Tipos
type SolucionPageProps = {
  params: { slug: string; locale: string };
};

// ✅ Genera los slugs estáticos en todos los idiomas
export async function generateStaticParams() {
  const locales = ["es", "en"];
  const allParams: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const t = await getTranslations({ locale, namespace: "AllSolutions" });
    const soluciones = t.raw("list");

    soluciones.forEach((item: { slug: string }) => {
      allParams.push({ locale, slug: item.slug });
    });
  }

  return allParams;
}

// ✅ Metadata dinámica para SEO
export async function generateMetadata({
  params,
}: SolucionPageProps): Promise<Metadata> {
  const { slug, locale } = params;
  const t = await getTranslations({ locale, namespace: "AllSolutions" });
  const soluciones = t.raw("list");
  const solucion = soluciones.find((s: { slug: string }) => s.slug === slug);

  if (!solucion) {
    return {
      title: "Solución no encontrada | Cyberhub",
      description: "La solución que buscas no existe o fue movida.",
    };
  }

  return {
    title: `${solucion.title} | Cyberhub`,
    description: solucion.description,
    openGraph: {
      title: solucion.title,
      description: solucion.description,
      images: [
        {
          url: solucion.image || "/soluciones.png",
          alt: solucion.title,
        },
      ],
    },
  };
}

// ✅ Página principal
export default async function SolucionDetailPage({
  params,
}: SolucionPageProps) {
  const { slug, locale } = params;

  const t = await getTranslations({ locale, namespace: "AllSolutions" });
  const soluciones = t.raw("list");
  const solucion = soluciones.find((s: { slug: string }) => s.slug === slug);

  if (!solucion) return notFound();

  return (
    <section className="bg-foreground text-white min-h-screen py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* === ENCABEZADO HERO === */}
        <header className="flex flex-col md:flex-row items-center gap-12 mb-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              {solucion.title}
            </h1>
            <p className="text-white text-lg leading-relaxed">
              {solucion.description}
            </p>
          </div>

          {solucion.image && (
            <div className="flex-1 relative h-64 md:h-80 w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={solucion.image}
                width={200}
                height={200}
                alt={solucion.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}
        </header>

        {/* === CONTENIDO DETALLADO === */}
        <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg backdrop-blur-sm p-8 md:p-12">
          <SolucionDetail cert={solucion} />
        </div>
      </div>
    </section>
  );
}
