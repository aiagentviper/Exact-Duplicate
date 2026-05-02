import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // TODO: wire up actual submission
  }

  return (
    <section id="contact" className="py-32 container mx-auto px-6 border-t border-border/50">
      <div className="grid lg:grid-cols-2 gap-16">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Contact Me.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-md">
            Have a project in mind? Let's build something extraordinary together.
          </p>
          
          <div className="space-y-6 text-lg">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Email</div>
              <a href="mailto:hello@clivelle.com" className="font-medium hover:text-primary transition-colors">hello@clivelle.com</a>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Location</div>
              <div className="font-medium">New York, NY</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Status</div>
              <div className="font-medium text-green-500">Available for freelance</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card border border-border/50 p-8 rounded-2xl"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" className="bg-background/50 border-border/50 rounded-xl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" className="bg-background/50 border-border/50 rounded-xl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell me about your project..." 
                        className="min-h-[150px] bg-background/50 border-border/50 rounded-xl resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full rounded-xl">
                Send Message &rarr;
              </Button>
            </form>
          </Form>
        </motion.div>

      </div>
    </section>
  );
}
