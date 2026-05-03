import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const items = [
  { title: "CryptoTrack Dashboard", tag: "AI App · Fintech", image: "/portfolio/crypto-dashboard.jpg" },
  { title: "Watch Pro E-Commerce", tag: "AI Website · Luxury", image: "/portfolio/watch-website.jpg" },
  { title: "Omega Agency Site", tag: "AI Website · Agency", image: "/portfolio/omega-website.jpg" },
  { title: "Automation Flow System", tag: "AI Automation · SaaS", image: "/portfolio/automation-flow.jpg" },
  { title: "AI Agent Flow", tag: "AI Agents · Workflow", image: "/portfolio/ai-agent-flow.jpg" },
];

export function Portfolio() {
  return (
    <section className="border-t border-border/40 w-full">
      {/* Strip header */}
      <div className="flex items-center justify-between px-10 lg:px-14 py-4 border-b border-border/40">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-inter text-[12px] text-muted-foreground flex items-center gap-2"
        >
          <span className="text-green-400 text-[8px]">●</span> Recent Works
        </motion.p>
        <Link href="/work">
          <span className="flex items-center gap-1.5 font-inter text-[12px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer group">
            View All <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>
      </div>

      {/* Full-width 5-col thumbnail strip */}
      <div className="grid grid-cols-5 w-full">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className={`group relative overflow-hidden cursor-pointer ${i < items.length - 1 ? "border-r border-border/40" : ""}`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
            {/* Caption */}
            <div className="px-4 py-3 border-t border-border/40">
              <p className="font-inter text-[10px] text-muted-foreground/60 uppercase tracking-[0.15em] mb-0.5">{item.tag}</p>
              <p className="font-grotesk font-semibold text-[13px] leading-snug text-foreground">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
