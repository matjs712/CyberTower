"use client";

import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AgendaDialog from "../AgendaDialog";
import { ActionButton } from "./howWeWork";
import { useTranslations } from "next-intl";

const ContactCTA = () => {
  const t = useTranslations("contactCTA");
  const h = useTranslations("howWeWork.puntual");

  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-black text-white overflow-hidden">
      {/* Glow decorativo */}
      <div
        className="
          absolute 
          bottom-[-150px]
          right-[-100px]
          w-[500px] 
          h-[500px] 
          rounded-full 
          bg-secondary-color 
          opacity-20 
          blur-[160px] 
        "
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* === Texto === */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight whitespace-pre-line">
            {t("title")}
          </h2>

          <p className="text-lg text-gray-300 max-w-md">{t("description")}</p>

          {/* === Items de contacto === */}
          <div className="flex flex-col gap-6 mt-10">
            {/* EMAIL */}
            <div className="flex items-center gap-4">
              <div className="bg-secondary-color p-4 rounded-full">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-lg">{t("emailLabel")}</p>
                <Link
                  href="mailto:contact@cybertower.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contact@cybertower.com
                </Link>
              </div>
            </div>

            {/* LINKEDIN */}
            <div className="flex items-center gap-4">
              <div className="bg-secondary-color p-4 rounded-full">
                <Linkedin className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-lg">{t("linkedinLabel")}</p>
                <Link
                  href="https://www.linkedin.com/company/cyberhub-consulting/"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("linkedinName")}
                </Link>
              </div>
            </div>

            {/* CTA → Agenda una reunión */}
            <AgendaDialog
              trigger={
                <ActionButton
                  className="bg-secondary-color text-white !rounded-full"
                  text={h("cta.primary")}
                />
              }
            />
          </div>
        </div>

        {/* === Imagen === */}
        <div className="hidden md:flex items-center justify-center">
          <div
            className="
              relative
              w-[380px]
              h-[380px]
              rounded-[40px]
              overflow-hidden
              shadow-xl
              border border-white/10
              backdrop-blur-sm
            "
          >
            <Image
              src="/contact-image.png"
              alt="Contact us"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
