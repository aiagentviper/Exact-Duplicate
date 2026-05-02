import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    initials: "JM",
    name: "Jordan Miles",
    title: "CEO at LaunchLab",
    quote: "VIPER automated our entire onboarding flow in under a week. What used to take hours now runs on autopilot.",
  },
  {
    id: 2,
    initials: "PN",
    name: "Priya Nair",
    title: "Co-Founder, Stackly",
    quote: "They built our AI-powered website in days. It converts better than anything we've had before.",
  },
  {
    id: 3,
    initials: "DO",
    name: "Derek Owens",
    title: "Head of Marketing, BrandWave",
    quote: "The AI video content drove a 3x increase in engagement in the first two weeks alone.",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
          Trusted By Founders & Brands.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-card border border-border/50 rounded-2xl p-8 flex flex-col justify-between"
          >
            <p className="text-base leading-relaxed text-muted-foreground mb-8">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-foreground/10 border border-border/50 flex items-center justify-center text-sm font-bold text-foreground flex-shrink-0">
                {t.initials}
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">{t.name}</h4>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
