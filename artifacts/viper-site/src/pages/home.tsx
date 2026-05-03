import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Bot, Globe2, Video, Wrench, Brain } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";


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

const featureCards = [
  { icon: Sparkles, title: "NEW Brand Systems", text: "Launch sharper visual systems with modern direction, fast iterations, and premium polish." },
  { icon: Bot, title: "NEW AI Workflows", text: "Automate lead handling, outreach, and internal ops with high-leverage AI flows." },
  { icon: Globe2, title: "NEW Web Experiences", text: "Build high-converting sites with cinematic visuals and clean conversion paths." },
  { icon: Video, title: "NEW Video Content", text: "Create content that looks premium, feels cinematic, and ships quickly." },
  { icon: Wrench, title: "NEW Product Builds", text: "Ship apps and MVPs with fast iteration and strong technical foundations." },
  { icon: Brain, title: "NEW Strategy Layer", text: "Get a clear roadmap for what to automate, build, and scale next." },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$999",
    features: ["1-page landing page", "Mobile-first responsive build", "3 content sections", "Blue-accent styling", "1 revision round"],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$2,599",
    features: ["Multi-section website", "Custom motion + interactions", "Copy polishing + structure", "AI/automation integration", "Priority delivery"],
    highlighted: true,
  },
];

function FAQAccordion({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-border/40">
      {items.map((item, i) => (
        <div key={item.q} className="py-5">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between gap-4 text-left"
          >
            <span className="font-inter text-[14px] text-foreground">{item.q}</span>
            <span className="flex-shrink-0 text-2xl font-light leading-none text-muted-foreground/70 transition-transform" style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
          </button>
          {open === i && (
            <p className="mt-4 max-w-[480px] font-inter text-[13px] leading-relaxed text-muted-foreground">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-black text-foreground dark">
      <Navigation />
      <main>
        {/* ── Hero ── full bleed, no wrapper */}
        <Hero />

        {/* ── Everything below Hero: strict 1100px wrapper ── */}
        <Portfolio />

        {/* ── Journey / Process ── */}
        <section className="w-full border-t border-border/40 bg-black py-32">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="mb-16 text-center">
              <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-400">How It Works</p>
              <h2 className="font-grotesk text-[52px] font-semibold leading-[1.0] tracking-tight">
                We Simplify The Journey.
              </h2>
            </div>

            <div className="flex flex-col gap-24">

              {/* Step 1 — text left, image right */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                <div>
                  <span className="mb-5 inline-block rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-1.5 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400">
                    Step 1
                  </span>
                  <h3 className="mb-4 font-grotesk text-[36px] font-semibold leading-[1.1] tracking-tight">Define Your Vision</h3>
                  <p className="mb-8 max-w-[380px] font-inter text-[15px] leading-relaxed text-muted-foreground">
                    Tell us exactly what you want to build — your goals, your audience, and the outcome you're after. We listen first, then map the clearest path to impact.
                  </p>
                  <Link href="/contact">
                    <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-inter text-[13px] font-semibold text-white transition-colors hover:bg-sky-400">
                      Book an Appointment →
                    </span>
                  </Link>
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src="/photo-process.png"
                    alt="Define your vision"
                    className="h-full w-full object-cover object-center grayscale contrast-[1.1] brightness-[0.82]"
                  />
                </div>
              </motion.div>

              {/* Step 2 — image left, text right */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl lg:order-first order-last">
                  <img
                    src="/photo-reviews.png"
                    alt="Submit your request"
                    className="h-full w-full object-cover object-center grayscale contrast-[1.1] brightness-[0.82]"
                  />
                </div>
                <div>
                  <span className="mb-5 inline-block rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-1.5 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400">
                    Step 2
                  </span>
                  <h3 className="mb-4 font-grotesk text-[36px] font-semibold leading-[1.1] tracking-tight">Submit Your Request</h3>
                  <p className="mb-8 max-w-[380px] font-inter text-[15px] leading-relaxed text-muted-foreground">
                    Access our private client portal to drop in your brief. We refine the scope, confirm deliverables, and get to work — typically within 48 hours of sign-off.
                  </p>
                  <Link href="/contact">
                    <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-inter text-[13px] font-semibold text-white transition-colors hover:bg-sky-400">
                      Book an Appointment →
                    </span>
                  </Link>
                </div>
              </motion.div>

              {/* Step 3 — text left, image right */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                <div>
                  <span className="mb-5 inline-block rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-1.5 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400">
                    Step 3
                  </span>
                  <h3 className="mb-4 font-grotesk text-[36px] font-semibold leading-[1.1] tracking-tight">Project Delivered</h3>
                  <p className="mb-8 max-w-[380px] font-inter text-[15px] leading-relaxed text-muted-foreground">
                    We build fast using the best AI tools available, iterate with your feedback in real time, and ship the final product — on time, on budget, and beyond expectations.
                  </p>
                  <Link href="/contact">
                    <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-inter text-[13px] font-semibold text-white transition-colors hover:bg-sky-400">
                      Book an Appointment →
                    </span>
                  </Link>
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src="/photo-services.jpg"
                    alt="Project delivered"
                    className="h-full w-full object-cover object-center grayscale contrast-[1.1] brightness-[0.82]"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <Services />

        {/* ── Feature Cards ── */}
        <section className="w-full border-t border-border/40 bg-black py-32">
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <div className="mb-12">
              <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-400">Unlimited Design Features</p>
              <h2 className="font-grotesk text-[52px] font-semibold leading-[1.0] tracking-tight">Built for speed. Designed to convert.</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {featureCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="rounded-2xl border border-sky-500/35 bg-zinc-950/80 p-6"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400">
                        <Icon size={18} />
                      </div>
                      <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 font-inter text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-400">
                        NEW
                      </span>
                    </div>
                    <h3 className="mb-2 font-grotesk text-[18px] font-semibold text-white">{card.title}</h3>
                    <p className="font-inter text-[13px] leading-relaxed text-muted-foreground">{card.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section className="w-full border-t border-border/40 bg-black py-32">
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <div className="mb-12">
              <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-400">Pricing</p>
              <h2 className="font-grotesk text-[52px] font-semibold leading-[1.0] tracking-tight">Simple plans. Serious output.</h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`rounded-3xl border p-8 ${plan.highlighted ? "border-sky-400/60 bg-sky-500/10 shadow-[0_0_80px_rgba(59,130,246,0.18)]" : "border-sky-500/25 bg-zinc-950/80"}`}
                >
                  <div className="mb-8 flex items-end justify-between gap-6 border-b border-white/10 pb-8">
                    <div>
                      <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-400">{plan.name}</p>
                      <h3 className="font-grotesk text-[54px] font-bold leading-none tracking-tight text-white">{plan.price}</h3>
                    </div>
                    {plan.highlighted && (
                      <span className="rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 font-inter text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 font-inter text-[14px] text-white/75">
                        <span className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-sky-400/50 text-[10px] text-sky-400">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <span className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-sky-500 px-6 py-3.5 font-inter text-[13px] font-semibold text-white transition-colors hover:bg-sky-400">
                      Book a Call
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials + Stats ── */}
        <Testimonials />

        {/* ── FAQ ── */}
        <section className="w-full border-t border-border/40 bg-black py-32">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="grid min-h-[520px] items-start gap-12 lg:grid-cols-2">

              {/* Left — heading, image, tags, CTA */}
              <div className="flex flex-col gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">FAQs</p>
                  <h2 className="mb-4 font-grotesk text-[52px] font-semibold leading-[1.0] tracking-tight">Answers</h2>
                  <p className="max-w-[300px] font-inter text-[14px] leading-relaxed text-muted-foreground">
                    Find answers to common questions about our process, services, and delivery.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="aspect-[4/3] max-w-[380px] overflow-hidden rounded-2xl"
                >
                  <img
                    src="/photo-faq.png"
                    alt="FAQ"
                    className="h-full w-full object-cover object-center grayscale contrast-[1.1] brightness-[0.82]"
                  />
                </motion.div>

                <div>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {["AI Automation", "AI Websites", "AI Video"].map((tag) => (
                      <span key={tag} className="rounded-full border border-border/60 px-4 py-1.5 font-inter text-[12px] text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href="/contact">
                    <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border/60 px-6 py-2.5 font-inter text-[13px] font-semibold transition-colors hover:border-foreground/50">
                      Book a Free Call <ArrowRight size={13} />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right — accordion */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:pt-2"
              >
                <FAQAccordion items={faqs} />
              </motion.div>

            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
