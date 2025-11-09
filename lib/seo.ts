export const defaultMetadata = {
  metadataBase: new URL("https://www.cybertower.cl"),
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
  title: {
    default: "Cyber-Tower — Digital Solutions & Cybersecurity",
    template: "%s | Cyber-Tower",
  },
  description:
    "Consulting in cybersecurity, digital culture, and technological transformation. Strengthen your organization’s security and efficiency with Cyber-Tower.",
  keywords: [
    "cybersecurity",
    "ISO 27001",
    "digital consulting",
    "digital transformation",
    "information security",
    "awareness training",
    "change management",
  ],
  openGraph: {
    title: "Cyber-Tower — Culture and Transformation in Cybersecurity",
    description:
      "Over 1,700 organizations are enhancing their digital culture. Discover how Cyber-Tower drives secure transformation.",
    url: "https://www.cybertower.cl",
    siteName: "Cyber-Tower",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cyber-Tower — Secure Digital Transformation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.cybertower.cl",
    languages: {
      "es-CL": "https://www.cybertower.cl/es",
      "en-US": "https://www.cybertower.cl/en",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber-Tower — Secure Digital Culture & Transformation",
    description:
      "We empower organizational cybersecurity through culture, change management, and digital transformation strategies.",
    images: ["/og-image.jpg"],
  },
};
