import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FilterType = "All" | "AI Website" | "AI Video" | "AI Automation" | "AI App";
const filters: FilterType[] = ["All", "AI Website", "AI Video", "AI Automation", "AI App"];

const websiteProjects = [
  { id: 1, title: "Hair & Skin Clinic", tag: "AI Website · Health & Beauty", href: "https://www.hairandskinclinic.co.uk", image: "/portfolio/watch-website.jpg" },
  { id: 2, title: "Asuno Salon", tag: "AI Website · Beauty & Wellness", href: "https://asunosalon.co.uk", image: "/portfolio/car-rental-site.jpg" },
  { id: 3, title: "Oh Polly", tag: "AI Website · Fashion E-Commerce", href: "https://www.ohpolly.com", image: "/portfolio/smart-home-site.jpg" },
  { id: 4, title: "Showpo", tag: "AI Website · Fashion E-Commerce", href: "https://www.showpo.com", image: "/portfolio/omega-website.jpg" },
  { id: 5, title: "Juicy Couture", tag: "AI Website · Luxury Fashion", href: "https://juicycouture.com", image: "/portfolio/email-sequences.jpg" },
  { id: 6, title: "Andfold", tag: "AI Website · Brand Studio", href: "https://andfold.framer.website", image: "/portfolio/marketing-slides.jpg" },
  { id: 7, title: "Tamara Giger", tag: "AI Website · Personal Brand", href: "https://www.tamaragiger.com", image: "/portfolio/watch-website.jpg" },
  { id: 8, title: "Millioniar Training", tag: "AI Website · Education", href: "https://Millioniarstraining.framer.website", image: "/portfolio/car-rental-site.jpg" },
  { id: 9, title: "Tyr Graham", tag: "AI Website · Personal Brand", href: "https://tyrgraham.com", image: "/portfolio/smart-home-site.jpg" },
  { id: 10, title: "Building Up Steam", tag: "AI Website · Community", href: "https://join.buildingupsteam.org", image: "/portfolio/omega-website.jpg" },
  { id: 11, title: "Holli Tabren", tag: "AI Website · Personal Brand", href: "https://hollitabren.com", image: "/portfolio/email-sequences.jpg" },
  { id: 12, title: "Sorhaya Zamor", tag: "AI Website · Portfolio", href: "https://sorhayazamor.com", image: "/portfolio/marketing-slides.jpg" },
];

const appProjects = [
  { id: 13, image: "/portfolio/crypto-dashboard.jpg", title: "CryptoTrack Dashboard", tag: "AI App · Fintech", desc: "AI-powered crypto portfolio & trading dashboard with live market data." },
  { id: 14, image: "/portfolio/learning-app.jpg", title: "LearnAI Mobile App", tag: "AI App · EdTech", desc: "Gamified learning app with AI-personalized lessons, leaderboards & streaks." },
  { id: 15, image: "/portfolio/crypto-dashboard.jpg", title: "Finance Analytics Suite", tag: "AI App · Fintech", desc: "Real-time financial analytics with AI-driven insights & smart alerts." },
];

const automationProjects = [
  { id: 16, image: "/portfolio/automation-flow.jpg", title: "Content Generation Pipeline", tag: "AI Automation · n8n", desc: "Google Drive triggered AI workflow that auto-generates How-To guides as PDFs." },
  { id: 17, image: "/portfolio/ai-agent-flow.jpg", title: "Multi-Agent Telegram Bot", tag: "AI Automation · AI Agent", desc: "AI agent handling email, calendar, contacts & web research via Telegram." },
  { id: 18, image: "/portfolio/make-automation.jpg", title: "Booking Automation System", tag: "AI Automation · Make.com", desc: "End-to-end booking flow with Slack notifications & Google Sheets sync." },
];

