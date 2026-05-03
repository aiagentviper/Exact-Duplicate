import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Link } from "wouter";
import { ArrowRight, Zap, Globe, Smartphone, Video, Clapperboard, BrainCircuit } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const skills = [
  { icon: <Zap size={16} />, label: "AI Automation" },
  { icon: <Globe size={16} />, label: "AI Websites" },
  { icon: <Smartphone size={16} />, label: "AI Apps" },
  { icon: <Video size={16} />, label: "AI Video" },
];

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

const services = [
  { num: "01", icon: <Zap size={20} />, title: "AI Automation", desc: "End-to-end workflow systems that replace repetitive tasks and free up your team." },
  { num: "02", icon: <Globe size={20} />, title: "AI Websites", desc: "Conversion-first, beautifully designed AI-built websites that work 24/7." },
  { num: "03", icon: <Smartphone size={20} />, title: "AI Apps", desc: "Custom AI-powered apps from MVP to production-ready in record time." },
  { num: "04", icon: <Clapperboard size={20} />, title: "AI Video", desc: "Cinematic short-form and long-form AI video for ads, brand and content." },
  { num: "05", icon: <BrainCircuit size={20} />, title: "Vibe Coding", desc: "Ship polished, functional interfaces fast with AI-assisted development." },
  { num: "06", icon: <ArrowRight size={20} />, title: "AI Strategy", desc: "A clear AI roadmap tailored to your business goals and growth stage." },
];

const testimonials = [
  {
    name: "Jordan Miles",
    title: "CEO, LaunchLab",
    quote: "VIPER automated our entire onboarding flow in under a week. What used to take hours now runs on autopilot. Genuinely transformative.",
    stars: 5,
  },
  {
    name: "Priya Nair",
    title: "Co-Founder, Stackly",
    quote: "They built our AI-powered website in days. It converts better than anything we've had before. The quality-to-speed ratio is unreal.",
    stars: 5,
  },
  {
    name: "Derek Owens",
    title: "Head of Marketing, BrandWave",
    quote: "The AI video content drove a 3x increase in engagement in the first two weeks alone. This team knows what they're doing.",
    stars: 5,
  },
];

const faqs = [
  { q: "What makes VIPER different from other agencies?", a: "We are 100% AI-native. Every project is built using the best AI tools available — not adapted to them. This means we move 10x faster and deliver more for less." },
  { q: "How fast can you deliver?", a: "Most Starter projects are done in 3–5 business days. Growth projects in 7–10 days. Enterprise timelines are scoped together based on complexity." },
  { q: "What industries do you work with?", a: "Every industry. We've built for e-commerce, SaaS, health & wellness, finance, hospitality, fitness, education and more. If there's a business, we can AI-power it." },
  { q: "Do I need to be technical to work with you?", a: "Not at all. You just need to know what outcome you want. We handle everything from strategy to delivery." },
  { q: "Can you work with my existing tools?", a: "Yes. Whether you're on Zapier, Make, HubSpot, Shopify, Notion or anything else — we integrate with your existing stack." },
];

