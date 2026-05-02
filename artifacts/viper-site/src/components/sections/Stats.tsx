import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Shipped", desc: "Across 12 countries" },
  { value: "10x", label: "Average Client ROI", desc: "Measured within 90 days" },
  { value: "100%", label: "Built With AI Tools", desc: "Every project, every time" },
];

export function Stats() {
  return (
    <section className="py-24 border-y border-border/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`py-12 px-8 flex flex-col justify-center ${i < 2 ? "md:border-r border-border/40" : ""} ${i > 0 ? "border-t md:border-t-0 border-border/40" : ""}`}
            >
              <div className="font-display text-[clamp(4rem,9vw,7rem)] font-extrabold leading-none tracking-tight mb-3">
                {stat.value}
              </div>
              <div className="text-base font-semibold mb-1 font-body">{stat.label}</div>
              <div className="text-sm text-muted-foreground font-body">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
