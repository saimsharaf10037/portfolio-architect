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
  { icon: "🚢", label: "Hull Air Lubrication", sub: "Drag Reduction" },
];

const InnovationCollage = () => {
  const [inView, setInView] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      className="w-full h-[200px] overflow-hidden bg-background grid grid-cols-3 grid-rows-2 gap-1.5 p-2"
    >
      {innovationTiles.map((tile, i) => (
        <motion.div
          key={tile.label}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.05, duration: 0.35 }}
          className="flex flex-col items-center justify-center bg-primary/5 border border-primary/15 rounded-md px-2 py-2.5"
        >
          <span className="text-[1.4rem]">{tile.icon}</span>
          <span className="text-[0.68rem] font-heading text-foreground font-semibold mt-1 text-center leading-tight">
            {tile.label}
          </span>
          <span className="text-[0.6rem] text-primary text-center mt-0.5">
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
  borderColor: "primary" | "accent";
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
    borderColor: "primary",
  },
  {
    type: "map",
    title: "Travelling",
    tag: "26 Countries · 14 EU Nations",
    description:
      "Travelled to 26 countries including 14 within the European Union, as well as South America, Asia and the Middle East. Passionate about backpacking and cultural exploration — broadening my global perspective and adaptability across diverse environments.",
    borderColor: "primary",
  },
  {
    type: "photo",
    imageSrc: "/images/hobby-swimming.jpg",
    imagePosition: "center 60%",
    title: "Swimming",
    tag: "Open Water · National & International",
    description:
      "Competitive swimmer since childhood with participation in national and international events including competitions at Deniz Harp Okulu Turkish Naval Academy. Recipient of multiple medals. This open water swim in the Scottish Highlands reflects the endurance mindset swimming has built.",
    borderColor: "primary",
  },
  {
    type: "innovation",
    title: "Sustainable Innovation",
    tag: "Maritime Decarbonisation · IMO 2050",
    description:
      "Strong interest in sustainable maritime solutions and regulatory-driven innovation. Actively developing a bio-fouling assessment framework, engaged with MARPOL regulations, and exploring emerging green technologies — from magnetic hull blasting systems to alternative fuels and eco-friendly coatings.",
    borderColor: "primary",
  },
  {
    type: "photo",
    imageSrc: "/images/hobby-horse.jpg",
    imagePosition: "center 35%",
    title: "Horse Riding & Polo",
    tag: "Competitive Equestrian · Awarded",
    description:
      "Active equestrian with competitive riding experience from a young age. Awarded Best Rider of the Year (Under 18) in 2014 at Pano Aqil Cantt Saddle Club. Half-day horse riding in Campbeltown, Scotland. Equestrian sport has strengthened balance, composure and decision-making under pressure.",
    borderColor: "accent",
  },
];

/* ── Component ── */
const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-[120px] px-4 bg-section-alt">
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
          className="relative mt-12 rounded-[10px] p-10 text-center bg-section-deep"
        >
          <Quote
            className="absolute top-4 left-6 pointer-events-none text-primary/15"
            size={60}
          />
          <p className="text-[1.3rem] italic text-foreground max-w-[600px] mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            "Do one thing every day that scares you."
          </p>
          <p className="text-[0.9rem] mt-2 font-heading text-accent">
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

  const borderClass = card.borderColor === "accent" ? "border-t-accent" : "border-t-primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
      className={`rounded-xl overflow-hidden cursor-default bg-card-elevated border-t-[3px] ${borderClass} transition-all duration-300 ${hovered ? "-translate-y-1 shadow-lg" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Visual block */}
      {card.type === "photo" && card.imageSrc && (
        <div className="overflow-hidden">
          <img
            src={card.imageSrc}
            alt={card.title}
            className={`w-full h-[200px] object-cover transition-transform duration-300 ${hovered ? "scale-[1.03]" : "scale-100"}`}
            style={{ objectPosition: card.imagePosition }}
          />
        </div>
      )}
      {card.type === "map" && (
        <div className="relative" style={{ padding: "0 0 60% 0", height: 0, overflow: "hidden" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="//www.fla-shop.com/visited-countries/embed/?st=AE%2CAT%2CBE%2CDK%2CEE%2CES%2CFI%2CFR%2CGB%2CHU%2CIE%2CIT%2CLK%2CMM%2CMT%2CMV%2CMX%2CMY%2CNL%2COM%2CPK%2CPT%2CQA%2CRO%2CSA%2CSE%2CSK%2CTH%2CTR&vc=1ca032&uc=b3c3ca&hc=40bfa6&bc=ffffff&ss=on"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      )}
      {card.type === "innovation" && <InnovationCollage />}

      {/* Text block */}
      <div className="p-6">
        <h3 className="font-heading text-[1.15rem] font-bold text-foreground">
          {card.title}
        </h3>
        <p className="text-[0.78rem] text-primary mt-1">{card.tag}</p>
        <p className="text-[0.9rem] text-muted-foreground leading-[1.65] mt-2.5" style={{ fontFamily: "var(--font-body)" }}>
          {card.description}
        </p>
      </div>
    </motion.div>
  );
};

export default HobbiesSection;
