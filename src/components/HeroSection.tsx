import { motion } from "framer-motion";
import { ArrowDown, FileDown, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const cvOptions = [
  { label: "Naval Architect CV", file: "/cvs/Saim_Sharaf_CV_Naval_Architect.pdf" },
  { label: "Marine Engineer CV", file: "/cvs/Saim_Sharaf_CV_Marine_Engineer.pdf" },
  { label: "Marine Surveyor CV", file: "/cvs/Saim_Sharaf_CV_Marine_Surveyor.pdf" },
];

const HeroSection = () => {
  const [cvOpen, setCvOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCvOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const titleWords = "Mohammad Saim Sharaf".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grain">
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

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              className={`inline-block mr-3 ${i === titleWords.length - 1 ? "text-primary" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-muted-foreground text-base sm:text-lg mb-10 max-w-2xl mx-auto"
        >
          Pakistan Navy · Bureau Veritas · University of Strathclyde
          <br />
          <span className="text-accent text-sm">Registered CEng & CMarEng (UKSPEC) — Awaiting Final Confirmation · MIMarEST · AMRINA</span>
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
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCvOpen((v) => !v)}
              className="px-6 py-3 border border-foreground/30 text-foreground font-heading font-semibold text-sm rounded-full hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
            >
              <FileDown size={16} />
              Download CV
              <ChevronDown size={14} className={`transition-transform ${cvOpen ? "rotate-180" : ""}`} />
            </button>
            {cvOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-lg border border-border bg-card shadow-xl overflow-hidden z-20">
                {cvOptions.map((cv) => (
                  <a
                    key={cv.file}
                    href={cv.file}
                    download
                    onClick={() => setCvOpen(false)}
                    className="block px-4 py-3 text-sm font-heading text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {cv.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
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
