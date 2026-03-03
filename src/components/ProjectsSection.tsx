import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Project = {
  title: string;
  tags: string[];
  institution: string;
  summary: string;
  tools?: string;
};

const projects: Project[] = [
  {
    title: "EU Gate Rudders (GATERs) Project",
    tags: ["Academic"],
    institution: "University of Strathclyde",
    summary: "Self-propulsion model testing of Gate Rudders at Kelvin Hydrodynamics Lab. Analyzed resistance and propulsion performance at multiple rudder angles to support IMO 2050 decarbonisation.",
    tools: "MATLAB, Excel, KHL Equipment",
  },
  {
    title: "Bio-fouling on Tidal Turbines",
    tags: ["Academic"],
    institution: "University of Strathclyde",
    summary: "CFD-based framework for quantification of bio-fouling effects on tidal turbine performance using Blade Element Momentum theory.",
    tools: "CFD, BEM Theory",
  },
  {
    title: "BOI — Watertight Integrity Breach (Frigate)",
    tags: ["Professional", "Naval"],
    institution: "Pakistan Navy",
    summary: "Board of Investigation into flooding incident on F-22P Class frigate. 5-phase analysis covering SOPs, goose-neck vents, door sill heights, metallurgy, and classification compliance.",
    tools: "CCS, BV Rules, TL Standards",
  },
  {
    title: "Root Cause Analysis — Oil Tanker",
    tags: ["Professional"],
    institution: "Pakistan Navy (PN oversight)",
    summary: "Full RCA into excessive steel renewals through UT thickness checks and weld condition assessment. Environmental factors including Karachi Harbour salinity mapped against deterioration timeline.",
  },
  {
    title: "Galley Overheating — Ferry Vessel",
    tags: ["Professional"],
    institution: "Pakistan Navy",
    summary: "Technical analysis of chronic overheating in ship's galley. Thermal calculations using latent and sensible heat methods identified 30% HVAC shortfall.",
  },
  {
    title: "WT Integrity Risks — Marine Assault Boats",
    tags: ["Professional", "Naval"],
    institution: "Pakistan Navy",
    summary: "Technical evaluation of watertight integrity risks across MAB fleet. Hull configuration, ventilation arrangement review, and standardisation of WT seals.",
  },
  {
    title: "Slamming & Vibration — OPV",
    tags: ["Professional", "Naval"],
    institution: "Pakistan Navy",
    summary: "Structural and dynamic evaluation of slamming loads and vibration levels onboard an Offshore Patrol Vessel. Sensor-based assessment across 6 mounting locations.",
  },
  {
    title: "Fuel Stripping Arrangement — MABs",
    tags: ["Professional", "Naval"],
    institution: "Pakistan Navy",
    summary: "Technical assessment of fuel stripping system design, portable tank configurations, and filter arrangements for compliance with naval engineering standards.",
  },
  {
    title: "Watertight Door Seal Standardisation",
    tags: ["Professional", "Naval"],
    institution: "Pakistan Navy",
    summary: "Fleet-wide standardisation of rubber seal specifications for watertight doors and hatches. Produced standardised seal matrix across 4 door/hatch categories.",
  },
];

const filters = ["All", "Academic", "Professional", "Naval"];

const tagColorMap: Record<string, string> = {
  Academic: "bg-primary/20 text-primary",
  Professional: "bg-accent/20 text-accent",
  Naval: "bg-secondary text-foreground",
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-center">PROJECTS & STUDIES</p>
        <h2 className="section-heading text-center">From Concept to Classification</h2>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 text-xs font-heading rounded-full border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-5 flex flex-col justify-between teal-glow-hover transition-all duration-300 cursor-pointer group"
              >
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 text-[10px] font-heading rounded ${tagColorMap[tag] || "bg-secondary text-foreground"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-1">{project.title}</h3>
                  <p className="text-xs text-primary/70 font-heading mb-2">{project.institution}</p>
                  <p className="text-xs text-muted-foreground line-clamp-3">{project.summary}</p>
                  {project.tools && (
                    <p className="text-[10px] text-muted-foreground/60 mt-2 font-heading">
                      Tools: {project.tools}
                    </p>
                  )}
                </div>
                <button className="mt-4 text-xs font-heading text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
