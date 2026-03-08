import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const VolunteerSection = () => {
  const bulletVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.08, duration: 0.3 },
    }),
  };

  const subItems = [
    "26 Jan 2025 — Maritime Professionals, CILT Karachi",
    "28 Sep 2025 — Pakistan Naval Officers, PNEC Karachi",
    "29 Sep 2025 — PNEC-NUST Students, Karachi",
    "26 Jan 2026 — PNEC-NUST Students & Faculty",
  ];

  const bullets = [
    {
      main: "Helped organise Pakistan Joint Branch (IMarEST & RINA) Professional Awareness & Registration Sessions for the maritime community in Pakistan:",
      subItems,
    },
    {
      main: "Coordinated with IMarEST members to deliver interactive guidance on professional registration, UK-SPEC competency mapping (CEng/IEng pathways), and evidence building for Chartered Engineer status",
    },
  ];

  const impactChips = [
    "4 Sessions Delivered",
    "Pakistan Navy · NUST · Industry",
    "CEng Pathway Guidance",
  ];

  const tlcBullets = [
    "Providing input on technical areas of current relevance to the global marine and offshore engineering sector",
    "Contributing to IMarEST's view of the technical horizon and supporting the review of the Institute's published technical outputs",
    "Contributing expert opinion to the Technical Plan and its administrative process of production and communication",
    "Supporting Continuing Professional Development (CPD) initiatives across the marine engineering community",
  ];

  const tlcChips = [
    "International · UK-Based Committee",
    "CPD · Technical Policy · SIG Development",
  ];

  return (
    <section id="volunteer" className="py-[120px] md:py-[120px] py-[60px] px-4" style={{ backgroundColor: "hsl(216, 42%, 16%)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-center">GIVING BACK</p>
        <h2 className="section-heading text-center">Advancing the Maritime Profession</h2>
        <p className="text-center text-muted-foreground text-[1.1rem] mb-12 max-w-2xl mx-auto">
          Volunteering with international engineering institutions to grow the next generation of marine professionals.
        </p>

        {/* Card 1 — PJB */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl p-8 md:p-10 mb-6 border-l-4 border-l-primary"
          style={{ backgroundColor: "hsl(216, 53%, 13%)" }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column */}
            <div className="lg:w-[55%]">
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full text-[0.75rem] font-heading font-semibold text-white bg-primary">IMarEST</span>
                <span className="px-3 py-1 rounded-full text-[0.75rem] font-heading font-semibold text-white" style={{ backgroundColor: "hsl(28, 88%, 67%)" }}>RINA</span>
              </div>

              <h3 className="font-heading text-[1.5rem] font-bold text-foreground mt-3">
                Managing Partner — Pakistan Joint Branch (PJB)
              </h3>
              <p className="text-[0.95rem] text-muted-foreground">IMarEST & RINA Joint Branch, Pakistan</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full text-[0.75rem] font-heading border border-primary text-primary">
                2024 – Present
              </span>
              <p className="text-[0.8rem] text-muted-foreground italic mt-1">MIMarEST | AMRINA</p>

              <div className="w-10 h-px bg-primary my-5" />

              <p className="text-[0.85rem] text-primary font-heading tracking-[0.15em] uppercase mb-3">ACTIVITIES</p>

              <ul className="space-y-3">
                {bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={bulletVariants}
                    className="flex gap-2 text-[0.9rem] text-muted-foreground"
                  >
                    <span className="text-primary mt-1 flex-shrink-0">●</span>
                    <div>
                      <span>{b.main}</span>
                      {b.subItems && (
                        <div className="mt-1 ml-2 space-y-0.5">
                          {b.subItems.map((sub, j) => (
                            <p key={j} className="text-[0.9rem]" style={{ color: "hsl(28, 88%, 67%)" }}>
                              ↳ {sub}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* Impact chips */}
              <div className="flex flex-wrap gap-2 mt-6">
                {impactChips.map((chip, i) => (
                  <motion.span
                    key={chip}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={chipVariants}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.75rem] font-heading text-primary border border-primary/30 bg-primary/5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {chip}
                  </motion.span>
                ))}
              </div>

              {/* LinkedIn reference */}
              <div className="mt-5 rounded-lg p-3 px-4 border-l-2 border-l-primary/40 text-[0.85rem]" style={{ backgroundColor: "hsl(216, 42%, 16%)" }}>
                <div className="flex items-center gap-2 mb-1">
                  <Linkedin size={14} className="text-blue-400" />
                  <span className="text-muted-foreground text-[0.75rem]">LinkedIn · Sep 2025</span>
                </div>
                <p className="italic text-muted-foreground">
                  "Grateful to Lt. Saim Sharaf for helping make this event a smooth and impactful experience."
                </p>
                <p className="text-[0.75rem] text-muted-foreground mt-1">— Syed Azeem Uddin Ahmed CEng CMarEng FIMarEST</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    { label: "PJB Session Recap", url: "https://www.linkedin.com/feed/update/urn:li:activity:7427248205643476993/" },
                    { label: "Jan 2025 Session", url: "https://www.linkedin.com/feed/update/urn:li:activity:7383863981012340736/" },
                    { label: "Sep 2025 PNEC Event", url: "https://www.linkedin.com/posts/syed-ahmed-ceng_on-28th-september-2025-i-had-the-privilege-activity-7378715100423176192-swfm" },
                    { label: "PJB Announcement", url: "https://www.linkedin.com/feed/update/urn:li:activity:7376136337302908928/" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[0.7rem] font-heading text-blue-400 border border-blue-400/30 bg-blue-400/5 hover:bg-blue-400/15 transition-colors"
                    >
                      <Linkedin size={10} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — Media */}
            <div className="lg:w-[45%] flex flex-col gap-4">
              <div>
                <img
                  src="/images/pjb-session-group.png"
                  alt="IMarEST Awareness Session — PNEC, Karachi | 28 Sep 2025"
                  className="w-full rounded-[10px]"
                  style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
                />
                <p className="text-[0.75rem] text-muted-foreground italic text-center mt-2">
                  IMarEST Awareness Session — PNEC, Karachi | 28 Sep 2025
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 — TLC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-xl p-8 md:p-10 mb-8 border-l-4 border-l-primary"
          style={{ backgroundColor: "hsl(216, 53%, 13%)" }}
        >
          <div className="max-w-[820px]">
            <span className="px-3 py-1 rounded-full text-[0.75rem] font-heading font-semibold text-white bg-primary">IMarEST</span>

            <h3 className="font-heading text-[1.5rem] font-bold text-foreground mt-3">
              Volunteer — Technical Leadership Committee (TLC)
            </h3>
            <p className="text-[0.95rem] text-muted-foreground">
              Institute of Marine Engineering, Science & Technology (IMarEST), UK
            </p>
            <span className="inline-block mt-2 px-3 py-1 rounded-full text-[0.75rem] font-heading border border-primary text-primary">
              2024 – Present
            </span>

            <div className="w-10 h-px bg-primary my-5" />

            <p className="text-[0.92rem] text-muted-foreground leading-[1.65] max-w-[720px]" style={{ fontFamily: "var(--font-body)" }}>
              Contributing to IMarEST's global Technical Plan by providing input on marine sector priorities, reviewing technical outputs, and supporting CPD initiatives across the engineering community.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {tlcChips.map((chip, i) => (
                <motion.span
                  key={chip}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={chipVariants}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.75rem] font-heading text-primary border border-primary/30 bg-primary/5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {chip}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer banner */}
        <div
          className="w-full rounded-lg h-16 flex items-center justify-center gap-2 text-[0.9rem]"
          style={{ background: "linear-gradient(90deg, hsl(193 100% 42% / 0.15), transparent)" }}
        >
          <span className="text-muted-foreground">Interested in maritime education outreach or IMarEST/RINA collaboration?</span>
          <a href="#contact" className="text-primary underline underline-offset-4 hover:text-accent transition-colors font-heading">
            → Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
