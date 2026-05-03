import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

// 3-col bento masonry — centre column spans rows 1+2 (portrait), 8 image cells
// Layout matches reference: [sq] [TALL] [sq] / [land] [TALL] [land] / [sq] [port] [sq]
const cells = [
  { title: "Watch Pro E-Commerce",  tag: "AI Website",    img: "/portfolio/watch-website.jpg",    col: "1",      row: "1" },
  { title: "Car Rental Platform",   tag: "AI Website",    img: "/portfolio/car-rental-site.jpg",  col: "2",      row: "1 / span 2" },
  { title: "CryptoTrack Dashboard", tag: "AI App",        img: "/portfolio/crypto-dashboard.jpg", col: "3",      row: "1" },
  { title: "Omega Agency Site",     tag: "AI Website",    img: "/portfolio/omega-website.jpg",    col: "1",      row: "2" },
  { title: "AI Agent Flow",         tag: "AI Agents",     img: "/portfolio/ai-agent-flow.jpg",    col: "3",      row: "2" },
  { title: "Make Automation",       tag: "AI Automation", img: "/portfolio/make-automation.jpg",  col: "1",      row: "3" },
  { title: "Email Sequences",       tag: "AI Automation", img: "/portfolio/email-sequences.jpg",  col: "2",      row: "3" },
  { title: "Learning App",          tag: "AI App",        img: "/portfolio/learning-app.jpg",     col: "3",      row: "3" },
];

export function Portfolio() {
  return (
    <section className="w-full bg-black">
      {/* ── Header bar ── */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 lg:px-10 xl:px-14">
        <p className="flex items-center gap-2 font-inter text-[11px] uppercase tracking-[0.22em] text-white/50">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
          Recent Works
        </p>
        <Link href="/work">
          <span className="flex cursor-pointer items-center gap-1.5 font-inter text-[12px] text-white/50 transition-colors hover:text-white">
            View All <ArrowRight size={12} />
          </span>
        </Link>
      </div>

      {/* ── Bento masonry grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "260px 260px 300px",
          gap: "4px",
          background: "#000",
        }}
      >
        {cells.map((cell, i) => (
          <motion.div
            key={cell.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className="group relative cursor-pointer overflow-hidden bg-[#0a0a0a]"
            style={{ gridColumn: cell.col, gridRow: cell.row }}
          >
            {/* Grayscale image with subtle dark overlay */}
            <img
              src={cell.img}
              alt={cell.title}
              className="h-full w-full object-cover object-center grayscale contrast-[1.15] brightness-[0.88] transition-transform duration-700 group-hover:scale-[1.04]"
            />
            {/* Permanent dark gradient at bottom for pill readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Glassmorphism pill — centered at bottom */}
            <div className="absolute inset-x-3 bottom-3 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 font-inter text-[10px] text-white backdrop-blur-md transition-all group-hover:bg-white/20 group-hover:border-white/40">
                View Case Study&nbsp;↗
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Bottom navigation ── */}
      <div className="flex items-center justify-center gap-5 py-7">
        <Link href="/work">
          <span className="cursor-pointer border-b border-white/60 pb-0.5 font-inter text-[11px] text-white/80 transition-colors hover:text-white hover:border-white">
            All Projects
          </span>
        </Link>
        <Link href="/contact">
          <span className="cursor-pointer rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-inter text-[11px] text-white/80 backdrop-blur-md transition-colors hover:bg-white/10 hover:border-white/35">
            Book a Free Call
          </span>
        </Link>
      </div>
    </section>
  );
}
