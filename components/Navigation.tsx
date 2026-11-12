"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/data/content";

const links = [
  ["/", "Index"],
  ["/photographs", "Photographs"],
  ["/archive", "Moving images"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    function key(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, []);

  return (
    <>
      <header
        className="fixed inset-x-0 z-50 mx-auto w-[calc(100%-1.25rem)] max-w-[1380px]
                   top-[max(0.6rem,env(safe-area-inset-top))]
                   rounded-full border border-[#223c34] bg-[#0b1b17]/90
                   shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
      >
        <div className="h-[58px] px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 min-w-0">
            <div className="flex items-center gap-2">
              <button className="hidden md:flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-[11px] text-[#dfe7e2]">
                ←
              </button>
              <button className="hidden md:flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-[11px] text-[#dfe7e2]">
                →
              </button>
            </div>
            <Link
              href="/"
              className="text-[11px] tracking-[.18em] font-medium uppercase text-[#dfe7e2] whitespace-nowrap"
              aria-label="Go to home"
            >
              {site.initials}
            </Link>
          </div>

          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center justify-center gap-6 lg:gap-8"
          >
            {links.map(([url, name]) => (
              <Link
                key={url}
                href={url}
                className={
                  "navlink " +
                  (pathname === url ||
                  (url !== "/" && pathname.startsWith(url + "/"))
                    ? "active"
                    : "")
                }
              >
                {name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden p-2 -mr-2"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
            <span className="hidden md:block text-[9px] tracking-[.22em] uppercase text-[#9bb0a7]">
              Personal image archive
            </span>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col justify-center px-8 pt-28 gap-7"
          >
            {links.map(([url, name], i) => (
              <Link
                href={url}
                key={url}
                className="text-[26px] font-light tracking-tight"
                onClick={() => setOpen(false)}
              >
                <span className="eyebrow mr-5">0{i + 1}</span>
                {name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}