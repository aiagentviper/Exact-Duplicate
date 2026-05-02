import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";

export function HomePage() {
  return (
    <div className="bg-background min-h-screen text-foreground dark">
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Stats />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
