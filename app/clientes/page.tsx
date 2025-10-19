import { logos } from "@/components/logos/logos";
import React from "react";

const ClientePage = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Nuestros clientes confían en nosotros
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Trabajamos con empresas líderes en tecnología y comunicación para
          impulsar soluciones digitales de alto impacto.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-center">
          {logos.map((logo) => {
            const Icon = logo.icon;
            return (
              <a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.name}
                className="flex flex-col items-center gap-2 group transition-transform duration-300 hover:scale-110"
              >
                <Icon className="text-5xl text-muted-foreground group-hover:text-secondary-color transition-colors duration-300" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-secondary-color">
                  {logo.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientePage;
