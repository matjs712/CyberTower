"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const NosotrosPage = () => {
  const t = useTranslations("aboutPage");
  const team = t.raw("team");
  const values = t.raw("values");

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-light-color/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {t("hero.description")}
          </p>
          <Link
            href="https://wa.me/56912345678?text=Hola%20👋,%20quiero%20más%20información%20sobre%20los%20servicios%20de%20Cyber-Tower."
            className="inline-block bg-secondary-color text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary-light-color transition-all"
            target="_blank"
          >
            {t("hero.cta")}
          </Link>
        </div>
      </section>

      {/* 🏛 Nuestra Historia */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("history.title")}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("history.description")}
          </p>
        </div>
      </section>

      {/* 💡 Nuestros Valores */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">{t("valuesTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(
              (
                value: { title: string; description: string },
                index: number
              ) => (
                <div
                  key={index}
                  className="p-6 border rounded-2xl bg-card hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 👥 Nuestro Equipo */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">{t("teamTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {team.map(
              (
                member: { name: string; role: string; image: string },
                index: number
              ) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <Image
                    width={500}
                    height={500}
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
                  />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 📞 Llamado a la acción */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("cta.description")}
          </p>
          <Link
            href="https://wa.me/56912345678?text=Hola%20👋,%20quiero%20más%20información%20sobre%20los%20servicios%20de%20Cyber-Tower."
            className="inline-block bg-secondary-color text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary-light-color transition-all"
            target="_blank"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NosotrosPage;
