import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const cells = [
  { title: "Watch Pro E-Commerce", img: "/portfolio/watch-website.jpg", col: "1", row: "1", className: "aspect-[4/5]" },
  { title: "Car Rental Platform", img: "/portfolio/car-rental-site.jpg", col: "2", row: "1 / span 2", className: "aspect-[4/6]" },
  { title: "CryptoTrack Dashboard", img: "/portfolio/crypto-dashboard.jpg", col: "3", row: "1", className: "aspect-[4/5]" },
  { title: "Omega Agency Site", img: "/portfolio/omega-website.jpg", col: "1", row: "2", className: "aspect-[4/5]" },
  { title: "AI Agent Flow", img: "/portfolio/ai-agent-flow.jpg", col: "3", row: "2", className: "aspect-[4/5]" },
  { title: "Make Automation", img: "/portfolio/make-automation.jpg", col: "1", row: "3", className: "aspect-[4/5]" },
  { title: "Email Sequences", img: "/portfolio/email-sequences.jpg", col: "2", row: "3", className: "aspect-square" },
  { title: "Learning App", img: "/portfolio/learning-app.jpg", col: "3", row: "3", className: "aspect-[4/5]" },
];

export function Portfolio() {
  return (
    <section className="w-full bg-black py-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <p className="font-inter text-[11px] uppercase tracking-[0.22em] text-white/50">
            Recent Works
          </p>
          <Link href="/work">
            <span className="flex cursor-pointer items-center gap-1.5 font-inter text-[12px] text-white/50 transition-colors hover:text-white">
              View All <ArrowRight size={12} />
            </span>
          </Link>
        </div>

        <div className="mx-auto w-full max-w-[1100px]">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gridTemplateRows: "repeat(3, minmax(0, 1fr))",
              gap: "4px",
              background: "#000",
            }}
          >
            {cells.map((cell, i) => (
              <motion.div
                key={cell.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="group relative overflow-hidden bg-[#0a0a0a]"
                style={{ gridColumn: cell.col, gridRow: cell.row }}
              >
                <div className={`${cell.className} relative w-full overflow-hidden`}>
                  <img
                    src={cell.img}
                    alt={cell.title}
                    className="h-full w-full object-cover object-center grayscale contrast-[1.2] brightness-[0.82] transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/28" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>

                <div className="absolute inset-x-3 bottom-3 flex justify-center">
                  <span className="inline-flex w-[86%] items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-inter text-[10px] text-white backdrop-blur-md transition-all group-hover:bg-white/15">
                    View Case Study ↗
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-5">
          <Link href="/work">
            <span className="cursor-pointer border-b border-white pb-0.5 font-inter text-[11px] text-white/80">
              All Projects
            </span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-inter text-[11px] text-white/80 backdrop-blur-md">
              Book a Free Call
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
