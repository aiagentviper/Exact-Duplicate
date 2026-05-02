import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Zap, Globe, Smartphone, Code2, Video, Brain, Check } from "lucide-react";

const services = [
  {
    num: "01",
    icon: <Zap size={28} />,
    title: "AI Automation",
    headline: "Stop Doing It Manually. Let AI Run It.",
    desc: "We build intelligent automation systems that handle your repetitive tasks, workflows, CRM updates, email sequences, lead nurturing & more — 24/7 without human input.",
    bullets: [
      "Workflow automation (Zapier, Make, n8n)",
      "AI agent setup & management",
      "CRM & sales pipeline automation",
      "Email & outreach automation",
      "Custom AI triggers & logic flows",
    ],
    media: { type: "image", src: "/portfolio/automation-flow.jpg" },
  },
  {
    num: "02",
    icon: <Globe size={28} />,
    title: "AI Website Design & Development",
    headline: "Websites Built Smarter. Launched Faster.",
    desc: "We design and build high-converting AI-powered websites for brands, coaches, e-commerce stores & startups — using Framer, Webflow & custom builds.",
    bullets: [
      "AI-generated design concepts",
      "Framer / Webflow / custom dev",
      "SEO optimized structure",
      "Mobile-first responsive design",
      "CMS & blog integration",
      "Booking & lead capture forms",
    ],
    media: { type: "image", src: "/portfolio/watch-website.jpg" },
  },
  {
    num: "03",
    icon: <Smartphone size={28} />,
    title: "AI App Development",
    headline: "Your App Idea. Built With AI. Shipped Fast.",
    desc: "We build functional web & mobile apps powered by AI — from MVPs to full product launches. No bloated teams, no months of waiting.",
    bullets: [
      "AI-powered MVP builds",
      "Web app & mobile app development",
      "AI feature integration (chatbots, recommendations)",
      "Backend & database setup",
      "User authentication & dashboards",
    ],
    media: { type: "image", src: "/portfolio/crypto-dashboard.jpg" },
  },
  {
    num: "04",
    icon: <Code2 size={28} />,
    title: "Vibe Coding",
    headline: "Prompt It. Build It. Ship It.",
    desc: "We use the latest AI coding tools — Cursor, Replit, Bolt, v0 & more — to build real software products at unprecedented speed. No traditional dev cycles needed.",
    bullets: [
      "AI-assisted full-stack development",
      "Rapid prototyping & MVP builds",
      "Cursor / Bolt / v0 / Replit builds",
      "SaaS product development",
      "API integrations & custom logic",
    ],
    media: { type: "image", src: "/portfolio/learning-app.jpg" },
  },
  {
    num: "05",
    icon: <Video size={28} />,
    title: "AI Video Production",
    headline: "Professional Video Content. Powered by AI.",
    desc: "We produce high-quality AI-generated video content for brands, ads, social media & product promos — without the traditional video production costs or timelines.",
    bullets: [
      "AI brand videos & promos",
      "AI short-form social content",
      "AI voiceover & script generation",
      "Product demo videos",
      "Faceless AI video content",
      "Batch content production",
    ],
    media: { type: "video", src: "/videos/ai-video-1.mp4" },
  },
  {
    num: "06",
    icon: <Brain size={28} />,
    title: "AI Strategy & Consulting",
    headline: "Not Sure Where to Start With AI? We'll Map It Out.",
    desc: "We audit your business, identify the highest-leverage AI opportunities, and build you a clear roadmap to implement AI across your operations & marketing.",
    bullets: [
      "Full AI business audit",
      "Custom AI implementation roadmap",
      "Tool & stack recommendations",
      "Team training & onboarding",
      "Ongoing advisory support",
    ],
    media: { type: "image", src: "/portfolio/ai-agent-flow.jpg" },
  },
];

const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "10x", label: "Client ROI" },
  { value: "6", label: "Core AI Services" },
  { value: "24hr", label: "Turnaround" },
];

export function ServicesPage() {
  return (
    <div className="bg-background min-h-screen text-foreground dark">
      <Navigation />
      <main className="pt-24">
        <section className="py-20 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">What We Do</p>
            <h1 className="font-display text-[clamp(2.8rem,6vw,6rem)] font-extrabold tracking-tight uppercase leading-[0.9] mb-6">
              AI Services That<br />
              <span className="text-muted-foreground/50">Actually Move The Needle.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              From automation to full product builds — we handle everything with AI at the core.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 pb-24 space-y-32">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-mono text-muted-foreground">{service.num}</span>
                  <div className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground">
                    {service.icon}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{service.title}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-4">
                  {service.headline}
                </h2>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check size={14} className="text-foreground/60 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="rounded-full px-6 border-foreground/20 hover:border-foreground/60">
                    Get This Service →
                  </Button>
                </Link>
              </div>

              <div className={`${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} rounded-2xl overflow-hidden border border-border/50 bg-card`}>
                {service.media.type === "video" ? (
                  <video
                    src={service.media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <img
                    src={service.media.src}
                    alt={service.title}
                    className="w-full aspect-video object-cover"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </section>

        <section className="py-24 bg-card/20 border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/50">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center justify-center py-12 px-6 text-center"
                >
                  <div className="text-5xl font-black tracking-tighter mb-3">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            Book a free 30-minute AI audit call. We'll tell you exactly what will move the needle for your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-10">Book Free Audit →</Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
