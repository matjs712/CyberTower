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
    <ul
      className="flex flex-wrap justify-center sm:justify-start items-center
                 divide-y sm:divide-y-0 sm:divide-x divide-white/10
                 border border-white/10 rounded-xl overflow-hidden
                 bg-white/5 backdrop-blur-sm"
    >
      {stats.map((stat, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="w-1/2 sm:w-auto flex-1 text-center sm:text-left px-6 py-6 sm:py-8"
        >
          <span className="block text-4xl md:text-5xl font-extrabold text-secondary-color tracking-tight leading-none">
            {stat.valor}
          </span>
          <span className="block mt-2 text-sm md:text-base text-neutral-300">
            {stat.texto}
          </span>
        </motion.li>
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
          <p className="text-neutral-100 leading-relaxed max-w-prose">
            {cliente.descripcion}
          </p>
        </div>

        <figure className="relative">
          <svg
            className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-secondary-color"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <Path />
          </svg>

          <blockquote className="relative z-10 text-lg italic text-neutral-300 leading-relaxed">
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
              <span className="block font-semibold text-secondary-color">
                {cliente.autor}
              </span>
              <span className="block text-xs text-white">{cliente.cargo}</span>
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
      logo: "/Logo_Falabella.png",
      descripcion: t("falabella.description"),
      testimonio: t("falabella.testimonial"),
      autor: t("falabella.author"),
      cargo: t("falabella.position"),
      avatar: "/user.jpg",
      stats: t.raw("falabella.stats"),
    },
    {
      nombre: t("bancoChile.name"),
      logo: "/logo-SQM.png",
      descripcion: t("bancoChile.description"),
      testimonio: t("bancoChile.testimonial"),
      autor: t("bancoChile.author"),
      cargo: t("bancoChile.position"),
      avatar: "/user.jpg",
      stats: t.raw("bancoChile.stats"),
    },
  ];

  return (
    <section className="bg-foreground" aria-label="Casos de éxito de clientes">
      <div className="max-w-6xl px-6 py-24 sm:px-8 lg:px-10 mx-auto space-y-32 text-white">
        {clientes.map((cliente, index) => (
          <TestimonialBlock
            key={cliente.nombre}
            cliente={cliente}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
