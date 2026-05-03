import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const processSteps = [
  {
    num: "1",
    icon: "◇",
    title: "Define Your Vision",
    desc: "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.",
  },
  {
    num: "2",
    icon: "≡",
    title: "Submit Your Request",
    desc: "Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.",
  },
  {
    num: "3",
    icon: "⬡",
    title: "Project Delivered",
    desc: "As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2–3 days. With a keen eye for detail and a passion for quality, I bring your vision to life — on time and beyond expectations.",
  },
];

const faqs = [
  { q: "What services do you provide?", a: "We specialise in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences." },
  { q: "How do I start working with you?" },
  { q: "What design tools do you use?" },
  { q: "How long does a project take?" },
  { q: "Do you provide revisions?" },
  { q: "What industries do you work with?" },
  { q: "Do you offer development services?" },
  { q: "What is your pricing structure?" },
  { q: "Can you redesign my existing website?" },
];

function FAQAccordion({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-border/40">
      {items.map((item, i) => (
        <div key={item.q} className="py-4">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between gap-4 text-left"
          >
            <span className="font-inter text-[14px] text-foreground">{item.q}</span>
            <span className="text-muted-foreground text-lg leading-none flex-shrink-0">{open === i ? "×" : "+"}</span>
          </button>
          {open === i && item.a && <p className="font-inter text-[13px] text-muted-foreground mt-3 leading-relaxed">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}

export function HomePage() {
  return (
    <div className="bg-background min-h-screen text-foreground dark">
      <Navigation />
      <main>
        <div className="pt-[30px] pb-[30px]">
          <Hero />
        </div>

        <Portfolio />
        <Services />
        <Stats />

        <section className="border-t border-border/40 py-16">
          <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 items-start">
              <div className="space-y-4">
                <p className="font-inter text-[12px] uppercase tracking-[0.22em] text-muted-foreground">About Meily</p>
                <h2 className="font-grotesk text-[74px] leading-[0.95] tracking-tight">Meet Meily</h2>
                <p className="font-inter text-[13px] text-muted-foreground max-w-[360px] leading-relaxed">
                  Brand identity and package designer creating bold visuals with strategy, structure, and clarity.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Product Design", "Brand Identity Design", "UX Design", "Branding", "Packaging Design", "Figma", "Photoshop"].map(tag => (
                    <span key={tag} className="rounded-full border border-border/50 px-3 py-1 text-[11px] text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-6 pt-4 max-w-[520px]">
                  <div className="space-y-5 text-[12px] text-muted-foreground">
                    <div>Freelance</div>
                    <div>Brand Designer</div>
                    <div>Package Designer</div>
                  </div>
                  <div className="space-y-5 text-[12px] text-muted-foreground">
                    <div>GreenLeaf Co</div>
                    <div>UrbanFit Studio</div>
                    <div>GreenK Studio</div>
                  </div>
                  <div className="space-y-5 text-right text-[12px] text-muted-foreground">
                    <div>Currently</div>
                    <div>2023-24</div>
                    <div>2020-22</div>
                  </div>
                </div>
                <div className="pt-2 text-[14px] text-muted-foreground">
                  Recent Works
                </div>
              </div>

              <div className="relative">
                <img src="/photo-reviews.png" alt="Meet Meily portrait" className="w-full rounded-none object-cover" />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-4 gap-4">
              {["photo-process.png", "photo-services.jpg", "photo-faq.png", "photo-reviews.png"].map((src, i) => (
                <div key={src} className="overflow-hidden bg-card">
                  <img src={`/${src}`} alt={`Recent work ${i + 1}`} className="h-[120px] w-full object-cover object-center" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/40 py-20">
          <div className="mx-auto max-w-[1240px] px-6 lg:px-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <div className="relative overflow-hidden">
              <img src="/photo-process.png" alt="Process" className="h-[640px] w-full object-cover object-center" />
            </div>
            <div>
              <p className="font-inter text-[12px] uppercase tracking-[0.22em] text-muted-foreground mb-2">Design process</p>
              <h2 className="font-grotesk text-[58px] leading-[0.95] tracking-tight mb-4">Process</h2>
              <p className="font-inter text-[13px] text-muted-foreground max-w-[380px] leading-relaxed mb-5">
                Crafting bold visuals that inspire and elevate brands with thought process.
              </p>
              <div className="flex gap-3 mb-8">
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[13px] font-semibold text-background">
                    Book a Free Call
                  </span>
                </Link>
                <Link href="/work">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-[13px] font-semibold">
                    See Projects
                  </span>
                </Link>
              </div>
              <div className="space-y-3">
                {processSteps.map(step => (
                  <div key={step.num} className="rounded-2xl border border-border/40 bg-card/50 p-4">
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h3 className="font-grotesk text-[18px] font-semibold">{step.title}</h3>
                      <span className="text-[12px] text-muted-foreground/60">{step.num}</span>
                    </div>
                    <p className="font-inter text-[12px] leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/40 py-20">
          <div className="mx-auto max-w-[1240px] px-6 lg:px-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <div>
              <p className="font-inter text-[12px] uppercase tracking-[0.22em] text-muted-foreground mb-2">FAQs</p>
              <h2 className="font-grotesk text-[58px] leading-[0.95] tracking-tight mb-4">Answers</h2>
              <p className="font-inter text-[13px] text-muted-foreground max-w-[380px] leading-relaxed mb-6">
                Find answers to common questions about our process, services etc...
              </p>
              <img src="/photo-faq.png" alt="FAQ visual" className="w-full max-w-[520px] rounded-2xl object-cover" />
              <div className="flex flex-wrap gap-2 pt-4">
                {["Product Design", "Brand Identity Design", "Branding"].map(tag => (
                  <span key={tag} className="rounded-full border border-border/50 px-3 py-1 text-[11px] text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-2">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>

        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
