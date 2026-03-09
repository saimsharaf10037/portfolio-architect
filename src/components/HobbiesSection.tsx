import { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

/* ── Innovation tiles for Card 4 ── */
const innovationTiles = [
  { icon: "💧", label: "WOMA Jet Water Blasting", sub: "Hull Blasting" },
  { icon: "❄️", label: "Ice Blasters", sub: "Surface Prep" },
  { icon: "⚓", label: "Gate Rudders", sub: "EU GATERs Project" },
  { icon: "⛽", label: "Alternative Fuels", sub: "IMO 2050" },
  { icon: "🎨", label: "Eco Coatings", sub: "Fouling Control" },
  { icon: "🌊", label: "Bio-fouling", sub: "Tidal Turbines" },
];

const InnovationCollage = () => {
  const [inView, setInView] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      style={{
        width: "100%",
        height: 200,
        overflow: "hidden",
        background: "#0A1628",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: 6,
        padding: 8,
      }}
    >
      {innovationTiles.map((tile, i) => (
        <motion.div
          key={tile.label}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.05, duration: 0.35 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,180,216,0.07)",
            border: "1px solid rgba(0,180,216,0.18)",
            borderRadius: 6,
            padding: "10px 8px",
          }}
        >
          <span style={{ fontSize: "1.4rem" }}>{tile.icon}</span>
          <span
            style={{
              fontSize: "0.68rem",
              fontFamily: "var(--font-heading)",
              color: "#fff",
              fontWeight: 600,
              marginTop: 4,
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            {tile.label}
          </span>
          <span
            style={{
              fontSize: "0.6rem",
              color: "#00B4D8",
              textAlign: "center",
              marginTop: 2,
            }}
          >
            {tile.sub}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

/* ── Card data ── */
interface HobbyCard {
  type: "photo" | "map" | "innovation";
  imageSrc?: string;
  imagePosition?: string;
  title: string;
  tag: string;
  description: string;
  borderColor: string;
}

const cards: HobbyCard[] = [
  {
    type: "photo",
    imageSrc: "/images/hobby-tennis.jpg",
    imagePosition: "center 20%",
    title: "Tennis",
    tag: "Competitive Sport · State Level",
    description:
      "Active tennis player with state-level tournament participation. I regularly compete in local tournaments and closely follow the International Grand Slams. Inspired by Roger Federer's discipline, consistency and sportsmanship.",
    borderColor: "#00B4D8",
  },
  {
    type: "map",
    title: "Travelling",
    tag: "26 Countries · 14 EU Nations",
    description:
      "Travelled to 26 countries including 14 within the European Union, as well as South America, Asia and the Middle East. Passionate about backpacking and cultural exploration — broadening my global perspective and adaptability across diverse environments.",
    borderColor: "#00B4D8",
  },
  {
    type: "photo",
    imageSrc: "/images/hobby-swimming.jpg",
    imagePosition: "center 40%",
    title: "Swimming",
    tag: "Open Water · National & International",
    description:
      "Competitive swimmer since childhood with participation in national and international events including competitions at Deniz Harp Okulu Turkish Naval Academy. Recipient of multiple medals. This open water swim in the Scottish Highlands reflects the endurance mindset swimming has built.",
    borderColor: "#00B4D8",
  },
  {
    type: "innovation",
    title: "Sustainable Innovation",
    tag: "Maritime Decarbonisation · IMO 2050",
    description:
      "Strong interest in sustainable maritime solutions and regulatory-driven innovation. Actively developing a bio-fouling assessment framework, engaged with MARPOL regulations, and exploring emerging green technologies — from magnetic hull blasting systems to alternative fuels and eco-friendly coatings.",
    borderColor: "#00B4D8",
  },
  {
    type: "photo",
    imageSrc: "/images/hobby-horse.jpg",
    imagePosition: "center 35%",
    title: "Horse Riding & Polo",
    tag: "Competitive Equestrian · Awarded",
    description:
      "Active equestrian with competitive riding experience from a young age. Awarded Best Rider of the Year (Under 18) in 2014 at Pano Aqil Cantt Saddle Club. Half-day horse riding in Campbeltown, Scotland. Equestrian sport has strengthened balance, composure and decision-making under pressure.",
    borderColor: "#F4A261",
  },
];

/* ── Component ── */
const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-[120px] px-4" style={{ backgroundColor: "hsl(216, 42%, 16%)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-center">BEYOND ENGINEERING</p>
        <h2 className="section-heading text-center">Hobbies & Interests</h2>
        <p className="text-center text-muted-foreground text-[1.1rem] mb-12 max-w-[580px] mx-auto">
          The discipline, resilience and global perspective that shapes how I work.
        </p>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.slice(0, 3).map((card, i) => (
            <HobbyCardComponent key={card.title} card={card} index={i} />
          ))}
        </div>

        {/* Row 2: 2 cards centred */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 max-w-[880px] mx-auto">
          {cards.slice(3).map((card, i) => (
            <HobbyCardComponent key={card.title} card={card} index={i + 3} />
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

/* ── Reusable card ── */
const HobbyCardComponent = ({ card, index }: { card: HobbyCard; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
      className="rounded-xl overflow-hidden cursor-default"
      style={{
        backgroundColor: "#0F1E33",
        borderTop: `3px solid ${card.borderColor}`,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 32px rgba(0,180,216,0.12)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Visual block */}
      {card.type === "photo" && card.imageSrc && (
        <div className="overflow-hidden">
          <img
            src={card.imageSrc}
            alt={card.title}
            className="w-full"
            style={{
              height: 200,
              objectFit: "cover",
              objectPosition: card.imagePosition,
              transition: "transform 0.3s ease",
              transform: hovered ? "scale(1.03)" : "scale(1)",
            }}
          />
        </div>
      )}
      {card.type === "map" && (
        <div style={{ position: "relative", padding: "0 0 60% 0", height: 0, overflow: "hidden" }}>
          <iframe
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            src="//www.fla-shop.com/visited-countries/embed/?st=AE%2CAT%2CBE%2CDK%2CEE%2CES%2CFI%2CFR%2CGB%2CHU%2CIE%2CIT%2CLK%2CMM%2CMT%2CMV%2CMX%2CMY%2CNL%2COM%2CPK%2CPT%2CQA%2CRO%2CSA%2CSE%2CSK%2CTH%2CTR&vc=1ca032&uc=b3c3ca&hc=40bfa6&bc=ffffff&ss=on"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      )}
      {card.type === "innovation" && <InnovationCollage />}

      {/* Text block */}
      <div style={{ padding: 24 }}>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          {card.title}
        </h3>
        <p style={{ fontSize: "0.78rem", color: "#00B4D8", marginTop: 4 }}>{card.tag}</p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            color: "#A0AEC0",
            lineHeight: 1.65,
            marginTop: 10,
          }}
        >
          {card.description}
        </p>
      </div>
    </motion.div>
  );
};

export default HobbiesSection;
