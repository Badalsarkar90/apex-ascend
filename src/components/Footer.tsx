const Footer = () => (
  <footer className="border-t border-border/30 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="font-display text-lg font-bold tracking-tight">
        <span className="gold-gradient-text">MARCUS</span>
        <span className="text-foreground/60 ml-1">COLE</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Marcus Cole. All rights reserved.
      </p>
      <div className="flex gap-6">
        {["Twitter", "LinkedIn", "Instagram", "YouTube"].map((s) => (
          <a key={s} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
