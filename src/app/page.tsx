import { Hero } from "@/components/sections/hero";
import { Concept } from "@/components/sections/concept";
import { Details } from "@/components/sections/details";
import { Route } from "@/components/sections/route";
import { Pricing } from "@/components/sections/pricing";
import { Sponsors } from "@/components/sections/sponsors";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Concept />
        <Details />
        <Route />
        <Pricing />
        <Sponsors />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
