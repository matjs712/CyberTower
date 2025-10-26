"use client";

import { usePathname, Link } from "@/i18n/navigation";
import { useParams } from "next/navigation";

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const params = useParams();

  return (
    <div className="flex gap-4 items-center">
      <Link
        href={{ pathname, query: params }} // 👈 usa "query" en vez de "params"
        locale="es"
        className="font-medium"
      >
        🇪🇸 ES
      </Link>

      <Link
        href={{ pathname, query: params }} // 👈 igual aquí
        locale="en"
        className="font-medium"
      >
        🇬🇧 EN
      </Link>
    </div>
  );
};
