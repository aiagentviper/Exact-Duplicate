import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const processSteps = [
  { num: "1", title: "Define Your Vision", desc: "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly." },
  { num: "2", title: "Submit Your Request", desc: "Easily submit your requirements through our private client portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision." },
  { num: "3", title: "Project Delivered", desc: "Your project is completed with precision and delivered fast. We bring your vision to life — on time, on budget, and beyond expectations." },
];

const faqs = [
  { q: "What services do you provide?", a: "We specialise in AI automation, AI-powered websites, apps, and video — plus strategy, chatbots, and agent workflows to scale your business invisibly." },
  { q: "How do I start working with you?", a: "Book a free discovery call via Calendly. We'll map your needs, propose a scope, and get started — usually within 48 hours of agreement." },
  { q: "What tools do you use?", a: "We work across n8n, Make.com, Zapier, OpenAI, ElevenLabs, Runway, Sora, Framer, Webflow, and custom-coded stacks — whatever best fits your project." },
  { q: "How long does a project take?", a: "Timelines vary by scope — a landing page is typically 3–5 days; a full automation build or AI app ranges from 1–3 weeks. Rush delivery is available." },
  { q: "Do you provide revisions?", a: "Yes — all plans include structured revision rounds. We iterate with you until the output matches your vision exactly." },
  { q: "What industries do you work with?", a: "We've worked with SaaS, e-commerce, coaching, real estate, finance, healthcare, and B2B service businesses. If you have a workflow problem, we can solve it." },
  { q: "Do you offer ongoing support?", a: "Absolutely. We offer monthly retainer packages that cover maintenance, optimisation, new automations, and priority turnaround as your business grows." },
  { q: "What is your pricing structure?", a: "We offer project-based, subscription, and retainer pricing — designed to suit startups through to scale-ups. See our Pricing page for full details." },
  { q: "Can you redesign my existing website?", a: "Yes. We regularly rebuild and upgrade existing sites — migrating to faster, smarter stacks with AI features baked in from day one." },
];

function FAQAccordion({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState(0);
  return <div className="divide-y divide-border/40">{items.map((item, i) => <div key={item.q} className="py-4"><button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 text-left"><span className="font-inter text-[14px] text-foreground">{item.q}</span><span className="flex-shrink-0 text-xl font-light leading-none text-muted-foreground">{open === i ? "×" : "+"}</span></button>{open === i && item.a && <p className="mt-3 max-w-[480px] font-inter text-[13px] leading-relaxed text-muted-foreground">{item.a}</p>}</div>)}</div>;
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navigation />
      <main>
        <div className="pb-[30px] pt-[30px]"><Hero /></div>
        <Portfolio />
        <section className="w-full border-t border-border/40">
          <div className="grid min-h-[680px] w-full lg:grid-cols-2">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative min-h-[420px] overflow-hidden rounded-2xl">
              <img src="/photo-process.png" alt="Process" className="absolute inset-0 h-full w-full rounded-2xl object-cover object-center grayscale contrast-[1.1] brightness-[0.82]" />
            </motion.div>
            <div className="flex flex-col justify-center px-6 py-16 lg:px-14">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Design process</p>
                <h2 className="mb-4 font-grotesk text-[48px] font-semibold leading-[1.0] tracking-tight">Process</h2>
                <p className="mb-6 max-w-[340px] font-inter text-[14px] leading-relaxed text-muted-foreground">crafting bold visuals that inspire and elevate brands with thought process.</p>
                <div className="mb-10 flex gap-3"><Link href="/contact"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-foreground px-6 py-2.5 font-inter text-[13px] font-semibold text-background transition-colors hover:bg-foreground/90">Book a Free Call</span></Link><Link href="/work"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border/60 px-6 py-2.5 font-inter text-[13px] font-semibold transition-colors hover:border-foreground/50">See Projects</span></Link></div>
              </motion.div>
              <div className="space-y-3">{processSteps.map((step, i) => <motion.div key={step.num} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-2xl border border-border/40 bg-zinc-900/50 px-6 py-5 transition-all hover:border-border/70 hover:bg-card"><div className="mb-2 flex items-start justify-between gap-4"><h3 className="font-grotesk text-[17px] font-semibold tracking-tight">{step.title}</h3><span className="mt-1 flex-shrink-0 font-inter text-[11px] font-bold text-muted-foreground/40">{step.num}</span></div><p className="font-inter text-[13px] leading-relaxed text-muted-foreground">{step.desc}</p></motion.div>)}</div>
            </div>
          </div>
        </section>
        <Services />
        <Testimonials />
        <section className="w-full border-t border-border/40">
          <div className="grid min-h-[580px] w-full lg:grid-cols-2">
            <div className="flex flex-col gap-8 px-6 py-20 lg:border-r lg:border-border/40 lg:px-10 xl:px-14">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">FAQs</p>
                <h2 className="mb-4 font-grotesk text-[48px] font-semibold leading-[1.0] tracking-tight">Answers</h2>
                <p className="max-w-[320px] font-inter text-[14px] leading-relaxed text-muted-foreground">Find answers to common questions about my design process, services etc...</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="max-w-[360px] overflow-hidden rounded-2xl aspect-[4/3]">
                <img src="/photo-faq.png" alt="FAQ" className="h-full w-full object-cover object-center grayscale contrast-[1.1] brightness-[0.82]" />
              </motion.div>
              <div><div className="mb-5 flex flex-wrap gap-2">{"Brand Identity,Brand Design,Branding".split(",").map((tag) => <span key={tag} className="rounded-full border border-border/60 px-4 py-1.5 font-inter text-[12px] text-muted-foreground">{tag}</span>)}</div><Link href="/contact"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border/60 px-6 py-2.5 font-inter text-[13px] font-semibold transition-colors hover:border-foreground/50">Book a Free Call <ArrowRight size={13} /></span></Link></div>
            </div>
            <div className="flex flex-col justify-center px-6 py-20 lg:px-10 xl:px-14"><motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}><FAQAccordion items={faqs} /></motion.div></div>
          </div>
        </section>
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
