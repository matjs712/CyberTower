import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl"; // ✅ en lugar de usePathname
import { useTranslations } from "next-intl";
// import LaunchUI from "../logos/launch-ui";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const t = useTranslations("navigation");
  const locale = useLocale(); // ✅ idioma activo

  const menuItems = [
    { title: t("menu.solutions"), content: "default" },
    { title: t("menu.certifications"), content: "components" },
    { title: t("menu.blog"), isLink: true, href: `/${locale}/blog` },
    { title: t("menu.clients"), isLink: true, href: `/${locale}/clientes` },
    { title: t("menu.aboutUs"), isLink: true, href: `/${locale}/nosotros` },
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
                <NavigationMenuContent className="bg-foreground text-white">
                  {item.content === "default" ? (
                    <div className="p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                      <ul className="grid gap-3 p-4 lg:grid-cols-[.75fr_1fr]">
                        {/* <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link href={`/${locale}/soluciones`}>
                              <LaunchUI />
                              <div className="mt-4 mb-2 text-lg font-medium">
                                {t("solutions.title")}
                              </div>
                              <p className="text-muted-foreground text-sm leading-tight">
                                {t("solutions.description")}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li> */}

                        {introItems.map(
                          (intro: {
                            title: string;
                            slug: string;
                            description: string;
                          }) => (
                            <ListItem
                              key={intro.title}
                              href={`/${locale}/soluciones/${intro.slug}`}
                              title={intro.title}
                            >
                              {intro.description}
                            </ListItem>
                          )
                        )}
                      </ul>
                      <div className="mt-4 text-center">
                        <Link
                          href={`/${locale}/soluciones`}
                          className="text-sm font-medium text-secondary-color hover:underline"
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
                            slug: string;
                            description: string;
                          }) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={`/${locale}/certificaciones/${component.slug}`}
                            >
                              {component.description}
                            </ListItem>
                          )
                        )}
                      </ul>
                      <div className="mt-4 text-center">
                        <Link
                          href={`/${locale}/certificaciones`}
                          className="text-sm font-medium text-secondary-color hover:underline"
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
  href,
}: React.ComponentProps<typeof Link> & {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          data-slot="list-item"
          className={cn(
            "hover:bg-neutral-600 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className
          )}
        >
          <div className="text-sm leading-none font-medium text-secondary-color">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-white">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
