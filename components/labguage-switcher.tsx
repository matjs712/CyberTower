"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  return (
    <div className="flex gap-4 items-center">
      <Link
        href={pathname.replace(`/${currentLocale}`, "/es")}
        className={currentLocale === "es" ? "font-bold text-primary" : ""}
      >
        🇪🇸 ES
      </Link>
      <Link
        href={pathname.replace(`/${currentLocale}`, "/en")}
        className={currentLocale === "en" ? "font-bold text-primary" : ""}
      >
        🇬🇧 EN
      </Link>
    </div>
  );
};
