import { Link } from "wouter";
import { Lightbulb, ListChecks, Rocket } from "lucide-react";
import processHero from "@assets/Screenshot_2026-05-03_110817_1777804010848.png";

const steps = [
  {
    num: "01",
    icon: Lightbulb,
    title: "Define Your Vision",
    text: "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.",
  },
  {
    num: "02",
    icon: ListChecks,
    title: "Submit Your Request",
    text: "Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Project Delivered",
    text: "As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2–3 days. With a keen eye for detail and a passion for quality, I bring your vision to life — on time and beyond expectations.",
  },
];

function ProcessCard({ num, title, text, icon: Icon }: { num: string; title: string; text: string; icon: any }) {
  return (
    <div className="relative rounded-[22px] border border-white/10 bg-[#0b0b0b] p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
          <Icon size={16} />
        </div>
        <span className="font-inter text-[12px] font-medium text-white/40">{num}</span>
      </div>
      <h3 className="mb-3 font-grotesk text-[20px] font-semibold tracking-tight text-white">{title}</h3>
      <p className="font-inter text-[13px] leading-relaxed text-white/55">{text}</p>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section className="w-full border-t border-border/40 bg-black py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">DESIGN PROCESS</p>
            <h2 className="font-grotesk text-[52px] font-semibold leading-[1.0] tracking-tight text-white">Process</h2>
            <p className="mt-4 max-w-[360px] font-inter text-[14px] leading-relaxed text-white/55">Crafting bold visuals that inspire and elevate brands with thoughtful process.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 font-inter text-[13px] font-semibold text-black transition-colors hover:bg-white/90">Book a Free Call</span></Link>
              <Link href="/work"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-inter text-[13px] font-semibold text-white/70 transition-colors hover:border-white/50 hover:text-white">See Projects</span></Link>
            </div>
            <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
              <img src={processHero} alt="Process landscape" className="aspect-[16/9] w-full object-cover object-center grayscale contrast-[1.08] brightness-[0.86]" />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {steps.map((step) => (
              <ProcessCard key={step.num} num={step.num} title={step.title} text={step.text} icon={step.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
