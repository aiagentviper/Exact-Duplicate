import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = [
  { id: 1, title: "Fintech Dashboard", category: "Product UI", image: "/images/portfolio-1.png", aspect: "aspect-[4/3]" },
  { id: 2, title: "Lumina Brand", category: "Brand Identity", image: "/images/portfolio-2.png", aspect: "aspect-[4/3]" },
  { id: 3, title: "Vogue Spread", category: "Editorial", image: "/images/portfolio-3.png", aspect: "aspect-[3/4]" },
  { id: 4, title: "Berlin Expo", category: "Poster Design", image: "/images/portfolio-4.png", aspect: "aspect-[3/4]" },
  { id: 5, title: "Nexus Platform", category: "Web Design", image: "/images/portfolio-5.png", aspect: "aspect-[16/9] md:col-span-2" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 container mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Featured Portfolio <span className="text-muted-foreground font-serif font-normal">✦</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Selected works from recent projects
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group relative overflow-hidden bg-card rounded-xl border border-border/50 ${project.aspect}`}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg" className="rounded-full px-8">
          View All Projects &rarr;
        </Button>
      </div>
    </section>
  );
}
