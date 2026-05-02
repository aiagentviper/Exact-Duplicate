import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const featured = [
  {
    id: 1,
    title: "CryptoTrack Dashboard",
    tag: "AI App | Fintech",
    image: "/portfolio/crypto-dashboard.jpg",
  },
  {
    id: 2,
    title: "Watch Pro E-Commerce",
    tag: "AI Website | Luxury",
    image: "/portfolio/watch-website.jpg",
  },
  {
    id: 3,
    title: "Premium Car Rental",
    tag: "AI Website | Automotive",
    image: "/portfolio/car-rental-site.jpg",
  },
];

export function Portfolio() {
  return (
    <section className="py-32 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">Featured Work ✦</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
          AI-Powered Projects<br />Built For The Real World
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group relative overflow-hidden rounded-xl aspect-[4/3] border border-border/50 bg-card cursor-pointer"
            data-testid={`portfolio-card-${project.id}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-xs uppercase tracking-widest text-white/60 mb-2">{project.tag}</p>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <span className="text-sm text-white/80 flex items-center gap-1">
                View Project <ArrowRight size={14} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/work">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-foreground/20 hover:border-foreground/60">
            View All Projects →
          </Button>
        </Link>
      </div>
    </section>
  );
}
