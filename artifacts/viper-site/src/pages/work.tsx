import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";

type FilterType = "All" | "AI Website" | "AI Video" | "AI Automation" | "AI App" | "Vibe Coding";

const filters: FilterType[] = ["All", "AI Website", "AI Video", "AI Automation", "AI App", "Vibe Coding"];

const websiteProjects = [
  { id: 1, image: "/portfolio/watch-website.jpg", title: "Watch Pro", tag: "AI Website | Luxury", category: "AI Website" },
  { id: 2, image: "/portfolio/car-rental-site.jpg", title: "Premium Car Rental", tag: "AI Website | Automotive", category: "AI Website" },
  { id: 3, image: "/portfolio/smart-home-site.jpg", title: "Gravette Smart Home", tag: "AI Website | Tech", category: "AI Website" },
  { id: 4, image: "/portfolio/omega-website.jpg", title: "Moonwatch Omega", tag: "AI Website | Luxury", category: "AI Website" },
  { id: 5, image: "/portfolio/email-sequences.jpg", title: "YAJU Supplements", tag: "AI Website | E-Commerce", category: "AI Website" },
  { id: 6, image: "/portfolio/marketing-slides.jpg", title: "Strategy Deck Agency", tag: "AI Website | Agency", category: "AI Website" },
  { id: 7, image: "/portfolio/watch-website.jpg", title: "Watch Pro II", tag: "AI Website | Product", category: "AI Website" },
  { id: 8, image: "/portfolio/car-rental-site.jpg", title: "Luxury Fleet", tag: "AI Website | Automotive", category: "AI Website" },
  { id: 9, image: "/portfolio/smart-home-site.jpg", title: "Home Environment", tag: "AI Website | SaaS", category: "AI Website" },
];

const appProjects = [
  { id: 10, image: "/portfolio/crypto-dashboard.jpg", title: "CryptoTrack Dashboard", tag: "AI App | Fintech", desc: "AI-powered crypto portfolio & trading dashboard with live market data.", category: "AI App" },
  { id: 11, image: "/portfolio/learning-app.jpg", title: "LearnAI Mobile App", tag: "AI App | EdTech", desc: "Gamified learning app with AI-personalized lessons, leaderboards & streaks.", category: "AI App" },
  { id: 12, image: "/portfolio/crypto-dashboard.jpg", title: "Finance Analytics Suite", tag: "AI App | Fintech", desc: "Real-time financial analytics platform with AI-driven insights & alerts.", category: "AI App" },
];

const automationProjects = [
  { id: 13, image: "/portfolio/automation-flow.jpg", title: "Content Generation Pipeline", tag: "AI Automation | n8n", desc: "Google Drive triggered AI workflow that auto-generates How-To guides as PDFs.", category: "AI Automation" },
  { id: 14, image: "/portfolio/ai-agent-flow.jpg", title: "Multi-Agent Telegram Bot", tag: "AI Automation | AI Agent", desc: "AI agent handling email, calendar, contacts & web research via Telegram.", category: "AI Automation" },
  { id: 15, image: "/portfolio/make-automation.jpg", title: "Booking Automation System", tag: "AI Automation | Make.com", desc: "End-to-end booking flow with Slack notifications & Google Sheets sync.", category: "AI Automation" },
];

const videoProjects = [
  { id: 16, video: "/videos/ai-video-1.mp4", title: "AI Brand Promo", category: "AI Video" },
  { id: 17, video: "/videos/ai-video-2.mp4", title: "AI Product Showcase", category: "AI Video" },
  { id: 18, video: "/videos/ai-video-3.mp4", title: "AI Automation Explainer", category: "AI Video" },
  { id: 19, video: "/videos/ai-video-4.mp4", title: "AI UGC Ad", category: "AI Video" },
  { id: 20, video: "/videos/ai-video-5.mp4", title: "AI Motion Graphics", category: "AI Video" },
  { id: 21, video: "/videos/ai-video-6.mp4", title: "AI Social Content", category: "AI Video" },
];

function ImageCard({ image, title, tag, desc }: { image: string; title: string; tag: string; desc?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl border border-border/50 bg-card cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="text-xs uppercase tracking-widest text-white/60 mb-1">{tag}</p>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        {desc && <p className="text-xs text-white/60 line-clamp-2">{desc}</p>}
      </div>
      <div className="p-4 border-t border-border/50">
        <p className="text-xs text-muted-foreground mb-1">{tag}</p>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
}

function VideoCard({ video, title }: { video: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl overflow-hidden border border-border/50 bg-card"
    >
      <video
        src={video}
        controls
        muted
        loop
        playsInline
        className="w-full aspect-video object-cover"
      />
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">AI Video</p>
        <h3 className="text-sm font-semibold">{title}</h3>
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
    <div className="bg-background min-h-screen text-foreground dark">
      <Navigation />
      <main className="pt-24">
        <section className="py-20 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Our Portfolio</p>
            <h1 className="font-grotesk font-bold text-[60px] leading-[1.0] tracking-[-0.02em] mb-6">
              Real Projects.<br />
              <span className="text-muted-foreground/40">Real Results.</span>
            </h1>
            <p className="font-inter text-[16px] text-muted-foreground max-w-xl mx-auto leading-relaxed">
              AI-powered websites, videos, automations & apps built for businesses across every industry.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                data-testid={`filter-${f.toLowerCase().replace(/ /g, "-")}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  active === f
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border/50 hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        <div className="container mx-auto px-6 space-y-20 pb-24">
          {showWebsite && (
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 text-muted-foreground/60">AI Websites</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {websiteProjects.map((p) => (
                  <ImageCard key={p.id} image={p.image} title={p.title} tag={p.tag} />
                ))}
              </div>
            </div>
          )}

          {showApp && (
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 text-muted-foreground/60">AI Apps</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {appProjects.map((p) => (
                  <ImageCard key={p.id} image={p.image} title={p.title} tag={p.tag} desc={p.desc} />
                ))}
              </div>
            </div>
          )}

          {showAutomation && (
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 text-muted-foreground/60">AI Automation</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {automationProjects.map((p) => (
                  <ImageCard key={p.id} image={p.image} title={p.title} tag={p.tag} desc={p.desc} />
                ))}
              </div>
            </div>
          )}

          {showVideo && (
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 text-muted-foreground/60">AI Video Productions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoProjects.map((p) => (
                  <VideoCard key={p.id} video={p.video} title={p.title} />
                ))}
              </div>
            </div>
          )}
        </div>

        <section className="border-t border-border/50 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">Ready to be our next project?</h2>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-10">Start Your AI Project →</Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
