import { motion } from "framer-motion";

const items = [
  { title: "Sketch Device", image: "/portfolio/sketch-device.jpg" },
  { title: "Headphones", image: "/portfolio/headphones.jpg" },
  { title: "Skincare", image: "/portfolio/skincare.jpg" },
  { title: "Stone Bottle", image: "/portfolio/stone-bottle.jpg" },
  { title: "Citrus", image: "/portfolio/citrus.jpg" },
  { title: "Bath Still Life", image: "/portfolio/bath-still-life.jpg" },
  { title: "Packaging", image: "/portfolio/packaging.jpg" },
  { title: "Bottle Hand", image: "/portfolio/bottle-hand.jpg" },
  { title: "Bag Product", image: "/portfolio/bag-product.jpg" },
];

export function Portfolio() {
  return (
    <section className="border-t border-border/40 w-full">
      <div className="px-6 lg:px-10 xl:px-14 py-4 border-b border-border/40 flex items-center justify-between">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground font-inter flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white" /> Recent Works</div>
        <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-inter">View Collection</div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-border/40 p-[2px]">
        <div className="md:col-span-1 grid gap-[2px]">
          <PortfolioCell item={items[0]} tall />
          <PortfolioCell item={items[3]} />
          <PortfolioCell item={items[6]} />
        </div>
        <div className="md:col-span-1 grid gap-[2px]">
          <PortfolioCell item={items[1]} />
          <PortfolioCell item={items[4]} />
          <PortfolioCell item={items[7]} />
        </div>
        <div className="md:col-span-1 grid gap-[2px]">
          <PortfolioCell item={items[2]} />
          <PortfolioCell item={items[5]} />
          <PortfolioCell item={items[8]} />
        </div>
      </div>
    </section>
  );
}

function PortfolioCell({ item, tall = false }: { item: { title: string; image: string }; tall?: boolean }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative overflow-hidden bg-black" style={{ aspectRatio: tall ? "1 / 1.05" : "1 / 1" }}>
      <img src={item.image} alt={item.title} className="w-full h-full object-cover object-center" />
      <div className="absolute inset-x-2 bottom-2 rounded-full border border-white/45 bg-white/12 text-[10px] text-white/90 py-2 text-center backdrop-blur-[2px] font-inter">View Casestudy ↗</div>
    </motion.div>
  );
}
