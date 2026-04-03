import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

export type ProjectImage = {
  src: string;
  caption: string;
  type?: "youtube";
};

interface ImageLightboxProps {
  images: ProjectImage[];
}

const ImageLightbox = ({ images }: ImageLightboxProps) => {
  const [selected, setSelected] = useState<ProjectImage | null>(null);

  if (images.length === 0) return null;

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:embed\/|watch\?v=|youtu\.be\/)([^&?/]+)/);
    return match ? match[1] : "";
  };

  return (
    <>
      <div>
        <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Figures & Diagrams</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelected(img)}
              className="group glass-card overflow-hidden text-left"
            >
              <div className="aspect-video bg-secondary/50 flex items-center justify-center overflow-hidden relative">
                {img.type === "youtube" ? (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${getYouTubeId(img.src)}/hqdefault.jpg`}
                      alt={img.caption}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/30">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <Play size={18} className="text-primary-foreground ml-0.5" />
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <p className="text-[10px] text-muted-foreground italic p-2 line-clamp-2">{img.caption}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
              {selected.type === "youtube" ? (
                <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                  <iframe
                    src={`${selected.src}?autoplay=1`}
                    title={selected.caption}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <img
                  src={selected.src}
                  alt={selected.caption}
                  className="w-full rounded-lg border border-border"
                />
              )}
              <p className="text-sm text-muted-foreground italic text-center mt-3">{selected.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageLightbox;
