"use client";
import React from "react";

// Componente de Logotipos de Marcas
const BrandLogos = () => {
  // Datos extendidos para asegurar el desbordamiento horizontal
  const brands = [
    { name: "Brandex", logo: null },
    { name: "bravix", logo: null },
    { name: "Nexora", logo: null },
    { name: "Adstrix", logo: null },
    { name: "Glovix", logo: null },
    { name: "Zero", logo: null },
    { name: "Prodigy", logo: null },
    { name: "Quantix", logo: null },
    { name: "Solara", logo: null }, // Nuevo logo para asegurar el desbordamiento
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      {" "}
      {/* Fondo oscuro para la sección */}
      <div className="max-w-5xl mx-auto">
        {" "}
        {/* Aumentamos max-w para que la tarjeta se vea mejor */}
        {/* Contenedor principal con el fondo oscuro y borde redondeado */}
        <div className="border rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          {/* Contenido superior: Título y Descripción */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
            {/* Título (Mitad izquierda) */}
            {/* Ajustamos el ancho del título a 1/3 para que el texto ocupe más espacio horizontalmente */}
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Powering Success for <br /> Top Brands
              </h2>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-gray-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex
                ligula, varius at rutrum et, finibus sed felis. Quisque eget
                tincidunt lectus. Sed quis diam sed neque mattis feugiat.
              </p>
            </div>
          </div>

          {/* Fila de Logotipos/Chips con Scroll Horizontal */}
          <div
            className="flex flex-nowrap items-center gap-4 overflow-x-scroll pb-4 -mx-12 px-12 md:-mx-12 md:px-12 lg:-mx-20 lg:px-16"
            style={{
              scrollbarWidth: "none", // Ocultar scrollbar en Firefox
              msOverflowStyle: "none", // ✅ Corregido a camelCase
            }}
          >
            {/* Estilo para ocultar scrollbar en navegadores Webkit (Chrome, Safari) */}
            <style jsx global>{`
              .overflow-x-scroll::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center flex-shrink-0 px-5 py-3 border border-secondary-color/50 rounded-xl transition-colors cursor-pointer font-semibold text-lg hover:border-secondary-color/80"
              >
                {/* SVG ajustado para el tema oscuro y apariencia más profesional */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 mr-3 ${
                    index === 0
                      ? "text-primary-color"
                      : "text-primary-light-color"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
