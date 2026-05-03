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
    <section className="w-full border-t border-border/40 bg-black py-32">
      <div className="mx-auto w-full max-w-[1100px] px-6">
        <div className="grid min-h-[520px] w-full lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center border-r border-border/40 px-6 py-16 lg:px-10 xl:px-14">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-500">Our services</p>
              <h2 className="mb-3 font-grotesk text-[58px] leading-[0.96] tracking-tight">Services</h2>
              <p className="mb-5 max-w-[360px] font-inter text-[13px] leading-relaxed text-muted-foreground">
                We help businesses scale invisibly — with AI automation, websites, apps, video, and agent workflows that work around the clock.
              </p>
              <div className="mb-6 flex max-w-[520px] flex-wrap gap-2">
                {['AI Automation', 'AI Websites', 'AI Apps', 'AI Video', 'AI Agents'].map((tag) => (
                  <span key={tag} className="rounded-full border border-border/60 px-3.5 py-1.5 font-inter text-[11px] text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Link href="/contact"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 font-inter text-[13px] font-semibold text-white transition-colors hover:bg-orange-400">Book a Free Call</span></Link>
                <Link href="/work"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 font-inter text-[13px] font-semibold transition-colors hover:border-foreground/50">See Projects</span></Link>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <img src="/photo-services.jpg" alt="Services" className="h-full w-full rounded-2xl object-cover object-center grayscale contrast-[1.15] brightness-[0.82]" />
            <div className="absolute inset-0 rounded-2xl bg-black/18" />
          </motion.div>
        </div>

        <div className="grid w-full grid-cols-1 border-t border-border/40 md:grid-cols-2">
          {serviceCards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className={`border-border/40 p-5 transition-colors hover:bg-card/50 lg:p-6 ${i % 2 === 0 ? 'md:border-r' : ''} ${i < 2 ? 'border-b' : ''}`}>
              <div className="h-full rounded-2xl border border-border/40 bg-zinc-900/50 p-5">
                <span className="mb-3 block w-2 h-2 rounded-full bg-orange-500"></span>
                <h3 className="mb-2 font-grotesk text-[16px] font-semibold tracking-tight">{card.title}</h3>
                <p className="max-w-[320px] font-inter text-[12px] leading-relaxed text-muted-foreground">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="w-full overflow-hidden border-t border-border/40 py-3 space-y-2">
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16" style={{ background: 'linear-gradient(to right, hsl(0 0% 4%), transparent)' }} />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16" style={{ background: 'linear-gradient(to left, hsl(0 0% 4%), transparent)' }} />
            <div className="flex w-max gap-2.5" style={{ animation: 'marquee 25s linear infinite' }}>
              {doubled1.map((item, i) => <span key={i} className="whitespace-nowrap rounded-full border border-border/50 px-3.5 py-1.5 font-inter text-[11px] font-medium text-muted-foreground">{item}</span>)}
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16" style={{ background: 'linear-gradient(to right, hsl(0 0% 4%), transparent)' }} />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16" style={{ background: 'linear-gradient(to left, hsl(0 0% 4%), transparent)' }} />
            <div className="flex w-max gap-2.5" style={{ animation: 'marquee-reverse 28s linear infinite' }}>
              {doubled2.map((item, i) => <span key={i} className="whitespace-nowrap rounded-full border border-border/50 px-3.5 py-1.5 font-inter text-[11px] font-medium text-muted-foreground">{item}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
