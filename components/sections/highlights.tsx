"use client";
import React from "react";

const Highlights = () => {
  // Datos para las tarjetas de casos de estudio (usamos el mismo array)
  const caseStudiesData = [
    {
      title: "Local Business Digital Transformation",
      description:
        "5x ROI on social media campaigns & 80% increase in engagement lorem ipsum dolor sit amet consectetur.",
      tags: [
        "Social",
        "Influencer",
        "Retargeting",
        "Google",
        "Video",
        "Local",
        "Community",
      ],
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "SaaS Lead Generation Success",
      description:
        "150% increase in qualified leads & 70% lower acquisition cost lorem ipsum dolor sit amet.",
      tags: [
        "Content",
        "LinkedIn Ads",
        "Email",
        "Webinar",
        "Landing",
        "CRM",
        "Retargeting",
      ],
      image:
        "https://images.unsplash.com/photo-1664575602556-dc087f1ee05e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "E-Commerce Growth Boost",
      description:
        "3x increase in organic traffic & 2x revenue growth in 6 months lorem ipsum dolor.",
      tags: [
        "SEO",
        "PPC Ads",
        "CRO",
        "Analytics",
        "Influencer",
        "A/B Testing",
        "Email",
      ],
      image:
        "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section id="case-studies" className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <span className="text-primary-color text-sm font-semibold uppercase tracking-wider mb-2 block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.707-10.707a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 9.414l-1.293 1.293a1 1 0 01-1.414-1.414l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              See How We Help <br className="hidden md:inline" /> Businesses
              Thrive
            </h2>
          </div>
          <div className="lg:w-1/2 flex flex-col items-start lg:items-end">
            <p className="text-gray-400 text-lg mb-6 lg:text-right">
              We don{"'"}t just talk about results—we deliver them. Here are
              some of our most impactful case studies showcasing how our digital
              marketing strategies drive success.
            </p>
            <button className="flex items-center text-primary-color font-semibold hover:text-purple-300 transition-colors">
              More Case Studies
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Grid de Casos de Estudio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudiesData.map((study, index) => {
            // Condición para que la primera tarjeta (index === 0) ocupe 2 columnas
            const isDominant = index === 0;

            const columnSpanClass = isDominant
              ? "md:col-span-2"
              : "md:col-span-1";

            // Clase de altura condicional para el elemento dominante
            const heightClass = isDominant
              ? "h-[300px] md:h-[300px]"
              : "h-[200px] md:h-[200px]";

            return (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden shadow-lg flex flex-col justify-end p-6 
                            ${columnSpanClass} ${heightClass}`} // Clases de ancho y alto dinámicas
                style={{
                  backgroundImage: `url(${study.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-600-color/70 to-transparent"></div>
                {/* Overlay oscuro */}
                <div className="relative z-10 text-white">
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium text-primary-color bg-white rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
