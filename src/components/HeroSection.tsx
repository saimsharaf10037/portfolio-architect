import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sonar wave background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full border border-primary/20 animate-sonar" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/15 animate-sonar-delayed" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/10 animate-sonar-delayed-2" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="section-label mb-4"
        >
          NAVAL ARCHITECT & MARINE ENGINEER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight"
        >
          Mohammad Saim
          <br />
          <span className="text-primary">Sharaf</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-muted-foreground text-base sm:text-lg mb-10 max-w-2xl mx-auto"
        >
          Pakistan Navy · Bureau Veritas · University of Strathclyde
          <br />
          <span className="text-accent text-sm">CEng CMarEng (UKSPEC) · MIMarEST · AMRINA</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#research"
            className="px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-full hover:opacity-90 transition-opacity"
          >
            View Research
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-foreground/30 text-foreground font-heading font-semibold text-sm rounded-full hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
          >
            <FileText size={16} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
