import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { ChevronDown } from "lucide-react";

interface NavLink {
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Expertise",
    submenu: [
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/portfolio" },
      { label: "Testimonials", href: "/testimonials" },
    ]
  },
  {
    label: "Authority",
    submenu: [
      { label: "Insights", href: "/insights" },
      { label: "Media Hub", href: "/media" },
    ]
  },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/30 shadow-lg"
            : "bg-background/40 backdrop-blur-md border-b border-border/10"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <Link to="/" className="font-display text-xl font-bold tracking-tight">
            <span className="gold-gradient-text">ADAM</span>
            <span className="text-foreground/60 ml-1">COHEN</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative py-2"
                onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href ? (
                  <Link
                    to={link.href}
                    className={`text-sm tracking-wide transition-colors duration-300 ${location.pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                      }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button className={`flex items-center gap-1.5 text-sm tracking-wide transition-colors duration-300 ${activeDropdown === link.label ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}>
                    {link.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                )}

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {link.submenu && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 w-56 pt-4 pointer-events-auto"
                    >
                      <div className="p-2 rounded-2xl glass-card border border-primary/10 bg-background/95 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-3xl overflow-hidden">
                        <div className="flex flex-col gap-1">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              className={`px-4 py-3 rounded-xl text-sm transition-all duration-300 flex items-center justify-between group/item ${location.pathname === sub.href
                                  ? "bg-primary/10 text-primary"
                                  : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                                }`}
                            >
                              <span>{sub.label}</span>
                              <motion.span
                                initial={{ x: -5, opacity: 0 }}
                                whileHover={{ x: 0, opacity: 1 }}
                                className="text-primary"
                              >
                                →
                              </motion.span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/book" className="hero-btn text-xs py-3 px-6">
              Book a Call
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 p-2"
            >
              <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
          <div
            className="h-full gold-gradient-bg transition-[width] duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-8 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-8 pb-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.href ? (
                    <Link
                      to={link.href}
                      className={`text-3xl font-display font-semibold transition-colors ${location.pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{link.label}</p>
                      <div className="flex flex-col gap-4 pl-4 border-l border-primary/20">
                        {link.submenu?.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className={`text-2xl font-display font-semibold transition-colors ${location.pathname === sub.href ? "text-primary" : "text-foreground hover:text-primary"
                              }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="pt-8 mt-auto border-t border-primary/10">
                <Link to="/book" className="hero-btn w-full text-center block py-5 text-lg">
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
