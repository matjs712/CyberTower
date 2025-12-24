import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const CTAHorizontal = () => {
  const t = useTranslations("home");

  return (
    <section
      className="
        w-full 
        py-10 
        px-6 
        bg-gradient-to-r 
        from-[#26b9e3] 
        to-[#0a6da8]
        text-white
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* TEXTO */}
        <p className="text-xl md:text-2xl font-semibold text-center md:text-left leading-snug">
          {t("aceleraText")}
        </p>

        {/* BOTÓN */}
        <Link
          href="mailto:contact@cybertower.com"
          className="
            flex 
            items-center 
            gap-3 
            bg-white 
            text-[#0a2540] 
            font-semibold 
            py-3 
            px-6 
            rounded-full 
            shadow-md 
            hover:shadow-lg 
            hover:scale-[1.03] 
            transition-all 
            duration-200
          "
        >
          <span className="text-[#26b9e3]">
            <ArrowRight className="w-5 h-5" />
          </span>
          <span className="tracking-wide">{t("buttonContact")}</span>
        </Link>
      </div>
    </section>
  );
};

export default CTAHorizontal;
