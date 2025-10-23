import { Menu, Phone } from "lucide-react";
import { ReactNode } from "react";

import LaunchUI from "@/components/logos/launch-ui";
import { Button, type ButtonProps } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import Link from "next/link";

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
  mobileLinks = [
    { text: "Soluciones", href: "/soluciones" },
    { text: "Certificaciones", href: "/certificaciones" },
    { text: "Clientes", href: "/clientes" },
    { text: "Nosotros", href: "/nosotros" },
    { text: "Blog", href: "/blog" },
  ],
  customNavigation,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80">
      <div className="max-w-container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href={homeUrl}
          aria-label="Ir al inicio de Cyberhub"
          className="flex items-center gap-2"
        >
          <LaunchUI className="size-8" aria-hidden="true" />
          <span className="sr-only">Cyberhub</span>
        </Link>

        <nav aria-label="Menú principal" className="hidden md:flex gap-6">
          {customNavigation || <Navigation />}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="tel:+56912345678"
            aria-label="Llamar a Cyberhub al +56 9 1234 5678"
            className="flex items-center gap-2 rounded-full bg-neutral-700 px-3 py-2 text-white hover:bg-neutral-600 transition"
          >
            <Phone className="size-4 text-secondary-color" aria-hidden="true" />
            <span>+56 9 1234 5678</span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-5" aria-hidden="true" />
                <span className="sr-only">Abrir menú de navegación</span>
              </Button>
            </SheetTrigger>
            <SheetTitle></SheetTitle>
            <SheetContent
              side="right"
              aria-label="Menú de navegación móvil"
              className="bg-background"
            >
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="text-xl font-semibold">
                  Inicio
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
