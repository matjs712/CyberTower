"use client";
import React from "react";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? "fill-current" : "text-gray-600"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.43 4.39a1 1 0 00.95.69h4.62c.97 0 1.366 1.24.588 1.81l-3.75 2.73a1 1 0 00-.364 1.118l1.43 4.39c.3.921-.755 1.688-1.538 1.118l-3.75-2.73a1 1 0 00-1.176 0l-3.75 2.73c-.783.57-1.838-.197-1.538-1.118l1.43-4.39a1 1 0 00-.364-1.118L2.24 9.827c-.778-.57-.38-1.81.588-1.81h4.62a1 1 0 00.95-.69l1.43-4.39z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialsAndStats = () => {
  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-heading"
      className="py-16 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Texto principal */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center text-secondary-color text-sm font-semibold uppercase tracking-wider mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-8.707l2-2a1 1 0 00-1.414-1.414L10 8.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Casos de éxito y confianza</span>
            </div>

            <h2
              id="testimonios-heading"
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Historias reales de <br /> ciberseguridad efectiva
            </h2>

            <p className="text-gray-400 text-lg">
              Empresas líderes en energía, minería y servicios confían en
              Cyberhub para fortalecer su postura de seguridad, optimizar la
              gestión de riesgos y cumplir con los más altos estándares
              internacionales.
            </p>
          </div>

          {/* Estadísticas */}
          <aside
            className="p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl flex flex-col justify-between"
            aria-label="Estadísticas de satisfacción de clientes"
          >
            <div className="mb-8">
              <div className="flex -space-x-4 mb-3" aria-hidden="true">
                <div className="h-10 w-10 rounded-full bg-secondary-color border-2 border-gray-200" />
                <div className="h-10 w-10 rounded-full bg-blue-500 border-2 border-gray-200" />
                <div className="h-10 w-10 rounded-full bg-green-500 border-2 border-gray-200" />
                <div className="h-10 w-10 rounded-full bg-purple-500 border-2 border-gray-200" />
              </div>
              <h3 className="text-xl font-bold">
                Más de 180 organizaciones protegidas
              </h3>
            </div>

            <dl className="flex gap-8 mb-8">
              <div>
                <dt className="sr-only">Reducción de incidentes</dt>
                <dd className="text-4xl font-extrabold text-secondary-light-color mb-1">
                  72%
                </dd>
                <p className="text-sm">Menos incidentes críticos</p>
              </div>
              <div>
                <dt className="sr-only">Mejoras operacionales</dt>
                <dd className="text-4xl font-extrabold text-secondary-light-color mb-1">
                  40%
                </dd>
                <p className="text-sm">Optimización de procesos</p>
              </div>
            </dl>

            <ul className="flex flex-wrap gap-3">
              <li className="px-4 py-2 text-xs font-medium border border-secondary-color rounded-full">
                ISO 27001
              </li>
              <li className="px-4 py-2 text-xs font-medium border border-secondary-color rounded-full">
                NIST Framework
              </li>
              <li className="px-4 py-2 text-xs font-medium border border-secondary-color rounded-full">
                TISAX & Compliance
              </li>
            </ul>
          </aside>
        </div>

        {/* Testimonios */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <li
              key={testimonial.name}
              className="p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl relative bg-background"
            >
              <blockquote className="relative">
                <div
                  className="absolute top-4 right-4 text-secondary-color opacity-20 text-6xl font-serif leading-none"
                  aria-hidden="true"
                >
                  {'"'}
                </div>
                <StarRating rating={testimonial.stars} />
                <p className="mt-4 mb-6 italic text-gray-300">
                  “{testimonial.quote}”
                </p>
                <footer className="flex items-center gap-4 mt-auto">
                  <div
                    className="h-12 w-12 rounded-full bg-gray-700 overflow-hidden"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <cite className="text-sm text-gray-400 not-italic">
                      {testimonial.title}
                    </cite>
                  </div>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const testimonialsData = [
  {
    name: "María Torres",
    title: "Gerenta TI, EnerChile",
    quote:
      "El equipo de Cyberhub implementó un modelo de gestión de ciberseguridad que redujo incidentes críticos en un 70%. Su acompañamiento fue clave para certificarnos bajo ISO 27001.",
    stars: 5,
  },
  {
    name: "Rodrigo Silva",
    title: "CISO, Infraseg",
    quote:
      "Su experiencia en normativas y respuesta ante incidentes nos permitió elevar el nivel de madurez en seguridad y cumplir con exigencias internacionales.",
    stars: 5,
  },
  {
    name: "Claudia Muñoz",
    title: "Directora de Operaciones, FinTech Andes",
    quote:
      "Cyberhub no solo entregó soluciones técnicas, sino una estrategia integral de cultura y resiliencia digital. Son un verdadero socio estratégico.",
    stars: 5,
  },
];
export default TestimonialsAndStats;
