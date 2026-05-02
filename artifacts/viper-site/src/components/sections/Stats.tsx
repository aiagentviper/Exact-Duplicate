import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/50">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-12 md:py-0"
          >
            <div className="text-6xl md:text-7xl font-black tracking-tighter mb-4">20+</div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground">Years of Experience</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center justify-center py-12 md:py-0"
          >
            <div className="text-6xl md:text-7xl font-black tracking-tighter mb-4">95+</div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground">Projects Completed</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center py-12 md:py-0"
          >
            <div className="text-6xl md:text-7xl font-black tracking-tighter mb-4">200%</div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground">Client Satisfaction</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
