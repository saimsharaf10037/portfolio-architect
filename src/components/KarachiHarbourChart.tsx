import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", temperature: 19, salinity: 36.2, ph: 8.1 },
  { month: "Feb", temperature: 20, salinity: 36.5, ph: 8.0 },
  { month: "Mar", temperature: 24, salinity: 37.0, ph: 7.9 },
  { month: "Apr", temperature: 28, salinity: 37.8, ph: 7.8 },
  { month: "May", temperature: 31, salinity: 38.5, ph: 7.7 },
  { month: "Jun", temperature: 33, salinity: 39.2, ph: 7.6 },
  { month: "Jul", temperature: 32, salinity: 39.8, ph: 7.5 },
  { month: "Aug", temperature: 30, salinity: 39.5, ph: 7.6 },
  { month: "Sep", temperature: 30, salinity: 38.8, ph: 7.7 },
  { month: "Oct", temperature: 28, salinity: 37.5, ph: 7.9 },
  { month: "Nov", temperature: 24, salinity: 36.8, ph: 8.0 },
  { month: "Dec", temperature: 20, salinity: 36.3, ph: 8.1 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="glass-card p-3 text-xs space-y-1">
      <p className="font-heading font-semibold text-foreground">{label}</p>
      {payload.map((entry: any) => (
        <p key={entry.name} style={{ color: entry.color }}>
          {entry.name}: {entry.value}{entry.name === "Temperature" ? "°C" : entry.name === "Salinity" ? " ppt" : ""}
        </p>
      ))}
    </div>
  );
};

const KarachiHarbourChart = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-6"
  >
    <h2 className="font-heading text-lg font-semibold text-foreground">
      Environmental Conditions — Karachi Harbour Analysis
    </h2>

    <div className="glass-card p-4 md:p-6">
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(216 30% 22% / 0.6)" />
          <XAxis dataKey="month" stroke="hsl(210 15% 60%)" fontSize={11} fontFamily="var(--font-heading)" />
          <YAxis stroke="hsl(210 15% 60%)" fontSize={11} fontFamily="var(--font-heading)" />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontFamily: "var(--font-heading)", fontSize: 11 }}
          />
          <Line type="monotone" dataKey="temperature" name="Temperature" stroke="hsl(193 100% 42%)" strokeWidth={2} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="salinity" name="Salinity" stroke="hsl(28 88% 67%)" strokeWidth={2} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="ph" name="pH Level" stroke="hsl(216 42% 60%)" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <p className="text-sm text-muted-foreground">
      These environmental parameters were mapped against the deterioration timeline of the vessel to identify corrosion-contributing external factors.
    </p>

    <div className="glass-card p-4 border-l-4 border-l-primary">
      <p className="text-xs font-heading text-primary uppercase tracking-wider mb-1">Key Insight</p>
      <p className="text-sm text-muted-foreground">
        Elevated salinity levels (&gt;38 ppt) during Q2–Q3 correlate with accelerated hull deterioration observed during inspection.
      </p>
    </div>
  </motion.div>
);

export default KarachiHarbourChart;
