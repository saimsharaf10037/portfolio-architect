import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Wrench, Target, Calendar } from "lucide-react";
import { projects, getRelatedProjects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import KarachiHarbourChart from "@/components/KarachiHarbourChart";
import ProjectHeroBanner from "@/components/ProjectHeroBanner";

const tagColorMap: Record<string, string> = {
  Academic: "bg-primary/20 text-primary",
  Professional: "bg-accent/20 text-accent",
  Naval: "bg-secondary text-foreground",
};

const statusColorMap: Record<string, string> = {
  Completed: "bg-primary/20 text-primary",
  "Research Publication In Progress": "bg-accent/20 text-accent",
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary font-heading text-sm hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProjects(project.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden" style={{ minHeight: "300px" }}>
        <ProjectHeroBanner slug={slug || ""} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-xs font-heading text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-1 text-[10px] font-heading rounded-full ${tagColorMap[tag] || "bg-secondary text-foreground"}`}
              >
                {tag}
              </span>
            ))}
            {project.status && (
              <span className={`px-2.5 py-1 text-[10px] font-heading rounded-full ${statusColorMap[project.status] || "bg-secondary text-foreground"}`}>
                {project.status}
              </span>
            )}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight"
          >
            {project.title}
          </motion.h1>

          {project.objective && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-muted-foreground text-base md:text-lg max-w-3xl"
            >
              {project.objective}
            </motion.p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 order-2 md:order-1"
          >
            <div className="glass-card p-5 space-y-5 md:sticky md:top-24">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-muted-foreground font-heading uppercase tracking-wider">Institution</p>
                  <p className="text-sm text-foreground font-heading">{project.institution}</p>
                </div>
              </div>

              {project.objective && (
                <div className="flex items-start gap-3">
                  <Target size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-muted-foreground font-heading uppercase tracking-wider">Objective</p>
                    <p className="text-sm text-muted-foreground">{project.objective}</p>
                  </div>
                </div>
              )}

              {project.tools && (
                <div className="flex items-start gap-3">
                  <Wrench size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-muted-foreground font-heading uppercase tracking-wider">Tools & Equipment</p>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {project.tools.split(", ").map((tool) => (
                        <span key={tool} className="px-2 py-0.5 text-[10px] font-heading bg-secondary text-muted-foreground rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {project.resources && (
                <div className="flex items-start gap-3">
                  <Calendar size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-muted-foreground font-heading uppercase tracking-wider">References</p>
                    <ul className="mt-1.5 space-y-1">
                      {project.resources.map((r) => (
                        <li key={r} className="text-xs text-muted-foreground">{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.aside>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 order-1 md:order-2 space-y-10"
          >
            {/* Key Metric Callout */}
            {project.keyMetric && (
              <div className="glass-card p-5 flex items-center gap-4 border-l-4 border-l-primary">
                <span className="font-heading text-3xl md:text-4xl font-bold text-primary">{project.keyMetric.value}</span>
                <span className="text-sm text-muted-foreground font-heading">{project.keyMetric.label}</span>
              </div>
            )}

            {/* Summary */}
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Summary</h2>
              <p className="text-muted-foreground text-[15px] leading-relaxed">{project.fullSummary}</p>
            </div>

            {/* Key Findings */}
            {project.keyFindings && project.keyFindings.length > 0 && (
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Key Findings</h2>
                <ul className="space-y-3">
                  {project.keyFindings.map((finding, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{finding}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommendations */}
            {project.recommendations && project.recommendations.length > 0 && (
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Recommendations</h2>
                <ul className="space-y-3">
                  {project.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Images / Lightbox */}
            {project.images && project.images.length > 0 && (
              <ImageLightbox images={project.images} />
            )}

            {/* Karachi Harbour Chart — only for RCA Oil Tanker */}
            {slug === "rca-oil-tanker" && <KarachiHarbourChart />}

            {/* Outcome */}
            {project.outcome && (
              <div className="glass-card p-5">
                <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Outcome</h3>
                <p className="text-muted-foreground text-sm">{project.outcome}</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Related Studies */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Related Studies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((rp) => (
              <Link
                key={rp.slug}
                to={`/project/${rp.slug}`}
                className="glass-card p-5 teal-glow-hover transition-all duration-300 group"
              >
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {rp.tags.map((tag) => (
                    <span key={tag} className={`px-2 py-0.5 text-[10px] font-heading rounded ${tagColorMap[tag] || "bg-secondary text-foreground"}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="font-heading text-sm font-semibold text-foreground mb-1">{rp.title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{rp.summary}</p>
                <span className="text-xs font-heading text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Study <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
