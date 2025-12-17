"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Mail, MapPin, Phone, Shield, Globe, Laptop } from "lucide-react";
import { useTranslations } from "next-intl";
import AgendaDialog from "../AgendaDialog";
import { ActionButton } from "./howWeWork";

export default function FooterSection() {
  const t = useTranslations("footer");
  const tNav = useTranslations("navbar");
  const tSolutions = useTranslations("solutions");
  const s = useTranslations("howWeWork.puntual");
  // Navigation: navbar.links
  const navLinks = [
    {
      text: tNav("links.solutions"),
      href: "/soluciones",
      icon: <Globe size={14} />,
    },
    {
      text: tNav("links.aboutUs"),
      href: "/nosotros",
      icon: <Shield size={14} />,
    },
    {
      text: tNav("links.certifications"),
      href: "/certificaciones",
      icon: <Laptop size={14} />,
    },
    { text: tNav("links.blog"), href: "/blog", icon: <Globe size={14} /> },
    {
      text: tNav("links.clients"),
      href: "/clientes",
      icon: <Shield size={14} />,
    },
  ];

  // Services: solutions.list
  const services = tSolutions
    .raw("list")
    .map((s: { title: string; href: string; icon: React.ReactNode }) => ({
      text: s.title,
      href: s.href,
      icon: <Shield size={14} />,
    }));

  const contact = {
    location: t("contact.location"),
    email: t("contact.email"),
    schedule: t("contact.schedule"),
  };

  return (
    <footer className="w-full pt-16 pb-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* ============================
                LEFT COLUMN
        ============================ */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2">
            <Image src="/logo-b.svg" alt="Cyberhub" width={200} height={200} />
            {/* <span className="text-xl font-semibold">Cyberhub</span> */}
          </div>

          <p className="text-neutral-900/70 text-sm max-w-xs">
            {t("description")}
          </p>

          <AgendaDialog
            trigger={
              <ActionButton
                className="bg-secondary-color text-white !rounded-full"
                text={s("cta.primary")}
              />
            }
          />
        </div>

        {/* ============================
                NAVIGATION (JSON)
        ============================ */}
        <div>
          <h3 className="font-semibold mb-3 text-neutral-900">
            {t("navigationTitle")}
          </h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-neutral-900/70 hover:text-neutral-900 transition"
                >
                  {link.icon} {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ============================
                SERVICES (solutions.list)
        ============================ */}
        <div>
          <h3 className="font-semibold mb-3 text-neutral-900">
            {t("servicesTitle")}
          </h3>
          <ul className="space-y-2 text-sm">
            {services.map(
              (item: { icon: React.ReactNode; text: string }, i: number) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-neutral-900/70 hover:text-neutral-900 transition"
                >
                  {item.icon}
                  {item.text}
                </li>
              )
            )}
          </ul>
        </div>

        {/* ============================
                CONTACT (JSON)
        ============================ */}
        <div>
          <h3 className="font-semibold mb-3 text-neutral-900">
            {t("contactTitle")}
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-neutral-900/70">
              <MapPin size={14} /> {contact.location}
            </li>
            <li className="flex items-center gap-2 text-neutral-900/70">
              <Mail size={14} /> {contact.email}
            </li>
            <li className="flex items-center gap-2 text-neutral-900/70">
              <Phone size={14} /> {contact.schedule}
            </li>
          </ul>
        </div>
      </div>

      {/* ============================
              COPYRIGHT
      ============================ */}
      <div className="border-t border-black/10 mt-12 pt-6 text-center text-xs text-neutral-900/50">
        {t("copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
