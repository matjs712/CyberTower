"use client";

import Image from "next/image";
import Path from "./path";

const clientes = [
  {
    nombre: "Falabella",
    logo: "/Falabella.svg.png",
    descripcion:
      "Implementamos un programa integral de ciberseguridad y concientización digital para más de 3.000 colaboradores.",
    testimonio:
      "Cyberhub nos ayudó a fortalecer nuestra cultura de seguridad digital. Su equipo fue rápido, profesional y comprometido.",
    autor: "María Gómez",
    cargo: "Gerente de TI | Falabella",
    avatar: "/user.jpg",
    stats: [
      { valor: "3.000+", texto: "Colaboradores capacitados" },
      { valor: "95%", texto: "Aumento en cumplimiento de seguridad" },
      { valor: "4x", texto: "Velocidad de respuesta ante incidentes" },
      { valor: "100%", texto: "Satisfacción del cliente" },
    ],
  },
  {
    nombre: "Banco de Chile",
    logo: "/logo-BancoDeChile.png",
    descripcion:
      "Desarrollamos un plan de respuesta ante incidentes adaptado a las normativas del sector financiero chileno.",
    testimonio:
      "La asesoría de Cyberhub fue clave para optimizar nuestros procesos de detección y respuesta ante ciberamenazas.",
    autor: "Rodrigo Pérez",
    cargo: "CISO | Banco de Chile",
    avatar: "/user.jpg",
    stats: [
      { valor: "12", texto: "Procesos críticos mejorados" },
      { valor: "40%", texto: "Reducción del tiempo de respuesta" },
      { valor: "24/7", texto: "Monitoreo continuo" },
      { valor: "A+", texto: "Evaluación interna de seguridad" },
    ],
  },
];

export default function ClientesSection() {
  return (
    <section className="max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 mx-auto space-y-24">
      {clientes.map((cliente, index) => (
        <div
          key={cliente.nombre}
          className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center"
        >
          {/* Texto y testimonio */}
          <div
            className={`lg:col-span-5 ${
              index % 2 === 1
                ? "lg:order-2 lg:col-start-8"
                : "lg:order-1 lg:col-start-1"
            }`}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={cliente.logo}
                  alt={cliente.nombre}
                  width={200}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 dark:text-neutral-400">
                {cliente.descripcion}
              </p>
            </div>

            <blockquote className="relative">
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

              <div className="relative z-10">
                <p className="text-xl italic text-gray-800 dark:text-white">
                  “{cliente.testimonio}”
                </p>
              </div>

              <footer className="mt-6">
                <div className="flex items-center gap-x-4">
                  <div className="shrink-0">
                    <Image
                      className="size-10 rounded-full"
                      width={200}
                      height={200}
                      src={cliente.avatar}
                      alt={cliente.autor}
                    />
                  </div>
                  <div className="grow">
                    <div className="font-semibold text-gray-800 dark:text-neutral-200">
                      {cliente.autor}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-500">
                      {cliente.cargo}
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Stats */}
          <div
            className={`mt-10 lg:mt-0 lg:col-span-6 ${
              index % 2 === 1
                ? "lg:order-1 lg:col-start-1"
                : "lg:order-2 lg:col-start-7"
            }`}
          >
            <ul className="grid grid-cols-2 divide-y-2 divide-x-2 divide-gray-200 overflow-hidden dark:divide-neutral-700 rounded-2xl">
              {cliente.stats.map((stat, i) => (
                <li
                  key={i}
                  className="flex flex-col -m-0.5 p-4 sm:p-8 text-center bg-white/5 dark:bg-neutral-900/50"
                >
                  <div className="text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-neutral-200">
                    {stat.valor}
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400">
                    {stat.texto}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
