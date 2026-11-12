"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/content";
export default function Loader({ ready }: { ready: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      sessionStorage.getItem("archive-intro-seen")
    )
      return;
    setShow(true);
  }, []);
  useEffect(() => {
    if (ready && show) {
      sessionStorage.setItem("archive-intro-seen", "1");
      setShow(false);
    }
  }, [ready, show]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          className="fixed inset-0 z-[80] bg-black flex flex-col items-center justify-center gap-8"
        >
          <span className="text-[30px] tracking-[.12em]">{site.initials}</span>
          <div className="eyebrow">Personal image archive / Vol. 001</div>
          <div className="w-40 h-[1px] bg-[#262626] overflow-hidden">
            <motion.div
              className="h-full bg-white"
              initial={{ width: "5%" }}
              animate={{ width: ready ? "100%" : "45%" }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <button
            className="eyebrow underline underline-offset-4"
            onClick={() => {
              sessionStorage.setItem("archive-intro-seen", "1");
              setShow(false);
            }}
          >
            Skip introduction
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
