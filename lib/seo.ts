export const defaultMetadata = {
  metadataBase: new URL("https://www.cyberhub.cl"),
  title: {
    default: "Cyberhub — Soluciones Digitales y Ciberseguridad",
    template: "%s | Cyberhub",
  },
  description:
    "Consultoría en ciberseguridad, cultura digital y transformación tecnológica. Impulsa la seguridad y eficiencia de tu organización con Cyberhub.",
  keywords: [
    "ciberseguridad",
    "ISO 27001",
    "consultoría digital",
    "transformación digital",
    "seguridad de la información",
    "awareness",
    "gestión del cambio",
  ],
  openGraph: {
    title: "Cyberhub — Cultura y Transformación en Ciberseguridad",
    description:
      "Más de 1.700 organizaciones están adaptando su cultura digital. Descubre cómo Cyberhub impulsa la transformación segura.",
    url: "https://www.cyberhub.cl",
    siteName: "Cyberhub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cyberhub — Transformación Digital Segura",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  alternates: {
    canonical: "https://www.cyberhub.cl",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyberhub — Cultura y Transformación Digital Segura",
    description:
      "Impulsamos la ciberseguridad organizacional con estrategias de cultura, gestión del cambio y transformación digital.",
    images: ["/og-image.jpg"],
  },
};
