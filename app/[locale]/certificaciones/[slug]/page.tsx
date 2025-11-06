import { notFound } from "next/navigation";
import CertificacionDetail from "../components/detail";
import { getTranslations } from "next-intl/server";

// ✅ define las rutas que deben generarse estáticamente
export async function generateStaticParams() {
  // Obtiene traducciones de ambos idiomas
  const locales = ["es", "en"];

  // Carga las certificaciones desde los archivos de traducción
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

// ✅ página estática exportable
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

  return <CertificacionDetail cert={cert} />;
}
