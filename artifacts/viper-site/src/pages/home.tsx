import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Clock, Globe } from "lucide-react";
import { Link } from "wouter";

const processSteps = [
  {
    num: "01",
    title: "Define Your Vision",
    desc: "Tell us what you want to build, your goals, your audience and the outcomes you're after. We listen first and ask the right questions.",
  },
  {
    num: "02",
    title: "Submit Your Request",
    desc: "We scope the work, agree a clear timeline and lock in deliverables. No surprises — just a clean plan you can hold us to.",
  },
  {
    num: "03",
    title: "Project Delivered",
    desc: "We build fast using the best AI tools, iterate with your feedback and hand over a finished product ready to scale.",
  },
];

const answers = [
  {
    icon: <Zap size={18} />,
    title: "10x Faster Than Traditional Agencies",
    desc: "We use the most advanced AI tools available — so what takes a traditional agency 6 weeks takes us 3–5 days.",
  },
  {
    icon: <Globe size={18} />,
    title: "Every Service Under One Roof",
    desc: "Websites, apps, automation, video and strategy. No handing off to different vendors — we handle everything end-to-end.",
  },
  {
    icon: <Clock size={18} />,
    title: "No Bloated Retainers or Hidden Fees",
    desc: "Transparent project pricing, honest timelines and a clear scope before we start. You always know exactly what you're getting.",
  },
];

export function HomePage() {
  return (
    <div className="bg-background min-h-screen text-foreground dark">
      <Navigation />
      <main>
        <div className="pt-[20px] pb-[20px]">
          <Hero />
        </div>

        <Portfolio />
        <Services />
        <Stats />

        <section className="py-28 border-t border-border/40">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">How It Works</p>
                <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">Our<br />Process!</h2>
                <p className="font-inter text-[15px] text-muted-foreground mt-4 max-w-xs leading-relaxed">Three clear steps from first conversation to finished product — no complexity, no confusion.</p>
              </motion.div>
              <div>
                {processSteps.map((step, i) => (
                  <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-8 py-8 border-b border-border/40 last:border-0">
                    <span className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-green-400 pt-1 min-w-[28px]">{step.num}</span>
                    <div>
                      <h3 className="font-grotesk font-semibold text-[22px] tracking-tight mb-2">{step.title}</h3>
                      <p className="font-inter text-[15px] leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 border-t border-border/40">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Answers</p>
                <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight">Why<br />VIPER?</h2>
                <p className="font-inter text-[15px] text-muted-foreground mt-4 max-w-xs leading-relaxed">Curious what sets us apart from every other agency out there? Here's the honest answer.</p>
                <Link href="/about">
                  <span className="inline-flex items-center gap-2 mt-6 font-inter font-semibold text-[13px] border border-border/60 rounded-full px-6 py-2.5 hover:border-foreground/50 transition-colors cursor-pointer">
                    Learn More About Us <ArrowRight size={13} />
                  </span>
                </Link>
              </motion.div>
              <div className="grid gap-4">
                {answers.map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group flex items-start gap-5 rounded-2xl border border-border/40 bg-card p-6 hover:border-border/70 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-foreground/8 border border-border/50 flex items-center justify-center flex-shrink-0 text-muted-foreground">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-grotesk font-semibold text-[18px] tracking-tight mb-1">{item.title}</h3>
                      <p className="font-inter text-[14px] text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
