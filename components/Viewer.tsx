"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import type { Photograph } from "@/data/content";
export default function Viewer({ photos }: { photos: Photograph[] }) {
  const [index, setIndex] = useState<number | null>(null);
  useEffect(() => {
    if (index === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function down(e: KeyboardEvent) {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight")
        setIndex((i) => (i === null ? null : (i + 1) % photos.length));
      if (e.key === "ArrowLeft")
        setIndex((i) =>
          i === null ? null : (i - 1 + photos.length) % photos.length,
        );
    }
    window.addEventListener("keydown", down);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", down);
    };
  }, [index, photos.length]);
  return (
    <>
      {photos.map((p, i) => (
        <div key={p.id} onClick={() => setIndex(i)}>
          <PhotoThumb photo={p} />
        </div>
      ))}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photograph viewer"
            className="viewer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="view-icon absolute top-5 right-[5vw]"
              aria-label="Close image viewer"
              autoFocus
              onClick={() => setIndex(null)}
            >
              <X size={19} />
            </button>
            <div className="viewer-image">
              <Image
                src={photos[index].src}
                fill
                alt={photos[index].alt}
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="viewer-controls">
              <div>
                <p className="eyebrow">
                  {photos[index].id.toUpperCase()} /{" "}
                  {String(index + 1).padStart(2, "0")}—
                  {String(photos.length).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm">{photos[index].title}</p>
                <p className="text-[11px] text-[#777] mt-1">
                  {photos[index].date} · {photos[index].location}
                </p>
                <p className="text-[11px] text-[#bdbdbd] mt-2 hidden sm:block">
                  {photos[index].caption}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className="view-icon"
                  aria-label="Previous photograph"
                  onClick={() =>
                    setIndex((index - 1 + photos.length) % photos.length)
                  }
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  className="view-icon"
                  aria-label="Next photograph"
                  onClick={() => setIndex((index + 1) % photos.length)}
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
function PhotoThumb({ photo }: { photo: Photograph }) {
  return (
    <div data-cursor="VIEW" className="cursor-pointer">
      <div
        className="photo-frame"
        style={{ aspectRatio: photo.ratio === "portrait" ? "3/4" : "3/2" }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width:760px) 100vw, 65vw"
          className="object-cover"
        />
      </div>
      <div className="captionline">
        <span>
          {photo.id.toUpperCase()} / {photo.title}
        </span>
        <span>{photo.date}</span>
      </div>
    </div>
  );
}
