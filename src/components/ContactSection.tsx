import { motion } from "framer-motion";
import { Mail, Linkedin, FileDown } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Sonar rings background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full border border-primary/10 animate-sonar" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/5 animate-sonar-delayed" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="section-label">GET IN TOUCH</p>
        <h2 className="section-heading">Open to Opportunities</h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
          Available for naval architecture roles, marine engineering consultancy, and research collaborations globally.
          Currently based in the Netherlands with full EU working rights.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
          <motion.a
            href="mailto:saim.sharaf@example.com"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4 flex items-center gap-3 hover:border-primary/50 transition-colors"
          >
            <Mail className="text-primary flex-shrink-0" size={20} />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm text-foreground font-heading">saim.sharaf@example.com</p>
            </div>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/saimsharaf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-4 flex items-center gap-3 hover:border-primary/50 transition-colors"
          >
            <Linkedin className="text-primary flex-shrink-0" size={20} />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm text-foreground font-heading">linkedin.com/in/saimsharaf</p>
            </div>
          </motion.a>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-full hover:opacity-90 transition-opacity"
        >
          <FileDown size={18} />
          Download Full CV
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
