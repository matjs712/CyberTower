"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "@/components/ui/footer";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

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

export default function FooterSection({ className }: FooterProps) {
  const t = useTranslations("footer");
  const locale = useLocale();

  const columns: FooterColumnProps[] = t.raw("columns");
  const policies: FooterLink[] = t.raw("policies");

  const copyright = t("copyright", {
    year: new Date().getFullYear(),
  });

  const buildHref = (href: string) => {
    if (href.startsWith(`/${locale}/`) || href === `/${locale}`) return href;
    if (!href.startsWith("/")) href = `/${href}`;
    return `/${locale}${href}`;
  };

  return (
    <footer
      className={cn(
        "w-full px-4 pt-12 pb-8 border-t border-secondary-color bg-foreground text-white",
        className
      )}
      role="contentinfo"
      aria-label={t("aria.label")}
    >
      <div className="max-w-container mx-auto">
        <Footer className="bg-transparent">
          <FooterContent>
            {/* === LOGO === */}
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <Link
                href={`/${locale}`}
                className="flex items-center gap-2 mb-4"
                aria-label={t("aria.goHome")}
              >
                <Image
                  src={"/Logo_Final_Cyber_TowerLOWRES-03-recortada.png"}
                  alt="Cyberhub"
                  height={200}
                  width={200}
                />
              </Link>
              <p className="text-sm text-neutral-200 max-w-xs">
                {t("description")}
              </p>
            </FooterColumn>

            {/* === COLUMNAS DE NAVEGACIÓN === */}
            {columns.map((column, index) => (
              <FooterColumn
                key={index}
                role="navigation"
                aria-labelledby={`footer-col-${index}`}
              >
                <h2
                  id={`footer-col-${index}`}
                  className="text-md pt-1 font-semibold mb-2"
                >
                  {column.title}
                </h2>

                <ul className="space-y-1">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={buildHref(link.href)}
                        aria-label={link.ariaLabel || `Ir a ${link.text}`}
                        className="text-sm hover:text-secondary-color transition-colors text-white"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </FooterContent>

          {/* === LÍNEA INFERIOR === */}
          <FooterBottom className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 border-t border-secondary-color pt-6">
            <small className="text-xs text-neutral-200">{copyright}</small>

            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <Link
                  key={index}
                  href={buildHref(policy.href)}
                  aria-label={policy.ariaLabel || `Leer ${policy.text}`}
                  className="text-xs text-gray-200 hover:text-secondary-color transition-colors"
                >
                  {policy.text}
                </Link>
              ))}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
