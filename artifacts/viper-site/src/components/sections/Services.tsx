import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const services = [
  { num: "01", title: "AI Automation", desc: "End-to-end workflow automation that saves your team hundreds of hours." },
  { num: "02", title: "AI Website Design & Dev", desc: "Conversion-optimised, AI-built websites that work 24/7 for your brand." },
  { num: "03", title: "AI App Development", desc: "Custom AI-powered apps from MVP to production-ready in record time." },
  { num: "04", title: "Vibe Coding", desc: "Ship polished, functional interfaces fast with AI-assisted coding." },
  { num: "05", title: "AI Video Production", desc: "Cinematic AI-generated videos for ads, content & brand storytelling." },
  { num: "06", title: "AI Strategy & Consulting", desc: "A clear AI roadmap tailored to your business goals and growth stage." },
];

const tickerItems = [
  "AI Automation", "AI Websites", "AI Apps", "AI Video", "Vibe Coding",
  "AI Strategy", "AI Chatbots", "AI Agents", "n8n Workflows", "Make.com",
  "Webflow", "Framer", "ElevenLabs", "Runway", "Sora", "Brand Landing Pages",
  "Social Content", "AI UGC Ads", "Email Automation", "Lead Generation",
];

const tickerItems2 = [
  "AI Copywriting", "Brand Identity", "Dashboard Design", "Mobile Apps",
  "AI Integrations", "CRM Automation", "Chatbot Flows", "SEO Optimisation",
  "Conversion Design", "Voiceover AI", "Script Writing", "UI/UX Design",
  "Product Mockups", "Sales Automation", "Notion Systems", "Zapier Flows",
];

export function Services() {
  const doubled1 = [...tickerItems, ...tickerItems];
  const doubled2 = [...tickerItems2, ...tickerItems2];

  return (
    <section className="py-28 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
              <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">What We Do</p>
              <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">Services</h2>
              <p className="font-inter text-[15px] text-muted-foreground mt-4 max-w-xs leading-relaxed">
                Helping businesses stand out with AI-powered builds that captivate and convert effectively.
              </p>
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

            <div className="grid grid-cols-2 gap-4">
              {services.slice(0, 4).map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="bg-card border border-border/40 rounded-2xl p-5 hover:border-border/70 transition-colors"
                >
                  <span className="font-inter font-semibold text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 block mb-3">{s.num}</span>
                  <h3 className="font-grotesk font-semibold text-[16px] tracking-tight mb-2">{s.title}</h3>
                  <p className="font-inter text-[13px] leading-relaxed text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-6">
              <Link href="/services">
                <span className="inline-flex items-center gap-2 font-inter font-semibold text-[13px] text-foreground border border-border/60 rounded-full px-6 py-2.5 hover:border-foreground/50 transition-colors cursor-pointer">
                  Explore All Services <ArrowRight size={13} />
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="sticky top-28 self-start">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-card border border-border/40">
              <img src="/portfolio/watch-website.jpg" alt="AI Services" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/80 backdrop-blur-md rounded-xl p-5 border border-border/50">
                  <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Result</p>
                  <p className="font-grotesk font-bold text-[36px] leading-none">+340%</p>
                  <p className="font-inter text-[15px] text-muted-foreground mt-1">Revenue lift in 60 days</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 overflow-hidden space-y-3">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(0 0% 4%), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(0 0% 4%), transparent)" }} />
          <div className="flex gap-3 w-max" style={{ animation: "marquee 25s linear infinite" }}>
            {doubled1.map((item, i) => (
              <span key={i} className="font-inter font-medium text-[12px] whitespace-nowrap border border-border/50 rounded-full px-4 py-2 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(0 0% 4%), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(0 0% 4%), transparent)" }} />
          <div className="flex gap-3 w-max" style={{ animation: "marquee-reverse 28s linear infinite" }}>
            {doubled2.map((item, i) => (
              <span key={i} className="font-inter font-medium text-[12px] whitespace-nowrap border border-border/50 rounded-full px-4 py-2 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