const videoProjects = [
  { id: 19, video: "/videos/ai-video-1.mp4", title: "AI Brand Promo" },
  { id: 20, video: "/videos/ai-video-2.mp4", title: "AI Product Showcase" },
  { id: 21, video: "/videos/ai-video-3.mp4", title: "AI Automation Explainer" },
  { id: 22, video: "/videos/ai-video-4.mp4", title: "AI UGC Ad" },
  { id: 23, video: "/videos/ai-video-5.mp4", title: "AI Motion Graphics" },
  { id: 24, video: "/videos/ai-video-6.mp4", title: "AI Social Content" },
];

const processSteps = [
  { num: "01", title: "Define Your Vision", desc: "Tell us what you want to build, your goals, and the outcomes you're after. We listen first." },
  { num: "02", title: "Submit Your Request", desc: "We scope the work, agree a clear timeline and lock in deliverables. No surprises." },
  { num: "03", title: "Project Delivered", desc: "We build fast using the best AI tools, iterate with your feedback and launch with impact." },
];

const faqs = [
  { q: "How fast can you build a website?", a: "Most AI websites are delivered in 3–5 business days. Larger multi-page sites take 7–10 days depending on scope." },
  { q: "Do the websites you build actually work?", a: "Yes — every website in our portfolio is a live, functioning site built for real clients. You can visit each one via the links above." },
  { q: "What platform do you build on?", a: "We use whatever fits best — Framer, Webflow, Vite/React, WordPress or fully custom stacks depending on the client's needs." },
  { q: "Can I request revisions?", a: "Absolutely. Every project includes at least one revision round, with more available on higher plans." },
  { q: "Do you help with content too?", a: "Yes — we handle copywriting, imagery and AI-generated visuals as part of the build process." },
];

function WebsiteCard({ project }: { project: typeof websiteProjects[0] }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card block cursor-pointer hover:border-border/70 transition-colors"
    >
      <div className="aspect-[4/3] overflow-hidden bg-card">
        <img src={project.image} alt={project.title} className="object-cover w-full h-full grayscale contrast-[1.15] brightness-[0.85] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
          onError={(e) => { (e.target as HTMLImageElement).src = "/portfolio/automation-flow.jpg"; }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <p className="font-inter font-semibold text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">{project.tag}</p>
        <h3 className="font-grotesk font-semibold text-[17px] text-white mb-3">{project.title}</h3>
        <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-inter text-[11px] text-white backdrop-blur-md">
          View Case Study ↗
        </span>
      </div>
      <div className="p-5 border-t border-border/40">
        <p className="font-inter text-[11px] text-muted-foreground/60 mb-1">{project.tag}</p>
        <div className="flex items-center justify-between">
          <h3 className="font-grotesk font-medium text-[15px]">{project.title}</h3>
          <ExternalLink size={13} className="text-muted-foreground/50 group-hover:text-foreground transition-colors" />
        </div>
      </div>
    </motion.a>
  );
}

function ImageCard({ project }: { project: { id: number; image: string; title: string; tag: string; desc?: string } }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={project.image} alt={project.title} className="object-cover w-full h-full grayscale contrast-[1.15] brightness-[0.85] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
          onError={(e) => { (e.target as HTMLImageElement).src = "/portfolio/automation-flow.jpg"; }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <p className="font-inter font-semibold text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">{project.tag}</p>
        <h3 className="font-grotesk font-semibold text-[17px] text-white mb-3">{project.title}</h3>
        {project.desc && <p className="font-inter text-[12px] text-white/60 mb-3 line-clamp-1">{project.desc}</p>}
        <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-inter text-[11px] text-white backdrop-blur-md">
          View Case Study ↗
        </span>
      </div>
      <div className="p-5 border-t border-border/40">
        <p className="font-inter text-[11px] text-muted-foreground/60 mb-1">{project.tag}</p>
        <h3 className="font-grotesk font-medium text-[15px]">{project.title}</h3>
      </div>
    </motion.div>
  );
}

function VideoCard({ video, title }: { video: string; title: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden border border-border/40 bg-card">
      <video src={video} controls muted loop playsInline className="w-full aspect-video object-cover" />
      <div className="p-5 border-t border-border/40">
        <p className="font-inter text-[11px] text-muted-foreground/60 mb-1">AI Video</p>
        <h3 className="font-grotesk font-medium text-[15px]">{title}</h3>
      </div>
    </motion.div>
  );
}

