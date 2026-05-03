import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const serviceCards = [
  {
    icon: "⬡",
    title: "Brand Identity",
    desc: "Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand's essence.",
  },
  {
    icon: "✦",
    title: "Brand Design",
    desc: "Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.",
  },
  {
    icon: "◻",
    title: "Package Design",
    desc: "Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your designs and visuals will stand out in the real world.",
  },
  {
    icon: "⬙",
    title: "Mockup Design",
    desc: "Tailored design mockups that align perfectly with your brand's aesthetic — because every detail matters when showcasing your product's true potential.",
  },
];

const serviceTags = [
  "AI Automation", "AI Websites", "AI Apps", "AI Video", "Vibe Coding",
  "AI Strategy", "AI Chatbots", "AI Agents", "n8n Workflows", "Make.com",
  "Webflow", "Framer", "ElevenLabs", "Runway", "Sora", "Brand Landing Pages",
  "Social Content", "AI UGC Ads", "Email Automation", "Lead Generation",
];

const serviceTags2 = [
  "AI Copywriting", "Brand Identity", "Dashboard Design", "Mobile Apps",
  "AI Integrations", "CRM Automation", "Chatbot Flows", "SEO Optimisation",
  "Conversion Design", "Voiceover AI", "Script Writing", "UI/UX Design",
  "Product Mockups", "Sales Automation", "Notion Systems", "Zapier Flows",
];

export function Services() {
  const doubled1 = [...serviceTags, ...serviceTags];
  const doubled2 = [...serviceTags2, ...serviceTags2];

  return (
    <section className="border-t border-border/40">
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        <div className="py-20 px-10 lg:px-14 border-r border-border/40 flex flex-col justify-between">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Design services</p>
            <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight mb-3">Services</h2>
            <p className="font-inter text-[15px] text-muted-foreground max-w-xs leading-relaxed mb-6">
              Helping businesses standout with brand identity packaging that captivates and converts effectively.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Product Design', 'Brand Identity Design', 'Branding', 'Packaging Design', 'Mockup Design'].map(tag => (
                <span key={tag} className="border border-border/60 rounded-full px-4 py-1.5 text-[12px] font-inter text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
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
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden min-h-[300px] rounded-none"
        >
          <img src="@assets/imgi_159_p6Im6dfknHAI0ig4NqDcO4WNpc_1777792397456.jpg" alt="Services" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/25" />
        </motion.div>
      </div>

      <div className="grid grid-cols-2 border-t border-border/40">
        {serviceCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`p-8 border-border/40 hover:bg-card/50 transition-colors ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}
          >
            <span className="text-muted-foreground/50 text-[20px] block mb-4">{card.icon}</span>
            <h3 className="font-grotesk font-semibold text-[18px] tracking-tight mb-2">{card.title}</h3>
            <p className="font-inter text-[13px] leading-relaxed text-muted-foreground">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-border/40 py-5 overflow-hidden space-y-3">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(0 0% 4%), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(0 0% 4%), transparent)" }} />
          <div className="flex gap-3 w-max" style={{ animation: "marquee 25s linear infinite" }}>
            {doubled1.map((item, i) => (
              <span key={i} className="font-inter font-medium text-[12px] whitespace-nowrap border border-border/50 rounded-full px-4 py-2 text-muted-foreground">
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
              <span key={i} className="font-inter font-medium text-[12px] whitespace-nowrap border border-border/50 rounded-full px-4 py-2 text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
