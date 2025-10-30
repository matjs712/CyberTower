"use client";

import { usePathname, Link } from "@/i18n/navigation";

export const LanguageSwitcher = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 lg:gap-4 items-center">
      <Link href={pathname} locale="es" className="font-medium text-xl">
        🇪🇸
        <span className="lg:flex hidden text-sm"> ES</span>
      </Link>
      <Link href={pathname} locale="en" className="font-medium text-xl">
        🇬🇧
        <span className="lg:flex hidden text-sm">EN</span>
      </Link>
    </div>
  );
};
