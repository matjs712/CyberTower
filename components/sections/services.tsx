"use client";
import React from "react";

const CoreServices = () => {
  return (
    <section
      id="core-services"
      aria-labelledby="core-services-heading"
      className="py-16 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <span className="text-secondary-color text-sm font-semibold uppercase tracking-wider mb-2 block">
            Nuestros servicios principales
          </span>
          <h2
            id="core-services-heading"
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Soluciones de ciberseguridad y cumplimiento para empresas modernas
          </h2>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <li
              key={service.title}
              className="p-6 md:p-8 rounded-2xl shadow-sm transition-all duration-300 bg-background hover:shadow-lg"
            >
              <article className="flex flex-col h-full">
                <div
                  className="mb-4 p-3 rounded-lg inline-block border border-secondary-color"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {service.description}
                </p>

                <a
                  href={`/servicios/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  aria-label={`Ver más sobre ${service.title}`}
                  className="flex items-center justify-between mt-auto w-full group"
                >
                  <span className="text-secondary-color font-semibold text-sm group-hover:underline">
                    Ver detalles
                  </span>
                  <div className="p-2 rounded-full bg-secondary-light-color group-hover:bg-secondary-color transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              </article>
            </li>
          ))}
        </ul>

        <footer className="text-center mt-16 text-gray-400 text-sm">
          ¿Necesitas fortalecer la seguridad de tu organización? Diseñamos
          soluciones personalizadas en ciberseguridad, cumplimiento y gestión de
          riesgos.{" "}
          <a
            href="/contacto"
            aria-label="Solicitar una llamada de estrategia gratuita"
            className="text-secondary-light-color font-semibold hover:text-secondary-color transition-colors"
          >
            Agenda una asesoría gratuita
          </a>
        </footer>
      </div>
    </section>
  );
};

const servicesData = [
  {
    title: "Gestión de Vulnerabilidades",
    description:
      "Identificamos debilidades en tu infraestructura digital y proponemos planes para mitigarlas con prioridad de riesgo.",
    icon: (
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
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        <path d="M12 8v4l2 2" />
      </svg>
    ),
  },
  {
    title: "Pruebas de Penetración (Pentesting)",
    description:
      "Simulamos ataques controlados para evaluar la resiliencia de tus sistemas y exponer vulnerabilidades antes que lo hagan terceros.",
    icon: (
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
        <path d="M5 13l4 4L19 7" />
        <path d="M12 2v4" />
        <path d="M12 18v4" />
      </svg>
    ),
  },
  {
    title: "Consultoría & Gobernanza",
    description:
      "Asesoría estratégica en normativa, cumplimiento, riesgos y frameworks de seguridad para tu organización.",
    icon: (
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
        <path d="M3 3h18v18H3z" />
        <path d="M7 12h10" />
        <path d="M7 16h10" />
        <path d="M7 8h10" />
      </svg>
    ),
  },
  {
    title: "Monitoreo & Detección",
    description:
      "Supervisamos 24/7 tus sistemas y redes para detectar incidentes, responder con agilidad y reducir impacto.",
    icon: (
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
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M12 2v4" />
        <path d="M12 18v4" />
      </svg>
    ),
  },
  {
    title: "Seguridad en Desarrollo (DevSecOps)",
    description:
      "Integración de controles de seguridad automáticos en el pipeline de desarrollo para evitar vulnerabilidades desde el código.",
    icon: (
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
        <path d="M4 4h16v16H4z" />
        <path d="M8 8l8 8" />
        <path d="M16 8l-8 8" />
      </svg>
    ),
  },
  {
    title: "Respuesta a Incidentes",
    description:
      "Actuamos rápidamente ante brechas de seguridad, analizamos el ataque y ayudamos a restablecer operaciones seguras.",
    icon: (
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
        <path d="M12 2L2 12h10v10l10-10H12z" />
        <path d="M12 8v4l2 2" />
      </svg>
    ),
  },
];

export default CoreServices;
