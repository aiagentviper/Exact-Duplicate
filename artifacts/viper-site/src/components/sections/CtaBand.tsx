import { motion } from "framer-motion";
import { Link } from "wouter";

const gridItems = [
  { src: "/portfolio/watch-website.jpg", span: "row-span-1 col-span-1" },
  { src: "/portfolio/car-rental-site.jpg", span: "row-span-1 col-span-1" },
  { src: "/portfolio/crypto-dashboard.jpg", span: "row-span-1 col-span-1" },
  { src: "/portfolio/omega-website.jpg", span: "row-span-1 col-span-1" },
  { src: "/portfolio/ai-agent-flow.jpg", span: "row-span-1 col-span-1" },
  { src: "/portfolio/make-automation.jpg", span: "row-span-1 col-span-1" },
  { src: "/portfolio/email-sequences.jpg", span: "row-span-1 col-span-1" },
  { src: "/portfolio/learning-app.jpg", span: "row-span-1 col-span-1" },
  { src: "/portfolio/smart-home-site.jpg", span: "row-span-1 col-span-1" },
];

export function CtaBand() {
  return (
    <section className="relative bg-black overflow-hidden py-8 lg:py-12">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center px-4 sm:px-6">
        <div className="mb-5 self-start pl-1 text-[11px] font-inter uppercase tracking-[0.22em] text-white/60">Recent Works</div>

        <div className="grid w-full max-w-[600px] grid-cols-2 gap-0.5 sm:grid-cols-3 sm:gap-[4px]">
          <div className="relative aspect-[3/3.4] overflow-hidden bg-white/5 sm:aspect-square">
            <img src={gridItems[0].src} alt="Watch website" className="h-full w-full object-cover grayscale contrast-125 brightness-90" />
            <div className="absolute inset-0 bg-black/18" />
            <ButtonPill />
          </div>

          <div className="relative aspect-[3/3.4] overflow-hidden bg-white/5 sm:row-span-2 sm:aspect-auto sm:min-h-[318px]">
            <img src={gridItems[1].src} alt="Car rental site" className="h-full w-full object-cover grayscale contrast-125 brightness-90" />
            <div className="absolute inset-0 bg-black/18" />
            <ButtonPill />
          </div>

          <div className="relative aspect-[3/3.4] overflow-hidden bg-white/5 sm:aspect-square">
            <img src={gridItems[2].src} alt="Crypto dashboard" className="h-full w-full object-cover grayscale contrast-125 brightness-90" />
            <div className="absolute inset-0 bg-black/18" />
            <ButtonPill />
          </div>

          <div className="relative aspect-[3/3.4] overflow-hidden bg-white/5 sm:aspect-square">
            <img src={gridItems[3].src} alt="Omega website" className="h-full w-full object-cover grayscale contrast-125 brightness-90" />
            <div className="absolute inset-0 bg-black/18" />
            <ButtonPill />
          </div>

          <div className="relative aspect-[3/3.4] overflow-hidden bg-white/5 sm:aspect-square">
            <img src={gridItems[4].src} alt="AI agent flow" className="h-full w-full object-cover grayscale contrast-125 brightness-90" />
            <div className="absolute inset-0 bg-black/18" />
            <ButtonPill />
          </div>

          <div className="relative aspect-[3/3.4] overflow-hidden bg-white/5 sm:aspect-square">
            <img src={gridItems[5].src} alt="Make automation" className="h-full w-full object-cover grayscale contrast-125 brightness-90" />
            <div className="absolute inset-0 bg-black/18" />
            <ButtonPill />
          </div>

          <div className="relative aspect-[3/3.4] overflow-hidden bg-white/5 sm:aspect-square">
            <img src={gridItems[6].src} alt="Email sequences" className="h-full w-full object-cover grayscale contrast-125 brightness-90" />
            <div className="absolute inset-0 bg-black/18" />
            <ButtonPill />
          </div>

          <div className="relative aspect-[3/3.4] overflow-hidden bg-white/5 sm:aspect-square">
            <img src={gridItems[7].src} alt="Learning app" className="h-full w-full object-cover grayscale contrast-125 brightness-90" />
            <div className="absolute inset-0 bg-black/18" />
            <ButtonPill />
          </div>

          <div className="relative aspect-[3/3.4] overflow-hidden bg-white/5 sm:aspect-square">
            <img src={gridItems[8].src} alt="Smart home site" className="h-full w-full object-cover grayscale contrast-125 brightness-90" />
            <div className="absolute inset-0 bg-black/18" />
            <ButtonPill />
          </div>
        </div>

        <div className="mt-7 flex items-center gap-4 text-[10px] font-inter sm:text-[11px]">
          <Link href="/work">
            <span className="cursor-pointer border-b border-white/70 pb-0.5 text-white">All Projects</span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer rounded-full border border-white/18 bg-white/5 px-3 py-1.5 text-white/85 backdrop-blur-md">Book a Free Call</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ButtonPill() {
  return (
    <div className="absolute inset-x-2 bottom-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-center text-[9px] font-inter text-white backdrop-blur-md sm:text-[10px]">
      View Case Study ↗
    </div>
  );
}
