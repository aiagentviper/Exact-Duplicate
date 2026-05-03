import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Bento grid layout — 8 items, 3 cols × 3 rows, centre-col spans rows 1+2
const cells: Array<{
  title: string;
  tag: string;
  image: string;
  gridColumn: string;
  gridRow: string;
}> = [
  { title: "Watch Pro E-Commerce",  tag: "AI Website",    image: "/portfolio/watch-website.jpg",    gridColumn: "1", gridRow: "1" },
  { title: "Car Rental Platform",   tag: "AI Website",    image: "/portfolio/car-rental-site.jpg",  gridColumn: "2", gridRow: "1 / span 2" },
  { title: "CryptoTrack Dashboard", tag: "AI App",        image: "/portfolio/crypto-dashboard.jpg", gridColumn: "3", gridRow: "1" },
  { title: "Omega Agency Site",     tag: "AI Website",    image: "/portfolio/omega-website.jpg",    gridColumn: "1", gridRow: "2" },
  { title: "AI Agent Flow",         tag: "AI Agents",     image: "/portfolio/ai-agent-flow.jpg",    gridColumn: "3", gridRow: "2" },
  { title: "Make Automation",       tag: "AI Automation", image: "/portfolio/make-automation.jpg",  gridColumn: "1", gridRow: "3" },
  { title: "Email Sequences",       tag: "AI Automation", image: "/portfolio/email-sequences.jpg",  gridColumn: "2", gridRow: "3" },
  { title: "Learning App",          tag: "AI App",        image: "/portfolio/learning-app.jpg",     gridColumn: "3", gridRow: "3" },
];

export function Portfolio() {
  return (
    <section className="border-t border-border/40 w-full">
      {/* Header bar */}
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

      {/* Bento masonry grid — 3 cols, 3 rows, centre col spans rows 1+2 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "280px 280px 280px",
          gap: "1px",
          background: "rgba(255,255,255,0.08)",
        }}
      >
        {cells.map((cell, i) => (
          <motion.div
            key={cell.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className="group relative overflow-hidden bg-zinc-900 cursor-pointer"
            style={{ gridColumn: cell.gridColumn, gridRow: cell.gridRow }}
          >
            <img
              src={cell.image}
              alt={cell.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            />
            {/* gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* "View Casestudy" pill — always visible */}
            <div className="absolute bottom-3 left-3">
              <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/25 text-white font-inter text-[11px] rounded-full px-3.5 py-1.5">
                View Casestudy <ArrowUpRight size={10} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
