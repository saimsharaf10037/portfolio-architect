import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Hobby {
  icon?: string;
  image?: { src: string; objectPosition: string };
  map?: boolean;
  title: string;
  tag: string;
  description: string;
  accentAmber?: boolean;
}

const hobbies: Hobby[] = [
  {
    image: { src: "/images/hobby-tennis.jpg", objectPosition: "center 40%" },
    title: "Tennis",
    tag: "Competitive Sport · State Level",
    description: "Active tennis player with state-level tournament participation. I regularly compete in local tournaments and closely follow the International Grand Slams. Inspired by Roger Federer's discipline, consistency and sportsmanship.",
  },
  {
    map: true,
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
    image: { src: "/images/hobby-horse.jpg", objectPosition: "center 30%" },
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
          {hobbies.map((hobby, i) => {
            const hasVisual = hobby.image || hobby.map;
            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-xl hover:-translate-y-[5px] transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: "hsl(216, 53%, 13%)",
                  borderTop: hasVisual ? "none" : `3px solid ${hobby.accentAmber ? "hsl(28, 88%, 67%)" : "hsl(193, 100%, 42%)"}`,
                  padding: hasVisual ? 0 : 28,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(0,180,216,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Visual header */}
                {hobby.image && (
                  <img
                    src={hobby.image.src}
                    alt={hobby.title}
                    className="w-full"
                    style={{
                      height: 220,
                      objectFit: "cover",
                      objectPosition: hobby.image.objectPosition,
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                )}
                {hobby.map && (
                  <div style={{ position: "relative", padding: "0 0 67% 0", height: 0, overflow: "hidden", borderRadius: "8px 8px 0 0" }}>
                    <iframe
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "8px 8px 0 0" }}
                      src="//www.fla-shop.com/visited-countries/embed/?st=AE%2CAT%2CBE%2CDK%2CEE%2CES%2CFI%2CFR%2CGB%2CHU%2CIE%2CIT%2CLK%2CMM%2CMT%2CMV%2CMX%2CMY%2CNL%2COM%2CPK%2CPT%2CQA%2CRO%2CSA%2CSE%2CSK%2CTH%2CTR&vc=1ca032&uc=b3c3ca&hc=40bfa6&bc=ffffff&ss=on"
                      frameBorder="0"
                      scrolling="no"
                    />
                  </div>
                )}

                {/* Text content */}
                <div style={{ padding: hasVisual ? 28 : 0 }}>
                  {/* Emoji icon for non-visual cards */}
                  {hobby.icon && (
                    <motion.span
                      initial={{ y: 0 }}
                      whileInView={{ y: [-4, 0] }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.3, duration: 0.4 }}
                      className="text-[48px] block"
                    >
                      {hobby.icon}
                    </motion.span>
                  )}
                  <h3 className="font-heading text-[1.15rem] font-bold text-foreground mt-3.5">{hobby.title}</h3>
                  <p className="text-[0.75rem] text-primary mt-1">{hobby.tag}</p>
                  <p className="text-[0.9rem] text-muted-foreground leading-[1.65] mt-3" style={{ fontFamily: "var(--font-body)" }}>
                    {hobby.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
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
