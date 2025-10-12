"use client";
import React from "react";
import Image from "next/image"; // Asegúrate de que esta importación esté configurada correctamente

// Datos para las tarjetas de la columna izquierda
const missionCards = [
  {
    title: "Data-Driven Approach",
    description:
      "Every decision is backed by real-time analytics for maximum impact lorem ipsum dolor sit elit tellus luctus nec.",
    icon: (
      // Icono de Analytics/Datos (Placeholder SVG)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-purple-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M18.7 8.3L13 14l-3-3L3.3 19" />
      </svg>
    ),
  },
  {
    title: "Creative & Innovative",
    description:
      "Cutting-edge marketing techniques to keep you ahead of the competition lorem ipsum dolor sit awsa consectetur adipiscing elit ut elit.",
    icon: (
      // Icono de Creatividad/Idea (Placeholder SVG)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-purple-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 10v.01" />
        <path d="M10.9 17.5l-.9-1.3C8.9 14.8 8 13.5 8 12c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.5-.9 2.8-2 4.2l-1.3.9" />
        <path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2" />
      </svg>
    ),
  },
  {
    title: "Transparent Reporting",
    description:
      "Get clear, detailed reports on campaign performance and ROI. Lorem ipsum dolor sit amet consectetur.",
    icon: (
      // Icono de Reportes/Transparencia (Placeholder SVG)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-purple-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M10 15h4M10 11h4" />
      </svg>
    ),
  },
];

const Mision = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Columna Izquierda: Tarjetas de Highlights */}
        <div className="flex flex-col gap-2">
          {missionCards.map((card, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg flex items-start gap-5"
            >
              {/* Icono a la izquierda */}
              <div className="flex-shrink-0 mt-1">{card.icon}</div>

              {/* Contenido de la tarjeta */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{card.description}</p>
                <a
                  href="#"
                  className="flex items-center text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Columna Derecha: Contenido Principal */}
        <div className="flex flex-col gap-6">
          {/* Encabezado y Tag */}
          <div>
            <div className="flex items-center text-purple-400 text-sm font-semibold uppercase tracking-wider mb-2">
              {/* Icono para "Why Choose Marko" */}
              {/* Nota: Usamos un SVG genérico para reemplazar PlusCircle, ya que no tengo acceso directo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Why Choose Marko</span>
            </div>
            <h3 className="text-5xl font-bold leading-tight bg-gradient-to-r from-neutral-800 to-white bg-clip-text text-transparent">
              Your Success is Our <br className="hidden md:inline" /> Mission
            </h3>
          </div>

          {/* Texto de descripción */}
          <p className="text-gray-400 text-lg">
            In the fast-paced digital world, choosing the right marketing
            partner makes all the difference. At Marko, we don{"'"}t just create
            campaigns—we craft strategies that deliver measurable success.
          </p>

          {/* Imagen (Usando Next/Image para optimización) */}
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={"/user.jpg"}
              alt="Team discussing mission and strategy"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>

          {/* Espacio para la sección de "Partners with Marko" que se ve debajo de la imagen */}
          <div className="text-gray-400 text-sm font-semibold mt-4">
            Partners with Marko (Sección no visible, solo para referencia)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mision;
