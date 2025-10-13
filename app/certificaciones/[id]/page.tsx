import { certificaciones } from "@/lib/utils";
import { notFound } from "next/navigation";
import CertificacionDetail from "../components/detail";

export default function CertificacionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const cert = certificaciones.find((c) => c.id === params.id);
  if (!cert) return notFound();
  return <CertificacionDetail cert={cert} />;
}
