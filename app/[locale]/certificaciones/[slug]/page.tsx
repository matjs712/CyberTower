import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import CertificacionDetail from "../components/detail";
import { Metadata } from "next/types";

// ✅ Generación de rutas estáticas en todos los idiomas
export async function generateStaticParams() {
  const locales = ["es", "en"];
  const allParams: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const t = await getTranslations({ locale, namespace: "certifications" });
    const certificaciones = t.raw("list");

    certificaciones.forEach((item: { slug: string }) => {
      allParams.push({ locale, slug: item.slug });
    });
  }

  return allParams;
}

// ✅ Metadata dinámica para SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const { slug, locale } = params;
  const t = await getTranslations({ locale, namespace: "certifications" });
  const certificaciones = t.raw("list");
  const cert = certificaciones.find((s: { slug: string }) => s.slug === slug);

  if (!cert) {
    return {
      title: "Certificación no encontrada | Cyberhub",
      description: "La certificación solicitada no existe o fue movida.",
    };
  }

  return {
    title: `${cert.title} | Cyberhub`,
    description: cert.description,
    openGraph: {
      title: cert.title,
      description: cert.description,
      images: [
        {
          url: cert.image || "/cert.jpg",
          alt: cert.title,
        },
      ],
    },
  };
}

// ✅ Página principal
export default async function CertificacionDetailPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { slug, locale } = params;
  const t = await getTranslations({ locale, namespace: "certifications" });
  const certificaciones = t.raw("list");

  const cert = certificaciones.find((s: { slug: string }) => s.slug === slug);

  if (!cert) return notFound();

  return (
    <section className="bg-foreground text-white min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* === ENCABEZADO HERO === */}
        <header className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {cert.title}
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              {cert.description}
            </p>
          </div>

          {/* {cert.image && (
            <div className="flex-1 relative h-64 md:h-80 w-full overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={cert.image}
                alt={cert.title}
                className="object-cover w-full h-full"
              />
            </div>
          )} */}
        </header>

        {/* === CONTENIDO DETALLADO === */}
        <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg backdrop-blur-sm p-8 md:p-12">
          <CertificacionDetail cert={cert} />
        </div>
      </div>
    </section>
  );
}
