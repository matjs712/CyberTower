"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { useState } from "react";
import AgendaDialog from "../AgendaDialog";

export default function ComoTrabajamos() {
  const [option, setOption] = useState<"paas" | "puntual">("paas");
  const t = useTranslations("howWeWork");

  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-2">{t("title")}</h2>

      <p className="text-center text-gray-600 mb-10">{t("subtitle")}</p>

      {/* Toggle */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setOption("paas")}
          className={`px-6 py-3 rounded-xl font-semibold border transition ${
            option === "paas"
              ? "bg-secondary-color text-white"
              : "bg-white text-gray-700 border-gray-300"
          }`}
        >
          {t("options.paas")}
        </button>

        <button
          onClick={() => setOption("puntual")}
          className={`px-6 py-3 rounded-xl font-semibold border transition ${
            option === "puntual"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300"
          }`}
        >
          {t("options.puntual")}
        </button>
      </div>

      {option === "paas" ? <PAASCard /> : <AuditoriaCard />}
    </section>
  );
}

/* --------------------------------------------
    PaaS CARD — MULTI-LANGUAGE
--------------------------------------------- */
function PAASCard() {
  const t = useTranslations("howWeWork.paas");

  return (
    <div className="border border-blue-100 p-10 rounded-3xl shadow-sm">
      <div className="text-sm bg-secondary-color text-white inline-block px-3 py-1 rounded-full mb-4 font-medium">
        {t("badge")}
      </div>

      <h3 className="text-3xl font-bold mb-4">{t("title")}</h3>

      <p className="text-gray-700 max-w-3xl mb-8">{t("description")}</p>

      <div className="grid md:grid-cols-2 gap-10 mb-10">
        {/* Qué incluye */}
        <div>
          <h4 className="text-lg font-semibold mb-2">{t("includesTitle")}</h4>
          <ul className="space-y-2 text-gray-800">
            {t.raw("includes").map((item: string, i: number) => (
              <ListItem key={i} text={item} />
            ))}
          </ul>
        </div>

        {/* Ventajas */}
        <div>
          <h4 className="text-lg font-semibold mb-2">{t("benefitsTitle")}</h4>
          <ul className="space-y-2 text-gray-800">
            {t.raw("benefits").map((item: string, i: number) => (
              <Tag key={i} text={item} />
            ))}
          </ul>
        </div>
      </div>

      <div className="border border-secondary-color p-4 rounded-xl text-neutral-800 font-medium mb-8">
        {t("ideal")}
      </div>

      <div className="flex gap-4">
        <AgendaDialog
          trigger={<ActionButton primary text={t("cta.primary")} />}
        />
        <ActionButton text={t("cta.secondary")} />
      </div>
    </div>
  );
}

function AuditoriaCard() {
  const t = useTranslations("howWeWork.puntual");

  // types es un OBJETO, no un array → lo convertimos
  const typesObj = t.raw("types") || {};

  const keys = Object.keys(typesObj); // ["iso27001", "iso20000", ...]
  const names = Object.values(typesObj) as string[];

  const items = t.raw("items") || {};

  const [selected, setSelected] = useState<string>(keys[0]);
  const current = items[selected];

  return (
    <div className="border border-blue-200 p-10 rounded-3xl shadow-sm">
      <h3 className="text-3xl font-bold mb-4">{t("title")}</h3>
      <p className="text-gray-700 max-w-3xl mb-8">{t("description")}</p>

      {/* Selector */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
        {names.map((name: string, i: number) => {
          const key = keys[i];

          return (
            <motion.button
              key={key}
              onClick={() => setSelected(key)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                backgroundColor: selected === key ? "#DBEAFE" : "#FFFFFF",
                borderColor: selected === key ? "#2563EB" : "#D1D5DB",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="p-3 rounded-xl text-sm text-gray-700 shadow-sm border cursor-pointer"
            >
              {name}
            </motion.button>
          );
        })}
      </div>

      {/* Card dinámica */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="bg-white border rounded-2xl p-6 shadow-sm mb-10"
        >
          <h4 className="text-xl font-semibold mb-2">{current.title}</h4>
          <p className="text-gray-700 mb-2">{current.description}</p>
          <p className="text-gray-500 text-sm">{current.time}</p>
        </motion.div>
      </AnimatePresence>

      {/* Beneficios animados */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={selected + "-benefits"}
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.07 },
            },
          }}
          className="grid md:grid-cols-4 gap-4 mb-8 text-sm text-gray-800"
        >
          {current.benefits.map((b: string, i: number) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 5 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Tag text={b} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="bg-blue-100 p-4 rounded-xl text-blue-700 font-medium mb-8">
        {t("ideal")}
      </div>

      <div className="flex gap-4">
        <AgendaDialog
          trigger={<ActionButton primary text={t("cta.primary")} />}
        />
        <ActionButton text={t("cta.secondary")} />
      </div>
    </div>
  );
}

/* --------------------------------------------
    UI HELPERS
--------------------------------------------- */
function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="w-5 h-5 text-secondary-color mt-0.5" />
      <span>{text}</span>
    </li>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <li className="bg-white border rounded-lg px-3 py-2 shadow-sm text-sm">
      {text}
    </li>
  );
}

import React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  primary?: boolean;
};

export const ActionButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ text, primary, className, ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(
        "px-6 py-3 rounded-xl font-medium transition",
        primary ? "bg-primary-color text-white" : "bg-gray-100 text-gray-800",
        className
      )}
      {...props}
    >
      {text}
    </button>
  )
);

ActionButton.displayName = "ActionButton";
