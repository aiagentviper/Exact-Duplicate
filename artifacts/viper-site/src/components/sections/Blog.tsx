import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "The Future of UI Design in 2025",
    tag: "Design",
    date: "May 12, 2025",
    image: "/images/blog-1.png",
    desc: "Exploring the shift towards hyper-minimalism and AI-driven interfaces."
  },
  {
    id: 2,
    title: "Building a Personal Brand as a Designer",
    tag: "Career",
    date: "Apr 28, 2025",
    image: "/images/blog-2.png",
    desc: "Why your portfolio is only half the battle when securing top-tier clients."
  },
  {
    id: 3,
    title: "Why Typography Makes or Breaks Your Brand",
    tag: "Typography",
    date: "Mar 15, 2025",
    image: "/images/blog-3.png",
    desc: "A deep dive into font selection and its subconscious impact on users."
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-32 container mx-auto px-6 border-t border-border/50">
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Latest Insights.
        </h2>
        <a href="#" className="hidden md:block text-sm font-medium hover:text-primary transition-colors">
          Read All Articles &rarr;
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[16/9] overflow-hidden rounded-xl mb-6 border border-border/50">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground mb-3">
              <span className="text-primary">{post.tag}</span>
              <span>—</span>
              <span>{post.date}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {post.desc}
            </p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center md:hidden">
        <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
          Read All Articles &rarr;
        </a>
      </div>
    </section>
  );
}
