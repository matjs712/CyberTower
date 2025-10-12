"use client";
import React from "react";

// Datos para las tarjetas de servicios
const servicesData = [
  {
    title: "Social Media Marketing",
    description:
      "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    icon: (
      // Icono de Redes Sociales (Placeholder SVG)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-secondary-light-color"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    title: "Content Marketing",
    description:
      "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    icon: (
      // Icono de Contenido (Placeholder SVG)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-secondary-light-color"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <line x1="10" x2="8" y1="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "PPC Advertising",
    description:
      "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    icon: (
      // Icono de Publicidad PPC (Placeholder SVG)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-secondary-light-color"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v6h6" />
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12a4 4 0 0 1 8 0 4 4 0 0 1-8 0z" />
      </svg>
    ),
  },
  {
    title: "Email Marketing",
    description:
      "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    icon: (
      // Icono de Email (Placeholder SVG)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-secondary-light-color"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "Branding & Design",
    description:
      "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    icon: (
      // Icono de Branding/Diseño (Placeholder SVG)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-secondary-light-color"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 10v.01" />
        <path d="M12.8 5.6a.6.6 0 0 0-.8 0l-7 8.3a.6.6 0 0 0 0 .8l2.9 3.5a.6.6 0 0 0 .9 0l7.2-8.4a.6.6 0 0 0 0-.7L12.8 5.6z" />
        <path d="M17 12l-4.5 4.5" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description:
      "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    icon: (
      // Icono de Desarrollo Web (Placeholder SVG)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-secondary-color"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 18l4-4-4-4" />
        <path d="M8 6l-4 4 4 4" />
        <path d="M13 3l-2 18" />
      </svg>
    ),
  },
];

const CoreServices = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado de la Sección */}
        <div className="text-center mb-16">
          <span className="text-secondary-color text-sm font-semibold uppercase tracking-wider mb-2 block">
            Our Core Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Digital Solutions That Drive <br className="hidden md:inline" />{" "}
            Real Results
          </h2>
        </div>

        {/* Grid de Tarjetas de Servicio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-2xl  shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Icono */}
                <div className="mb-4 p-3 rounded-lg inline-block border border-secondary-color">
                  {service.icon}
                </div>

                {/* Título y Descripción */}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Botón View Details */}
                <button className="flex items-center justify-between mt-auto w-full group">
                  <span className="text-secondary-color font-semibold text-sm">
                    View Details
                  </span>
                  <div className="p-2 rounded-full bg-secondary-light-color group-hover:bg-secondary-light-color transition-colors duration-300">
                    {/* Flecha Derecha */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white group-hover:text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de CTA/Pie de Página */}
        <div className="text-center mt-16 text-gray-400 text-sm">
          Need a custom solution? Let{"'"}s create a strategy tailored for your
          business.{" "}
          <a
            href="#"
            className="text-secondary-light-color font-semibold hover:text-secondary-color transition-colors"
          >
            Get a Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
