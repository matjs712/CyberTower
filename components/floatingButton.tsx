"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function FloatingContactButton() {
  const t = useTranslations("floatingContact");

  return (
    <div
      className="
        fixed bottom-4 z-50 pointer-events-none
        right-4
        lg:right-[clamp(1rem,calc((100vw-1280px)/2+1rem),5rem)]
        xl:right-[clamp(1rem,calc((100vw-1440px)/2+1rem),6rem)]
      "
    >
      <Link
        href="mailto:contacto@cyberhub.cl"
        aria-label={t("label")}
        className="
          pointer-events-auto
          flex items-center gap-2 
          bg-secondary-color 
          text-white 
          font-semibold 
          px-4 py-2 md:px-5 md:py-3
          rounded-full 
          shadow-xl 
          shadow-secondary-color/40 
          hover:shadow-secondary-color/60 
          hover:scale-[1.05] 
          transition-all 
          duration-300
          text-sm md:text-base
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 md:h-5 md:w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 21l1.8-4.6A7.7 7.7 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>

        {t("label")}
      </Link>
    </div>
  );
}
