import { motion } from "framer-motion";
import React from "react";

const brands = ["Adobe", "Figma", "Apple", "Google", "Stripe", "Vercel", "Linear", "Notion"];

function ClientLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 text-muted-foreground/50 hover:text-foreground transition-colors duration-300 select-none">
      <span className="text-xl font-bold tracking-tight">{name}</span>
    </div>
  );
}

export function Clients() {
  return (
    <section className="py-20 border-y border-border/50 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by leading brands
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap px-8">
          {brands.map((b) => (
            <ClientLogo key={b} name={b} />
          ))}
          <span className="mx-4 text-muted-foreground/30">✦</span>
        </div>
        <div className="animate-marquee2 flex items-center gap-16 whitespace-nowrap px-8 absolute top-0">
          {brands.map((b) => (
            <ClientLogo key={b + "-2"} name={b} />
          ))}
          <span className="mx-4 text-muted-foreground/30">✦</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}} />
    </section>
  );
}
