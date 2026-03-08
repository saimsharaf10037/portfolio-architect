import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface Recommendation {
  name: string;
  title: string;
  org: string;
  linkedIn?: string;
  quote: string;
  context: string;
  socialProof?: {
    label: string;
    quote: string;
    source: string;
  };
}

const recommendations: Recommendation[] = [
  {
    name: "Capt (R) Sarfaraz Inayatullah TI(M) PEng CEng FPWS FIEP FRINA",
    title: "Country Marine & Offshore Chief Executive",
    org: "Bureau Veritas (BV)",
    linkedIn: "https://www.linkedin.com/in/sarfaraz-inayatullah-fpws-fiep-frina-0a429328/",
    quote: "I worked under Capt (R) Sarfaraz Inayatullah at Bureau Veritas (BV), where he supervised my development in hull and machinery surveys and class compliance. He has been a professional mentor, guiding my transition into survey roles. He can confidently attest to my technical competence, analytical skills and professional integrity.",
    context: "BV Supervisor & Mentor — Hull & Machinery Surveys",
  },
  {
    name: "Syed Azeem Uddin Ahmed CEng CMarEng FIMarEST FCILT UK",
    title: "Chief Engineering Officer / Project Manager",
    org: "Forth Ports (Targe Towing UK)",
    linkedIn: "https://www.linkedin.com/in/syed-ahmed-ceng/",
    quote: "I have worked closely with Syed Azeem Uddin Ahmed through the PJB (Pakistan Joint Branch) IMarEST and RINA branch for over 3 years. He has been a consistent professional mentor, guiding me towards Chartered Engineer status and supporting my development in both technical and managerial aspects of marine engineering. He can confidently attest to my professional growth, leadership potential and commitment to engineering excellence.",
    context: "PJB IMarEST & RINA — CEng Mentor · 3 Years",
    socialProof: {
      label: "LinkedIn · Sep 2025",
      quote: "Grateful to Lt. Saim Sharaf for helping make this event a smooth and impactful experience.",
      source: "— Posted publicly after the PNEC IMarEST Awareness Session",
    },
  },
  {
    name: "Cdr Dr Faheem Ur Rehman MRINA PN",
    title: "Dean of Naval Architecture",
    org: "NUST (Pakistan)",
    quote: "I worked under Cdr Dr Faheem Ur Rehman for 2 years on multiple feasibility studies, technical reviews and Root Cause Analyses (RCA) for complex marine engineering assessments. As my manager, he provided strong leadership and established a solid technical foundation that strengthened my analytical and professional capabilities. He can confidently attest to my technical competence, structured approach and commitment to engineering excellence.",
    context: "Manager — RCA & Technical Studies · Pakistan Navy",
  },
  {
    name: "Asim Shahzad",
    title: "Senior Marine Surveyor",
    org: "Bureau Veritas (BV)",
    quote: "I worked directly under Asim Shahzad during Annual Class Surveys at Bureau Veritas (BV), where he supervised my hands-on inspection activities. He guided me extensively in welding inspection, WPS and WPQR review and the application of AWS and ISO standards. Through close supervision, he strengthened my practical understanding of the Marine Surveyor's role and professional inspection practices.",
    context: "BV Internship Supervisor — Class Surveys & Welding Inspection",
  },
];

const RecommendationsSection = () => {
  return (
    <section id="recommendations" className="py-[120px] px-4" style={{ backgroundColor: "hsl(216, 60%, 8%)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-center">WHAT COLLEAGUES SAY</p>
        <h2 className="section-heading text-center">Professional Recommendations</h2>
        <p className="text-center text-muted-foreground text-[1.1rem] mb-12 max-w-[600px] mx-auto">
          From supervisors, mentors, and collaborators across naval, classification, and academic sectors.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {recommendations.map((rec, i) => (
            <motion.div
              key={rec.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-xl p-8 border-l-4 border-l-primary group hover:-translate-y-1 transition-all duration-300"
              style={{
                backgroundColor: "hsl(216, 42%, 16%)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(0,180,216,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Decorative quote mark */}
              <span
                className="absolute top-4 right-5 text-[6rem] font-heading leading-none pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-[0.2]"
                style={{ color: "rgba(0,180,216,0.12)" }}
              >
                "
              </span>

              <div className="relative z-10">
                <h3 className="font-heading text-[1.1rem] font-bold text-foreground">{rec.name}</h3>
                <p className="text-[0.85rem] text-muted-foreground mt-0.5">{rec.title}</p>

                <div className="flex items-center gap-2 mt-2">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[0.75rem] font-heading text-white"
                    style={{ backgroundColor: "hsl(28, 88%, 67%)" }}
                  >
                    {rec.org}
                  </span>
                  {rec.linkedIn && (
                    <a
                      href={rec.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                      aria-label={`${rec.name} LinkedIn profile`}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>

                <div className="w-[30px] h-px bg-primary my-4" />

                <p className="text-[0.95rem] text-muted-foreground italic leading-[1.75]" style={{ fontFamily: "var(--font-body)" }}>
                  "{rec.quote}"
                </p>

                <span
                  className="inline-block mt-5 px-3 py-1.5 rounded-full text-[0.75rem] font-heading text-primary border border-primary/40"
                  style={{ backgroundColor: "hsl(216, 60%, 8%)" }}
                >
                  {rec.context}
                </span>

                {/* Social proof for Card 2 */}
                {rec.socialProof && (
                  <motion.div
                    initial={{ borderColor: "hsl(193 100% 42% / 0.3)" }}
                    whileInView={{ borderColor: ["hsl(193 100% 42% / 0.3)", "hsl(193 100% 42% / 0.8)", "hsl(193 100% 42% / 0.3)"] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="mt-4 rounded-lg p-2.5 px-3.5 border-l-2"
                    style={{ backgroundColor: "hsl(216, 60%, 8%)" }}
                  >
                    <p className="text-[0.75rem] text-muted-foreground">{rec.socialProof.label}</p>
                    <p className="text-[0.82rem] italic text-muted-foreground mt-1">"{rec.socialProof.quote}"</p>
                    <p className="text-[0.72rem] text-muted-foreground mt-1">{rec.socialProof.source}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-[0.85rem] text-muted-foreground mb-4">
            Full contact details for all recommenders available upon request.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-2.5 rounded-full text-[0.85rem] font-heading font-semibold text-primary border border-primary hover:bg-primary hover:text-white transition-colors duration-200"
          >
            Request References →
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
