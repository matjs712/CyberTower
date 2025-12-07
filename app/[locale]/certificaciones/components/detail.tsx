import Image from "next/image";

export default function CertificacionDetail({
  cert,
}: {
  cert: {
    title: string;
    description: string;
    image: string;
    content: string;
  };
}) {
  return (
    <div className="mb-24">
      {/* === HERO CON IMAGEN DE FONDO === */}
      <div className="relative max-w-7xl mx-auto px-8 pt-28 pb-32">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            priority
            className="object-cover opacity-40"
          />

          {/* Gradiente igual al HERO de Soluciones */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white pointer-events-none" />
        </div>

        {/* Contenido del HERO */}
        <div className="max-w-4xl space-y-6 mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
            {cert.title}
          </h1>

          {cert.description && (
            <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed drop-shadow">
              {cert.description}
            </p>
          )}
        </div>
      </div>

      {/* === CONTENEDOR DEL CONTENIDO HTML === */}
      <div className="max-w-6xl mx-auto px-8">
        <div
          className="
            prose max-w-none mt-6 dark:prose-invert 
            prose-headings:text-secondary-color
          "
          dangerouslySetInnerHTML={{ __html: cert.content }}
        />
      </div>
    </div>
  );
}
