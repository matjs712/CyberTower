"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
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
import { useTranslations } from "next-intl";

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

export default function Navigation() {
  const t = useTranslations("navigation");

  const menuItems: MenuItem[] = [
    { title: t("menu.solutions"), content: "default" },
    { title: t("menu.certifications"), content: "components" },
    { title: t("menu.clients"), isLink: true, href: "/clientes" },
    { title: t("menu.aboutUs"), isLink: true, href: "/nosotros" },
    { title: t("menu.blog"), isLink: true, href: "/blog" },
  ];

  const components = t.raw("certifications.list");
  const introItems = t.raw("solutions.introItems");

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
                              href="/soluciones"
                            >
                              <LaunchUI />
                              <div className="mt-4 mb-2 text-lg font-medium">
                                {t("solutions.title")}
                              </div>
                              <p className="text-muted-foreground text-sm leading-tight">
                                {t("solutions.description")}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {introItems.map(
                          (intro: {
                            title: string;
                            href: string;
                            description: string;
                          }) => (
                            <ListItem
                              key={intro.title}
                              href={intro.href}
                              title={intro.title}
                            >
                              {intro.description}
                            </ListItem>
                          )
                        )}
                      </ul>
                      <div className="mt-4 text-center">
                        <Link
                          href="/soluciones"
                          className="text-sm font-medium text-primary-color hover:text-primary-light-color hover:underline"
                        >
                          {t("solutions.viewAll")} →
                        </Link>
                      </div>
                    </div>
                  ) : item.content === "components" ? (
                    <div className="p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                      <ul className="grid gap-3 md:grid-cols-2">
                        {components.map(
                          (component: {
                            title: string;
                            href: string;
                            description: string;
                          }) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          )
                        )}
                      </ul>
                      <div className="mt-4 text-center">
                        <Link
                          href="/certificaciones"
                          className="text-sm font-medium text-primary-color hover:text-primary-light-color hover:underline"
                        >
                          {t("certifications.viewAll")} →
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
