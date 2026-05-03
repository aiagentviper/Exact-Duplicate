import { motion } from "framer-motion";
import { Link } from "wouter";

const gridImages = [
  "/portfolio/watch-website.jpg",
  "/portfolio/car-rental-site.jpg",
  "/portfolio/crypto-dashboard.jpg",
  "/portfolio/omega-website.jpg",
  "/portfolio/ai-agent-flow.jpg",
  "/portfolio/make-automation.jpg",
  "/portfolio/email-sequences.jpg",
  "/portfolio/learning-app.jpg",
  "/portfolio/smart-home-site.jpg",
];

export function CtaBand() {
  return (
    <section className="relative bg-foreground overflow-hidden">
      <div className="grid grid-cols-3 gap-[2px] bg-black p-[2px] h-[600px] md:h-[760px]">
        {gridImages.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden bg-[#111] ${i === 1 ? "row-span-2" : i === 4 ? "col-span-1" : ""} ${i === 1 ? "md:row-span-2" : ""}`}
            style={
              i === 1
                ? { gridColumn: "2", gridRow: "1 / span 2" }
                : i === 0
                  ? { gridColumn: "1", gridRow: "1" }
                  : i === 2
                    ? { gridColumn: "3", gridRow: "1" }
                    : i === 3
                      ? { gridColumn: "1", gridRow: "2" }
                      : i === 4
                        ? { gridColumn: "3", gridRow: "2" }
                        : i === 5
                          ? { gridColumn: "1", gridRow: "3" }
                          : i === 6
                            ? { gridColumn: "2", gridRow: "3" }
                            : i === 7
                              ? { gridColumn: "3", gridRow: "3" }
                              : { gridColumn: "2", gridRow: "3" }
            }
          >
            <img src={img} alt="" className="h-full w-full object-cover grayscale contrast-125 brightness-90" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-x-3 bottom-3 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm px-3 py-1 text-center text-[10px] font-inter text-white/90">
              View Casestudy ↗
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center bg-black/72">
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
