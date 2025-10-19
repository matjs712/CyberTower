"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import LaunchUI from "@/components/logos/launch-ui";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "@/components/ui/footer";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";

interface FooterLink {
  text: string;
  href: string;
  ariaLabel?: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <LaunchUI />,
  name = "Cyberhub",
  columns = [
    {
      title: "Soluciones",
      links: [
        {
          text: "Consultoría en Ciberseguridad",
          href: "/Soluciones/ciberseguridad",
        },
        { text: "Transformación Digital", href: "/soluciones/digital" },
        { text: "Capacitación", href: "/soluciones/capacitacion" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { text: "Sobre Nosotros", href: "/nosotros" },
        { text: "Carreras", href: "/carreras" },
        { text: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Contacto",
      links: [
        {
          text: "LinkedIn",
          href: "https://www.linkedin.com/company/cyberhub-cl",
          ariaLabel: "Visitar LinkedIn de Cyberhub",
        },
        {
          text: "Correo",
          href: "mailto:contacto@cyberhub.cl",
          ariaLabel: "Enviar correo a Cyberhub",
        },
        {
          text: "WhatsApp",
          href: "https://wa.me/56912345678",
          ariaLabel: "Contactar a Cyberhub por WhatsApp",
        },
      ],
    },
  ],
  copyright = `© ${new Date().getFullYear()} Cyberhub. Todos los derechos reservados.`,
  policies = [
    { text: "Política de Privacidad", href: "/politica-de-privacidad" },
    { text: "Términos y Condiciones", href: "/terminos" },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer
      className={cn(
        "w-full px-4 pt-12 pb-8 border-t border-gray-800",
        className
      )}
      role="contentinfo"
      aria-label="Pie de página de Cyberhub"
    >
      <div className="max-w-container mx-auto">
        <Footer className="bg-transparent">
          <FooterContent>
            {/* Logo + branding */}
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <Link
                href="/"
                className="flex items-center gap-2 mb-4"
                aria-label="Ir al inicio de Cyberhub"
              >
                {logo}
                <span className="text-xl font-bold text-white">{name}</span>
              </Link>
              <p className="text-sm text-gray-400 max-w-xs">
                Soluciones digitales y de ciberseguridad para empresas que
                buscan evolucionar con confianza.
              </p>
            </FooterColumn>

            {/* Columnas de navegación */}
            {columns.map((column, index) => (
              <FooterColumn
                key={index}
                role="navigation"
                aria-labelledby={`footer-col-${index}`}
              >
                <h2
                  id={`footer-col-${index}`}
                  className="text-md pt-1 font-semibold text-white mb-2"
                >
                  {column.title}
                </h2>
                <ul className="space-y-1">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        aria-label={link.ariaLabel || `Ir a ${link.text}`}
                        className="text-muted-foreground text-sm hover:text-secondary-color transition-colors"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </FooterContent>

          {/* Línea inferior */}
          <FooterBottom className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 border-t border-gray-800 pt-6">
            <small className="text-xs text-gray-500">{copyright}</small>

            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <Link
                  key={index}
                  href={policy.href}
                  aria-label={`Leer ${policy.text}`}
                  className="text-xs text-gray-400 hover:text-secondary-color transition-colors"
                >
                  {policy.text}
                </Link>
              ))}

              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
