import { motion } from "framer-motion";
import { Medal, Quote } from "lucide-react";

const awards = [
  { title: "Tamgha-e-Azam", org: "Pakistan Navy", desc: "Distinguished service decoration" },
  { title: "Youm-e-Marka-e-Haq", org: "Pakistan Navy", desc: "Operational excellence recognition" },
  { title: "10 Years Service Medal", org: "Pakistan Navy", desc: "Decade of dedicated service" },
];

const institutions = ["University of Strathclyde", "Pakistan Navy", "Bureau Veritas", "NUST"];

const memberships = [
  { title: "IMarEST", detail: "Member (MIMarEST) — No. 8119543" },
  { title: "RINA", detail: "Associate Member — No. 00240392" },
  { title: "PEC", detail: "Mechanical Engineer — MECH/48054" },
];

const CredentialsSection = () => {
  return (
    <section className="py-14 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-center">CREDENTIALS & RECOGNITION</p>
        <h2 className="section-heading text-center">Honours, Affiliations & Standards</h2>

        {/* Awards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 text-center"
            >
              <Medal className="text-accent mx-auto mb-3" size={28} />
              <h3 className="font-heading text-sm font-semibold text-foreground">{award.title}</h3>
              <p className="text-[10px] text-primary font-heading mt-1">{award.org}</p>
              <p className="text-xs text-muted-foreground mt-2">{award.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Institutions */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 opacity-60">
          {institutions.map((inst) => (
            <span key={inst} className="font-heading text-sm text-foreground tracking-wide">
              {inst}
            </span>
          ))}
        </div>

        {/* Memberships */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {memberships.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-4 text-center"
            >
              <h4 className="font-heading text-sm font-bold text-primary">{m.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{m.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <Quote className="text-primary/30 mx-auto mb-4" size={40} />
          <blockquote className="text-lg text-foreground italic leading-relaxed">
            "Do one thing every day that scares you."
          </blockquote>
          <cite className="text-sm text-accent font-heading mt-3 block not-italic">— Eleanor Roosevelt</cite>
        </motion.div>
      </div>
    </section>
  );
};

export default CredentialsSection;
