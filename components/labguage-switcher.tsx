"use client";

import { usePathname, Link } from "@/i18n/navigation";

export const LanguageSwitcher = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 items-center">
      <Link href={pathname} locale="es" className="font-medium">
        🇪🇸 ES
      </Link>
      <Link href={pathname} locale="en" className="font-medium">
        🇬🇧 EN
      </Link>
    </div>
  );
};
