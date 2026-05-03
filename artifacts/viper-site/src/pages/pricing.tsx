import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$799",
    per: "/ project",
    best: "New businesses & solo founders getting their first AI presence live.",
    popular: false,
    features: [
      "1 AI Automation Workflow",
      "AI Landing Page (1 page)",
      "Basic AI Chatbot Setup",
      "Mobile Responsive Design",
      "1 Revision Round",
      "Delivered in 5 Business Days",
    ],
  },
  {
    name: "Growth",
    price: "$1,999",
    per: "/ project",
    best: "Growing brands & founders ready to go full AI across web, app & content.",
    popular: true,
    features: [
      "Up to 5 AI Automation Workflows",
      "Full AI Website (up to 5 pages)",
      "AI App MVP (Vibe Coded)",
      "AI Video (1 Short-Form Ad)",
      "3 Revision Rounds",
      "Source Files Included",
      "Delivered in 10 Business Days",
    ],
  },
  {
    name: "Enterprise",
    price: "$4,999",
    per: "/ project",
    best: "Established businesses wanting complete AI infrastructure & ongoing support.",
    popular: false,
    features: [
      "Unlimited AI Automation Workflows",
      "Complete AI Website + App Build",
      "AI Video Production Suite",
      "AI Strategy & Roadmap Session",
      "Unlimited Revisions",
      "Priority Support",
      "Dedicated Slack Channel",
      "Monthly Performance Review",
    ],
  },
];

const processSteps = [
  { num: "01", title: "Pick Your Plan", desc: "Choose the tier that fits your project size and goals. Not sure? Book a free call and we'll advise." },
  { num: "02", title: "Submit Your Request", desc: "We scope the work, agree on a timeline and lock in deliverables. No hidden costs, no surprises." },
  { num: "03", title: "Project Delivered", desc: "We build fast with AI, iterate with your feedback and hand over a polished final product ready to scale." },
];

const testimonials = [
  {
    name: "Jordan Miles",
    title: "CEO, LaunchLab",
    quote: "VIPER automated our entire onboarding flow in under a week. What used to take hours now runs on autopilot. Genuinely transformative.",
    stars: 5,
    plan: "Growth",
  },
  {
    name: "Priya Nair",
    title: "Co-Founder, Stackly",
    quote: "They built our AI-powered website in days. It converts better than anything we've had before. The quality-to-speed ratio is unreal.",
    stars: 5,
    plan: "Starter",
  },
  {
    name: "Derek Owens",
    title: "Head of Marketing, BrandWave",
    quote: "The AI video content drove a 3x increase in engagement in the first two weeks alone. This team knows exactly what they're doing.",
    stars: 5,
    plan: "Enterprise",
  },
];

const faqs = [
  { q: "How long does a project take?", a: "Starter projects take 3–5 business days. Growth projects take 7–10 business days. Enterprise timelines are scoped per project based on complexity." },
  { q: "Do you offer payment plans?", a: "Yes. We offer 50% upfront and 50% on delivery for all plans. Enterprise clients can arrange custom payment schedules." },
  { q: "What AI tools do you use?", a: "We use the best tools for each job — including Cursor, Framer, Webflow, Make, Zapier, n8n, Bolt, v0, Replit, ElevenLabs, Runway, Sora & more." },
  { q: "Can I upgrade my plan mid-project?", a: "Absolutely. We'll simply adjust the scope and invoice the difference. No complicated renegotiations." },
  { q: "Do you offer ongoing maintenance?", a: "Yes — we offer monthly retainer packages for clients who need ongoing updates, content or automation management." },
  { q: "What if I'm not happy with the result?", a: "Every plan includes revision rounds. If we haven't met the brief, we fix it. We don't walk away until you're satisfied." },
];

export function PricingPage() {
  return (
    <div className="bg-black min-h-screen text-foreground dark">
      <Navigation />
      <main className="pt-24">

        {/* ── Page header ── */}
        <section className="border-b border-border/40 py-20 text-center">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-4 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-500">Transparent Pricing</p>
              <h1 className="mb-6 font-grotesk text-[60px] font-bold leading-[1.0] tracking-[-0.02em]">
                Feasible Plans For<br /><span className="text-muted-foreground/40">Every Stage of Growth.</span>
              </h1>
              <p className="mx-auto max-w-xl font-inter text-[16px] leading-relaxed text-muted-foreground">
                No hidden fees. No bloated retainers. Just AI-powered results at honest prices.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Pricing cards ── */}
        <section className="py-20 border-b border-border/40">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, i) => (
                <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col p-8 rounded-2xl border ${plan.popular ? "bg-card border-foreground/40 shadow-2xl" : "bg-card/50 border-border/50"}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-background font-inter font-bold text-[11px] px-4 py-1.5 rounded-full uppercase tracking-[0.15em]">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-grotesk font-bold text-[16px] uppercase tracking-[0.1em] mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="font-grotesk font-bold text-[48px] leading-none tracking-tight">{plan.price}</span>
                    <span className="font-inter text-[13px] text-muted-foreground">{plan.per}</span>
                  </div>
                  <p className="font-inter text-[14px] text-muted-foreground mb-8 leading-relaxed border-b border-border/50 pb-8">{plan.best}</p>
                  <ul className="flex-1 space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 font-inter text-[14px] text-muted-foreground">
                        <Check size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <span className={`inline-flex w-full items-center justify-center gap-2 font-inter font-semibold text-[13px] rounded-full px-6 py-3 transition-colors cursor-pointer ${plan.popular ? "bg-foreground text-background hover:bg-foreground/90" : "border border-border/60 hover:border-foreground/50"}`}>
                      Get Started <ArrowRight size={13} />
                    </span>
                  </Link>
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
                <p className="font-inter text-[15px] text-muted-foreground mt-4 max-w-xs leading-relaxed">Three simple steps from idea to live product — no complexity, no confusion.</p>
              </motion.div>
              <div>
                {processSteps.map((step, i) => (
                  <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-8 py-8 border-b border-border/40 last:border-0">
                    <span className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 pt-1 min-w-[28px]">{step.num}</span>
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

        {/* ── Testimonials ── */}
        <section className="py-28 border-b border-border/40">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
              <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-3">Client Reviews</p>
              <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">
                Trusted by<br />Clients.
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-border/40 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, j) => <span key={j} className="text-yellow-400 text-sm">★</span>)}
                    </div>
                    <span className="font-inter font-semibold text-[11px] uppercase tracking-[0.15em] text-muted-foreground/60 border border-border/50 rounded-full px-3 py-1">{t.plan}</span>
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
                <p className="font-inter text-[15px] text-muted-foreground mt-4 leading-relaxed max-w-xs">
                  Everything you need to know before getting started. Still unsure? Just book a call.
                </p>
                <a href="https://calendly.com/malik-designs" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 font-inter font-semibold text-[13px] border border-border/60 rounded-full px-6 py-2.5 hover:border-foreground/50 transition-colors">
                  Book a Free Call <ArrowRight size={13} />
                </a>
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
            <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-4">Let's Talk</p>
            <h2 className="font-grotesk font-bold text-[48px] leading-[1.0] tracking-tight mb-6">
              Need a Custom Quote?<br /><span className="text-foreground/40">We've Got You.</span>
            </h2>
            <p className="font-inter text-[16px] text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
              Every business is different. Let's talk about what you actually need.
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 bg-foreground text-background font-inter font-semibold text-[13px] rounded-full px-8 py-3.5 hover:bg-foreground/90 transition-colors cursor-pointer">
                Contact Us <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
