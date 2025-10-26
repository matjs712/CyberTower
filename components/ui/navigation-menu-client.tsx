"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";

/**
 * Wrapper que asegura que NavigationMenu se renderice solo en el cliente.
 * Así evitamos el mismatch de IDs entre SSR y CSR.
 */
export const NavigationMenuClient = NavigationMenu;
export const NavigationMenuListClient = NavigationMenuList;
export const NavigationMenuItemClient = NavigationMenuItem;
export const NavigationMenuTriggerClient = NavigationMenuTrigger;
export const NavigationMenuContentClient = NavigationMenuContent;
export const NavigationMenuLinkClient = NavigationMenuLink;
