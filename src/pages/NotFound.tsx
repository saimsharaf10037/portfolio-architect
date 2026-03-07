import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        {/* Animated compass */}
        <motion.div
          className="mx-auto mb-8 w-32 h-32 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="60" cy="60" r="55" stroke="hsl(var(--border))" strokeWidth="2" />
            <circle cx="60" cy="60" r="50" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
            {/* Cardinal ticks */}
            {[0, 90, 180, 270].map((deg) => (
              <line
                key={deg}
                x1="60"
                y1="8"
                x2="60"
                y2="16"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                transform={`rotate(${deg} 60 60)`}
              />
            ))}
            {/* Minor ticks */}
            {[45, 135, 225, 315].map((deg) => (
              <line
                key={deg}
                x1="60"
                y1="10"
                x2="60"
                y2="14"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="1"
                transform={`rotate(${deg} 60 60)`}
              />
            ))}
            {/* Needle N */}
            <polygon points="60,15 55,60 65,60" fill="hsl(var(--primary))" opacity="0.9" />
            {/* Needle S */}
            <polygon points="60,105 55,60 65,60" fill="hsl(var(--muted-foreground))" opacity="0.5" />
            <circle cx="60" cy="60" r="4" fill="hsl(var(--primary))" />
          </svg>
        </motion.div>

        <h1 className="font-heading text-5xl font-bold text-foreground mb-3">404</h1>
        <p className="font-heading text-xl text-primary mb-2">Bearing Not Found</p>
        <p className="text-muted-foreground text-sm mb-8">
          This coordinate doesn't exist in our charts. The heading you've set leads to uncharted waters.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-full hover:opacity-90 transition-opacity"
        >
          Return to Portfolio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
