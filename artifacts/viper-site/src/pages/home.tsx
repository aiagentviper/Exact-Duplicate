import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Bot, Globe2, Video, Wrench, Brain, Check, Lightbulb, ListChecks, Rocket } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import profilePhoto from "@assets/Gemini_Generated_Image_rk6t1wrk6t1wrk6t_1777802311237.png";
import servicesPhoto from "@assets/Screenshot_2026-05-03_111343_1777803239920.png";
import processPhoto from "@assets/Screenshot_2026-05-03_073740_1777803855620.png";

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

function ProcessCard({ num, title, text, icon: Icon }: { num: string; title: string; text: string; icon: any }) {
  return (
    <div className="relative rounded-[22px] border border-white/10 bg-[#0b0b0b] p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
          <Icon size={16} />
        </div>
        <span className="font-inter text-[12px] font-medium text-white/40">{num}</span>
      </div>
      <h3 className="mb-3 font-grotesk text-[20px] font-semibold tracking-tight text-white">{title}</h3>
      <p className="max-w-[760px] font-inter text-[13px] leading-relaxed text-white/55">{text}</p>
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

        <section className="w-full border-t border-border/40 bg-black py-0">
          <div className="process-section mx-auto flex h-[100vh] w-full max-w-[1200px]">
            <div className="process-image w-1/2 h-full overflow-hidden">
              <img src={processPhoto} alt="Design process" className="h-full w-full object-cover object-center grayscale contrast-[1.12] brightness-[0.82]" />
            </div>
            <div className="process-steps w-1/2 bg-[#0a0a0a] px-[40px] py-[60px] flex flex-col justify-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">Design process</p>
                <h2 className="font-grotesk text-[clamp(3rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-tight text-white">Process</h2>
                <p className="mt-4 max-w-[360px] font-inter text-[14px] leading-relaxed text-white/55">Crafting bold visuals that inspire and elevate brands with thoughtful process.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 font-inter text-[13px] font-semibold text-black transition-colors hover:bg-white/90">Book a Free Call</span></Link>
                  <Link href="/work"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-inter text-[13px] font-semibold text-white/70 transition-colors hover:border-white/50 hover:text-white">See Projects</span></Link>
                </div>
              </motion.div>
              <div className="mt-8 flex flex-1 flex-col gap-5 overflow-y-auto pr-2">
                <ProcessCard num="1" title="Define Your Vision" text="Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly." icon={Lightbulb} />
                <ProcessCard num="2" title="Submit Your Request" text="Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity." icon={ListChecks} />
                <ProcessCard num="3" title="Project Delivered" text="As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2–3 days. With a keen eye for detail and a passion for quality, I bring your vision to life — on time and beyond expectations." icon={Rocket} />
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Testimonials />

        <section className="w-full border-t border-border/40 bg-black py-32"><div className="mx-auto w-full max-w-[1100px] px-6"><div className="grid min-h-[520px] items-start gap-12 lg:grid-cols-2"><div className="flex flex-col gap-8"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}><p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">FAQs</p><h2 className="mb-4 font-grotesk text-[52px] font-semibold leading-[1.0] tracking-tight">Answers</h2><p className="max-w-[300px] font-inter text-[14px] leading-relaxed text-muted-foreground">Find answers to common questions about our process, services, and delivery.</p></motion.div><motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="aspect-[4/3] max-w-[380px] overflow-hidden rounded-2xl"><img src="/photo-faq.png" alt="FAQ" className="h-full w-full object-cover object-center grayscale contrast-[1.1] brightness-[0.82]" /></motion.div><div><div className="mb-5 flex flex-wrap gap-2">{["AI Automation", "AI Websites", "AI Video"].map((tag) => (<span key={tag} className="rounded-full border border-white/20 px-4 py-1.5 font-inter text-[12px] text-white/60">{tag}</span>))}</div><Link href="/contact"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 font-inter text-[13px] font-semibold text-white/70 transition-colors hover:border-white/50 hover:text-white">Book a Free Call <ArrowRight size={13} /></span></Link></div></div><motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:pt-2"><FAQAccordion items={faqs} /></motion.div></div></div></section>
        <section className="w-full bg-black py-40 text-center"><div className="mx-auto w-full max-w-[1200px] px-6"><h2 className="font-grotesk text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-white">LET&apos;S BUILD <br />SOMETHING REAL</h2><div className="mt-10 flex justify-center"><Link href="/contact"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-3.5 font-inter text-[13px] font-semibold text-black transition-colors hover:bg-white/90">Book a Free Call <ArrowRight size={14} /></span></Link></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
