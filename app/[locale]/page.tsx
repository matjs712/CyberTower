// import Mision from "@/components/sections/mision";
// import CoreServices from "@/components/sections/services";
// import Highlights from "@/components/sections/highlights";
// import Opinion from "@/components/sections/opinion";
import BrandLogos from "@/components/sections/brand";
import ClientesSection from "@/components/sections/clientes/clientes";
import ContactCTA from "@/components/sections/contact-us";
import CTAHorizontal from "@/components/sections/CTAHorizontal";
import Diferenciadores from "@/components/sections/diferenciadores";
import Hero from "@/components/sections/hero";
import ComoTrabajamos from "@/components/sections/howWeWork";
import ServicioIdealWizard from "@/components/sections/serviceWizard";
import { setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;

  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ClientesSection />
      <BrandLogos />
      <CTAHorizontal />
      <ComoTrabajamos />
      <ServicioIdealWizard />
      <Diferenciadores />
      <ContactCTA />
      {/* <CoreServices />
      <Mision /> */}
      {/* <Highlights /> */}
      {/* <Opinion /> */}
    </>
  );
}
