import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Hobby {
  icon: string;
  title: string;
  tag: string;
  description: string;
  accentAmber?: boolean;
}

const hobbies: Hobby[] = [
  {
    icon: "🎾",
    title: "Tennis",
    tag: "Competitive Sport · State Level",
    description: "Active tennis player with state-level tournament participation. I regularly compete in local tournaments and closely follow the International Grand Slams. Inspired by Roger Federer's discipline, consistency and sportsmanship.",
  },
  {
    icon: "✈️",
    title: "Travelling",
    tag: "26 Countries · 14 EU Nations",
    description: "Travelled to 26 countries including 14 within the European Union, as well as South America, Asia and the Middle East. Passionate about backpacking and cultural exploration — it has broadened my global perspective, strengthened my adaptability and helped me integrate easily into diverse environments.",
  },
  {
    icon: "🏊",
    title: "Swimming",
    tag: "Competitive · National & International",
    description: "Competitive swimmer since childhood, with participation in national and international events including competitions at Deniz Harp Okulu Turkish Naval Academy. Recipient of multiple medals. Swimming has strengthened my discipline, endurance and performance mindset.",
  },
  {
    icon: "💃",
    title: "Latin Dancing",
    tag: "Salsa & Bachata · Instructor",
    description: "Practising for over 2 years with a growing passion for social dancing and Latin music. Conducted beginner workshops as an instructor in Islamabad and Karachi. Latin dancing has developed my confidence, stage presence and the ability to connect with diverse groups of people.",
    accentAmber: true,
  },
  {
    icon: "🌱",
    title: "Sustainable Innovation",
    tag: "Maritime Decarbonisation · IMO 2050",
    description: "Strong interest in sustainable maritime solutions and regulatory-driven innovation. Currently developing a bio-fouling assessment framework to support performance optimisation and emissions reduction. Actively engaged with MARPOL regulations and the IMO 2050 net zero carbon emission goals.",
  },
  {
    icon: "🐎",
    title: "Horse Riding & Polo",
    tag: "Competitive Equestrian · Awarded",
    description: "Active equestrian with competitive riding experience from a young age. Awarded Best Rider of the Year (Under 18) in 2014 at Pano Aqil Cantt Saddle Club. Half-day horse riding in Campbeltown, Scotland. Occasionally participates in polo. Equestrian sport has strengthened balance, composure and decision-making under pressure.",
    accentAmber: true,
  },
];

const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-[120px] px-4" style={{ backgroundColor: "hsl(216, 42%, 16%)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-center">BEYOND ENGINEERING</p>
        <h2 className="section-heading text-center">Hobbies & Interests</h2>
        <p className="text-center text-muted-foreground text-[1.1rem] mb-12 max-w-[580px] mx-auto">
          The discipline, resilience and global perspective that shapes how I work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-xl p-7 hover:-translate-y-[5px] transition-all duration-300"
              style={{
                backgroundColor: "hsl(216, 53%, 13%)",
                borderTop: `3px solid ${hobby.accentAmber ? "hsl(28, 88%, 67%)" : "hsl(193, 100%, 42%)"}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(0,180,216,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <motion.span
                initial={{ y: 0 }}
                whileInView={{ y: [-4, 0] }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.3, duration: 0.4 }}
                className="text-[48px] block"
              >
                {hobby.icon}
              </motion.span>
              <h3 className="font-heading text-[1.15rem] font-bold text-foreground mt-3.5">{hobby.title}</h3>
              <p className="text-[0.75rem] text-primary mt-1">{hobby.tag}</p>
              <p className="text-[0.9rem] text-muted-foreground leading-[1.65] mt-3" style={{ fontFamily: "var(--font-body)" }}>
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="relative mt-12 rounded-[10px] p-10 text-center"
          style={{ backgroundColor: "hsl(216, 60%, 8%)" }}
        >
          <Quote
            className="absolute top-4 left-6 pointer-events-none"
            size={60}
            style={{ color: "rgba(0,180,216,0.15)" }}
          />
          <p className="text-[1.3rem] italic text-foreground max-w-[600px] mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            "Do one thing every day that scares you."
          </p>
          <p className="text-[0.9rem] mt-2 font-heading" style={{ color: "hsl(28, 88%, 67%)" }}>
            — Eleanor Roosevelt
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HobbiesSection;