export function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-foreground dark">
      <Navigation />
      <main className="pt-20">

        {/* ── Hero split ── */}
        <section className="min-h-[90vh] flex items-center border-b border-border/40">
          <div className="mx-auto w-full max-w-[1100px] px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <span className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 block mb-6">About VIPER</span>
                <h1 className="font-grotesk font-bold text-[60px] leading-[1.0] tracking-[-0.02em] mb-6">
                  The AI Agency<br />
                  <span className="text-foreground/40">Built for Speed.</span>
                </h1>
                <p className="font-inter text-[16px] leading-relaxed text-muted-foreground mb-6 max-w-md">
                  VIPER is a next-generation AI agency founded on one belief: every business deserves to operate at machine speed. We build the systems, sites, apps, and content that make that possible.
                </p>
                <p className="font-inter text-[15px] leading-relaxed text-muted-foreground mb-10 max-w-md">
                  No bloated retainers. No unnecessary fluff. Just AI-powered work that scales — delivered fast.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {skills.map((s) => (
                    <span key={s.label} className="inline-flex items-center gap-2 border border-border/50 rounded-full px-4 py-2 font-inter text-[13px] text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-colors">
                      {s.icon}{s.label}
                    </span>
                  ))}
                </div>
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 bg-foreground text-background font-inter font-semibold text-[13px] rounded-full px-7 py-3 hover:bg-foreground/90 transition-colors cursor-pointer">
                    Work With Us <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-card border border-border/30 max-w-md mx-auto">
                  <img src="/profile-clean.png" alt="VIPER AI Agency — Founder" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-card/85 backdrop-blur-md rounded-xl p-5 border border-border/50">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <span className="font-inter text-[11px] uppercase tracking-[0.2em] text-orange-500 font-semibold">Available for Projects</span>
                      </div>
                      <p className="font-grotesk font-semibold text-[18px] text-foreground">jimohmalik101@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-card border border-border/50 rounded-2xl p-5 shadow-xl hidden lg:block">
                  <div className="font-grotesk font-bold text-[36px] leading-none mb-1">50+</div>
                  <div className="font-inter text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Projects Shipped</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Stats row ── */}
        <section className="border-b border-border/40">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { val: "50+", label: "Projects Shipped" },
                { val: "10x", label: "Average ROI" },
                { val: "100%", label: "AI-Built" },
                { val: "24hr", label: "MVP Turnaround" },
              ].map((s, i) => (
                <motion.div key={s.val} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`py-12 px-6 ${i < 3 ? "md:border-r border-border/40" : ""} ${i > 1 ? "border-t md:border-t-0 border-border/40" : ""}`}>
                  <div className="font-grotesk font-bold text-[48px] leading-none tracking-tight mb-2">{s.val}</div>
                  <div className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-28 border-b border-border/40">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-3">How It Works</p>
                <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">
                  Our<br />Process!
                </h2>
              </motion.div>
              <div className="space-y-0">
                {processSteps.map((step, i) => (
                  <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-8 py-8 border-b border-border/40 last:border-0">
                    <span className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 pt-1.5 min-w-[28px]">{step.num}</span>
                    <div>
                      <h3 className="font-grotesk font-semibold text-[22px] tracking-tight mb-2">{step.title}</h3>
                      <p className="font-inter text-[15px] leading-relaxed text-muted-foreground max-w-md">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Services grid ── */}
        <section className="py-28 border-b border-border/40">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
              <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-3">What We Offer</p>
              <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">
                Our<br />Services!
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div key={s.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-card border border-border/40 rounded-2xl p-7 hover:border-border/70 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-foreground/[0.08] border border-border/50 flex items-center justify-center mb-5 text-muted-foreground">
                    {s.icon}
                  </div>
                  <span className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 block mb-2">{s.num}</span>
                  <h3 className="font-grotesk font-semibold text-[20px] tracking-tight mb-2">{s.title}</h3>
                  <p className="font-inter text-[14px] leading-relaxed text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-10 text-center">
              <Link href="/services">
                <span className="inline-flex items-center gap-2 font-inter font-semibold text-[13px] border border-border/60 rounded-full px-6 py-2.5 hover:border-foreground/50 transition-colors cursor-pointer">
                  View All Services <ArrowRight size={13} />
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-28 border-b border-border/40">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
              <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-3">Client Reviews</p>
              <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">
                What Clients<br />Say!
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-border/40 rounded-2xl p-8">
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <span key={j} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="font-inter text-[15px] leading-relaxed text-foreground/80 mb-8">"{t.quote}"</p>
                  <div className="flex items-center gap-3 border-t border-border/40 pt-6">
                    <div className="w-9 h-9 rounded-full bg-foreground/10 border border-border/50 flex items-center justify-center font-grotesk text-[12px] font-bold flex-shrink-0">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="font-grotesk font-semibold text-[14px]">{t.name}</h4>
                      <p className="font-inter text-[12px] text-muted-foreground">{t.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-28 border-b border-border/40">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-3">Answers</p>
                <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">
                  Got a<br />Question?
                </h2>
                <p className="font-inter text-[15px] text-muted-foreground mt-4 max-w-xs leading-relaxed">
                  Curious what working together actually looks like? We've answered the most common ones below.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 rounded-xl px-6 bg-card/30">
                      <AccordionTrigger className="font-grotesk font-medium text-[15px] text-left hover:no-underline py-5">{faq.q}</AccordionTrigger>
                      <AccordionContent className="font-inter text-[14px] text-muted-foreground pb-5 leading-relaxed">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-4">Ready?</p>
            <h2 className="font-grotesk font-bold text-[48px] leading-[1.0] tracking-tight mb-6">
              Let's Build Something<br />
              <span className="text-foreground/40">Extraordinary.</span>
            </h2>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 bg-foreground text-background font-inter font-semibold text-[13px] rounded-full px-8 py-3.5 hover:bg-foreground/90 transition-colors cursor-pointer">
                Get in Touch <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
