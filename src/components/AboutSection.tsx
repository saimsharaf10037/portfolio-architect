import { motion } from "framer-motion";
import { Anchor, Award, GraduationCap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import CareerTimeline from "./CareerTimeline";

const stats = [
  { icon: Anchor, label: "10+ Years Naval Service", sublabel: "Pakistan Navy" },
  { icon: GraduationCap, label: "MSc with Distinction", sublabel: "Strathclyde, UK" },
  { icon: Award, label: "EU-Funded Research", sublabel: "GATERs Project" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-14 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <p className="section-label">ABOUT</p>
            <h2 className="section-heading">
              Across Naval Architecture, Marine Engineering and Marine Surveying: delivering with depth, detail and precision.
            </h2>

            <div className="space-y-4 text-muted-foreground text-[15px] leading-relaxed">
              <p>
                I'm a Naval Architect and Marine Engineer with over 5 years of experience across vessel design, naval engineering, seafaring operations, hydrodynamics, technical analysis and marine surveys.
              </p>
              <p>
                My work spans complex vessel types and demanding marine environments, with expertise in hull form development, CFD, resistance and propulsion, sea-keeping and engineering design. I have also led the operation and maintenance of propulsion and auxiliary machinery onboard, and conducted hull and machinery surveys as well as onboard inspections with Bureau Veritas, combining analytical depth with commercial shipping experience.
              </p>
              <p>
                I hold a BEng in Mechanical Engineering from NUST and an MSc in Advanced Naval Architecture with Distinction from the University of Strathclyde, UK. I am a UK SPEC registered Chartered Engineer (CEng CMarEng), currently based in the Netherlands and open to opportunities in marine surveying, naval architecture, marine engineering and field-based technical roles.
              </p>
            </div>

            <CareerTimeline />
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col items-center gap-6"
          >
            {/* Photo */}
            <div className="w-56 h-56 rounded-full border-4 border-primary/40 bg-card overflow-hidden">
              <img src={profilePhoto} alt="Mohammad Saim Sharaf" className="w-full h-full object-cover" />
            </div>

            {/* Stat cards */}
            <div className="w-full space-y-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold text-foreground">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
