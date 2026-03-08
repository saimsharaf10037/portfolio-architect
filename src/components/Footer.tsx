import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="font-heading">Mohammad Saim Sharaf — Naval Architect & Marine Engineer</p>
          <nav className="flex items-center gap-4 font-heading">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#research" className="hover:text-primary transition-colors">Research</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <a
              href="https://www.linkedin.com/in/saim-sharaf/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={14} />
            </a>
          </nav>
          <p>© 2026 · Built with precision</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
