import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import SolucionDetail from "../components/detail";

// ✅ Tipos
type SolucionPageProps = {
  params: { slug: string; locale: string };
};

// ✅ Genera los slugs estáticos en todos los idiomas
export async function generateStaticParams() {
  const locales = ["es", "en"]; // idiomas disponibles
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

// ✅ Página estática exportable
export default async function SolucionDetailPage({
  params,
}: SolucionPageProps) {
  const { slug, locale } = params;

  const t = await getTranslations({ locale, namespace: "AllSolutions" });
  const soluciones = t.raw("list");
  const solucion = soluciones.find((s: { slug: string }) => s.slug === slug);

  if (!solucion) return notFound();

  return <SolucionDetail cert={solucion} />;
}
