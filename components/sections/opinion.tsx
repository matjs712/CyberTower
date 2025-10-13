"use client";
import React from "react";

// Datos para los testimonios (tarjetas inferiores)
const testimonialsData = [
  {
    name: "James Peterson",
    title: "COO, BrightWave",
    quote:
      "Highly professional and results-oriented. Marko's expertise in branding and content marketing helped us build a strong online identity.",
    avatar: "/avatars/james.jpg", // Reemplazar con URL de avatar
    stars: 5,
  },
  {
    name: "Emma Richard",
    title: "CEO, Nexatech",
    quote:
      "Marko completely transformed our online presence! Their digital marketing strategies helped us double our revenue in just six months.",
    avatar: "/avatars/emma.jpg", // Reemplazar con URL de avatar
    stars: 5,
  },
  {
    name: "David Mont",
    title: "Marketing Director",
    quote:
      "We've worked with many agencies before, but Marko stands out. Their data-driven approach and creative solutions gave us an edge over competitors.",
    avatar: "/avatars/david.jpg", // Reemplazar con URL de avatar
    stars: 5,
  },
];

// Función utilitaria para generar iconos de estrella
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
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Sección Superior: Título y Estadísticas (Grid de 2 columnas) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Columna Izquierda: Estadísticas */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center text-purple-400 text-sm font-semibold uppercase tracking-wider mb-3">
              {/* Icono de Review (Placeholder) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-8.707l2-2a1 1 0 00-1.414-1.414L10 8.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>What Our Client Says</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hear from Our Satisfied <br /> Clients, Real Success <br />{" "}
              Stories
            </h2>
            <p className="text-gray-400 text-lg">
              Discover how businesses like yours achieved outstanding growth
              with Marko expert digital marketing solutions.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-2xl border border-gray-200 shadow-xl flex flex-col justify-between">
            {/* Avatares y Conteo de Reviews */}

            <div className="mb-8">
              <div className="flex -space-x-4 mb-2">
                {/* Placeholder de Avatares */}
                <div className="h-10 w-10 rounded-full bg-purple-500 border-2 border-gray-200"></div>
                <div className="h-10 w-10 rounded-full bg-pink-500 border-2 border-gray-200"></div>
                <div className="h-10 w-10 rounded-full bg-blue-500 border-2 border-gray-200"></div>
                <div className="h-10 w-10 rounded-full bg-yellow-500 border-2 border-gray-200"></div>
              </div>
              <span className="text-xl font-bold ">2.7k Positive Reviews</span>
            </div>

            {/* Métricas de Rendimiento */}
            <div className="flex gap-8 mb-8">
              <div>
                <p className="text-4xl font-extrabold text-purple-400 mb-1">
                  26%
                </p>
                <p className="text-sm">Improved Project</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-purple-400 mb-1">
                  15%
                </p>
                <p className="text-sm">New Project</p>
              </div>
            </div>

            {/* Tags de Servicios */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 text-xs font-medium border border-purple-800 rounded-full">
                Social Media Growth
              </span>
              <span className="px-4 py-2 text-xs font-medium border border-purple-800 rounded-full">
                Performance Marketing
              </span>
            </div>
          </div>

          {/* Columna Derecha: Encabezado Principal */}
        </div>

        {/* Sección Inferior: Tarjetas de Testimonios (Grid de 3 columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-2xl border border-gray-100 shadow-xl relative"
            >
              {/* Cita de apertura */}
              <div className="absolute top-4 right-4 text-purple-500 opacity-20 text-6xl font-serif leading-none h-12">
                {'"'}
              </div>
              {/* Estrellas */}
              <StarRating rating={testimonial.stars} />

              {/* Texto de la Cita */}
              <p className="mt-4 mb-6 italic">
                {'"'}
                {testimonial.quote}
                {'"'}
              </p>

              {/* Información del Cliente */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-12 w-12 rounded-full bg-gray-700 overflow-hidden">
                  {/* Avatar de Placeholder - Reemplazar con Image de Next.js si se utiliza */}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.title}</p>
                </div>
                {/* Cita de cierre (más estilizada) */}
                <span className="ml-auto text-purple-500 text-4xl font-extrabold leading-none">
                  ”
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndStats;
