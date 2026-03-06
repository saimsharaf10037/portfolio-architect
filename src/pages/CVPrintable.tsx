import { projects } from "@/data/projects";

const CVPrintable = () => {
  return (
    <div className="min-h-screen bg-white text-[#1A2744] print:bg-white">
      {/* Print button - hidden in print */}
      <div className="print:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="px-6 py-2 bg-[hsl(193,100%,42%)] text-white font-sans font-semibold text-sm rounded-lg hover:opacity-90"
        >
          Print / Save as PDF
        </button>
      </div>

      <div className="max-w-[800px] mx-auto px-8 py-12 print:px-6 print:py-4">
        {/* Header */}
        <header className="border-b-2 border-[hsl(193,100%,42%)] pb-4 mb-6">
          <h1 className="text-3xl font-bold print:text-2xl">Mohammad Saim Sharaf</h1>
          <p className="text-[hsl(193,100%,42%)] font-semibold mt-1">Naval Architect & Marine Engineer</p>
          <p className="text-sm text-gray-600 mt-1">
            CEng CMarEng (UKSPEC) · MIMarEST · AMRINA · PEC Reg. MECH/48054
          </p>
        </header>

        {/* About */}
        <section className="mb-6 print:break-inside-avoid">
          <h2 className="text-lg font-bold text-[hsl(193,100%,42%)] border-b border-gray-200 pb-1 mb-3">About</h2>
          <p className="text-sm leading-relaxed">
            Naval Architect and Marine Engineer with over 10 years of service in the Pakistan Navy, holding decorations including the Tamgha-e-Azam and Youm-e-Marka-e-Haq. MSc in Advanced Naval Architecture with Distinction from the University of Strathclyde, UK. BEng in Mechanical Engineering from NUST (CGPA 3.47/4.0). Experience spans frigates, submarines, destroyers, patrol vessels, dredgers, and oil tankers.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-6 print:break-inside-avoid">
          <h2 className="text-lg font-bold text-[hsl(193,100%,42%)] border-b border-gray-200 pb-1 mb-3">Skills</h2>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-xs uppercase text-gray-500 mb-1">Software</h3>
              <p>ANSYS Fluent, Star CCM+, AutoCAD, MaxSurf, Rhino 3D, MATLAB, Python, Excel</p>
            </div>
            <div>
              <h3 className="font-semibold text-xs uppercase text-gray-500 mb-1">Naval Disciplines</h3>
              <p>Hull Integrity, Hydrodynamics, Propulsion, Seakeeping, Ship Maintenance, WT Integrity</p>
            </div>
            <div>
              <h3 className="font-semibold text-xs uppercase text-gray-500 mb-1">Professional</h3>
              <p>RCA, BOI, Feasibility Assessment, Class Surveys, Hull Inspections</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6 print:break-inside-avoid">
          <h2 className="text-lg font-bold text-[hsl(193,100%,42%)] border-b border-gray-200 pb-1 mb-3">Education</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">MSc Advanced Naval Architecture (Distinction)</p>
                <p className="text-gray-600">University of Strathclyde, UK</p>
              </div>
              <span className="text-gray-500 text-xs">2022–23</span>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">BEng Mechanical Engineering (3.47/4.0 GPA)</p>
                <p className="text-gray-600">NUST, Pakistan</p>
              </div>
              <span className="text-gray-500 text-xs">2016–20</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6 print:break-inside-avoid">
          <h2 className="text-lg font-bold text-[hsl(193,100%,42%)] border-b border-gray-200 pb-1 mb-3">Experience</h2>
          <div className="space-y-2 text-sm">
            {[
              { period: "2025–26", role: "Marine Surveyor — Bureau Veritas" },
              { period: "2023–25", role: "Deputy Manager Hull & Structure — Pakistan Navy" },
              { period: "2021–22", role: "Assistant Manager Hull Fabrication — Pakistan Navy" },
              { period: "2020–21", role: "Marine Engineering Watch Keeping Officer — Pakistan Navy" },
            ].map((exp) => (
              <div key={exp.period} className="flex justify-between">
                <p className="font-semibold">{exp.role}</p>
                <span className="text-gray-500 text-xs flex-shrink-0 ml-4">{exp.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="print:break-inside-avoid">
          <h2 className="text-lg font-bold text-[hsl(193,100%,42%)] border-b border-gray-200 pb-1 mb-3">Selected Projects & Studies</h2>
          <div className="space-y-1.5 text-sm">
            {projects.map((p) => (
              <div key={p.slug} className="flex gap-2">
                <span className="text-[hsl(193,100%,42%)] font-semibold flex-shrink-0">•</span>
                <div>
                  <span className="font-semibold">{p.title}</span>
                  <span className="text-gray-600"> — {p.summary.substring(0, 80)}…</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        @media print {
          nav, button, .print\\:hidden { display: none !important; }
          * { animation: none !important; transition: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          section { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
};

export default CVPrintable;
