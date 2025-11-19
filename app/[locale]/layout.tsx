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
import Link from "next/link";

export const metadata = defaultMetadata;

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) notFound();

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            // defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <FooterSection />
          </ThemeProvider>
        </NextIntlClientProvider>

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
        {/* === BOTÓN FLOTANTE DE CONTACTO === */}
        <Link
          href="mailto:contacto@cyberhub.cl"
          aria-label="Contáctanos"
          className="
    fixed 
    bottom-6 
    right-6 
    z-50
    flex 
    items-center 
    gap-2 
    bg-secondary-color 
    text-white 
    font-semibold 
    px-5 
    py-3 
    rounded-full 
    shadow-xl 
    shadow-secondary-color/40 
    hover:shadow-secondary-color/60 
    hover:scale-[1.05] 
    transition-all 
    duration-300
  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 21l1.8-4.6A7.7 7.7 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Contáctanos
        </Link>
      </body>
    </html>
  );
}
