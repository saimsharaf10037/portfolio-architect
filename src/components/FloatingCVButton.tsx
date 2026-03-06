import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, ChevronUp } from "lucide-react";

const cvOptions = [
  { label: "Naval Architect CV", file: "/cvs/Saim_Sharaf_CV_Naval_Architect.pdf" },
  { label: "Marine Engineer CV", file: "/cvs/Saim_Sharaf_CV_Marine_Engineer.pdf" },
  { label: "Marine Surveyor CV", file: "/cvs/Saim_Sharaf_CV_Marine_Surveyor.pdf" },
];

const FloatingCVButton = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {open && (
            <div className="absolute bottom-full right-0 mb-2 w-56 rounded-lg border border-border bg-card shadow-xl overflow-hidden">
              {cvOptions.map((cv) => (
                <a
                  key={cv.file}
                  href={cv.file}
                  download
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-heading text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {cv.label}
                </a>
              ))}
            </div>
          )}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            <span className="absolute inset-0 rounded-full animate-[cv-pulse_2s_ease-in-out_infinite] border-2 border-primary/50" />
            <FileDown size={16} />
            Download CV
            <ChevronUp size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCVButton;
