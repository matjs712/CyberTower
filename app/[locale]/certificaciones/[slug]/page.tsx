import { notFound } from "next/navigation";
import CertificacionDetail from "../components/detail";
import { getTranslations } from "next-intl/server";

export default async function CertificacionDetailPage({
  params,
}: {
  params: {
    slug: string;
    locale: string;
  };
}) {
  const { slug } = await params;
  const t = await getTranslations("certifications");
  const certificaciones = t.raw("list");

  const cert = certificaciones.find((s: { slug: string }) => s.slug === slug);

  if (!cert) return notFound();

  return <CertificacionDetail cert={cert} />;
}
