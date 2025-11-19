"use client";

import { usePathname, Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="flex gap-2 lg:gap-4 items-center">
      {/* Español (default) */}
      <Link
        href={pathname}
        locale="es"
        className={`font-medium text-xl p-1 rounded-md transition 
          ${locale === "es" ? "bg-primary/10" : "opacity-70 hover:opacity-100"}
        `}
      >
        🇪🇸
      </Link>

      {/* Inglés */}
      <Link
        href={pathname}
        locale="en"
        className={`font-medium text-xl p-1 rounded-md transition 
          ${locale === "en" ? "bg-primary/10" : "opacity-70 hover:opacity-100"}
        `}
      >
        🇺🇸
      </Link>
    </div>
  );
};
