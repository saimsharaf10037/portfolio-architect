import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const comparisonData = [
  {
    component: "SOPs for Rough Sea",
    tl: "Detailed SOPs found that included vent closure steps",
    ccs: "SOPs structured for Position 1 (Green Water Exposed Areas)",
    bv: "SOPs included Pre-Sailing Checks and Weather Checks",
    vessel: "Generic SOPs (No vent closure instructions)",
  },
  {
    component: "Goose-Neck Vent Flap",
    tl: "Height: 780 mm · Orientation: Aft facing with louver protection · Complies with TL Part C, Ch.3",
    ccs: "Height: 900 mm for Position 1 · Orientation: Aft or Side-facing · Complies with CCS 2015",
    bv: "Height: 760 mm with flap valves · Orientation: Aft or Side-facing · Complies with BV NR600",
    vessel: "Height: 520 mm · Orientation: Fwd Facing · Complies with CCS 2011, but No Compliance with CCS 2015 & IMO/CLL",
  },
  {
    component: "Sill Height of WT Doors",
    tl: "Height: >300 mm · Compliant with TL Standards",
    ccs: "Height: >380 mm · Compliant with CCS (2015) Standards",
    bv: "Height: >320 mm · Compliant with BV sill height Standards",
    vessel: "Some values below minimum requirements of both CCS 2011 & CCS 2015 · Partially Compliant",
  },
  {
    component: "Metallurgical Composition",
    tl: "DIN Compliant Steels with High corrosion resistance primers",
    ccs: "CCS-B Marine Grade Steel",
    bv: "A36 Marine Grade Steel with Epoxy Coatings",
    vessel: "S275JR Steel; used in renewal · Non-Marine Grade · Non-Corrosion Resistant Coating",
  },
  {
    component: "PMS Routines for Vent Checks",
    tl: "Includes Chalk test and visual inspection routines",
    ccs: "Vent Integrity and WT maintenance covered under PMS",
    bv: "Structured PMS for Ventilation and WT Integrity",
    vessel: "No Record of past PMS inspections for Vents found",
  },
];

const columns = [
  { key: "tl", label: "TL-Classified Frigates" },
  { key: "ccs", label: "CCS (2015) Classified" },
  { key: "bv", label: "BV-Classified Frigates" },
  { key: "vessel", label: "Vessel Under BOI" },
] as const;

const BOIComparisonTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
        Comparison of Classed Frigates vs Vessel Under Investigation
      </h2>
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border/50">
                <TableHead className="font-heading text-[11px] uppercase tracking-wider text-primary bg-primary/5 min-w-[120px]">
                  Component
                </TableHead>
                {columns.map((col) => (
                  <TableHead
                    key={col.key}
                    className={`font-heading text-[11px] uppercase tracking-wider min-w-[160px] ${
                      col.key === "vessel"
                        ? "text-accent bg-accent/5"
                        : "text-muted-foreground bg-secondary/30"
                    }`}
                  >
                    {col.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, i) => (
                <TableRow
                  key={i}
                  className="border-b border-border/30 hover:bg-muted/30"
                >
                  <TableCell className="font-heading text-xs font-semibold text-foreground align-top">
                    {row.component}
                  </TableCell>
                  {columns.map((col) => (
                    <TableCell
                      key={col.key}
                      className={`text-xs leading-relaxed align-top ${
                        col.key === "vessel"
                          ? "text-accent/90"
                          : "text-muted-foreground"
                      }`}
                    >
                      {row[col.key].split(" · ").map((part, j) => (
                        <span key={j} className="block">
                          {part}
                        </span>
                      ))}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </motion.div>
  );
};

export default BOIComparisonTable;
