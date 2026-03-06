import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, X, SortAsc, Compass } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { projects as projectData } from "@/data/projects";

const filters = ["All", "Academic", "Professional", "Naval"];
const sortOptions = [
  { label: "Relevance", value: "relevance" },
  { label: "Alphabetical", value: "alpha" },
  { label: "Type (Academic first)", value: "type" },
];

const tagColorMap: Record<string, string> = {
  Academic: "bg-primary/20 text-primary",
  Professional: "bg-accent/20 text-accent",
  Naval: "bg-secondary text-foreground",
};

const ProjectsSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get("filter") || "All";
  const initialSearch = searchParams.get("search") || "";

  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState("relevance");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const updateParams = (filter: string, search: string) => {
    const params = new URLSearchParams();
    if (filter !== "All") params.set("filter", filter);
    if (search) params.set("search", search);
    setSearchParams(params, { replace: true });
  };

  const handleFilterChange = (f: string) => {
    setActiveFilter(f);
    updateParams(f, searchQuery);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    updateParams(activeFilter, q);
  };

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  let filtered = activeFilter === "All"
    ? projectData
    : projectData.filter((p) => p.tags.includes(activeFilter));

  if (activeTags.length > 0) {
    filtered = filtered.filter((p) => activeTags.every((t) => p.tags.includes(t)));
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        (p.tools && p.tools.toLowerCase().includes(q)) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  if (sortBy === "alpha") {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "type") {
    filtered = [...filtered].sort((a, b) => {
      const aAcademic = a.tags.includes("Academic") ? 0 : 1;
      const bAcademic = b.tags.includes("Academic") ? 0 : 1;
      return aAcademic - bAcademic;
    });
  }

  // Collect all unique tags from filtered results for discipline chips
  const allTags = [...new Set(projectData.flatMap((p) => p.tags))];

  return (
    <section id="projects" className="py-14 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-center">PROJECTS & STUDIES</p>
        <h2 className="section-heading text-center">From Concept to Classification</h2>

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-6 relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search studies, techniques, vessels..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-secondary/50 border border-border rounded-lg text-sm text-foreground font-heading placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter tabs + Sort */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex gap-2 flex-wrap justify-center overflow-x-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => handleFilterChange(f)}
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

          <div className="flex items-center gap-2">
            <SortAsc size={14} className="text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-secondary/50 border border-border rounded-md text-xs font-heading text-foreground py-1.5 px-3 focus:outline-none focus:border-primary/50"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Active tag chips */}
        {activeTags.length > 0 && (
          <div className="flex items-center gap-2 mb-6 flex-wrap justify-center">
            {activeTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 text-xs font-heading bg-primary/20 text-primary rounded-full"
              >
                {tag}
                <button onClick={() => toggleTag(tag)}>
                  <X size={12} />
                </button>
              </span>
            ))}
            <button
              onClick={() => setActiveTags([])}
              className="text-xs font-heading text-muted-foreground hover:text-primary transition-colors underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Project grid */}
        {filtered.length > 0 ? (
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
                          <button
                            key={tag}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleTag(tag);
                            }}
                            className={`px-2 py-0.5 text-[10px] font-heading rounded hover:opacity-80 transition-opacity ${tagColorMap[tag] || "bg-secondary text-foreground"}`}
                          >
                            {tag}
                          </button>
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
        ) : (
          <div className="text-center py-16">
            <Compass className="mx-auto text-muted-foreground/30 mb-4" size={48} />
            <p className="text-muted-foreground font-heading text-sm">
              No studies found for "{searchQuery || activeTags.join(", ")}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
