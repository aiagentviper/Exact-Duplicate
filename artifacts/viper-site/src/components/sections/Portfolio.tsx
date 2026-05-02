import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const featured = [
  { id: 1, title: "CryptoTrack Dashboard", tag: "AI App · Fintech", image: "/portfolio/crypto-dashboard.jpg", size: "tall" },
  { id: 2, title: "Watch Pro E-Commerce", tag: "AI Website · Luxury", image: "/portfolio/watch-website.jpg", size: "wide" },
  { id: 3, title: "Premium Car Rental", tag: "AI Website · Automotive", image: "/portfolio/car-rental-site.jpg", size: "normal" },
  { id: 4, title: "Automation Flow System", tag: "AI Automation · SaaS", image: "/portfolio/automation-flow.jpg", size: "normal" },
];

function Card({ project, className }: { project: typeof featured[0]; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group relative overflow-hidden bg-card border border-border/40 cursor-pointer ${className}`}
    >
      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
        <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-white/60 mb-1.5">{project.tag}</p>
        <div className="flex items-center justify-between">
          <h3 className="font-grotesk font-semibold text-[18px] text-white">{project.title}</h3>
          <div className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center flex-shrink-0">
            <ArrowRight size={13} className="text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6 mb-10">
        <div className="flex items-end justify-between">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Our Work ✦</p>
            <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">
              Featured<br />Portfolio!
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Link href="/work">
              <span className="flex items-center gap-2 font-inter text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer group">
                View All <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-4" style={{ gridAutoRows: "80px" }}>
          <div className="col-span-12 md:col-span-5" style={{ gridRow: "span 7" }}>
            <Card project={featured[0]} className="w-full h-full rounded-2xl" />
          </div>
          <div className="col-span-12 md:col-span-7" style={{ gridRow: "span 4" }}>
            <Card project={featured[1]} className="w-full h-full rounded-2xl" />
          </div>
          <div className="col-span-12 md:col-span-4" style={{ gridRow: "span 3" }}>
            <Card project={featured[2]} className="w-full h-full rounded-2xl" />
          </div>
          <div className="col-span-12 md:col-span-3" style={{ gridRow: "span 3" }}>
            <Card project={featured[3]} className="w-full h-full rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
