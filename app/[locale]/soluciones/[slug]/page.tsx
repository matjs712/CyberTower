import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import SolucionDetail from "../components/detail";

export default async function SolucionDetailPage({
  params,
}: {
  params: {
    slug: string;
    locale: string;
  };
}) {
  const { slug } = await params;

  const t = await getTranslations("AllSolutions");
  const soluciones = t.raw("list");
  const solucion = soluciones.find((s: { slug: string }) => s.slug === slug);

  if (!solucion) return notFound();

  return <SolucionDetail cert={solucion} />;
}
