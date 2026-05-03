import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const leftColumn = [
  { title: "Watch Pro E-Commerce", img: "/portfolio/watch-website.jpg", ratio: "aspect-[3/4]" },
  { title: "Omega Agency Site", img: "/portfolio/omega-website.jpg", ratio: "aspect-square" },
  { title: "Make Automation", img: "/portfolio/make-automation.jpg", ratio: "aspect-[3/4]" },
];

const middleColumn = [
  { title: "Car Rental Platform", img: "/portfolio/car-rental-site.jpg", ratio: "aspect-square" },
  { title: "AI Agent Flow", img: "/portfolio/ai-agent-flow.jpg", ratio: "aspect-square" },
  { title: "Email Sequences", img: "/portfolio/email-sequences.jpg", ratio: "aspect-[3/4]" },
];

const rightColumn = [
  { title: "CryptoTrack Dashboard", img: "/portfolio/crypto-dashboard.jpg", ratio: "aspect-[3/4]" },
  { title: "Learning App", img: "/portfolio/learning-app.jpg", ratio: "aspect-square" },
  { title: "Smart Home Site", img: "/portfolio/smart-home-site.jpg", ratio: "aspect-[3/4]" },
];

function GalleryImage({ title, img, ratio }: { title: string; img: string; ratio: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-[#0a0a0a] ${ratio}`}>
      <img
        src={img}
        alt={title}
        className="h-full w-full object-cover object-center grayscale contrast-[1.25] brightness-[0.8]"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-4 flex justify-center">
        <span className="inline-flex w-[90%] items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-inter text-[11px] text-white backdrop-blur-lg">
          View Case Study ↗
        </span>
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section className="w-full bg-black py-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <p className="font-inter text-[11px] uppercase tracking-[0.22em] text-white/50">Recent Works</p>
          <Link href="/work">
            <span className="flex cursor-pointer items-center gap-1.5 font-inter text-[12px] text-white/50 transition-colors hover:text-white">
              View All <ArrowRight size={12} />
            </span>
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-[800px] justify-center gap-4">
          <div className="flex w-1/3 flex-col gap-4">
            {leftColumn.map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
                <GalleryImage {...item} />
              </motion.div>
            ))}
          </div>

          <div className="flex w-1/3 -translate-y-12 flex-col gap-4">
            {middleColumn.map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
                <GalleryImage {...item} />
              </motion.div>
            ))}
          </div>

          <div className="flex w-1/3 flex-col gap-4">
            {rightColumn.map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
                <GalleryImage {...item} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-5">
          <Link href="/work">
            <span className="cursor-pointer border-b border-white pb-0.5 font-inter text-[11px] text-white/70">All Projects</span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-inter text-[11px] text-white/70 backdrop-blur-md">
              Book a Free Call
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
