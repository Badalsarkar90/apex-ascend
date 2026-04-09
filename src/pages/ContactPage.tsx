import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";

const ContactPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-page-reveal", { opacity: 0, y: 60, filter: "blur(6px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.12, ease: "power3.out" });
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <PageTransition>
      <div ref={ref} className="pt-32 section-padding min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <p className="contact-page-reveal text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Contact</p>
              <h1 className="contact-page-reveal text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
                Let's Build <span className="gold-gradient-text">Together</span>
              </h1>
              <p className="contact-page-reveal text-muted-foreground leading-relaxed mb-12">
                Whether you're looking for a strategic partner, investor, or mentor — I'm always interested in connecting with ambitious builders.
              </p>

              <div className="space-y-8">
                {[
                  { label: "Email", value: "hello@marcuscole.com", icon: "✉️" },
                  { label: "Location", value: "Los Angeles, CA · Dubai · London", icon: "📍" },
                  { label: "Availability", value: "Open for Q2 2026 partnerships", icon: "📅" },
                ].map((item) => (
                  <div key={item.label} className="contact-page-reveal flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="contact-page-reveal glass-card p-8 md:p-10 space-y-6">
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
              <div>
                <label className="block text-sm text-muted-foreground mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-secondary/50 border border-border/50 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Partnership inquiry"
                />
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
              <MagneticButton type="submit" className="hero-btn w-full">
                Send Message
              </MagneticButton>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
