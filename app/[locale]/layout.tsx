import { Poppins } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/sections/footer";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import Image from "next/image";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

/* ✅ Metadata global */
export const metadata = defaultMetadata;

/* ✅ Fuente global */
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/* ✅ Generación de rutas estáticas por idioma */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ✅ Layout principal multilenguaje */
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Validar idioma
  if (!hasLocale(routing.locales, locale)) notFound();

  // Cargar traducciones del idioma actual
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  // Establecer locale para SSR (necesario para next-intl)
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans antialiased bg-gradient-to-b from-[#535353] via-[#161b22] to-[#1f2937]`}
      >
        {/* Proveedor de traducciones */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <FooterSection />
          </ThemeProvider>
        </NextIntlClientProvider>

        {/* ✅ LinkedIn Insight Tag */}
        <Script id="linkedin-insight-init" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "8147066";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>

        <Script
          id="linkedin-insight-lib"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(l) {
                if (!l){
                  window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                  window.lintrk.q=[];
                }
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript"; b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            `,
          }}
        />

        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=8147066&fmt=gif"
          />
        </noscript>
      </body>
    </html>
  );
}
