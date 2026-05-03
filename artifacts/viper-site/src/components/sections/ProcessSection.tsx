import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Lightbulb, ListChecks, Rocket } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import processPhoto from "@assets/Screenshot_2026-05-03_110817_1777804010848.png";

gsap.registerPlugin(ScrollTrigger);

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

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean);
    const CARD_COUNT = cards.length;

    gsap.set(cards, { opacity: 0.18, y: 36 });
    gsap.set(cards[0], { opacity: 1, y: 0 });

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${CARD_COUNT * window.innerHeight}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      onUpdate(self) {
        const rawIndex = self.progress * CARD_COUNT;
        cards.forEach((card, i) => {
          const active = i <= Math.floor(rawIndex) || (i === 0 && rawIndex < 1);
          gsap.to(card, {
            opacity: active ? 1 : 0.18,
            y: active ? 0 : 36,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full border-t border-border/40 bg-[#0a0a0a] overflow-hidden"
      style={{ height: "100vh" }}
    >
      <div className="flex h-full w-full">
        <div className="w-[45%] shrink-0 overflow-hidden">
          <img
            src={processPhoto}
            alt="Design process"
            className="h-full w-full object-cover object-center block grayscale contrast-[1.12] brightness-[0.82]"
          />
        </div>

        <div className="flex w-[55%] flex-col justify-center gap-6 bg-[#0a0a0a] px-10 py-20">
          <div>
            <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Design process
            </p>
            <h2 className="font-grotesk text-[clamp(2.6rem,4.5vw,4rem)] font-medium leading-[0.95] tracking-tight text-white">
              Process
            </h2>
            <p className="mt-4 max-w-[360px] font-inter text-[14px] leading-relaxed text-white/55">
              Crafting bold visuals that inspire and elevate brands with thoughtful process.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact">
                <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 font-inter text-[13px] font-semibold text-black transition-colors hover:bg-white/90">
                  Book a Free Call
                </span>
              </Link>
              <Link href="/work">
                <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-inter text-[13px] font-semibold text-white/70 transition-colors hover:border-white/50 hover:text-white">
                  See Projects
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
                className="relative rounded-[22px] border border-white/10 bg-[#0b0b0b] p-6"
                style={{ opacity: i === 0 ? 1 : 0.18, transform: i === 0 ? "translateY(0)" : "translateY(36px)" }}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
                    <step.icon size={16} />
                  </div>
                  <span className="font-inter text-[12px] font-medium text-white/40">{step.num}</span>
                </div>
                <h3 className="mb-3 font-grotesk text-[20px] font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="font-inter text-[13px] leading-relaxed text-white/55">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
