import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, FileDown, ChevronDown, Send, Copy, Check, Share2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be under 1000 characters"),
});

const cvOptions = [
  { label: "Naval Architect CV", file: "/cvs/Saim_Sharaf_CV_Naval_Architect.pdf" },
  { label: "Marine Engineer CV", file: "/cvs/Saim_Sharaf_CV_Marine_Engineer.pdf" },
  { label: "Marine Surveyor CV", file: "/cvs/Saim_Sharaf_CV_Marine_Surveyor.pdf" },
];

const targetRoles = [
  "Naval Architect",
  "Marine Engineer",
  "Hull & Structures Surveyor",
  "Hydrodynamics Researcher",
  "Ship Design Engineer",
  "Classification Society Surveyor",
];

const ContactSection = () => {
  const [cvOpen, setCvOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCvOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    // Construct mailto link as fallback (no backend)
    const subject = encodeURIComponent(`Portfolio Contact from ${result.data.name}`);
    const body = encodeURIComponent(`Name: ${result.data.name}\nEmail: ${result.data.email}\n\n${result.data.message}`);
    window.location.href = `mailto:saim.sharaf@example.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitting(false);
      toast.success("Opening your email client…");
    }, 500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopied(true);
    toast.success("Link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}`;
  const emailShareUrl = `mailto:?subject=${encodeURIComponent("Check out this Naval Architecture portfolio")}&body=${encodeURIComponent(window.location.origin)}`;

  return (
    <section id="contact" className="py-14 md:py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full border border-primary/10 animate-sonar" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/5 animate-sonar-delayed" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="section-label">GET IN TOUCH</p>
        <h2 className="section-heading">Open to Opportunities</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm">
          Available for naval architecture roles, marine engineering consultancy, and research collaborations globally.
          Currently based in the Netherlands with full EU working rights.
        </p>

        {/* Target Roles */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {targetRoles.map((role) => (
            <span
              key={role}
              className="px-3 py-1 text-xs font-heading rounded-full border border-primary/30 text-primary bg-primary/5"
            >
              {role}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
          <motion.a
            href="mailto:saim.sharaf@example.com"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4 flex items-center gap-3 hover:border-primary/50 transition-colors"
          >
            <Mail className="text-primary flex-shrink-0" size={20} />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm text-foreground font-heading">saim.sharaf@example.com</p>
            </div>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/saimsharaf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-4 flex items-center gap-3 hover:border-primary/50 transition-colors"
          >
            <Linkedin className="text-primary flex-shrink-0" size={20} />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm text-foreground font-heading">linkedin.com/in/saimsharaf</p>
            </div>
          </motion.a>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 mb-10 max-w-lg mx-auto text-left"
        >
          <h3 className="font-heading font-semibold text-foreground mb-4 text-center">Send a Message</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="text-xs font-heading text-muted-foreground mb-1 block">Name</label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                className="w-full px-3 py-2 rounded-md bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
                maxLength={100}
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="contact-email" className="text-xs font-heading text-muted-foreground mb-1 block">Email</label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                className="w-full px-3 py-2 rounded-md bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="your@email.com"
                maxLength={255}
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="contact-message" className="text-xs font-heading text-muted-foreground mb-1 block">Message</label>
              <textarea
                id="contact-message"
                value={formData.message}
                onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                className="w-full px-3 py-2 rounded-md bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring min-h-[100px] resize-y"
                placeholder="How can Saim help you?"
                maxLength={1000}
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send size={16} />
              {submitting ? "Sending…" : "Send Message"}
            </button>
          </div>
        </motion.form>

        {/* CV Download */}
        <div className="relative inline-block mb-8" ref={dropdownRef}>
          <button
            onClick={() => setCvOpen((v) => !v)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-full hover:opacity-90 transition-opacity"
          >
            <FileDown size={18} />
            Download CV
            <ChevronDown size={16} className={`transition-transform ${cvOpen ? "rotate-180" : ""}`} />
          </button>

          {cvOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-lg border border-border bg-card shadow-xl overflow-hidden z-20">
              {cvOptions.map((cv) => (
                <a
                  key={cv.file}
                  href={cv.file}
                  download
                  onClick={() => setCvOpen(false)}
                  className="block px-4 py-3 text-sm font-heading text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {cv.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Share Portfolio */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-xs text-muted-foreground font-heading flex items-center gap-1">
            <Share2 size={14} /> Share
          </span>
          <a
            href={linkedInShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <button
            onClick={handleCopyLink}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            aria-label="Copy link"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
          <a
            href={emailShareUrl}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            aria-label="Share via email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
