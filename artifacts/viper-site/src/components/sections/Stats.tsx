import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "10x", label: "Average Client ROI" },
  { value: "100%", label: "Built With AI Tools" },
  { value: "24hr", label: "Average MVP Turnaround" },
];

export function Stats() {
  return (
    <section className="py-24 bg-card/20 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/50">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-12 px-6 text-center"
            >
              <div className="text-5xl md:text-6xl font-black tracking-tighter mb-3">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
