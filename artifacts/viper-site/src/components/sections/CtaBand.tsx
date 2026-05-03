import { motion } from "framer-motion";
import { Link } from "wouter";

const bgImages = [
  "/portfolio/crypto-dashboard.jpg",
  "/portfolio/watch-website.jpg",
  "/portfolio/car-rental-site.jpg",
  "/portfolio/omega-website.jpg",
  "/portfolio/ai-agent-flow.jpg",
  "/portfolio/smart-home-site.jpg",
];

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background image strip */}
      <div className="grid grid-cols-6 h-[380px] md:h-[480px] opacity-20 grayscale">
        {bgImages.map((img, i) => (
          <div key={i} className="overflow-hidden">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* CTA overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center bg-black/70">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.22em] text-white/40 mb-4">
            Start a project
          </p>
          <h2 className="font-grotesk font-bold text-[52px] md:text-[68px] leading-[1.0] tracking-tight text-white mb-8">
            Let's Build<br />Something Real.
          </h2>
          <div className="flex items-center justify-center gap-4">
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 font-inter font-semibold text-[13px] bg-white text-black rounded-full px-7 py-3.5 hover:bg-white/90 transition-colors cursor-pointer">
                Book a Free Call →
              </span>
            </Link>
            <Link href="/work">
              <span className="inline-flex items-center gap-2 font-inter font-semibold text-[13px] border border-white/30 text-white rounded-full px-7 py-3.5 hover:border-white/60 transition-colors cursor-pointer">
                See Our Work
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
