import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const serviceCards = [
  { icon: "⬡", title: "AI Automation", desc: "Build powerful n8n, Make.com, and Zapier workflows that eliminate repetitive tasks — so your team focuses on what matters while the system runs around the clock." },
  { icon: "✦", title: "AI Websites & Apps", desc: "We design and deploy AI-powered websites and web apps that convert — fast, beautiful, and smart enough to personalise the experience for every visitor." },
  { icon: "◻", title: "AI Video & Content", desc: "From script to screen — we produce AI-generated video ads, social content, and brand films that rival studio productions at a fraction of the cost and timeline." },
  { icon: "⬙", title: "AI Agents & Chatbots", desc: "Deploy intelligent agents that qualify leads, handle support, and book meetings 24/7 — trained on your business and integrated directly into your existing stack." },
];

const serviceTags = ["AI Automation", "AI Websites", "AI Apps", "AI Video", "Vibe Coding", "AI Strategy", "AI Chatbots", "AI Agents", "n8n Workflows", "Make.com", "Webflow", "Framer", "ElevenLabs", "Runway", "Sora", "Brand Landing Pages", "Social Content", "AI UGC Ads", "Email Automation", "Lead Generation"];
const serviceTags2 = ["AI Copywriting", "Dashboard Design", "Mobile Apps", "AI Integrations", "CRM Automation", "Chatbot Flows", "SEO Optimisation", "Conversion Design", "Voiceover AI", "Script Writing", "UI/UX Design", "Product Mockups", "Sales Automation", "Notion Systems", "Zapier Flows", "Workflow Design"];

export function Services() {
  const doubled1 = [...serviceTags, ...serviceTags];
  const doubled2 = [...serviceTags2, ...serviceTags2];

  return (
    <section className="border-t border-border/40 w-full bg-black">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] min-h-[520px] w-full">
          <div className="py-16 px-6 lg:px-10 xl:px-14 flex flex-col justify-center border-r border-border/40">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="font-inter text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">Our services</p>
              <h2 className="font-grotesk text-[58px] leading-[0.96] tracking-tight mb-3">Services</h2>
              <p className="font-inter text-[13px] text-muted-foreground max-w-[360px] leading-relaxed mb-5">
                We help businesses scale invisibly — with AI automation, websites, apps, video, and agent workflows that work around the clock.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 max-w-[520px]">
                {['AI Automation', 'AI Websites', 'AI Apps', 'AI Video', 'AI Agents'].map(tag => (
                  <span key={tag} className="border border-border/60 rounded-full px-3.5 py-1.5 text-[11px] font-inter text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Link href="/contact"><span className="inline-flex items-center gap-2 bg-foreground text-background font-inter font-semibold text-[13px] rounded-full px-5 py-2.5 hover:bg-foreground/90 transition-colors cursor-pointer">Book a Free Call</span></Link>
                <Link href="/work"><span className="inline-flex items-center gap-2 border border-border/60 font-inter font-semibold text-[13px] rounded-full px-5 py-2.5 hover:border-foreground/50 transition-colors cursor-pointer">See Projects</span></Link>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative overflow-hidden min-h-[320px] rounded-2xl">
            <img src="/photo-services.jpg" alt="Services" className="h-full w-full object-cover object-center grayscale contrast-[1.15] brightness-[0.82] rounded-2xl" />
            <div className="absolute inset-0 rounded-2xl bg-black/18" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border/40 w-full">
          {serviceCards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className={`p-5 lg:p-6 border-border/40 hover:bg-card/50 transition-colors ${i % 2 === 0 ? 'md:border-r' : ''} ${i < 2 ? 'border-b' : ''}`}>
              <div className="rounded-2xl border border-border/40 bg-zinc-900/50 p-5 h-full">
                <span className="text-muted-foreground/50 text-[17px] block mb-3">{card.icon}</span>
                <h3 className="font-grotesk font-semibold text-[16px] tracking-tight mb-2">{card.title}</h3>
                <p className="font-inter text-[12px] leading-relaxed text-muted-foreground max-w-[320px]">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border/40 py-3 overflow-hidden w-full space-y-2">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, hsl(0 0% 4%), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, hsl(0 0% 4%), transparent)' }} />
            <div className="flex gap-2.5 w-max" style={{ animation: 'marquee 25s linear infinite' }}>
              {doubled1.map((item, i) => <span key={i} className="font-inter font-medium text-[11px] whitespace-nowrap border border-border/50 rounded-full px-3.5 py-1.5 text-muted-foreground">{item}</span>)}
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, hsl(0 0% 4%), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, hsl(0 0% 4%), transparent)' }} />
            <div className="flex gap-2.5 w-max" style={{ animation: 'marquee-reverse 28s linear infinite' }}>
              {doubled2.map((item, i) => <span key={i} className="font-inter font-medium text-[11px] whitespace-nowrap border border-border/50 rounded-full px-3.5 py-1.5 text-muted-foreground">{item}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
