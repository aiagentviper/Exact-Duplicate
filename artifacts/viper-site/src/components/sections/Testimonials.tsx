import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    title: "CEO at TechFlow",
    avatar: "/images/avatar-1.png",
    quote: "Clivelle's attention to detail is unmatched. He completely transformed our digital presence and gave us a brand identity that truly stands out in a crowded market."
  },
  {
    id: 2,
    name: "Marcus Wright",
    title: "Design Director, Studio X",
    avatar: "/images/avatar-2.png",
    quote: "Working with Clivelle was seamless. His ability to translate complex ideas into clean, beautiful interfaces is why we keep coming back for more projects."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    title: "Founder, Nova Platform",
    avatar: "/images/avatar-3.png",
    quote: "He doesn't just design screens; he designs experiences. The new app UI increased our user engagement by 40% in the first month alone."
  }
];

export function Testimonials() {
  return (
    <section className="py-32 container mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Trusted By Experts.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border/50 rounded-2xl p-8 flex flex-col justify-between"
          >
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale object-cover" />
              <div>
                <h4 className="font-bold text-foreground">{t.name}</h4>
                <p className="text-sm text-muted-foreground">{t.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
