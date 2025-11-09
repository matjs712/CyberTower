"use client";

import { Menu } from "lucide-react";
import { ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { LanguageSwitcher } from "./labguage-switcher";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

export default function Navbar({
  homeUrl = siteConfig.url,
  customNavigation,
}: NavbarProps) {
  const t = useTranslations("navbar");

  const mobileLinks = [
    { text: t("links.solutions"), href: "/soluciones" },
    { text: t("links.certifications"), href: "/certificaciones" },
    { text: t("links.clients"), href: "/clientes" },
    { text: t("links.aboutUs"), href: "/nosotros" },
    { text: t("links.blog"), href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-foreground/80 text-white">
      <div className="max-w-container mx-auto flex items-center justify-between px-4 py-3 pb-1">
        {/* Logo */}
        <Link
          href={homeUrl}
          aria-label={t("aria.goHome")}
          className="flex items-center gap-2 pl-4"
        >
          <Image
            src={"/Logo_Final_Cyber_TowerLOWRES-03-recortada.png"}
            alt="Cyber-Tower"
            height={200}
            width={150}
          />
          <span className="sr-only">Cyber-Tower</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label={t("aria.mainMenu")} className="hidden md:flex gap-6">
          {customNavigation || <Navigation />}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-5" aria-hidden="true" />
                <span className="sr-only">{t("aria.openMenu")}</span>
              </Button>
            </SheetTrigger>
            <SheetTitle></SheetTitle>
            <SheetContent
              side="right"
              aria-label={t("aria.mobileMenu")}
              className="bg-background"
            >
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="text-xl font-semibold">
                  {t("links.home")}
                </Link>
                {mobileLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.text}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
