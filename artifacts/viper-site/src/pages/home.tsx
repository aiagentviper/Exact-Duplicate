import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Bot, Globe2, Video, Wrench, Brain, Check } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import profilePhoto from "@assets/Gemini_Generated_Image_rk6t1wrk6t1wrk6t_1777802311237.png";
import servicesPhoto from "@assets/Screenshot_2026-05-03_104753_1777802222600.png";

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

const tags = ["Product Design", "Branding", "Web Design", "AI Systems", "Content", "Strategy"];

const featureCards = [
  { icon: Sparkles, title: "Brand Systems", text: "Launch sharper visual systems with modern direction, fast iterations, and premium polish." },
  { icon: Bot, title: "AI Workflows", text: "Automate lead handling, outreach, and internal ops with high-leverage AI flows." },
  { icon: Globe2, title: "Web Experiences", text: "Build high-converting sites with cinematic visuals and clean conversion paths." },
  { icon: Video, title: "Video Content", text: "Create content that looks premium, feels cinematic, and ships quickly." },
  { icon: Wrench, title: "Product Builds", text: "Ship apps and MVPs with fast iteration and strong technical foundations." },
  { icon: Brain, title: "Strategy Layer", text: "Get a clear roadmap for what to automate, build, and scale next." },
];

const pricingPlans = [
  { name: "Basic", price: "$999", features: ["1-page landing page", "Mobile-first responsive build", "3 content sections", "AI chatbot integration", "1 revision round"], highlighted: false },
  { name: "Premium", price: "$2,599", features: ["Multi-section website", "Custom motion + interactions", "Copy polishing + structure", "AI/automation integration", "Priority delivery"], highlighted: true },
];

