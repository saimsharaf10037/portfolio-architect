import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Software & Tools",
    skills: ["ANSYS Fluent", "Star CCM+", "AutoCAD", "MaxSurf", "Rhino 3D", "MATLAB", "Python", "Excel", "ShipX"],
  },
  {
    title: "Naval Disciplines",
    skills: ["Hull Integrity", "Hydrodynamics", "Propulsion", "Seakeeping", "Ship Maintenance", "WT Integrity", "NDT Level II"],
  },
  {
    title: "Professional",
    skills: ["Root Cause Analysis", "Board of Investigation", "Feasibility Assessment", "Class Surveys", "Hull Inspections", "Technical Reporting", "Project Management"],
  },
];

const timeline = [
  { year: "2025–26", title: "Bureau Veritas Internship", detail: "Marine Surveyor — Class Surveys & Onboard Inspections", highlight: false },
  { year: "2023–25", title: "Deputy Manager Hull & Structure", detail: "Pakistan Navy — 50+ repair routines, 30+ hull surveys", highlight: false },
  { year: "2022–23", title: "MSc Advanced Naval Architecture", detail: "University of Strathclyde, UK — Distinction", highlight: true },
  { year: "2021–22", title: "Assistant Manager Hull Fabrication", detail: "Pakistan Navy — AGOSTA Class Submarine Construction", highlight: false },
  { year: "2020–21", title: "Marine Engineering Watch Keeping Officer", detail: "170+ warranty claims, SATs at Galati Shipyard Romania", highlight: false },
  { year: "2016–20", title: "BEng Mechanical Engineering", detail: "NUST, Pakistan — 3.47/4.0 GPA", highlight: true },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-14 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-center">SKILLS & EXPERTISE</p>
        <h2 className="section-heading text-center">Technical Depth. Operational Breadth.</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Skills */}
          <div className="space-y-8">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.15 }}
              >
                <h3 className="font-heading text-sm font-semibold text-foreground mb-3">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + si * 0.05 }}
                      className="px-3 py-1.5 text-xs font-heading bg-secondary text-foreground rounded-md border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className={`absolute -left-6 top-1 w-3 h-3 rounded-full border-2 ${
                    i === 0 ? "bg-primary border-primary shadow-[0_0_10px_hsl(193_100%_42%/0.5)]" : "bg-background border-primary/50"
                  }`} />
                  <div className="glass-card p-4">
                    <span className="text-xs text-primary font-heading">{item.year}</span>
                    <h4 className="font-heading text-sm font-semibold text-foreground mt-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                    {item.highlight && (
                      <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-heading bg-accent/20 text-accent rounded">
                        Distinction
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
