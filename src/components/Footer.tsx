import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube, Twitter, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-background border-t border-border/10 pt-24 pb-12 px-6 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Column 1: Brand Identity */}
        <div className="space-y-8">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight block">
            <span className="gold-gradient-text">ADAM</span>
            <span className="text-foreground/80 ml-1">COHEN</span>
          </Link>
          <p className="text-muted-foreground font-light leading-relaxed max-w-xs">
            Engineering empires through strategic investment, elite advisory, and 
            technological mastery. Building the future of high-stakes business.
          </p>
          <div className="flex gap-5">
            {[
              { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
              { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
              { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
              { icon: <Youtube className="w-5 h-5" />, label: "YouTube" },
            ].map((social) => (
              <a 
                key={social.label} 
                href="#" 
                className="w-10 h-10 rounded-full border border-border/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Expertise */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-foreground font-bold mb-8">Expertise</h4>
          <ul className="space-y-4">
            {[
              { label: "Our Services", to: "/services" },
              { label: "Portfolio", to: "/portfolio" },
              { label: "Testimonials", to: "/testimonials" },
              { label: "Consulting", to: "/book" },
            ].map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Authority */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-foreground font-bold mb-8">Authority</h4>
          <ul className="space-y-4">
            {[
              { label: "Market Insights", to: "/insights" },
              { label: "Media Hub", to: "/media" },
              { label: "About Adam", to: "/about" },
              { label: "Press Room", to: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Direct Action */}
        <div className="glass-card p-8 border border-primary/20 bg-primary/5 rounded-3xl">
          <h4 className="text-lg font-display font-bold mb-4">Ready to Grow?</h4>
          <p className="text-xs text-muted-foreground mb-8 leading-relaxed font-light">
            Secure your strategy session with Adam to audit your trajectory.
          </p>
          <Link to="/book" className="hero-btn w-full text-center block !py-4 text-sm font-bold shadow-xl">
            Book a Call
          </Link>
          <Link to="/contact" className="text-[10px] tracking-widest uppercase text-muted-foreground hover:text-primary mt-6 block text-center transition-colors font-bold">
            Other Inquiries
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-12 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] tracking-widest uppercase text-muted-foreground font-medium">
        <p>© {new Date().getFullYear()} Adam Cohen Today. All rights reserved.</p>
        <div className="flex gap-10">
          <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link to="#" className="hover:text-primary transition-colors">Cookies</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
