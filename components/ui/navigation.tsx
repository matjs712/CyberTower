// "use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import { certificaciones, cn } from "@/lib/utils";

import LaunchUI from "../logos/launch-ui";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

export interface ComponentItem {
  id: string;
  title: string;
  href: string;
  description: string;
  content: string;
}

interface MenuItem {
  title: string;
  href?: string;
  isLink?: boolean;
  content?: ReactNode | "default" | "components";
}

interface NavigationProps {
  menuItems?: MenuItem[];
  components?: ComponentItem[];
  logo?: ReactNode;
  logoTitle?: string;
  logoDescription?: string;
  logoHref?: string;
  introItems?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export default function Navigation({
  menuItems = [
    {
      title: "Soluciones",
      content: "default",
    },
    {
      title: "Certificaciones",
      content: "components",
    },
    {
      title: "Clientes",
      isLink: true,
      href: "/clientes",
    },
    {
      title: "Nosotros",
      isLink: true,
      href: "/nosotros",
    },
    {
      title: "Blog",
      isLink: true,
      href: "/blog",
    },
  ],
  components = certificaciones,
  logo = <LaunchUI />,
  logoTitle = "Fortalece tu organización digital",
  logoDescription = "Soluciones integrales en ciberseguridad, posicionamiento de marca y gestión estratégica.",
  logoHref = "/soluciones",
  introItems = [
    {
      title: "Programa de Awareness",
      href: "/soluciones/1",
      description:
        "Capacitaciones diseñadas para fortalecer la cultura de ciberseguridad dentro de tu organización.",
    },
    {
      title: "Posicionamiento de Marca",
      href: "/soluciones/2",
      description:
        "Estrategias de comunicación y branding orientadas al liderazgo corporativo en seguridad digital.",
    },
    {
      title: "Estrategias y Gestión",
      href: "/soluciones/3",
      description:
        "Consultorías en gobernanza, riesgo y cumplimiento para una transformación digital segura.",
    },
  ],
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.isLink ? (
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={item.href || ""}>{item.title}</Link>
              </NavigationMenuLink>
            ) : (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {item.content === "default" ? (
                    <div className="p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                              href={logoHref}
                            >
                              {logo}
                              <div className="mt-4 mb-2 text-lg font-medium">
                                {logoTitle}
                              </div>
                              <p className="text-muted-foreground text-sm leading-tight">
                                {logoDescription}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {introItems.map((intro, i) => (
                          <ListItem
                            key={i}
                            href={intro.href}
                            title={intro.title}
                          >
                            {intro.description}
                          </ListItem>
                        ))}
                      </ul>
                      <div className="mt-4 text-center">
                        <Link
                          href="/soluciones"
                          className="text-sm font-medium text-primary-color hover:text-primary-light-color hover:underline"
                        >
                          Ver todos los soluciones →
                        </Link>
                      </div>
                    </div>
                  ) : item.content === "components" ? (
                    <div className="p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                      <ul className="grid gap-3 md:grid-cols-2">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>

                      {/* 🔹 Link al final */}
                      <div className="mt-4 text-center">
                        <Link
                          href="/certificaciones"
                          className="text-sm font-medium text-primary-color hover:text-primary-light-color hover:underline"
                        >
                          Ver todas las certificaciones →
                        </Link>
                      </div>
                    </div>
                  ) : (
                    item.content
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"a"> & { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          data-slot="list-item"
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
