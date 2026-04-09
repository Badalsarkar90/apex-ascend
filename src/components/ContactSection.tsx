import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Let's Create{" "}
            <span className="gold-gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Ready to take the next step? Whether it's a partnership, investment, or mentorship —
            I'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 md:p-12 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-muted-foreground mb-2 font-medium">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-secondary/50 border border-border/50 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2 font-medium">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-secondary/50 border border-border/50 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2 font-medium">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full bg-secondary/50 border border-border/50 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none"
              placeholder="Tell me about your vision..."
            />
          </div>
          <button type="submit" className="hero-btn w-full md:w-auto">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
