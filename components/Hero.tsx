"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Loader from "./Loader";
import { site, photographs } from "@/data/content";
export default function Hero() {
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (
      !ready ||
      !ref.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-image",
        { scale: 1.075, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 1.3, ease: "power3.out" },
      );
    }, ref);
    return () => ctx.revert();
  }, [ready]);
  return (
    <>
      <Loader ready={ready} />
      <section
        ref={ref}
        className="relative min-h-[94svh] flex flex-col"
      >
        <div className="relative flex-1 min-h-[560px] md:min-h-[620px] overflow-hidden grain">
          <Image
            className="hero-image object-cover"
            src={photographs[1].src}
            alt={photographs[1].alt}
            fill
            priority
            sizes="100vw"
            onLoad={() => setReady(true)}
          />
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
          <div className="absolute top-[120px] left-6 md:left-12 eyebrow text-white">
            An independent photographic journal
          </div>
          <div className="absolute bottom-10 left-6 md:left-12 right-6 md:right-12 flex justify-between gap-5 items-end">
            <div>
              <span className="eyebrow text-white/80">
                Vol. 001 / The collection
              </span>
              <h1 className="text-[clamp(26px,3.4vw,40px)] font-normal tracking-tight mt-3">
                {site.name}
              </h1>
            </div>
            <div className="eyebrow text-white/85 text-right hidden sm:block">
              Image 002
              <br />
              Location not supplied
            </div>
          </div>
        </div>
        <div className="shell flex justify-between gap-6 py-5">
          <span className="eyebrow">Photographs / moving images</span>
          <span className="eyebrow">Scroll to turn the page ↓</span>
        </div>
      </section>
    </>
  );
}
