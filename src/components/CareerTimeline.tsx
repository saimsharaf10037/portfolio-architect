import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2024",
    title: "MSc Advanced Naval Architecture (Distinction)",
    institution: "University of Strathclyde, UK",
    detail: "Thesis and coursework focus on hydrodynamics, hull form optimisation, and sustainable propulsion. EU-funded GATERs research project at Kelvin Hydrodynamics Lab.",
    isCurrent: true,
  },
  {
    year: "2023",
    title: "Bureau Veritas Internship",
    institution: "Commercial Shipping",
    detail: "3-month internship conducting class surveys and onboard inspections on commercial vessels.",
  },
  {
    year: "2013–2024",
    title: "Naval Officer",
    institution: "Pakistan Navy",
    detail: "Over 10 years serving across frigates, submarines, destroyers, patrol vessels, dredgers, and oil tankers. Decorations: Tamgha-e-Azam, Youm-e-Marka-e-Haq, 10 Years Service Medal.",
  },
  {
    year: "2013",
    title: "BEng Mechanical Engineering (3.47 GPA)",
    institution: "NUST, Pakistan",
    detail: "National University of Sciences and Technology — foundation in thermodynamics, fluid mechanics, and structural analysis.",
  },
];

const CareerTimeline = () => (
  <div className="relative mt-10">
    <h3 className="font-heading text-sm font-semibold text-foreground mb-6">Career Timeline</h3>

    {/* Vertical line */}
    <div className="absolute left-[7px] md:left-[9px] top-12 bottom-0 w-px bg-primary/30" />

    <div className="space-y-8">
      {timelineEvents.map((event, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative pl-8 md:pl-10"
        >
          {/* Dot */}
          <div
            className={`absolute left-0 top-1.5 rounded-full border-2 border-primary ${
              event.isCurrent
                ? "w-4 h-4 md:w-5 md:h-5 bg-primary shadow-[0_0_12px_hsl(193_100%_42%/0.5)]"
                : "w-3.5 h-3.5 md:w-4 md:h-4 bg-background"
            }`}
          />

          <p className="text-[10px] font-heading text-primary uppercase tracking-wider mb-1">
            {event.year}
          </p>
          <h4 className="font-heading text-sm font-semibold text-foreground">{event.title}</h4>
          <p className="text-xs text-primary/70 font-heading mb-1">{event.institution}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{event.detail}</p>

          {/* Naval Officer photo */}
          {event.title === "Naval Officer" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3"
            >
              <img
                src="/images/naval-uniform.png"
                alt="Lt. Saim Sharaf in Pakistan Navy uniform"
                className="w-full max-w-[240px] rounded-lg object-cover"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
              />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

export default CareerTimeline;
