import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Clock, Globe } from "lucide-react";
import { Link } from "wouter";
import { Image } from "lucide-react";

const processSteps = [
  {
    num: "01",
    title: "Define Your Vision",
    desc: "Tell us what you want to build, your goals, your audience and the outcomes you're after. We listen first and ask the right questions.",
  },
  {
    num: "02",
    title: "Submit Your Request",
    desc: "We scope the work, agree a clear timeline and lock in deliverables. No surprises — just a clean plan you can hold us to.",
  },
  {
    num: "03",
    title: "Project Delivered",
    desc: "We build fast using the best AI tools, iterate with your feedback and hand over a finished product ready to scale.",
  },
];

const answers = [
  {
    icon: <Zap size={18} />,
    title: "10x Faster Than Traditional Agencies",
    desc: "We use the most advanced AI tools available — so what takes a traditional agency 6 weeks takes us 3–5 days.",
  },
  {
    icon: <Globe size={18} />,
    title: "Every Service Under One Roof",
    desc: "Websites, apps, automation, video and strategy. No handing off to different vendors — we handle everything end-to-end.",
  },
  {
    icon: <Clock size={18} />,
    title: "No Bloated Retainers or Hidden Fees",
    desc: "Transparent project pricing, honest timelines and a clear scope before we start. You always know exactly what you're getting.",
  },
];

const showcaseItems = [
  {
    title: "Meet Meily",
    desc: "Brand identity + package design system",
    image: "/portfolio/brand-identity-1.jpg",
    large: true,
  },
  {
    title: "Studio Reel",
    desc: "Creative direction and motion assets",
    image: "/portfolio/portfolio-2.jpg",
  },
  {
    title: "Luxury Form",
    desc: "Product-first landing page system",
    image: "/portfolio/portfolio-3.jpg",
  },
  {
    title: "Services Grid",
    desc: "Dark editorial service cards",
    image: "/portfolio/portfolio-4.jpg",
  },
  {
    title: "FAQs + Answers",
    desc: "Accordion layout and support content",
    image: "/portfolio/portfolio-5.jpg",
  },
  {
    title: "Client Reviews",
    desc: "Scrolling testimonial cards",
    image: "/portfolio/portfolio-6.jpg",
  },
];

export function HomePage() {
  return (
    <div className="bg-background min-h-screen text-foreground dark">
      <Navigation />
      <main>
        <div className="pt-[20px] pb-[20px]">
          <Hero />
        </div>

        <Portfolio />

        <section className="py-28 border-t border-border/40">
          <div className="container mx-auto px-6 mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Recent Works</p>
              <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">Homepage Sections</h2>
              <p className="font-inter text-[15px] text-muted-foreground mt-4 max-w-md">The same dark editorial style, card language, and reference structure applied directly to the homepage.</p>
            </motion.div>
          </div>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-12 gap-4" style={{ gridAutoRows: "80px" }}>
              <div className="col-span-12 md:col-span-5" style={{ gridRow: "span 7" }}>
                <div className="relative h-full rounded-[18px] overflow-hidden border border-border/40 bg-card">
                  <img src={showcaseItems[0].image} alt={showcaseItems[0].title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="rounded-full border border-white/50 bg-white/10 backdrop-blur-md px-4 py-2 text-center text-[12px] text-white">View Community ↗</div>
                  </div>
                </div>
              </div>
              {showcaseItems.slice(1).map((item, idx) => (
                <div key={item.title} className={`col-span-12 ${idx === 0 ? "md:col-span-7" : idx === 1 ? "md:col-span-4" : idx === 2 ? "md:col-span-4" : idx === 3 ? "md:col-span-4" : "md:col-span-4"}`} style={{ gridRow: "span 3" }}>
                  <div className="relative h-full rounded-[18px] overflow-hidden border border-border/40 bg-card">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="rounded-full border border-white/50 bg-white/10 backdrop-blur-md px-4 py-2 text-center text-[12px] text-white">View Community ↗</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services />
        <Stats />

        <section className="py-28 border-t border-border/40">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Design process</p>
                <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">Process</h2>
                <p className="font-inter text-[15px] text-muted-foreground mt-4 max-w-xs leading-relaxed">Crafting bold visuals that inspire and elevate brands with thought process.</p>
                <div className="flex gap-3 mt-6">
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
              <div>
                {processSteps.map((step, i) => (
                  <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-8 py-8 border-b border-border/40 last:border-0">
                    <span className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-green-400 pt-1 min-w-[28px]">{step.num}</span>
                    <div>
                      <h3 className="font-grotesk font-semibold text-[22px] tracking-tight mb-2">{step.title}</h3>
                      <p className="font-inter text-[15px] leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 border-t border-border/40">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">FAQs</p>
                <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">Answers</h2>
                <p className="font-inter text-[15px] text-muted-foreground mt-4 max-w-xs leading-relaxed">Find answers to common questions about my design process, services etc...</p>
                <div className="mt-6 flex gap-2 flex-wrap">
                  <span className="border border-border/60 rounded-full px-4 py-2 text-[12px] font-inter text-muted-foreground">Product Design</span>
                  <span className="border border-border/60 rounded-full px-4 py-2 text-[12px] font-inter text-muted-foreground">Brand Identity Design</span>
                  <span className="border border-border/60 rounded-full px-4 py-2 text-[12px] font-inter text-muted-foreground">Branding</span>
                </div>
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 mt-6 font-inter font-semibold text-[13px] border border-border/60 rounded-full px-6 py-2.5 hover:border-foreground/50 transition-colors cursor-pointer">
                    Book a Free Call <ArrowRight size={13} />
                  </span>
                </Link>
              </motion.div>
              <div className="grid gap-3">
                {[
                  "What services do you offer?",
                  "How do I start working with you?",
                  "What design tools do you use?",
                  "How long does a project take?",
                  "Do you provide revisions?",
                  "What industries do you work with?",
                ].map((q, i) => (
                  <div key={q} className={`rounded-2xl border border-border/40 bg-card px-5 py-4 ${i === 0 ? "ring-1 ring-white/10" : ""}`}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-inter text-[14px] text-foreground">{q}</span>
                      <span className="text-muted-foreground">+</span>
                    </div>
                  </div>
                ))}
              </div>
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
