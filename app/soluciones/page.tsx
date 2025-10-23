import { Card, CardContent } from "@/components/ui/card";
import { Soluciones } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function ServiciosPage() {
  const categorias = [
    {
      nombre: "Cultura y Concientización en Ciberseguridad",
      descripcion:
        "Iniciativas diseñadas para fortalecer la cultura organizacional, reducir el riesgo humano y transformar la ciberseguridad en un valor compartido por toda la empresa.",
      items: Soluciones.filter((s) => s.id === "1"),
    },
    {
      nombre: "Estrategia, Marca y Posicionamiento Digital",
      descripcion:
        "Soluciones que integran comunicación, reputación corporativa y liderazgo tecnológico, posicionando a tu organización como referente en seguridad y transformación digital.",
      items: Soluciones.filter((s) => s.id === "2"),
    },
    {
      nombre: "Gobernanza, Riesgo y Cumplimiento",
      descripcion:
        "Consultorías orientadas a la gestión integral de ciberseguridad: planificación estratégica, gobierno corporativo, cumplimiento normativo y mejora continua.",
      items: Soluciones.filter((s) => s.id === "3"),
    },
  ];

  return (
    <div className="mb-20">
      <div className="p-8 space-y-6 flex flex-col sm:flex-row justify-between relative items-center max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold sm:absolute max-w-3xl leading-tight">
          Nuestros soluciones: <br /> Impulsa la seguridad, estrategia y
          resiliencia digital de tu organización
        </h1>
        <div></div>
        <div>
          <Image
            src={"/soluciones.png"}
            alt="soluciones de ciberseguridad"
            width={400}
            height={400}
            className="rounded-md object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 mb-16">
        <p className="text-lg text-gray-700 leading-relaxed">
          En <span className="font-semibold text-primary-color">Cyberhub</span>{" "}
          diseñamos e implementamos{" "}
          <strong>soluciones integrales de ciberseguridad</strong> que abarcan
          la concientización humana, la gestión estratégica y la transformación
          digital segura. Cada solución está pensada para{" "}
          <span className="font-semibold">
            fortalecer la resiliencia, el cumplimiento y la confianza
          </span>{" "}
          de tu organización frente a los desafíos del mundo digital.
        </p>
      </div>

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
              {cat.items.map((serv) => (
                <Card
                  key={serv.id}
                  className="overflow-hidden border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <Link
                    href={`/soluciones/${serv.id}`}
                    className="block h-full"
                  >
                    <div className="flex justify-center items-center p-0 mb-4">
                      <div className="relative size-30 md:w-72 md:h-32 rounded-xs overflow-hidden">
                        <Image
                          src={serv.image || "/soluciones/default.jpg"}
                          alt={serv.title}
                          fill
                          className="object-cover p-0 transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <CardContent className="px-6 pb-6 flex flex-col justify-between h-[200px]">
                      <h3 className="text-lg font-semibold mb-2 max-w-60">
                        {serv.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
                        {serv.description}
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
