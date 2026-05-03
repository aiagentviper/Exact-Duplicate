import { motion } from "framer-motion";
import { Link } from "wouter";

const gridImages = [
  "/portfolio/crypto-dashboard.jpg",
  "/portfolio/watch-website.jpg",
  "/portfolio/car-rental-site.jpg",
  "/portfolio/automation-flow.jpg",
  "/portfolio/ai-agent-flow.jpg",
  "/portfolio/smart-home-site.jpg",
];

export function CtaBand() {
  return (
    <section className="relative bg-foreground overflow-hidden">
      <div className="grid grid-cols-6 h-[420px] md:h-[520px] opacity-25">
        {gridImages.map((img, i) => (
          <div key={i} className="overflow-hidden">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center bg-black/65">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4">Our Portfolio</p>
          <h2 className="font-grotesk font-bold text-[60px] md:text-[72px] leading-[1.0] tracking-tight text-white mb-8">
            Every Pixel<br />Clicked.
          </h2>
          <Link href="/work">
            <span className="inline-flex items-center gap-2 font-inter font-semibold text-[13px] bg-white text-black rounded-full px-8 py-3.5 hover:bg-white/90 transition-colors cursor-pointer">
              View Full Portfolio →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
