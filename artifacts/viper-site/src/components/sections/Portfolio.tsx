import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const items = [
  { title: "CryptoTrack Dashboard", tag: "AI App · Fintech", image: "/portfolio/crypto-dashboard.jpg" },
  { title: "Watch Pro E-Commerce", tag: "AI Website · Luxury", image: "/portfolio/watch-website.jpg" },
  { title: "Premium Car Rental", tag: "AI Website · Automotive", image: "/portfolio/car-rental-site.jpg" },
  { title: "Automation Flow System", tag: "AI Automation · SaaS", image: "/portfolio/automation-flow.jpg" },
  { title: "AI Agent Flow", tag: "AI Agents · Workflow", image: "/portfolio/ai-agent-flow.jpg" },
];

export function Portfolio() {
  return (
    <section className="border-t border-border/40 w-full">
      <div className="px-6 lg:px-10 xl:px-14 py-4 flex items-center justify-between border-b border-border/40">
        <p className="font-inter text-[11px] uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-2">
          <span className="text-white">●</span> Recent Works
        </p>
        <Link href="/work">
          <span className="font-inter text-[12px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1.5">
            View All <ArrowRight size={12} />
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 w-full">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
            className={`group relative overflow-hidden border-border/40 ${i < items.length - 1 ? "md:border-r" : ""}`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-card">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <div className="px-3 py-2 border-t border-border/40">
              <p className="font-inter text-[10px] text-muted-foreground/55 uppercase tracking-[0.16em] mb-0.5">{item.tag}</p>
              <p className="font-grotesk font-semibold text-[13px] leading-snug text-foreground">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
