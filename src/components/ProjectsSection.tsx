import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects as projectData } from "@/data/projects";

const filters = ["All", "Academic", "Professional", "Naval"];

const tagColorMap: Record<string, string> = {
  Academic: "bg-primary/20 text-primary",
  Professional: "bg-accent/20 text-accent",
  Naval: "bg-secondary text-foreground",
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projectData
    : projectData.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-center">PROJECTS & STUDIES</p>
        <h2 className="section-heading text-center">From Concept to Classification</h2>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 text-xs font-heading rounded-full border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={`/project/${project.slug}`}
                  className="glass-card p-5 flex flex-col justify-between teal-glow-hover transition-all duration-300 cursor-pointer group h-full block"
                >
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 text-[10px] font-heading rounded ${tagColorMap[tag] || "bg-secondary text-foreground"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-heading text-base font-semibold text-foreground mb-1">{project.title}</h3>
                    <p className="text-xs text-primary/70 font-heading mb-2">{project.institution}</p>
                    <p className="text-xs text-muted-foreground line-clamp-3">{project.summary}</p>
                    {project.tools && (
                      <p className="text-[10px] text-muted-foreground/60 mt-2 font-heading">
                        Tools: {project.tools.length > 60 ? project.tools.substring(0, 60) + "…" : project.tools}
                      </p>
                    )}
                  </div>
                  <span className="mt-4 text-xs font-heading text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
