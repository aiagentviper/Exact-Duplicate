import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jordan Miles",
    title: "CEO, LaunchLab",
    quote: "VIPER automated our entire onboarding flow in under a week. What used to take hours now runs on autopilot. Genuinely transformative.",
    tag: "AI Automation",
    stars: 5,
  },
  {
    id: 2,
    name: "Priya Nair",
    title: "Co-Founder, Stackly",
    quote: "They built our AI-powered website in days. It converts better than anything we've had before. The quality-to-speed ratio is unreal.",
    tag: "AI Website",
    stars: 5,
  },
  {
    id: 3,
    name: "Derek Owens",
    title: "Head of Marketing, BrandWave",
    quote: "The AI video content drove a 3x increase in engagement in the first two weeks alone. This team knows what they're doing.",
    tag: "AI Video",
    stars: 5,
  },
  {
    id: 4,
    name: "Simone Blake",
    title: "Founder, PulseKit",
    quote: "We had an idea on Monday. VIPER shipped a working AI-powered MVP by Thursday. Absolutely unmatched speed and quality.",
    tag: "AI App",
    stars: 5,
  },
  {
    id: 5,
    name: "Kwame Foster",
    title: "CEO, AutoStack",
    quote: "The automation workflows they built save us over 30 hours a week. It paid for itself in the first two weeks.",
    tag: "AI Automation",
    stars: 5,
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="w-[340px] flex-shrink-0 bg-card border border-border/40 rounded-[18px] p-8 flex flex-col justify-between hover:border-border/70 transition-colors">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-0.5">
            {Array.from({ length: t.stars }).map((_, j) => (
              <span key={j} className="text-yellow-400 text-[13px]">★</span>
            ))}
          </div>
          <span className="font-inter font-semibold text-[11px] uppercase tracking-[0.15em] text-muted-foreground border border-border/50 rounded-full px-3 py-1">{t.tag}</span>
        </div>
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
    </div>
  );
}

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-28 border-t border-border/40 overflow-hidden">
      <div className="container mx-auto px-6 mb-14">
        <div className="flex items-end justify-between">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Client Reviews</p>
            <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">Client Reviews</h2>
            <p className="font-inter text-[15px] text-muted-foreground mt-4 max-w-md">Real feedback from clients who trusted my design expertise to elevate their brands successfully.</p>
          </motion.div>
          <Link href="/contact">
            <span className="font-inter font-semibold text-[13px] border border-border/60 rounded-full px-5 py-2.5 hover:border-foreground/50 transition-colors cursor-pointer flex items-center gap-2">
              Book a Free Call <ArrowRight size={13} />
            </span>
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(0 0% 4%), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(0 0% 4%), transparent)" }} />

        <div className="flex gap-5 w-max" style={{ animation: "marquee 40s linear infinite" }}>
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-3 border border-border/40 rounded-2xl overflow-hidden">
          {[
            { val: "180+", label: "design projects completed." },
            { val: "96%", label: "Client satisfaction rate." },
            { val: "15+", label: "Years of experience." },
          ].map((s, i) => (
            <motion.div
              key={s.val}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`py-10 px-8 bg-card text-center ${i < 2 ? "border-r border-border/40" : ""}`}
            >
              <div className="font-grotesk font-bold text-[42px] leading-none tracking-tight mb-2">{s.val}</div>
              <div className="font-inter text-[13px] text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
