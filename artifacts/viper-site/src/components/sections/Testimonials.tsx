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
    <section className="py-28 border-t border-border/40">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">What Clients Say</p>
          <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">Trusted By<br />Experts.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border/40 rounded-[18px] p-8 flex flex-col justify-between hover:border-border/70 transition-colors"
            >
              <div>
                <span className="inline-block font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground border border-border/60 rounded-full px-3 py-1 mb-6">{t.tag}</span>
                <p className="font-inter text-[15px] leading-relaxed text-foreground/80 mb-8">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-3 border-t border-border/40 pt-6">
                <div className="w-9 h-9 rounded-full bg-foreground/10 border border-border/50 flex items-center justify-center font-grotesk text-[12px] font-bold text-foreground flex-shrink-0">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-grotesk font-semibold text-[14px] text-foreground">{t.name}</h4>
                  <p className="font-inter text-[12px] text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
