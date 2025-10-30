"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { MarqueeItem, Marquee, MarqueeContent, MarqueeFade } from "./marquee";
import { Mail, MessageCircle, MessageCircleCode } from "lucide-react";
import Image from "next/image";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { logos } from "../logos/logos";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("home");

  const phone = "56912345678";
  const message = encodeURIComponent(
    "Hola 👋, quiero más información sobre sus soluciones de ciberseguridad."
  );

  return (
    <main className="flex flex-col gap-0 sm:gap-16 px-1 lg:px-8 py-6">
      {/* === HERO PRINCIPAL === */}
      <header className="relative flex sm:h-[90vh] h-fit flex-col items-center justify-center overflow-hidden sm:rounded-2xl rounded-b-none rounded-t-2xl bg-transparent text-left text-white pb-6 sm:pb-0">
        <Image
          src={"/bghero.jpg"}
          alt="cybertower"
          width={3000}
          height={3000}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-fallback.jpg"
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video> */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/30 via-black/80 to-white/10 " />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-0 sm:space-y-6"
        >
          <div className="p-4 pt-12 sm:px-0 sm:pt-0 space-y-6">
            <h1 className="text-balance text-3xl font-normal sm:font-semibold leading-tight md:text-5xl lg:text-6xl text-white">
              {t("title")}
            </h1>

            <p className="text-md text-white sm:text-gray-300">
              {t("paragraph1")}
            </p>
          </div>

          <div className="sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row" />

          <div className="w-full mt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-white p-4 sm:px-0">
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex flex-row gap-3 items-center text-secondary-color">
                <Link
                  href="https://www.linkedin.com/company/Cyber-Tower-cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-secondary-color hover:text-secondary-light-color transition-colors"
                >
                  <LinkedInLogoIcon className="size-6" />
                </Link>

                {/* 💬 WhatsApp */}
                <Link
                  href="https://wa.me/56912345678?text=Hola%20👋,%20quiero%20más%20información%20sobre%20los%20servicios%20de%20Cyber-Tower."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-secondary-color hover:text-secondary-light-color transition-colors"
                >
                  <MessageCircleCode className="size-6" />
                </Link>

                {/* ✉️ Correo */}
                <Link
                  href="mailto:contacto@Cyber-Tower.cl"
                  aria-label="Correo"
                  className="text-secondary-color hover:text-secondary-light-color transition-colors"
                >
                  <Mail className="size-6" />
                </Link>
              </div>
              <p>{t("paragraph2")}</p>
            </div>

            <div className="flex-1 max-w-lg ">
              <p className="hidden sm:block">{t("paragraph3")}</p>

              <div className="flex justify-start flex-row gap-4 items-center mt-4">
                <Button
                  asChild
                  variant="default"
                  className="rounded-full px-1 bg-neutral-700 w-fit"
                >
                  <Link
                    href={`https://wa.me/${phone}?text=${message}`}
                    aria-label="Enviar mensaje"
                    className="flex flex-row gap-2 px-1"
                  >
                    <div className="bg-secondary-color p-1 rounded-full">
                      <MessageCircle className="size-5" aria-hidden="true" />
                    </div>
                    <span className="pr-2">{t("buttonContact")}</span>
                  </Link>
                </Button>

                <div className="-space-x-3 hidden sm:flex">
                  <Image
                    width={32}
                    height={32}
                    src="/user.jpg"
                    alt="Foto de cliente satisfecho"
                    className="size-8 rounded-full border-2 object-cover"
                  />
                  <Image
                    width={32}
                    height={32}
                    src="/user-1.jpg"
                    alt="Foto de cliente satisfecho"
                    className="size-8 rounded-full border-2  object-cover"
                  />
                  <Image
                    width={32}
                    height={32}
                    src="/user.jpg"
                    alt="Foto de cliente satisfecho"
                    className="size-8 rounded-full border-2  object-cover"
                  />
                </div>

                <div className="text-white hidden sm:block">
                  <p>
                    <strong>{t("reviewsKpi")}</strong> {t("reviews")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* === LOGOS === */}
      <section
        className="flex flex-col sm:items-center items-start justify-center gap-8 sm:rounded-xl sm:rounded-t-xl rounded-t-none rounded-b-xl bg-primary-light-color py-8 pb-5"
        aria-labelledby="trusted-heading"
      >
        <div className="flex-wrap justify-center sm:items-center items-start gap-2 sm:gap-8 mt-4 sm:hidden flex px-4 sm:px-0">
          {[
            { code: "cl", name: "Chile" },
            { code: "us", name: "EE.UU." },
            { code: "es", name: "España" },
            { code: "mx", name: "México" },
            { code: "br", name: "Brasil" },
            { code: "ar", name: "Argentina" },
            { code: "co", name: "Colombia" },
          ].map((country) => (
            <div key={country.code} className="flex items-center gap-2">
              <Image
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={`Bandera de ${country.name}`}
                width={32}
                height={24}
                className="rounded shadow"
              />
              <span className="text-sm font-medium text-white sm:flex hidden">
                {country.name}
              </span>
            </div>
          ))}
        </div>
        <div className="px-4 space-y-4 flex flex-col items-center justify-center">
          <h2
            id="trusted-heading"
            className="sm:text-center text-2xl font-semibold text-white"
          >
            {t("trustedHeading")}
          </h2>
          <p className="text-balance font-medium text-white">
            {t("trustedSubheading")}
          </p>
        </div>

        <div className="flex-wrap justify-center items-center gap-2 sm:gap-8 mt-4 sm:flex hidden">
          {[
            { code: "cl", name: "Chile" },
            { code: "us", name: "EE.UU." },
            { code: "es", name: "España" },
            { code: "mx", name: "México" },
            { code: "br", name: "Brasil" },
            { code: "ar", name: "Argentina" },
            { code: "co", name: "Colombia" },
          ].map((country) => (
            <div key={country.code} className="flex items-center gap-2">
              <Image
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={`Bandera de ${country.name}`}
                width={32}
                height={24}
                className="rounded shadow"
              />
              <span className="text-sm font-medium text-white sm:flex hidden">
                {country.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex size-full items-center justify-center">
          <Marquee>
            <MarqueeFade className="from-transparent" side="left" />
            <MarqueeFade className="from-transparent" side="right" />
            <MarqueeContent
              pauseOnHover={false}
              delay={0}
              speed={15}
              className="flex flex-row items-center justify-center gap-4"
            >
              {logos.map((logo) => (
                <MarqueeItem
                  className="mx-8 flex justify-center"
                  key={logo.name}
                >
                  <Image
                    width={120}
                    height={120}
                    src={logo.url}
                    className="h-auto w-auto object-contain"
                    alt={logo.name}
                  />
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </div>
      </section>
    </main>
  );
};

export default Hero;