export function WorkPage() {
  const [active, setActive] = useState<FilterType>("All");
  const showWebsite = active === "All" || active === "AI Website";
  const showApp = active === "All" || active === "AI App";
  const showAutomation = active === "All" || active === "AI Automation";
  const showVideo = active === "All" || active === "AI Video";

  return (
    <div className="bg-black min-h-screen text-foreground dark">
      <Navigation />
      <main className="pt-24">

        {/* ── Page header ── */}
        <section className="border-b border-border/40 py-20 text-center">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-4 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-500">Our Portfolio</p>
              <h1 className="mb-6 font-grotesk text-[60px] font-bold leading-[1.0] tracking-[-0.02em]">
                Real Projects.<br /><span className="text-muted-foreground/40">Real Results.</span>
              </h1>
              <p className="mx-auto max-w-xl font-inter text-[16px] leading-relaxed text-muted-foreground">
                AI-powered websites, videos, automations & apps built for businesses across every industry. Click any website to visit the live site.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Filters ── */}
        <section className="py-10">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((f) => (
                <button key={f} onClick={() => setActive(f)}
                  className={`font-inter font-medium text-[13px] px-5 py-2 rounded-full transition-all border ${active === f ? "bg-foreground text-background border-foreground" : "bg-transparent text-muted-foreground border-border/50 hover:border-foreground/30 hover:text-foreground"}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Portfolio sections ── */}
        <div className="mx-auto w-full max-w-[1100px] px-6 space-y-20 pb-28">
          {showWebsite && (
            <div>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-1">Live Websites</p>
                  <h2 className="font-grotesk font-semibold text-[28px] tracking-tight">AI Websites</h2>
                </div>
                <span className="font-inter text-[12px] text-muted-foreground">Click card to visit live site</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {websiteProjects.map((p) => <WebsiteCard key={p.id} project={p} />)}
              </div>
            </div>
          )}
          {showApp && (
            <div>
              <div className="mb-8">
                <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-1">Custom Builds</p>
                <h2 className="font-grotesk font-semibold text-[28px] tracking-tight">AI Apps</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {appProjects.map((p) => <ImageCard key={p.id} project={p} />)}
              </div>
            </div>
          )}
          {showAutomation && (
            <div>
              <div className="mb-8">
                <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-1">Workflow Systems</p>
                <h2 className="font-grotesk font-semibold text-[28px] tracking-tight">AI Automation</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {automationProjects.map((p) => <ImageCard key={p.id} project={p} />)}
              </div>
            </div>
          )}
          {showVideo && (
            <div>
              <div className="mb-8">
                <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-1">Motion & Content</p>
                <h2 className="font-grotesk font-semibold text-[28px] tracking-tight">AI Video Productions</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {videoProjects.map((p) => <VideoCard key={p.id} video={p.video} title={p.title} />)}
              </div>
            </div>
          )}
        </div>

        {/* ── Process ── */}
        <section className="py-28 border-t border-border/40">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-3">How It Works</p>
                <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">
                  Our<br />Process!
                </h2>
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

        {/* ── FAQ ── */}
        <section className="py-28 border-t border-border/40">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-3">Answers</p>
                <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">
                  Got a<br />Question?
                </h2>
                <p className="font-inter text-[15px] text-muted-foreground mt-4 leading-relaxed max-w-xs">
                  Everything you want to know about how we work and what we deliver.
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
        <section className="py-28 border-t border-border/40 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-4">Ready?</p>
            <h2 className="font-grotesk font-bold text-[48px] leading-[1.0] tracking-tight mb-6">
              Ready to be<br /><span className="text-foreground/40">Our Next Project?</span>
            </h2>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 bg-orange-500 text-white font-inter font-semibold text-[13px] rounded-full px-8 py-3.5 hover:bg-orange-400 transition-colors cursor-pointer">
                Start Your AI Project <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
