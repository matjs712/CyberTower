import Navbar from "@/components/navbar";
import BrandLogos from "@/components/sections/brand";
import FooterSection from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Highlights from "@/components/sections/highlights";
import Mision from "@/components/sections/mision";
import Opinion from "@/components/sections/opinion";
import CoreServices from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <BrandLogos />
      <CoreServices />
      <Mision />
      <Opinion />
      <FooterSection />
    </>
  );
}
