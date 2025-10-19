import BrandLogos from "@/components/sections/brand";
import Hero from "@/components/sections/hero";
import Highlights from "@/components/sections/highlights";
import Mision from "@/components/sections/mision";
import Opinion from "@/components/sections/opinion";
import CoreServices from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <BrandLogos />
      <CoreServices />
      <Mision />
      <Opinion />
    </>
  );
}
