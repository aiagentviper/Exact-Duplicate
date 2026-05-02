import React from "react";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Pricing } from "@/components/sections/Pricing";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export function HomePage() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-primary-foreground dark">
      <Navigation />
      <main>
        <Hero />
        <Clients />
        <Portfolio />
        <Services />
        <Stats />
        <Testimonials />
        <CtaBand />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
