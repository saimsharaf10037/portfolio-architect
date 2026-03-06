import { motion } from "framer-motion";

const bannerConfigs: Record<string, { className: string; content: React.ReactNode }> = {
  "eu-gate-rudders": {
    className: "bg-gradient-to-br from-primary/20 via-background to-primary/10",
    content: (
      <>
        {/* Animated propeller */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute right-[15%] top-1/2 -translate-y-1/2 opacity-10"
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            {[0, 72, 144, 216, 288].map((angle) => (
              <ellipse
                key={angle}
                cx="100" cy="40" rx="18" ry="55"
                fill="hsl(193 100% 42%)"
                transform={`rotate(${angle} 100 100)`}
              />
            ))}
            <circle cx="100" cy="100" r="15" fill="hsl(193 100% 42%)" />
          </svg>
        </motion.div>
        {/* Light rays */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 opacity-[0.03]"
            style={{
              left: `${20 + i * 15}%`,
              width: "2px",
              height: "100%",
              background: "linear-gradient(to bottom, hsl(193 100% 42%), transparent)",
              transform: `rotate(${-10 + i * 5}deg)`,
            }}
          />
        ))}
      </>
    ),
  },
  "boi-watertight-integrity": {
    className: "bg-gradient-to-br from-[hsl(0_60%_15%)] via-background to-[hsl(216_53%_12%)]",
    content: (
      <>
        {/* Ship cross-section silhouette */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid slice">
          <path d="M50,250 Q100,260 400,260 Q700,260 750,250 L720,200 Q680,150 600,140 L600,100 L500,100 L500,140 L300,140 L300,100 L200,100 L200,140 Q120,150 80,200 Z" fill="none" stroke="hsl(0 70% 50%)" strokeWidth="2" />
          <rect x="340" y="160" width="120" height="80" fill="none" stroke="hsl(0 70% 50%)" strokeWidth="1" strokeDasharray="4 2" />
        </svg>
        {/* Pulsing red dot */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute left-1/2 top-[60%] -translate-x-1/2 w-4 h-4 rounded-full bg-destructive/60"
        />
      </>
    ),
  },
  "galley-overheating": {
    className: "bg-gradient-to-br from-[hsl(28_80%_20%)] via-background to-[hsl(15_70%_15%)]",
    content: (
      <>
        {/* Heat wave distortion lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [-10, 10, -10], opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
            className="absolute w-full"
            style={{ top: `${20 + i * 8}%` }}
          >
            <svg width="100%" height="20" viewBox="0 0 800 20" preserveAspectRatio="none">
              <path
                d={`M0,10 Q100,${i % 2 === 0 ? 0 : 20} 200,10 Q300,${i % 2 === 0 ? 20 : 0} 400,10 Q500,${i % 2 === 0 ? 0 : 20} 600,10 Q700,${i % 2 === 0 ? 20 : 0} 800,10`}
                fill="none" stroke="hsl(28 88% 67%)" strokeWidth="1"
              />
            </svg>
          </motion.div>
        ))}
      </>
    ),
  },
  "wt-integrity-mabs": {
    className: "bg-gradient-to-br from-primary/15 via-background to-primary/5",
    content: (
      <>
        {/* Sonar/radar ping */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            animate={{ scale: [0.3, 2.5], opacity: [0.3, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: ring * 1 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-primary/30"
          />
        ))}
      </>
    ),
  },
  "slamming-vibration-opv": {
    className: "bg-gradient-to-br from-[hsl(210_60%_15%)] via-background to-primary/10",
    content: (
      <>
        {/* Ocean waves at bottom */}
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 800 120" preserveAspectRatio="none">
          <motion.path
            animate={{ d: [
              "M0,80 Q100,40 200,80 Q300,120 400,80 Q500,40 600,80 Q700,120 800,80 L800,120 L0,120 Z",
              "M0,80 Q100,120 200,80 Q300,40 400,80 Q500,120 600,80 Q700,40 800,80 L800,120 L0,120 Z",
            ]}}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            fill="hsl(193 100% 42%)"
          />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full opacity-5" viewBox="0 0 800 120" preserveAspectRatio="none">
          <motion.path
            animate={{ d: [
              "M0,90 Q150,50 300,90 Q450,130 600,90 Q750,50 800,90 L800,120 L0,120 Z",
              "M0,90 Q150,130 300,90 Q450,50 600,90 Q750,130 800,90 L800,120 L0,120 Z",
            ]}}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            fill="white"
          />
        </svg>
      </>
    ),
  },
  "bio-fouling-tidal-turbines": {
    className: "bg-gradient-to-br from-primary/15 via-background to-[hsl(160_40%_12%)]",
    content: (
      <>
        {/* Organic cell growth */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.8 }}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${30 + i * 15}px`,
              height: `${30 + i * 15}px`,
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </>
    ),
  },
  "rca-oil-tanker": {
    className: "bg-gradient-to-br from-[hsl(20_60%_15%)] via-background to-[hsl(30_40%_12%)]",
    content: (
      <>
        {/* Oil-slick iridescent shimmer */}
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "linear-gradient(135deg, hsl(20 60% 40%), hsl(280 40% 30%), hsl(180 60% 30%), hsl(40 70% 40%), hsl(20 60% 40%))",
            backgroundSize: "300% 300%",
          }}
        />
      </>
    ),
  },
  "fuel-stripping-mabs": {
    className: "bg-gradient-to-br from-[hsl(216_42%_14%)] via-background to-[hsl(216_30%_12%)]",
    content: (
      <>
        {/* Pipeline diagram */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid slice">
          <path d="M50,150 H200 V80 H400 V150 H550 V220 H700" fill="none" stroke="hsl(193 100% 42%)" strokeWidth="3" />
          <circle cx="200" cy="150" r="8" fill="none" stroke="hsl(193 100% 42%)" strokeWidth="2" />
          <circle cx="400" cy="80" r="8" fill="none" stroke="hsl(193 100% 42%)" strokeWidth="2" />
          <circle cx="550" cy="150" r="8" fill="none" stroke="hsl(193 100% 42%)" strokeWidth="2" />
          <rect x="300" y="130" width="40" height="40" fill="none" stroke="hsl(28 88% 67%)" strokeWidth="1.5" />
          <rect x="600" y="200" width="40" height="40" fill="none" stroke="hsl(28 88% 67%)" strokeWidth="1.5" />
        </svg>
      </>
    ),
  },
  "watertight-seal-standardisation": {
    className: "bg-gradient-to-br from-[hsl(230_40%_15%)] via-background to-[hsl(216_30%_12%)]",
    content: (
      <>
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(220 60% 60%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(220 60% 60%) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Dimension annotation lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 800 300">
          <line x1="100" y1="100" x2="700" y2="100" stroke="white" strokeWidth="0.5" />
          <line x1="100" y1="95" x2="100" y2="105" stroke="white" strokeWidth="0.5" />
          <line x1="700" y1="95" x2="700" y2="105" stroke="white" strokeWidth="0.5" />
          <line x1="200" y1="200" x2="600" y2="200" stroke="white" strokeWidth="0.5" />
          <line x1="200" y1="195" x2="200" y2="205" stroke="white" strokeWidth="0.5" />
          <line x1="600" y1="195" x2="600" y2="205" stroke="white" strokeWidth="0.5" />
        </svg>
      </>
    ),
  },
};

const defaultBanner = {
  className: "bg-gradient-to-b from-primary/5 via-background to-background",
  content: (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
      <div className="w-[500px] h-[500px] rounded-full border border-primary/20 animate-sonar" />
    </div>
  ),
};

const ProjectHeroBanner = ({ slug }: { slug: string }) => {
  const config = bannerConfigs[slug] || defaultBanner;

  return (
    <div className={`absolute inset-0 overflow-hidden ${config.className}`}>
      {config.content}
    </div>
  );
};

export default ProjectHeroBanner;
