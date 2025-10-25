"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Path from "./path";
import { useTranslations } from "next-intl";

type Stat = { valor: string; texto: string };

type Cliente = {
  nombre: string;
  logo: string;
  descripcion: string;
  testimonio: string;
  autor: string;
  cargo: string;
  avatar: string;
  stats: Stat[];
};

function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <ul className="grid grid-cols-2 divide-y-2 divide-x-2 divide-gray-200 dark:divide-neutral-700 rounded-2xl overflow-hidden shadow-sm">
      {stats.map((stat, i) => (
        <li
          key={i}
          className="flex flex-col justify-center items-center p-6 sm:p-10 bg-gray-50/70 dark:bg-neutral-900/50 backdrop-blur-sm"
        >
          <span className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-neutral-100">
            {stat.valor}
          </span>
          <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400 mt-2 text-center">
            {stat.texto}
          </p>
        </li>
      ))}
    </ul>
  );
}

function TestimonialBlock({
  cliente,
  reverse,
}: {
  cliente: Cliente;
  reverse: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: reverse ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-center gap-10 lg:gap-16`}
      aria-labelledby={`${cliente.nombre}-heading`}
    >
      {/* Texto */}
      <div className="flex-1 space-y-6">
        <div className="flex flex-col">
          <Image
            src={cliente.logo}
            alt={cliente.nombre}
            width={200}
            height={60}
            className="object-contain mb-4"
          />
          <p className="text-gray-700 dark:text-neutral-300 leading-relaxed max-w-prose">
            {cliente.descripcion}
          </p>
        </div>

        <figure className="relative">
          <svg
            className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-neutral-800"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <Path />
          </svg>

          <blockquote className="relative z-10 text-lg italic text-gray-800 dark:text-white leading-relaxed">
            “{cliente.testimonio}”
          </blockquote>

          <figcaption className="mt-6 flex items-center gap-x-4">
            <Image
              className="size-10 rounded-full"
              width={200}
              height={200}
              src={cliente.avatar}
              alt={cliente.autor}
            />
            <div>
              <span className="block font-semibold text-gray-800 dark:text-neutral-200">
                {cliente.autor}
              </span>
              <span className="block text-xs text-gray-500 dark:text-neutral-500">
                {cliente.cargo}
              </span>
            </div>
          </figcaption>
        </figure>
      </div>

      {/* Stats */}
      <motion.div
        className="flex-1 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <StatsGrid stats={cliente.stats} />
      </motion.div>
    </motion.article>
  );
}

export default function ClientesSection() {
  const t = useTranslations("clients");
  const clientes = [
    {
      nombre: t("falabella.name"),
      logo: "/Falabella.svg.png",
      descripcion: t("falabella.description"),
      testimonio: t("falabella.testimonial"),
      autor: t("falabella.author"),
      cargo: t("falabella.position"),
      avatar: "/user.jpg",
      stats: t.raw("falabella.stats"),
    },
    {
      nombre: t("bancoChile.name"),
      logo: "/logo-BancoDeChile.png",
      descripcion: t("bancoChile.description"),
      testimonio: t("bancoChile.testimonial"),
      autor: t("bancoChile.author"),
      cargo: t("bancoChile.position"),
      avatar: "/user.jpg",
      stats: t.raw("bancoChile.stats"),
    },
  ];

  return (
    <section
      className="max-w-6xl px-6 py-24 sm:px-8 lg:px-10 mx-auto space-y-32"
      aria-label="Casos de éxito de clientes"
    >
      {clientes.map((cliente, index) => (
        <TestimonialBlock
          key={cliente.nombre}
          cliente={cliente}
          reverse={index % 2 === 1}
        />
      ))}
    </section>
  );
}
