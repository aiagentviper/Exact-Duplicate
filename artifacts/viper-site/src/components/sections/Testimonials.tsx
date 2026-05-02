import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Jordan Miles",
    title: "CEO, LaunchLab",
    quote: "VIPER automated our entire onboarding flow in under a week. What used to take hours now runs on autopilot. Genuinely transformative.",
    tag: "AI Automation",
  },
  {
    id: 2,
    name: "Priya Nair",
    title: "Co-Founder, Stackly",
    quote: "They built our AI-powered website in days. It converts better than anything we've had before. The quality-to-speed ratio is unreal.",
    tag: "AI Website",
  },
  {
    id: 3,
    name: "Derek Owens",
    title: "Head of Marketing, BrandWave",
    quote: "The AI video content drove a 3x increase in engagement in the first two weeks alone. This team knows what they're doing.",
    tag: "AI Video",
  },
];

export function Testimonials() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-body mb-3">What Clients Say</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[0.9] tracking-tight uppercase">
            Trusted By<br />Experts.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border/40 rounded-2xl p-8 flex flex-col justify-between hover:border-border/70 transition-colors"
            >
              <div>
                <span className="inline-block text-xs uppercase tracking-widest text-muted-foreground border border-border/60 rounded-full px-3 py-1 mb-6 font-body">
                  {t.tag}
                </span>
                <p className="text-base leading-relaxed text-foreground/80 mb-8 font-body">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-border/40 pt-6">
                <div className="w-10 h-10 rounded-full bg-foreground/10 border border-border/50 flex items-center justify-center text-xs font-bold text-foreground flex-shrink-0 font-display">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground font-display">{t.name}</h4>
                  <p className="text-xs text-muted-foreground font-body">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
