import type { ProjectImage } from "@/components/ImageLightbox";

export type ProjectData = {
  slug: string;
  title: string;
  tags: string[];
  institution: string;
  summary: string;
  tools?: string;
  status?: string;
  objective?: string;
  fullSummary: string;
  keyFindings?: string[];
  recommendations?: string[];
  resources?: string[];
  outcome?: string;
  keyMetric?: { value: string; label: string };
  images?: ProjectImage[];
};

export const projects: ProjectData[] = [
  {
    slug: "eu-gate-rudders",
    title: "EU Gate Rudders (GATERs) Project",
    tags: ["Academic"],
    institution: "University of Strathclyde",
    summary: "Self-propulsion model testing of Gate Rudders at Kelvin Hydrodynamics Lab. Analyzed resistance and propulsion performance at multiple rudder angles to support IMO 2050 decarbonisation.",
    tools: "KHL Ship Towing Carriage, Model Hull M1103, P813 Propeller, CTO SA NPN 250 Dynamometer, Ketler 9275B Load Cell, MATLAB, Excel, Spike2",
    status: "Completed",
    objective: "Evaluate the Gate Rudder System (GRS) as an Energy Saving Device to support IMO 2050 decarbonisation goals and sustainable shipping.",
    fullSummary: "The Gate Rudder System (GRS) is an innovative propulsive technology comprising two asymmetric rudders on either side of the propeller. This study involved resistance and self-propulsion tests at Kelvin Hydrodynamics Lab (KHL), Glasgow, for a model hull form (M1103) fitted with Gate Rudders at 0°, 5°, and 8° angles at various speeds.",
    keyFindings: [
      "At lower speeds (9–10 knots), GRS resistance is approximately equal to the bare-hull model",
      "At higher speeds (11–12 knots), GRS at 8° offers minimum resistance",
      "GRS generates additional thrust, requiring comparatively less propulsion power",
      "Extrapolated effective power is lower at high GRS angles",
      "Power difference up to 12% for inspected power margins at various angles",
    ],
    outcome: "Research contributed to EU GATERs consortium findings. Report submitted to University of Strathclyde. Experimental data validates GRS performance model for full-scale application.",
    keyMetric: { value: "12%", label: "Power Reduction Demonstrated" },
    images: [
      { src: "/images/gaters-steering-modes.png", caption: "GRS System and its Steering Modes" },
      { src: "/images/gaters-model-hull.png", caption: "Model Hull M1103 with fitted dynamometers" },
      { src: "/images/gaters-performance.png", caption: "GRS Performance at 5° Angle, 1.325 m/s, 09 RPS at KHL" },
    ],
  },
  {
    slug: "bio-fouling-tidal-turbines",
    title: "Bio-fouling on Tidal Turbines",
    tags: ["Academic"],
    institution: "University of Strathclyde, UK",
    summary: "CFD-based framework for quantification of bio-fouling effects on tidal turbine performance using Blade Element Momentum theory.",
    tools: "CFD Analysis, BEM Theory",
    status: "Research Publication In Progress",
    objective: "Develop a quantitative framework to assess the effect of bio-fouling on the performance of tidal stream turbines.",
    fullSummary: "This research presents a quantitative framework to assess the effect of bio-fouling on the performance of tidal stream turbines. Bio-fouling increases surface roughness and alters hydrodynamic characteristics, leading to reduced efficiency and increased drag. The framework integrates existing literature on bio-fouling growth rates, roughness correlations, and turbine performance degradation models.",
    keyFindings: [
      "Bio-fouling significantly increases surface roughness on turbine blades",
      "Altered hydrodynamic characteristics lead to reduced turbine efficiency",
      "Increased drag results in measurable performance degradation",
      "Framework integrates growth rate data with roughness correlations for predictive modelling",
    ],
    outcome: "Research paper in preparation for peer-reviewed journal submission. Framework enables predictive maintenance scheduling for tidal energy operators.",
    keyMetric: { value: "BEM", label: "Framework Developed" },
  },
  {
    slug: "boi-watertight-integrity",
    title: "BOI — Watertight Integrity Breach (Frigate)",
    tags: ["Professional", "Naval"],
    institution: "Pakistan Navy",
    summary: "Board of Investigation into flooding incident on F-22P Class frigate. 5-phase analysis covering SOPs, goose-neck vents, door sill heights, metallurgy, and classification compliance.",
    tools: "CCS 2011, CCS 2015, BV Rules NR 467, TL Rules 2016, PN Fleet Hand Book, SOLAS Rules",
    objective: "Determine the causes behind a flooding incident in an auxiliary compartment of a naval frigate during sea trials.",
    fullSummary: "This Board of Investigation was initiated to determine the causes behind a flooding incident in an auxiliary compartment of a naval frigate during sea trials. The study was structured into five key phases: (1) Review of operational SOPs and preparedness during rough sea state, (2) Analysis of Goose-Neck ventilation design, (3) Evaluation of sill height for WT doors, (4) Metallurgical assessment of hull material, (5) Compliance assessment against Classification Society Rules (BV, TL, CCS 2011 and CCS 2015).",
    keyFindings: [
      "SOPs lacked specific clauses for vent closure prior to rough sea state operations",
      "Forward-facing goose-neck vent was located 510mm above deck — non-compliant with CCS 2015 requirements (minimum 300mm coaming height)",
      "Door sill heights ranged from 220mm to 415mm — below CCS 2015 minimum of 250mm",
      "Subject vessel used S275JR structural steel — lower corrosion resistance than Marine Grade A36 steel used in TL-class vessels",
      "Absence of dedicated SOP protocols and recorded maintenance inspections contributed to watertight integrity failure",
    ],
    recommendations: [
      "PMS vent inspection routines",
      "AFT-oriented goose-neck vents during drydocking",
      "Re-evaluation of sill heights across fleet",
    ],
    resources: ["BV Rules NR 467", "TL Rules 2016", "CCS 2011", "CCS 2015", "PN Fleet Hand Book", "SOLAS Rules"],
    outcome: "Investigation findings adopted by Pakistan Navy. Revised SOPs introduced for rough sea state vent management. PMS routines updated fleet-wide. Goose-neck re-orientation included in next scheduled drydocking.",
    keyMetric: { value: "5-Phase", label: "Investigation Conducted" },
    images: [
      { src: "/images/boi-sill-heights.png", caption: "Sill height of doors and hatches from deck" },
      { src: "/images/boi-comparison-table.png", caption: "Comparison of classified frigates vs vessel under investigation" },
    ],
  },
  {
    slug: "rca-oil-tanker",
    title: "Root Cause Analysis — Oil Tanker",
    tags: ["Professional"],
    institution: "Pakistan Navy (PN oversight)",
    summary: "Full RCA into excessive steel renewals through UT thickness checks and weld condition assessment. Environmental factors including Karachi Harbour salinity mapped against deterioration timeline.",
    tools: "UT Thickness Gauging, Weld Condition Assessment",
    objective: "Investigate root causes of operational failure aboard a commercial oil tanker.",
    fullSummary: "A full Root Cause Analysis was conducted following a reported operational failure aboard a commercial oil tanker. The investigation applied structured RCA methodology examining mechanical, procedural, and environmental contributing factors. Environmental conditions including temperature, salinity, and pH trends in Karachi Harbour were assessed as corrosion-contributing factors.",
    keyFindings: [
      "Corrosion pattern consistent with seawater ingress",
      "Maintenance intervals insufficient for operational environment",
      "Karachi Harbour salinity and pH data mapped against deterioration timeline",
      "Excessive steel renewals identified through UT thickness checks",
    ],
    outcome: "Technical assessment findings used to update maintenance schedules and corrosion monitoring protocols.",
    keyMetric: { value: "38+ ppt", label: "Peak Salinity Correlated" },
  },
  {
    slug: "galley-overheating",
    title: "Galley Overheating — Ferry Vessel",
    tags: ["Professional"],
    institution: "Pakistan Navy",
    summary: "Technical analysis of chronic overheating in ship's galley. Thermal calculations using latent and sensible heat methods identified 30% HVAC shortfall.",
    tools: "Sensible Heat Formula, Latent Heat Formula, Isometric layout analysis, Exhaust fan airflow calculations",
    objective: "Investigate chronic overheating in a ferry vessel's galley and evaluate adequacy of existing exhaust systems.",
    fullSummary: "A technical analysis was conducted to investigate chronic overheating in a ferry vessel's galley. The study employed both latent heat and sensible heat calculation methods to determine root causes and evaluate adequacy of existing exhaust fan arrangements.",
    keyFindings: [
      "Existing exhaust fan capacity was insufficient for the thermal load generated by galley equipment",
      "Sensible heat calculations identified an HVAC shortfall of approximately 30% during peak cooking operations",
      "Latent heat analysis confirmed elevated humidity compounding temperature perception",
    ],
    recommendations: [
      "Upgraded fan specifications",
      "Supplementary extract ventilation over cooking stations",
      "Review of galley insulation materials",
    ],
    outcome: "Recommendations submitted to ship management. Upgraded exhaust specification adopted. Estimated 25% improvement in thermal comfort at peak operation.",
    keyMetric: { value: "30%", label: "HVAC Shortfall Identified" },
    images: [
      { src: "/images/galley-isometric.png", caption: "Isometric view of ship's galley and adjacent compartments" },
      { src: "/images/galley-exhaust.png", caption: "Exhaust fan arrangement inside ship's galley" },
      { src: "/images/galley-arrangement.png", caption: "General arrangement of equipment fitted in the galley" },
    ],
  },
  {
    slug: "wt-integrity-mabs",
    title: "WT Integrity Risks — Marine Assault Boats",
    tags: ["Professional", "Naval"],
    institution: "Pakistan Navy",
    summary: "Technical evaluation of watertight integrity risks across MAB fleet. Hull configuration, ventilation arrangement review, and standardisation of WT seals.",
    objective: "Assess watertight integrity risks across the Marine Assault Boats fleet.",
    fullSummary: "A technical evaluation assessed watertight integrity risks across the Marine Assault Boats (MABs) fleet. The study covered hull configuration analysis, ventilation arrangement review, and standardisation of watertight seals.",
    keyFindings: [
      "Several MABs exhibited non-standard rubber seals in watertight doors and hatches, creating inconsistent integrity performance",
      "Ventilation arrangements aft and forward of the hanger were assessed against naval standards",
      "Port and starboard inside-mast arrangements reviewed for compliance",
      "Standardisation of seal specification recommended across the MAB fleet for all watertight openings",
    ],
    outcome: "Standardised seal matrix produced and issued as fleet-wide technical directive. Reduces variance across 4 door/hatch categories.",
    keyMetric: { value: "4", label: "Door/Hatch Categories Standardised" },
  },
  {
    slug: "slamming-vibration-opv",
    title: "Slamming & Vibration — OPV",
    tags: ["Professional", "Naval"],
    institution: "Pakistan Navy",
    summary: "Structural and dynamic evaluation of slamming loads and vibration levels onboard an Offshore Patrol Vessel. Sensor-based assessment across 6 mounting locations.",
    tools: "Accelerometers, Strain Gauges, 6 Mounting Locations",
    objective: "Evaluate slamming loads and vibration levels onboard an Offshore Patrol Vessel.",
    fullSummary: "A structural and dynamic evaluation of slamming loads and vibration levels onboard an Offshore Patrol Vessel. Sensor mounting locations were selected across the hull for accelerometer and strain gauge placement. Data was analyzed against acceptable comfort and structural criteria.",
    keyFindings: [
      "Slamming peaks recorded at forward section of keel during head seas",
      "Vibration levels within SOLAS/classification limits at operational speed",
      "Recommendations made for speed reduction in specific sea states",
    ],
    outcome: "Speed restrictions recommended for specific sea states. Structural monitoring baseline established for future comparative analysis.",
    keyMetric: { value: "6", label: "Sensor Locations Assessed" },
    images: [
      { src: "/images/opv-sensors.png", caption: "Selected sensor mounting locations" },
    ],
  },
  {
    slug: "fuel-stripping-mabs",
    title: "Fuel Stripping Arrangement — MABs",
    tags: ["Professional", "Naval"],
    institution: "Pakistan Navy",
    summary: "Technical assessment of fuel stripping system design, portable tank configurations, and filter arrangements for compliance with naval engineering standards.",
    objective: "Evaluate fuel stripping system design and compliance aboard Marine Assault Boats.",
    fullSummary: "A technical assessment of the fuel stripping arrangement installed on Marine Assault Boats. Evaluated the portable fuel tank configurations, filter arrangements for each engine type, and overall compliance of the fuel system with naval engineering standards.",
    keyFindings: [
      "Portable fuel tank configurations assessed for each engine type",
      "Filter arrangements evaluated against naval engineering standards",
      "Compliance gaps identified in fuel system design",
    ],
    outcome: "Technical assessment findings used to update maintenance schedules. Compliance confirmed with naval engineering standards.",
    keyMetric: { value: "3", label: "Engine Types Assessed" },
  },
  {
    slug: "watertight-seal-standardisation",
    title: "Watertight Door Seal Standardisation",
    tags: ["Professional", "Naval"],
    institution: "Pakistan Navy",
    summary: "Fleet-wide standardisation of rubber seal specifications for watertight doors and hatches. Produced standardised seal matrix across 4 door/hatch categories.",
    objective: "Rationalise rubber seal specifications across the naval fleet.",
    fullSummary: "A standardisation study examining the diversity of rubber seal types used in watertight doors and hatches across the naval fleet. The study proposed a rationalised seal specification to reduce maintenance complexity and improve watertight integrity assurance.",
    keyFindings: [
      "Multiple non-standard seal types identified across the fleet",
      "Maintenance complexity increased due to lack of standardisation",
      "Rationalised specification proposed for all watertight openings",
    ],
    outcome: "Rationalised specification reduces SKU count by ~60% and simplifies procurement and inspection procedures.",
    keyMetric: { value: "~60%", label: "SKU Reduction Achieved" },
  },
];

export const getRelatedProjects = (currentSlug: string, count = 3): ProjectData[] => {
  const current = projects.find((p) => p.slug === currentSlug);
  if (!current) return projects.slice(0, count);
  
  return projects
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aShared = a.tags.filter((t) => current.tags.includes(t)).length;
      const bShared = b.tags.filter((t) => current.tags.includes(t)).length;
      return bShared - aShared;
    })
    .slice(0, count);
};