function FAQAccordion({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-border/40">
      {items.map((item, i) => (
        <div key={item.q} className="py-5">
          <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 text-left">
            <span className="font-inter text-[14px] text-foreground">{item.q}</span>
            <span className="flex-shrink-0 text-2xl font-light leading-none text-white/40 transition-transform" style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
          </button>
          {open === i && <p className="mt-4 max-w-[480px] font-inter text-[13px] leading-relaxed text-muted-foreground">{item.a}</p>}
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
        <Hero />
        <section className="w-full border-t border-white/10 bg-black py-32">
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">Meet Jimoh</p>
                <h2 className="mb-5 font-grotesk text-[52px] font-semibold leading-[1.0] tracking-tight">Meet Jimoh.</h2>
                <p className="max-w-[520px] font-inter text-[15px] leading-relaxed text-white/65">Jimoh is the founder behind VIPER — building sharp digital products, branding systems, and AI workflows for teams that want fast, premium results.</p>
                <p className="mt-4 max-w-[520px] font-inter text-[15px] leading-relaxed text-white/65">He blends design, strategy, and execution so every build feels clear, useful, and ready to ship.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {tags.map((tag) => <span key={tag} className="rounded-full border border-white/20 px-4 py-2 font-inter text-[12px] text-white/60">{tag}</span>)}
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl">
                <img src={profilePhoto} alt="Jimoh" className="aspect-[4/5] h-full w-full object-cover object-top grayscale contrast-[1.1] brightness-[0.84]" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full border-t border-border/40 bg-black py-32">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="mb-16 text-center">
              <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">How It Works</p>
              <h2 className="font-grotesk text-[52px] font-semibold leading-[1.0] tracking-tight">We Simplify The Journey.</h2>
            </div>
            <div className="flex flex-col gap-24">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">Step 1</span>
                  <h3 className="mb-4 font-grotesk text-[36px] font-semibold leading-[1.1] tracking-tight">Define Your Vision</h3>
                  <p className="mb-8 max-w-[380px] font-inter text-[15px] leading-relaxed text-muted-foreground">Tell us exactly what you want to build — your goals, your audience, and the outcome you're after. We listen first, then map the clearest path to impact.</p>
                  <Link href="/contact"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 font-inter text-[13px] font-semibold text-black transition-colors hover:bg-white/90">Book an Appointment →</span></Link>
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl"><img src="/photo-process.png" alt="Define your vision" className="h-full w-full object-cover object-center grayscale contrast-[1.1] brightness-[0.82]" /></div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid items-center gap-12 lg:grid-cols-2">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl lg:order-first order-last"><img src={servicesPhoto} alt="Submit your request" className="h-full w-full object-cover object-center grayscale contrast-[1.1] brightness-[0.82]" /></div>
                <div>
                  <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">Step 2</span>
                  <h3 className="mb-4 font-grotesk text-[36px] font-semibold leading-[1.1] tracking-tight">Submit Your Request</h3>
                  <p className="mb-8 max-w-[380px] font-inter text-[15px] leading-relaxed text-muted-foreground">Access our private client portal to drop in your brief. We refine the scope, confirm deliverables, and get to work — typically within 48 hours of sign-off.</p>
                  <Link href="/contact"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 font-inter text-[13px] font-semibold text-black transition-colors hover:bg-white/90">Book an Appointment →</span></Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">Step 3</span>
                  <h3 className="mb-4 font-grotesk text-[36px] font-semibold leading-[1.1] tracking-tight">Project Delivered</h3>
                  <p className="mb-8 max-w-[380px] font-inter text-[15px] leading-relaxed text-muted-foreground">We build fast using the best AI tools available, iterate with your feedback in real time, and ship the final product — on time, on budget, and beyond expectations.</p>
                  <Link href="/contact"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 font-inter text-[13px] font-semibold text-black transition-colors hover:bg-white/90">Book an Appointment →</span></Link>
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl"><img src={servicesPhoto} alt="Project delivered" className="h-full w-full object-cover object-center grayscale contrast-[1.1] brightness-[0.82]" /></div>
              </motion.div>
            </div>
          </div>
        </section>
        <Services />
        <section className="w-full border-t border-border/40 bg-black py-32">
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <div className="mb-12"><p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">Unlimited Design Features</p><h2 className="font-grotesk text-[52px] font-semibold leading-[1.0] tracking-tight">Built for speed. Designed to convert.</h2></div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">{featureCards.map((card, i) => { const Icon = card.icon; return (<motion.div key={card.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6"><div className="mb-5 flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70"><Icon size={18} /></div><span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-inter text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">NEW</span></div><h3 className="mb-2 font-grotesk text-[18px] font-semibold text-white">{card.title}</h3><p className="font-inter text-[13px] leading-relaxed text-muted-foreground">{card.text}</p></motion.div>);})}</div>
          </div>
        </section>
        <section className="w-full border-t border-border/40 bg-black py-32"><div className="mx-auto w-full max-w-[1200px] px-6"><div className="mb-12"><p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">Pricing</p><h2 className="font-grotesk text-[52px] font-semibold leading-[1.0] tracking-tight">Simple plans. Serious output.</h2></div><div className="grid gap-5 lg:grid-cols-2">{pricingPlans.map((plan, i) => (<motion.div key={plan.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className={`rounded-3xl border p-8 ${plan.highlighted ? "border-white/30 bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.05)]" : "border-white/10 bg-zinc-950/80"}`}><div className="mb-8 flex items-end justify-between gap-6 border-b border-white/10 pb-8"><div><p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">{plan.name}</p><h3 className="font-grotesk text-[54px] font-bold leading-none tracking-tight text-white">{plan.price}</h3></div>{plan.highlighted && <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-inter text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">Most Popular</span>}</div><ul className="mb-8 space-y-3">{plan.features.map((feature) => (<li key={feature} className="flex items-start gap-3 font-inter text-[14px] text-white/75"><span className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-white/30 text-[10px] text-white/70"><Check size={10} /></span>{feature}</li>))}</ul><Link href="/contact"><span className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-white px-6 py-3.5 font-inter text-[13px] font-semibold text-black transition-colors hover:bg-white/90">Book a Call</span></Link></motion.div>))}</div></div></section>
        <Testimonials />
        <section className="w-full border-t border-border/40 bg-black py-32"><div className="mx-auto w-full max-w-[1100px] px-6"><div className="grid min-h-[520px] items-start gap-12 lg:grid-cols-2"><div className="flex flex-col gap-8"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}><p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">FAQs</p><h2 className="mb-4 font-grotesk text-[52px] font-semibold leading-[1.0] tracking-tight">Answers</h2><p className="max-w-[300px] font-inter text-[14px] leading-relaxed text-muted-foreground">Find answers to common questions about our process, services, and delivery.</p></motion.div><motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="aspect-[4/3] max-w-[380px] overflow-hidden rounded-2xl"><img src="/photo-faq.png" alt="FAQ" className="h-full w-full object-cover object-center grayscale contrast-[1.1] brightness-[0.82]" /></motion.div><div><div className="mb-5 flex flex-wrap gap-2">{["AI Automation", "AI Websites", "AI Video"].map((tag) => (<span key={tag} className="rounded-full border border-white/20 px-4 py-1.5 font-inter text-[12px] text-white/60">{tag}</span>))}</div><Link href="/contact"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 font-inter text-[13px] font-semibold text-white/70 transition-colors hover:border-white/50 hover:text-white">Book a Free Call <ArrowRight size={13} /></span></Link></div></div><motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:pt-2"><FAQAccordion items={faqs} /></motion.div></div></div></section>
        <section className="w-full bg-black py-40 text-center"><div className="mx-auto w-full max-w-[1200px] px-6"><h2 className="font-grotesk text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-white">LET&apos;S BUILD <br />SOMETHING REAL</h2><div className="mt-10 flex justify-center"><Link href="/contact"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-3.5 font-inter text-[13px] font-semibold text-black transition-colors hover:bg-white/90">Book a Free Call <ArrowRight size={14} /></span></Link></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
