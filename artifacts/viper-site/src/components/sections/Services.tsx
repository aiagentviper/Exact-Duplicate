import { motion } from "framer-motion";

const services = [
  { num: "01", title: "Brand Identity Design" },
  { num: "02", title: "UI/UX Design" },
  { num: "03", title: "Motion & Animation" },
  { num: "04", title: "Web Design & Dev" },
  { num: "05", title: "Art Direction" },
];

export function Services() {
  return (
    <section id="services" className="py-32 container mx-auto px-6 border-t border-border/50">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Pro Services
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-md leading-relaxed">
            Comprehensive design solutions tailored for ambitious brands ready to make a mark. I handle the entire creative pipeline.
          </p>
          <div className="aspect-[3/4] w-full max-w-sm rounded-2xl overflow-hidden border border-border/50">
            <img 
              src="/images/services.png" 
              alt="Workspace" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-center justify-between py-8 border-b border-border/50 cursor-pointer hover:border-primary transition-colors"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">{service.num}</span>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
              </div>
              <span className="text-muted-foreground group-hover:text-primary transition-colors transform group-hover:translate-x-2 duration-300">&rarr;</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
