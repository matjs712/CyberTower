"use client";

import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

/* ============================================================
   Tipos
============================================================ */

type StepKey = "1" | "2" | "3";

interface Answers {
  objetivo?: string;
  empresa?: string;
  urgencia?: string;
}

interface PreguntaConfig {
  title: string;
  options: string[];
}

interface PreguntaCardProps {
  step: StepKey;
  data: PreguntaConfig;
  onSelect: (key: keyof Answers, value: string) => void;
}

interface ResultadoFinalProps {
  answers: Answers;
  onReset: () => void;
}

/* ============================================================
   WIZARD PRINCIPAL
============================================================ */

export default function ServicioIdealWizard() {
  const t = useTranslations("serviceWizard");

  const [step, setStep] = useState<StepKey>("1");
  const [answers, setAnswers] = useState<Answers>({});

  const steps = t.raw("steps") as Record<StepKey, PreguntaConfig>;
  const isCompleted = Number(step) > 3;

  const handleSelect = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    const next = (Number(step) + 1).toString() as StepKey;
    setStep(next);
  };

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <div className="flex justify-center mb-6">
        <button className="px-4 py-2 bg-secondary-color text-white rounded-full text-sm font-medium">
          {t("badge")}
        </button>
      </div>

      <h2 className="text-4xl font-bold text-center mb-2">{t("title")}</h2>
      <p className="text-center text-gray-600 mb-10">{t("subtitle")}</p>

      {!isCompleted ? (
        <PreguntaCard step={step} data={steps[step]} onSelect={handleSelect} />
      ) : (
        <ResultadoFinal
          answers={answers}
          onReset={() => {
            setStep("1");
            setAnswers({});
          }}
        />
      )}
    </section>
  );
}

/* ============================================================
   PreguntaCard
============================================================ */

function PreguntaCard({ step, data, onSelect }: PreguntaCardProps) {
  const keyMap: Record<StepKey, keyof Answers> = {
    "1": "objetivo",
    "2": "empresa",
    "3": "urgencia",
  };

  const progress = (Number(step) / 3) * 100;

  return (
    <div className="bg-white rounded-3xl shadow-md p-8 border">
      <p className="text-sm text-gray-600 mb-2">Pregunta {step} de 3</p>

      <div className="w-full bg-gray-200 h-2 rounded-full mb-8">
        <div
          className="h-2 bg-secondary-color rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h3 className="text-2xl font-semibold mb-6">{data.title}</h3>

      <div className="flex flex-col gap-4">
        {data.options.map((op) => (
          <button
            key={op}
            onClick={() => onSelect(keyMap[step], op)}
            className="flex justify-between items-center w-full p-4 border rounded-xl hover:bg-gray-50 transition"
          >
            <span>{op}</span>
            <ArrowRight className="w-5 h-5 text-gray-500" />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   Resultado Final
============================================================ */

function ResultadoFinal({ answers, onReset }: ResultadoFinalProps) {
  const t = useTranslations("serviceWizard.results");

  const recomendacion = getRecomendacion(answers, t);

  return (
    <div className="border border-secondary-color p-10 rounded-3xl shadow-sm">
      <div className="flex flex-col items-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center bg-secondary-color text-white rounded-full mb-4">
          <Check className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold">{t("mainTitle")}</h3>
      </div>

      <div className="bg-white p-6 rounded-2xl border mb-8">
        <h4 className="text-xl font-bold text-secondary-color mb-1">
          {recomendacion.title}
        </h4>
        <p className="text-gray-500 text-sm mb-3">{t("accordingTo")}</p>
        <p className="text-gray-700">{recomendacion.description}</p>
      </div>

      <div className="flex gap-4">
        <Link href={recomendacion.href}>
          <button className="px-6 py-3 rounded-xl font-semibold bg-secondary-color text-white hover:bg-secondary-light-color">
            → {recomendacion.cta}
          </button>
        </Link>

        <button
          onClick={onReset}
          className="px-6 py-3 rounded-xl font-semibold border border-gray-300 bg-white hover:bg-gray-100"
        >
          {t("restart")}
        </button>
      </div>

      <p className="text-center text-gray-500 mt-6 text-sm">
        {t("bookFree")}{" "}
        <Link href="/contacto" className="text-primary-color underline">
          →
        </Link>
      </p>
    </div>
  );
}

/* ============================================================
   Lógica de recomendación → conectada a servicios reales
============================================================ */
interface Answers {
  principal?: string;
  empresa?: string;
  urgencia?: string;
}

interface RecomendacionItem {
  title: string;
  description: string;
  cta: string;
  href: string;
}

type RecommendationsCatalog = Record<string, RecomendacionItem>;

function getRecomendacion(
  answers: Answers,
  t: ReturnType<typeof useTranslations>
) {
  const catalog = t.raw("recommendations") as RecommendationsCatalog;

  const objetivo = answers.objetivo;

  switch (objetivo) {
    case "Concientización y Cultura de Ciberseguridad":
    case "Cybersecurity Awareness & Culture":
      return catalog.concientizacion;

    case "Capacitaciones y Entrenamiento":
    case "Training and Capacity Building":
      return catalog.capacitaciones;

    case "Simulaciones de Ataques (Tabletop)":
    case "Cyberattack Simulations (Tabletop Exercise)":
      return catalog.tabletop;

    case "Onboarding de Ciberseguridad":
    case "Cybersecurity Onboarding":
      return catalog.onboarding;

    case "Producción Audiovisual de Ciberseguridad":
    case "Cybersecurity Audiovisual Production":
      return catalog.audiovisual;

    case "Cumplimiento y Certificaciones (ISO/NIS/Leyes)":
    case "Compliance and Certifications (ISO/NIS/Laws)":
      return catalog.compliance;

    case "Protección Técnica (Pentesting, Código, Infraestructura)":
    case "Technical Protection (Pentesting, Code, Infrastructure)":
      return catalog.tecnico;

    default:
      return catalog.custom;
  }
}
