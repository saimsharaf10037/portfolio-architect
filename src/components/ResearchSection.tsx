import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const researchInterests = [
  "Sustainable Propulsion", "Hull Hydrodynamics", "Renewable Marine Energy",
  "WT Integrity", "Structural Health Monitoring", "Bio-fouling", "Naval Operations",
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20 md:py-32 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-center">RESEARCH</p>
        <h2 className="section-heading text-center">Academic & Applied Research</h2>

        {/* Interest chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {researchInterests.map((interest, i) => (
            <motion.span
              key={interest}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-3 py-1.5 text-xs font-heading bg-primary/10 text-primary border border-primary/20 rounded-full"
            >
              {interest}
            </motion.span>
          ))}
        </div>

        {/* Academic publications */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 text-[10px] font-heading bg-accent/20 text-accent rounded">
                Publication In Progress
              </span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
              Framework for Quantification of Bio-fouling Effects on Tidal Stream Turbines
            </h3>
            <p className="text-xs text-primary/70 font-heading mb-3">University of Strathclyde, UK</p>
            <p className="text-sm text-muted-foreground mb-4">
              CFD-based assessment framework to quantify performance degradation of Horizontal Axis Tidal Turbines 
              due to bio-fouling, applying Blade Element Momentum theory for curtailing strategies.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {["Tidal Energy", "Bio-fouling", "Hydrodynamics", "Surface Roughness"].map((t) => (
                <span key={t} className="px-2 py-0.5 text-[10px] font-heading bg-secondary text-muted-foreground rounded">
                  {t}
                </span>
              ))}
            </div>
            <button className="text-xs font-heading text-primary flex items-center gap-1 hover:gap-2 transition-all">
              View Full Study <ArrowRight size={14} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 text-[10px] font-heading bg-primary/20 text-primary rounded">
                Completed
              </span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
              EU Gate Rudders (GATERs) — Experimental Hydrodynamics
            </h3>
            <p className="text-xs text-primary/70 font-heading mb-3">University of Strathclyde / Kelvin Hydrodynamics Lab</p>
            <p className="text-sm text-muted-foreground mb-4">
              Self-propulsion model testing evaluating Gate Rudders as Energy Saving Devices to support 
              IMO 2050 decarbonisation goals and sustainable shipping.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {["Gate Rudders", "Self-Propulsion", "Resistance Testing", "IMO Net Zero"].map((t) => (
                <span key={t} className="px-2 py-0.5 text-[10px] font-heading bg-secondary text-muted-foreground rounded">
                  {t}
                </span>
              ))}
            </div>
            <button className="text-xs font-heading text-primary flex items-center gap-1 hover:gap-2 transition-all">
              View Full Study <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>

        {/* Professional studies list */}
        <h3 className="font-heading text-sm font-semibold text-foreground mb-4">Professional Technical Studies</h3>
        <div className="glass-card overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border text-muted-foreground font-heading">
                <th className="text-left p-3">Study</th>
                <th className="text-left p-3 hidden sm:table-cell">Institution</th>
                <th className="text-left p-3 hidden md:table-cell">Type</th>
              </tr>
            </thead>
            <tbody>
              {[
                { title: "BOI — Watertight Integrity Breach, F-22P Frigate", institution: "Pakistan Navy", type: "Board of Investigation" },
                { title: "Root Cause Analysis — Oil Tanker", institution: "Pakistan Navy", type: "RCA" },
                { title: "Galley Overheating — Ferry Vessel", institution: "Pakistan Navy", type: "Technical Analysis" },
                { title: "WT Integrity Risks — Marine Assault Boats", institution: "Pakistan Navy", type: "Technical Evaluation" },
                { title: "Slamming & Vibration — Offshore Patrol Vessel", institution: "Pakistan Navy", type: "Structural Assessment" },
                { title: "Fuel Stripping Arrangement — MABs", institution: "Pakistan Navy", type: "Feasibility Assessment" },
                { title: "Watertight Door Seal Standardisation", institution: "Pakistan Navy", type: "Standardisation Study" },
              ].map((study, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="p-3 text-foreground">{study.title}</td>
                  <td className="p-3 text-muted-foreground hidden sm:table-cell">{study.institution}</td>
                  <td className="p-3 hidden md:table-cell">
                    <span className="px-2 py-0.5 bg-secondary text-muted-foreground rounded text-[10px] font-heading">
                      {study.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
