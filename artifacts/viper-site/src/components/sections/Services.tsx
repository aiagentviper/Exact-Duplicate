import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const services = [
  { num: "01", title: "AI Automation", desc: "End-to-end workflow automation that saves your team hundreds of hours." },
  { num: "02", title: "AI Website Design & Dev", desc: "Conversion-optimised, AI-built websites that work 24/7 for your brand." },
  { num: "03", title: "AI App Development", desc: "Custom AI-powered apps from MVP to production-ready in record time." },
  { num: "04", title: "Vibe Coding", desc: "Ship polished, functional interfaces fast with AI-assisted coding." },
  { num: "05", title: "AI Video Production", desc: "Cinematic AI-generated videos for ads, content & brand storytelling." },
  { num: "06", title: "AI Strategy & Consulting", desc: "A clear AI roadmap tailored to your business goals and growth stage." },
];

export function Services() {
  return (
    <section className="py-28 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
              <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">What We Do</p>
              <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">
                Pro<br />Services!
              </h2>
            </motion.div>

            <div>
              {services.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group flex items-start gap-5 py-5 border-b border-border/40 cursor-pointer hover:border-foreground/30 transition-colors"
                >
                  <span className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 pt-1.5 min-w-[28px]">{s.num}</span>
                  <div className="flex-1">
                    <h3 className="font-grotesk font-medium text-[20px] tracking-tight mb-1 group-hover:text-foreground transition-colors">{s.title}</h3>
                    <p className="font-inter text-[15px] leading-relaxed text-muted-foreground max-w-sm">{s.desc}</p>
                  </div>
                  <ArrowRight size={15} className="mt-1.5 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-8">
              <Link href="/services">
                <span className="inline-flex items-center gap-2 font-inter font-semibold text-[13px] text-foreground border border-border/60 rounded-full px-6 py-2.5 hover:border-foreground/50 transition-colors cursor-pointer">
                  Explore All Services <ArrowRight size={13} />
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="sticky top-28 self-start">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-card border border-border/40">
              <img src="/portfolio/watch-website.jpg" alt="AI Services" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/80 backdrop-blur-md rounded-xl p-5 border border-border/50">
                  <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Result</p>
                  <p className="font-grotesk font-bold text-[36px] leading-none">+340%</p>
                  <p className="font-inter text-[15px] text-muted-foreground mt-1">Revenue lift in 60 days</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
