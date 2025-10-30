"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const NosotrosPage = () => {
  const t = useTranslations("aboutPage");
  const values = t.raw("values");
  const globalIdentity = t.raw("globalIdentity");

  return (
    <main className="bg-background text-foreground overflow-hidden">
      {/* === HERO === */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-light-color/20 via-transparent to-secondary-color/10 blur-3xl opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t("hero.description")}
          </p>
          <Link
            href="https://wa.me/56912345678?text=Hola%20👋,%20quiero%20más%20información%20sobre%20los%20servicios%20de%20Cyber-Tower."
            target="_blank"
            className="inline-block px-10 py-4 rounded-full bg-secondary-color text-white font-semibold text-lg shadow-md hover:shadow-lg hover:bg-secondary-light-color transition-all duration-300"
          >
            {t("hero.cta")}
          </Link>
        </div>
      </section>

      {/* === NUESTRA IDENTIDAD GLOBAL === */}
      <section className="py-28 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {globalIdentity.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {globalIdentity.paragraphs[0]}
            </p>
            <p className="text-muted-foreground">
              {globalIdentity.paragraphs[3]}
            </p>
          </div>

          {/* Tarjetas de logos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* Cyberhub */}
            <div className="flex flex-col p-8 rounded-3xl bg-card border hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-40 h-40 mb-6">
                <Image
                  src="/logo-b.svg"
                  alt="Cyberhub Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Cyberhub</h3>
              <span className="text-xs uppercase tracking-wide text-secondary-color font-medium mb-2">
                Latinoamérica
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed justify">
                {globalIdentity.paragraphs[1]}
              </p>
            </div>

            {/* Cyber-Tower */}
            <div className="flex flex-col p-8 rounded-3xl bg-card border hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-40 h-40 mb-6">
                <Image
                  src="/logos/Logo_Final_Cyber_TowerLOWRES-03-recortada.png"
                  alt="Cyber-Tower Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Cyber-Tower</h3>
              <span className="text-xs uppercase tracking-wide text-secondary-color font-medium mb-2">
                Global (EE.UU., Europa, Asia)
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {globalIdentity.paragraphs[2]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === NUESTRA HISTORIA === */}
      <section className="py-28 bg-background relative">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <Image
              src="/logos/Logo_Final_Cyber_TowerLOWRES-03-recortada.png"
              alt="Nuestra historia"
              width={400}
              height={400}
              className="rounded-3xl shadow-lg object-cover p-6"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2 text-center md:text-left">
            <h2 className="text-4xl font-bold">{t("history.title")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("history.description")}
            </p>
          </div>
        </div>
      </section>

      {/* === NUESTROS VALORES === */}
      <section className="py-28 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            {t("valuesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(
              (
                value: { title: string; description: string },
                index: number
              ) => (
                <div
                  key={index}
                  className="group relative p-8 bg-card rounded-3xl border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary-color transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-secondary-color/0 group-hover:bg-secondary-color/60 transition-all duration-300 rounded-b-3xl" />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="relative py-24 md:py-32 text-center bg-gradient-to-br from-secondary-color to-secondary-light-color text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            {t("cta.description")}
          </p>
          <Link
            href="https://wa.me/56912345678?text=Hola%20👋,%20quiero%20más%20información%20sobre%20los%20servicios%20de%20Cyber-Tower."
            target="_blank"
            className="inline-block px-10 py-4 rounded-full bg-white text-secondary-color font-semibold text-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NosotrosPage;
