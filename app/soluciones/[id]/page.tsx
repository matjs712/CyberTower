import { Soluciones } from "@/lib/utils";
import { notFound } from "next/navigation";
import SolucionDetail from "../components/detail";

export default function SolucionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const cert = Soluciones.find((c) => c.id === params.id);
  if (!cert) return notFound();
  return <SolucionDetail cert={cert} />;
}
