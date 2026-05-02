import { motion } from "framer-motion";
import { Link } from "wouter";

const gridImages = [
  "/portfolio/crypto-dashboard.jpg",
  "/portfolio/watch-website.jpg",
  "/portfolio/car-rental-site.jpg",
  "/portfolio/automation-flow.jpg",
  "/portfolio/mobile-app.jpg",
  "/portfolio/ecommerce-store.jpg",
];

export function CtaBand() {
  return (
    <section className="relative bg-foreground overflow-hidden">
      {/* Masonry image grid background */}
      <div className="grid grid-cols-6 h-[420px] md:h-[520px] opacity-30">
        {gridImages.map((img, i) => (
          <div key={i} className="overflow-hidden">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
              style={{ imageRendering: "auto" }}
            />
          </div>
        ))}
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center bg-black/60">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 font-body mb-4">Our Portfolio</p>
          <h2 className="font-display text-[clamp(3rem,8vw,7.5rem)] font-extrabold uppercase leading-[0.88] tracking-tight text-white mb-8">
            Every Pixel<br />Clicked.
          </h2>
          <Link href="/work">
            <span className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-black rounded-full px-8 py-3.5 hover:bg-white/90 transition-colors cursor-pointer font-body">
              View Full Portfolio →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
