import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <PageTransition>
      <div className="bg-background min-h-screen pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent pointer-events-none" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm tracking-[0.4em] uppercase mb-6 font-medium"
            >
              Get in Touch
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-display font-bold leading-tight"
            >
              Let's <span className="gold-gradient-text">Work Together.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-muted-foreground mt-8 max-w-2xl mx-auto font-light"
            >
              Ready to engineer your next breakthrough? Reach out to discuss 
              ventures, consulting, or strategic partnerships.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            {/* Form Column (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-10 md:p-14 space-y-8 bg-background/40 border border-border/10 shadow-2xl relative">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs tracking-wider text-muted-foreground/60 uppercase font-bold">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-secondary/20 border border-border/10 rounded-2xl px-6 py-5 text-foreground placeholder-muted-foreground/30 focus:outline-none focus:border-primary/50 transition-all duration-300"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-wider text-muted-foreground/60 uppercase font-bold">Business Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-secondary/20 border border-border/10 rounded-2xl px-6 py-5 text-foreground placeholder-muted-foreground/30 focus:outline-none focus:border-primary/50 transition-all duration-300"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-wider text-muted-foreground/60 uppercase font-bold">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-secondary/20 border border-border/10 rounded-2xl px-6 py-5 text-foreground placeholder-muted-foreground/30 focus:outline-none focus:border-primary/50 transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-wider text-muted-foreground/60 uppercase font-bold">Your Vision</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-secondary/20 border border-border/10 rounded-2xl px-6 py-5 text-foreground placeholder-muted-foreground/30 focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or goal..."
                  />
                </div>

                <div className="pt-4">
                  <MagneticButton 
                    type="submit" 
                    className={`hero-btn w-full !py-6 text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Submit Inquiry"}
                  </MagneticButton>
                </div>
              </form>
            </motion.div>

            {/* Info Column (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-16"
            >
              {/* Direct Info */}
              <div className="grid gap-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground font-bold mb-2">Direct Mail</p>
                    <p className="text-2xl font-display font-semibold hover:text-primary transition-colors cursor-pointer">hello@adamcohentoday.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground font-bold mb-2">Contact Number</p>
                    <p className="text-2xl font-display font-semibold hover:text-primary transition-colors cursor-pointer">+1 (212) 555-0198</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground font-bold mb-2">Global Presence</p>
                    <p className="text-2xl font-display font-semibold">Los Angeles · London · Dubai</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-bold mb-8">Follow the Journey</p>
                <div className="flex items-center gap-6">
                  {[
                    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" },
                    { icon: <Instagram className="w-6 h-6" />, label: "Instagram" },
                    { icon: <Youtube className="w-6 h-6" />, label: "YouTube" }
                  ].map((social, i) => (
                    <motion.a
                      key={social.label}
                      href="#"
                      whileHover={{ y: -5 }}
                      className="w-14 h-14 rounded-full border border-border/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Directly Book CTA */}
              <div className="glass-card p-10 border-primary/20 bg-primary/5 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-4">Prefer to book directly?</h3>
                  <p className="text-muted-foreground font-light mb-8 max-w-sm">
                    Skip the form and schedule a 1:1 strategy session on my calendar.
                  </p>
                  <MagneticButton as="a" href="/book" className="hero-btn-outline !py-4 !px-8 text-sm">
                    Book a Call
                  </MagneticButton>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full group-hover:scale-110 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
