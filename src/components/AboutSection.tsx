import { motion } from "framer-motion";
import { Anchor, Award, GraduationCap } from "lucide-react";

const stats = [
  { icon: Anchor, label: "10+ Years Naval Service", sublabel: "Pakistan Navy" },
  { icon: GraduationCap, label: "MSc with Distinction", sublabel: "Strathclyde, UK" },
  { icon: Award, label: "EU-Funded Research", sublabel: "GATERs Project" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4">
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
              A decade at sea. A career built on precision.
            </h2>

            <div className="space-y-4 text-muted-foreground text-[15px] leading-relaxed">
              <p>
                I'm a Naval Architect and Marine Engineer with over 10 years of service in the Pakistan Navy, 
                holding decorations including the Tamgha-e-Azam and Youm-e-Marka-e-Haq. My career spans 
                frigates, submarines, destroyers, patrol vessels, dredgers, and oil tankers.
              </p>
              <p>
                I hold a BEng in Mechanical Engineering from NUST (CGPA 3.47/4.0) and an MSc in Advanced 
                Naval Architecture with Distinction from the University of Strathclyde, UK. I've conducted 
                class surveys and onboard inspections with Bureau Veritas (BV), and I'm a registered 
                Chartered Engineer (CEng CMarEng) under UK SPEC.
              </p>
              <p>
                My technical toolkit includes ANSYS Fluent, Star CCM+, AutoCAD, MaxSurf, and Rhino 3D — 
                applied across hull form optimization, hydrodynamic simulation, resistance and propulsion 
                analysis, and seakeeping performance. Currently based in the Netherlands with full working rights.
              </p>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col items-center gap-6"
          >
            {/* Photo placeholder */}
            <div className="w-56 h-56 rounded-full border-4 border-primary/40 bg-card flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-heading">Photo Placeholder</span>
            </div>

            {/* Stat cards */}
            <div className="w-full space-y-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-3 flex items-center gap-3"
                >
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
