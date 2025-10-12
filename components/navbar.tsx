import { Menu, Phone } from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import LaunchUI from "@/components/logos/launch-ui";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import Navigation from "@/components/ui/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

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
  logo = <LaunchUI />,
  name = "Launch UI",
  homeUrl = siteConfig.url,
  mobileLinks = [
    { text: "Getting Started", href: siteConfig.url },
    { text: "Components", href: siteConfig.url },
    { text: "Documentation", href: siteConfig.url },
  ],
  actions = [
    {
      text: "+569 12345678",
      href: siteConfig.url,
      isButton: true,
      variant: "default",
      icon: <Phone className="size-4" />,
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  return (
    <header className={cn("sticky top-2 z-50 -mb-4 px-4 pb-4", className)}>
      <div className="fade-bottom absolute left-0 h-24 w-full "></div>
      <div className="max-w-container relative mx-auto bg-background/15 backdrop-blur-lg mt-2 rounded-lg px-4">
        <NavbarComponent>
          <NavbarLeft>
            <a
              href={homeUrl}
              className="flex items-center gap-2 text-xl font-bold"
            >
              {logo}
              {name}
            </a>
            {showNavigation && (customNavigation || <Navigation />)}
          </NavbarLeft>
          <NavbarRight>
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "default"}
                className="rounded-full px-1 bg-neutral-700 w-fit"
                asChild
              >
                <a href={action.href} className="flex flex-row gap-2 px-1">
                  <div className="bg-secondary-color p-2 rounded-full">
                    {action.icon}
                  </div>
                  <div className="pr-2">{action.text}</div>
                  {action.iconRight}
                </a>
              </Button>
            ))}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href={homeUrl}
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>{name}</span>
                  </a>
                  {mobileLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
