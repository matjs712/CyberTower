import { notFound } from "next/navigation";
import CertificacionDetail from "../components/detail";
import { getTranslations } from "next-intl/server";

export default async function CertificacionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const t = await getTranslations("certifications");
  const certificaciones = t.raw("list");

  const cert = certificaciones.find((s: { id: string }) => s.id === params.id);

  if (!cert) return notFound();

  return <CertificacionDetail cert={cert} />;
}
