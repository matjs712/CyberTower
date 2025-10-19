"use client";
import React from "react";

const BrandLogos = () => {
  const brands = [
    { name: "Brandex" },
    { name: "Bravix" },
    { name: "Nexora" },
    { name: "Adstrix" },
    { name: "Glovix" },
    { name: "Zero" },
    { name: "Prodigy" },
    { name: "Quantix" },
    { name: "Solara" },
  ];

  return (
    <section
      id="brand-logos"
      aria-labelledby="brand-logos-heading"
      className="py-16 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-5xl mx-auto border rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
        <header className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
          <div className="w-full md:w-1/3">
            <h2
              id="brand-logos-heading"
              className="text-3xl md:text-4xl font-bold leading-tight"
            >
              La confianza de los sectores más exigentes{" "}
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-300 text-base">
              Clientes del ámbito financiero, minero, energético, tecnológico,
              de transporte y salud eligen a Cyberhub para proteger sus
              operaciones, garantizar la continuidad del negocio y fortalecer su
              resiliencia digital.
            </p>
          </div>
        </header>

        <p className="sr-only">Desliza horizontalmente para ver más marcas</p>

        <ul
          role="list"
          aria-label="Marcas que confían en Cyberhub"
          className="flex flex-nowrap items-center gap-4 overflow-x-scroll pb-4 -mx-12 px-12 md:-mx-12 md:px-12 lg:-mx-20 lg:px-16"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx global>{`
            .overflow-x-scroll::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {brands.map((brand, index) => (
            <li
              key={brand.name}
              className="flex items-center flex-shrink-0 px-5 py-3 border border-secondary-color/50 rounded-xl transition-colors cursor-default font-semibold text-lg hover:border-secondary-color/80"
            >
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
                aria-hidden="true"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>{brand.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrandLogos;
