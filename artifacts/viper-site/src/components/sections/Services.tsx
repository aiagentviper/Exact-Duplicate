import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const services = [
  { num: "01", title: "AI Automation" },
  { num: "02", title: "AI Website Design & Dev" },
  { num: "03", title: "AI App Development" },
  { num: "04", title: "Vibe Coding" },
  { num: "05", title: "AI Video Production" },
  { num: "06", title: "AI Strategy & Consulting" },
];

export function Services() {
  return (
    <section className="py-32 container mx-auto px-6 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 grid lg:grid-cols-2 gap-8 items-end"
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
            Full-Spectrum<br />AI Solutions
          </h2>
        </div>
        <div>
          <p className="text-lg text-muted-foreground max-w-md">
            For brands, startups & founders ready to operate at machine speed.
          </p>
        </div>
      </motion.div>

      <div className="mb-12">
        {services.map((service, i) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex items-center justify-between py-7 border-b border-border/50 cursor-pointer hover:border-foreground/30 transition-colors"
          >
            <div className="flex items-baseline gap-6">
              <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground/60 transition-colors">{service.num}</span>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
            </div>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors group-hover:translate-x-1 transform duration-300">&rarr;</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="/services">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-foreground/20 hover:border-foreground/60">
            Explore All Services →
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
