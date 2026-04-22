import { motion } from "framer-motion";
import { ArrowDown, FileDown, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";

const cvOptions = [
  { label: "Naval Architect CV", file: "/cvs/Saim_Sharaf_CV_Naval_Architect.pdf" },
  { label: "Marine Engineer CV", file: "/cvs/Saim_Sharaf_CV_Marine_Engineer.pdf" },
  { label: "Marine Surveyor CV", file: "/cvs/Saim_Sharaf_CV_Marine_Surveyor.pdf" },
  { label: "Project Engineer CV", file: "/cvs/Saim_Sharaf_CV_Project_Engineer.pdf" },
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
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--primary))"
      />

      {/* Spline scene — absolute overlay, shifted right so the boat clears the text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "transparent", border: "none" }}
      >
        {/* @ts-expect-error - spline-viewer is a custom element */}
        <spline-viewer
          url="https://prod.spline.design/PVMSRt-r9ltmBfGi/scene.splinecode"
          style={{ width: "100%", height: "100%", background: "transparent", border: "none" }}
        />
      </motion.div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {/* LEFT — Name block */}
        <div className="flex-1 text-left max-w-2xl hero-text-readable -translate-y-[10px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-label mb-4"
          >
            NAVAL ARCHITECT & MARINE ENGINEER
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10"
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
                <div className="absolute left-0 mt-2 w-56 rounded-lg border border-border bg-card shadow-xl overflow-hidden z-20">
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
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors inline-block">
              <ArrowDown size={20} className="animate-bounce" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Credentials block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex-1 md:text-right max-w-md md:max-w-sm lg:max-w-md md:ml-auto hero-text-readable -translate-y-10"
        >
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            Pakistan Navy · Bureau Veritas · University of Strathclyde
          </p>
          <p className="text-accent text-xs sm:text-sm mt-2">
            Chartered Engineer (CEng) · Chartered Marine Engineer (CMarEng) · MIMarEST · AMRINA
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
