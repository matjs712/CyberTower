import { Card, CardContent } from "@/components/ui/card";
import { certificaciones } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CertificacionesPage() {
  const categorias = [
    {
      nombre: "Gestión de la Calidad",
      descripcion:
        "Acreditaciones que garantizan la mejora continua, la satisfacción del cliente y la excelencia en los procesos.",
      items: certificaciones.filter((c) => c.id === "1"),
    },
    {
      nombre: "Gestión Ambiental y Energética",
      descripcion:
        "Certificaciones enfocadas en la sostenibilidad y la eficiencia en el uso de recursos naturales y energéticos.",
      items: certificaciones.filter((c) => ["2", "6"].includes(c.id)),
    },
    {
      nombre: "Seguridad, Ética y Cumplimiento",
      descripcion:
        "Estándares internacionales que fortalecen la seguridad laboral, la información y la integridad corporativa.",
      items: certificaciones.filter((c) => ["3", "4", "5"].includes(c.id)),
    },
  ];

  return (
    <div className="mb-20">
      {/* Hero Section */}
      <div className="p-8 space-y-6 flex flex-col sm:flex-row justify-between relative items-center max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold sm:absolute max-w-3xl leading-tight">
          Certificaciones ISO: <br /> Mejora la calidad, seguridad y
          sostenibilidad de tu organización
        </h1>
        <div></div>
        <div>
          <Image
            src={"/cert.jpg"}
            alt="certificaciones"
            width={700}
            height={700}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Introducción */}
      <div className="max-w-6xl mx-auto px-8 mb-16">
        <p className="text-lg text-gray-700 leading-relaxed">
          En{" "}
          <span className="font-semibold text-primary-color">Cyber Tower</span>{" "}
          ofrecemos un conjunto de certificaciones internacionales basadas en
          normas <span className="font-semibold">ISO</span>, diseñadas para
          fortalecer la calidad, sostenibilidad y seguridad de las
          organizaciones. A continuación, encontrarás nuestras principales
          certificaciones organizadas por ámbito de gestión.
        </p>
      </div>

      {/* Categorías */}
      <div className="max-w-6xl mx-auto space-y-12 px-8">
        {categorias.map((cat) => (
          <section key={cat.nombre} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2 border-l-4 border-primary-color pl-3">
                {cat.nombre}
              </h2>
              <p className="text-gray-600">{cat.descripcion}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cat.items.map((cert) => (
                <Card
                  key={cert.id}
                  className="overflow-hidden border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <Link
                    href={`/certificaciones/${cert.id}`}
                    className="block h-full"
                  >
                    {/* Imagen centrada con margen */}
                    <div className="flex justify-center items-center p-0 mb-4">
                      <div className="relative size-30 md:w-72 md:h-32 rounded-xs overflow-hidden">
                        <Image
                          src={cert.image || "/cert-default.jpg"}
                          alt={cert.title}
                          fill
                          className="object-cover p-0 transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Contenido */}
                    <CardContent className="px-6 pb-6 flex flex-col justify-between h-[200px]">
                      <h3 className="text-lg font-semibold mb-2 max-w-60">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
                        {cert.description}
                      </p>
                      <span className="text-primary-color text-sm font-semibold group-hover:underline">
                        Ver detalles →
                      </span>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
