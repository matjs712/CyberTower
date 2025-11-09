"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
// import { logosHero } from "../logos/logos";
// import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "./marquee";

export default function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative w-full h-screen flex flex-col text-white overflow-hidden">
      {/* === VIDEO DE FONDO === */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          // poster="/bghero.jpg"
          className="absolute inset-0 w-full h-full object-cover bg-foreground"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>

        {/* Overlay de gradiente para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      </div>

      {/* === CONTENIDO HERO === */}
      <div className="relative z-10 flex flex-1 items-center justify-center lg:justify-start px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight drop-shadow-md">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-200 drop-shadow-sm">
            {t("paragraph1")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button asChild className="rounded-full bg-neutral-800">
              <Link href="mailto:contacto@Cyberhub.cl">
                <Mail className="mr-2 size-5" /> {t("buttonContact")}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full bg-secondary-color text-white border-secondary-color"
            >
              <Link
                href="https://www.linkedin.com/company/Cyberhub-cl/"
                target="_blank"
              >
                <LinkedInLogoIcon className="mr-2 size-5" /> LinkedIn
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* === LOGOS DE CONFIANZA === */}
      {/* <div className="bg-secondary-color py-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-white">
            {t("trustedHeading")}
          </h2>
          <p className="text-white/80">{t("trustedSubheading")}</p>
        </div>

        <div className="flex items-center justify-center">
          <Marquee>
            <MarqueeFade className="from-secondary-color" side="left" />
            <MarqueeFade className="from-secondary-color" side="right" />
            <MarqueeContent
              pauseOnHover={false}
              speed={18}
              className="flex items-center justify-center gap-10"
            >
              {logosHero.map((logo) => (
                <MarqueeItem
                  key={logo.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    width={100}
                    height={100}
                    src={logo.url}
                    alt={logo.name}
                    className="max-h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </div>
      </div> */}
    </section>
  );
}
