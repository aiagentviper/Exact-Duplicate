import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const items = [
  { title: "Watch Pro E-Commerce", tag: "AI Website", image: "/portfolio/watch-website.jpg" },
  { title: "Car Rental Platform", tag: "AI Website", image: "/portfolio/car-rental-site.jpg", tall: true },
  { title: "CryptoTrack Dashboard", tag: "AI App", image: "/portfolio/crypto-dashboard.jpg" },
  { title: "Omega Agency Site", tag: "AI Website", image: "/portfolio/omega-website.jpg" },
  { title: "AI Agent Flow", tag: "AI Agents", image: "/portfolio/ai-agent-flow.jpg" },
  { title: "Make Automation", tag: "AI Automation", image: "/portfolio/make-automation.jpg" },
  { title: "Email Sequences", tag: "AI Automation", image: "/portfolio/email-sequences.jpg" },
  { title: "Learning App", tag: "AI App", image: "/portfolio/learning-app.jpg" },
];

export function Portfolio() {
  return (
    <section className="border-t border-border/40 w-full">
      <div className="flex items-center justify-between px-6 lg:px-10 xl:px-14 py-4 border-b border-border/40">
        <p className="font-inter text-[11px] uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white" /> Recent Works
        </p>
        <Link href="/work">
          <span className="font-inter text-[12px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1.5">
            View All <ArrowRight size={12} />
          </span>
        </Link>
      </div>

      {/* Bento masonry grid — mirrors reference layout */}
      <div
        className="w-full"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "260px 260px 260px",
          gap: "1px",
          background: "hsl(var(--border) / 0.4)",
        }}
      >
        {/* Row 1 col 1 — small */}
        <BentoCell item={items[0]} style={{ gridColumn: "1", gridRow: "1" }} delay={0} />
        {/* Col 2 — tall, spans rows 1+2 */}
        <BentoCell item={items[1]} style={{ gridColumn: "2", gridRow: "1 / span 2" }} delay={0.05} />
        {/* Row 1 col 3 — small */}
        <BentoCell item={items[2]} style={{ gridColumn: "3", gridRow: "1" }} delay={0.1} />
        {/* Row 2 col 1 */}
        <BentoCell item={items[3]} style={{ gridColumn: "1", gridRow: "2" }} delay={0.15} />
        {/* Row 2 col 3 */}
        <BentoCell item={items[4]} style={{ gridColumn: "3", gridRow: "2" }} delay={0.2} />
        {/* Row 3 col 1 */}
        <BentoCell item={items[5]} style={{ gridColumn: "1", gridRow: "3" }} delay={0.25} />
        {/* Row 3 col 2 */}
        <BentoCell item={items[6]} style={{ gridColumn: "2", gridRow: "3" }} delay={0.3} />
        {/* Row 3 col 3 */}
        <BentoCell item={items[7]} style={{ gridColumn: "3", gridRow: "3" }} delay={0.35} />
      </div>
    </section>
  );
}

function BentoCell({
  item,
  style,
  delay,
}: {
  item: (typeof items)[0];
  style: React.CSSProperties;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden bg-card cursor-pointer"
      style={style}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Always-visible casestudy pill */}
      <div className="absolute bottom-3 left-3">
        <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/20 text-white font-inter text-[11px] rounded-full px-3 py-1.5 hover:bg-black/70 transition-colors">
          View Casestudy <ArrowUpRight size={10} />
        </span>
      </div>
    </motion.div>
  );
}
