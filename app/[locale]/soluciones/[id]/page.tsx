import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import SolucionDetail from "../components/detail";

export default async function SolucionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const t = await getTranslations("AllSolutions");
  const soluciones = t.raw("list");

  const solucion = soluciones.find((s: { id: string }) => s.id === params.id);

  if (!solucion) return notFound();

  return <SolucionDetail cert={solucion} />;
}
