"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { MarqueeItem, Marquee, MarqueeContent, MarqueeFade } from "./marquee";
import { Mail, MessageCircle, MessageCircleCode } from "lucide-react";
import Image from "next/image";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { logos } from "../logos/logos";

const Hero = () => (
  <main className="flex flex-col gap-16 px-8 py-6">
    <header className="relative flex h-[90vh] flex-col items-center justify-center overflow-hidden rounded-2xl bg-transparent px-6 text-left text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-fallback.jpg"
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl space-y-6"
      >
        <h1 className="text-balance text-5xl font-semibold leading-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-secondary-light-color to-white bg-clip-text text-transparent">
          Protege tu organización con soluciones avanzadas de ciberseguridad
        </h1>

        <p className="text-lg text-gray-300">
          Implementamos estrategias de seguridad y cumplimiento normativo
          basadas en ISO 27001, NIST y la Ley 21.633.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row" />

        <div className="w-full mt-6 flex flex-row items-center justify-between text-sm text-gray-400">
          <div className="flex-1 flex flex-col max-w-xs gap-2">
            <div className="flex flex-row gap-3 items-center text-secondary-light-color">
              <LinkedInLogoIcon aria-label="LinkedIn" className="size-6" />
              <MessageCircleCode aria-label="Mensajería" className="size-6" />
              <Mail aria-label="Correo" className="size-6" />
            </div>
            <p>
              En Cyberhub ayudamos a empresas a fortalecer su infraestructura
              digital, prevenir incidentes y cumplir con los nuevos estándares
              nacionales e internacionales en ciberseguridad.
            </p>
          </div>

          <div className="flex-1 max-w-lg">
            <p>
              Desde la evaluación de riesgos hasta la implementación de un
              Sistema de Gestión de Seguridad de la Información (SGSI),
              acompañamos a tu organización en cada etapa del proceso.
            </p>

            <div className="flex justify-start flex-row gap-4 items-center mt-4">
              <Button
                asChild
                variant="default"
                className="rounded-full px-1 bg-neutral-700 w-fit"
              >
                <Link
                  href="/contacto"
                  aria-label="Ir a la página de contacto"
                  className="flex flex-row gap-2 px-1"
                >
                  <div className="bg-secondary-light-color p-2 rounded-full">
                    <MessageCircle className="size-5" aria-hidden="true" />
                  </div>
                  <span className="pr-2">Contáctanos</span>
                </Link>
              </Button>

              <div className="flex -space-x-3">
                <Image
                  width={32}
                  height={32}
                  src="/user.jpg"
                  alt="Foto de cliente satisfecho"
                  className="size-8 rounded-full border-2 border-secondary-light-color object-cover"
                />
                <Image
                  width={32}
                  height={32}
                  src="/user-1.jpg"
                  alt="Foto de cliente satisfecho"
                  className="size-8 rounded-full border-2 border-blue-400 object-cover"
                />
                <Image
                  width={32}
                  height={32}
                  src="/user.jpg"
                  alt="Foto de cliente satisfecho"
                  className="size-8 rounded-full border-2 border-blue-400 object-cover"
                />
              </div>

              <div className="text-white">
                <p>
                  <strong>2.7k+</strong> reseñas positivas
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>

    <section
      className="flex flex-col items-center justify-center gap-8 rounded-xl bg-secondary py-8 pb-18"
      aria-labelledby="trusted-heading"
    >
      <h2
        id="trusted-heading"
        className="text-center text-xl font-semibold text-white"
      >
        Empresas que confían en nosotros
      </h2>
      <p className="mb-0 text-balance font-medium text-muted-foreground">
        Confían en Cyberhub para fortalecer su cultura digital y seguridad.
      </p>

      <div className="flex size-full items-center justify-center">
        <Marquee>
          <MarqueeFade className="from-secondary" side="left" />
          <MarqueeFade className="from-secondary" side="right" />
          <MarqueeContent pauseOnHover={false}>
            {logos.map((logo) => (
              <MarqueeItem className="mx-16 size-12" key={logo.name}>
                <Link
                  href={logo.url}
                  aria-label={`Visitar sitio de ${logo.name}`}
                >
                  <logo.icon className="size-full" aria-hidden="true" />
                </Link>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  </main>
);

export default Hero;
