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

        <section className="border-t border-border/40">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden min-h-[400px] lg:min-h-auto"
            >
              <img
                src="/photo-process.png"
                alt="Our Process"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            <div className="py-20 px-10 lg:px-14 flex flex-col justify-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Design process</p>
                <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight mb-3">Process</h2>
                <p className="font-inter text-[15px] text-muted-foreground max-w-sm leading-relaxed mb-6">
                  Crafting bold visuals that inspire and elevate brands with thought process.
                </p>
                <div className="flex gap-3 mb-12">
                  <Link href="/contact">
                    <span className="inline-flex items-center gap-2 bg-foreground text-background font-inter font-semibold text-[13px] rounded-full px-6 py-2.5 hover:bg-foreground/90 transition-colors cursor-pointer">
                      Book a Free Call
                    </span>
                  </Link>
                  <Link href="/work">
                    <span className="inline-flex items-center gap-2 border border-border/60 font-inter font-semibold text-[13px] rounded-full px-6 py-2.5 hover:border-foreground/50 transition-colors cursor-pointer">
                      See Projects
                    </span>
                  </Link>
                </div>
              </motion.div>

              <div className="space-y-0">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-5 py-7 border-b border-border/30 last:border-0"
                  >
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <span className="text-muted-foreground/50 text-[18px] leading-none">{step.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-grotesk font-semibold text-[20px] tracking-tight">{step.title}</h3>
                        <span className="font-inter font-bold text-[13px] text-muted-foreground/40 flex-shrink-0">{step.num}</span>
                      </div>
                      <p className="font-inter text-[14px] leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/40">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            <div className="py-20 px-10 lg:px-14 flex flex-col justify-between border-r border-border/40">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">FAQs</p>
                <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight mb-3">Answers</h2>
                <p className="font-inter text-[15px] text-muted-foreground max-w-xs leading-relaxed">
                  Find answers to common questions about our process, services etc...
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="my-8 rounded-2xl overflow-hidden aspect-[4/3] max-w-sm"
              >
                <img src="/photo-faq.png" alt="FAQ visual" className="w-full h-full object-cover object-center" />
              </motion.div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Product Design", "Brand Identity Design", "Branding"].map(tag => (
                    <span key={tag} className="border border-border/60 rounded-full px-4 py-1.5 text-[12px] font-inter text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 font-inter font-semibold text-[13px] border border-border/60 rounded-full px-6 py-2.5 hover:border-foreground/50 transition-colors cursor-pointer">
                    Book a Free Call <ArrowRight size={13} />
                  </span>
                </Link>
              </div>
            </div>

            <div className="py-20 px-10 lg:px-14">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <FAQAccordion items={faqs} />
              </motion.div>
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
