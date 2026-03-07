import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("splash_shown");
  });

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("splash_shown", "1");
    }, 1800);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <svg
            viewBox="0 0 120 60"
            className="w-40 sm:w-52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* M */}
            <motion.path
              d="M10 50 L10 10 L25 35 L40 10 L40 50"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            {/* S */}
            <motion.path
              d="M55 18 C55 12, 75 12, 75 20 C75 28, 55 28, 55 38 C55 48, 75 48, 75 40"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            />
            {/* S */}
            <motion.path
              d="M90 18 C90 12, 110 12, 110 20 C110 28, 90 28, 90 38 C90 48, 110 48, 110 40"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
