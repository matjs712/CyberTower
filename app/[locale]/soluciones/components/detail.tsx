import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function SolucionDetail({
  cert,
}: {
  cert: {
    title: string;
    description: string;
    image?: string;
    content: string;
  };
}) {
  const t = useTranslations("solucionDetail");

  return (
    <div className="mb-24">
      {/* === HERO === */}
      <div className="relative max-w-7xl mx-auto px-8 pt-28 pb-32">
        {cert.image && (
          <div className="absolute inset-0 -z-10">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              priority
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white pointer-events-none" />
          </div>
        )}

        <div className="max-w-3xl space-y-6 mb-6">
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

      {/* === CONTENT === */}
      <div className="max-w-5xl mx-auto px-8">
        <div
          className="
            prose max-w-none dark:prose-invert 
            prose-headings:text-primary-color
            prose-a:text-primary-color prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-md
          "
          dangerouslySetInnerHTML={{ __html: cert.content }}
        />

        {/* === CTA dinámico === */}
        <div className="mt-12 flex justify-center">
          <Link
            href={`mailto:contacto@tucorreo.com?subject=${encodeURIComponent(
              t("cta")
            )}%20-%20${encodeURIComponent(
              cert.title
            )}&body=Hola,%20quiero%20solicitar%20un%20presupuesto%20para:%20${encodeURIComponent(
              cert.title
            )}.%0A%0AGracias.`}
            className="w-full md:w-auto px-10 rounded-xl text-center bg-secondary-color hover:bg-primary-color text-white font-semibold py-3 transition-all"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </div>
  );
}
