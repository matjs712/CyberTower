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
import { useTranslations } from "next-intl";

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
  className?: string;
}

export default function FooterSection({
  logo = <LaunchUI />,
  name = "Cyberhub",
  className,
}: FooterProps) {
  const t = useTranslations("footer");

  const columns: FooterColumnProps[] = t.raw("columns");
  const policies: FooterLink[] = t.raw("policies");

  const copyright = t("copyright", {
    year: new Date().getFullYear(),
  });

  return (
    <footer
      className={cn(
        "w-full px-4 pt-12 pb-8 border-t border-gray-800",
        className
      )}
      role="contentinfo"
      aria-label={t("aria.label")}
    >
      <div className="max-w-container mx-auto">
        <Footer className="bg-transparent">
          <FooterContent>
            {/* Logo + branding */}
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <Link
                href="/"
                className="flex items-center gap-2 mb-4"
                aria-label={t("aria.goHome")}
              >
                {logo}
                <span className="text-xl font-bold text-white">{name}</span>
              </Link>
              <p className="text-sm text-gray-400 max-w-xs">
                {t("description")}
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
                  aria-label={policy.ariaLabel || `Leer ${policy.text}`}
                  className="text-xs text-gray-400 hover:text-secondary-color transition-colors"
                >
                  {policy.text}
                </Link>
              ))}
              <ModeToggle />
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
