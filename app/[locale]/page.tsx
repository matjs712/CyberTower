import BrandLogos from "@/components/sections/brand";
import ClientesSection from "@/components/sections/clientes/clientes";
import Hero from "@/components/sections/hero";
import Highlights from "@/components/sections/highlights";
import Mision from "@/components/sections/mision";
// import Opinion from "@/components/sections/opinion";
import CoreServices from "@/components/sections/services";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ClientesSection />
      <Highlights />
      <BrandLogos />
      <CoreServices />
      <Mision />
      {/* <Opinion /> */}
    </>
  );
}
