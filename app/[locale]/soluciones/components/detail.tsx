import { Check, Clock, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { JSX } from "react";

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

  const parsedSections = parseSections(cert.content);

  return (
    <div className="mb-24">
      {/* === HERO FULL WIDTH === */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        {cert.image && (
          <div className="absolute inset-0 -z-10">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-white/20 via-white/80 to-white" />
          </div>
        )}

        {/* CONTENIDO CENTRADO */}
        <div className="max-w-7xl mx-auto px-8 pt-24 pb-40">
          <div className="max-w-3xl space-y-6">
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
      </div>

      {/* === CARD CONTENT === */}
      <div className="relative max-w-5xl mx-auto px-8 -mt-16 z-10">
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-black/5 p-8 md:p-10 space-y-10">
          {parsedSections.length > 0 ? (
            parsedSections.map((section, idx) => (
              <div
                key={idx}
                className="space-y-4 pb-8 border-b last:border-b-0 border-black/5"
              >
                {/* TÍTULO + ICONO */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-color/10 flex items-center justify-center">
                    {section.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h3>
                </div>

                {/* CUERPO */}
                <div
                  className="prose max-w-none text-gray-700 dark:text-gray-300 [&_ul]:list-none [&_ul]:pl-0 [&_ul]:ml-0"
                  dangerouslySetInnerHTML={{ __html: section.body }}
                />
              </div>
            ))
          ) : (
            // fallback si el contenido NO tiene h3
            <div
              className="prose max-w-none text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: cert.content }}
            />
          )}

          {/* CTA */}
          <div className="mt-16 flex justify-center">
            <Link
              href={`mailto:contacto@tucorreo.com?subject=${encodeURIComponent(
                t("cta")
              )}%20-%20${encodeURIComponent(
                cert.title
              )}&body=Hola,%20quiero%20solicitar%20un%20presupuesto%20para:%20${encodeURIComponent(
                cert.title
              )}.%0A%0AGracias.`}
              className="inline-flex items-center justify-center gap-2 px-12 py-4 rounded-full bg-secondary-color hover:bg-primary-color text-white font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function parseSections(html: string) {
  if (typeof window === "undefined") return []; // ⛔ Evita SSR error

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const sections: {
    title: string;
    icon: JSX.Element;
    body: string;
  }[] = [];

  doc.querySelectorAll("h3").forEach((h3) => {
    const title = h3.textContent?.trim() || "";
    const bodyElements: string[] = [];

    let next = h3.nextElementSibling;
    while (next && next.tagName !== "H3") {
      // QUITAR BULLETS Y AGREGAR CHECKS AZULES
      if (next.tagName === "UL") {
        next.classList.remove("list-disc", "list-inside");
        next.classList.add("list-none", "pl-0", "ml-0");

        next.querySelectorAll("li").forEach((li) => {
          const text = li.textContent?.trim() || "";
          li.innerHTML = `
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>${text}</span>
            </div>
          `;
        });
      }

      bodyElements.push(next.outerHTML);
      next = next.nextElementSibling;
    }

    // ICONOS SEGÚN TÍTULO
    let icon = <Shield className="w-5 h-5 text-primary-color" />;

    if (
      title.toLowerCase().includes("tiempo") ||
      title.toLowerCase().includes("duración")
    )
      icon = <Clock className="w-5 h-5 text-primary-color" />;

    if (
      title.toLowerCase().includes("propuesta") ||
      title.toLowerCase().includes("incluye")
    )
      icon = <Check className="w-5 h-5 text-primary-color" />;

    sections.push({
      title,
      icon,
      body: bodyElements.join(""),
    });
  });

  return sections;
}
