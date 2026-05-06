import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { Concept } from "@/components/sections/concept";
import { DataSheet } from "@/components/sections/data-sheet";
import { Route } from "@/components/sections/route";
import { Details } from "@/components/sections/details";
import { Pricing } from "@/components/sections/pricing";
import { Sponsors } from "@/components/sections/sponsors";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <main className="flex-1">
        <Hero />
        <Concept />
        <DataSheet />
        <Route />
        <Details />
        <Pricing />
        <Sponsors />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
