"use client";

import { ShieldCheck, Users, Globe2 } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

export default function Diferenciadores() {
  const t = useTranslations("differentiators");

  return (
    <section className="relative w-full py-28 px-6 md:px-12 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-secondary-color/20 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto space-y-16">
        {/* Título */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            {t("title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
            {t("subtitle")}
          </p>
        </header>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          <Card
            icon={<ShieldCheck className="w-8 h-8 text-primary-color" />}
            title={t("cards.experience.title")}
            description={t("cards.experience.desc")}
          />

          <Card
            icon={<Users className="w-8 h-8 text-primary-color" />}
            title={t("cards.team.title")}
            description={t("cards.team.desc")}
          />

          <Card
            icon={<Globe2 className="w-8 h-8 text-primary-color" />}
            title={t("cards.international.title")}
            description={t("cards.international.desc")}
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        relative p-10 rounded-3xl bg-white dark:bg-gray-900 
        shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.8)]
        dark:shadow-[6px_6px_20px_rgba(0,0,0,0.4),-6px_-6px_20px_rgba(255,255,255,0.05)]
        transition-transform duration-300 hover:-translate-y-2
      "
    >
      <div className="mb-6">
        <div
          className="
            w-16 h-16 rounded-2xl flex items-center justify-center
            bg-white dark:bg-gray-800
            border border-gray-200 dark:border-gray-700
            shadow-[inset_-6px_-6px_12px_rgba(0,0,0,0.08),inset_6px_6px_12px_rgba(255,255,255,0.6)]
            dark:shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.4),inset_4px_4px_8px_rgba(255,255,255,0.06)]
            text-primary-color text-2xl
            transition-transform duration-300 group-hover:scale-110
          "
        >
          {icon}
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
