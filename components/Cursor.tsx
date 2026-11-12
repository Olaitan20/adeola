"use client";
import { useEffect, useState } from "react";
export default function Cursor() {
  const [state, setState] = useState({
    x: -100,
    y: -100,
    label: "",
    visible: false,
  });
  useEffect(() => {
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const move = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor]");
      setState({
        x: e.clientX,
        y: e.clientY,
        label: target?.getAttribute("data-cursor") || "",
        visible: !!target,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return state.visible ? (
    <div
      aria-hidden="true"
      className="fixed z-[90] pointer-events-none hidden md:flex w-[58px] h-[58px] bg-white text-black text-[9px] tracking-[.14em] items-center justify-center rounded-full"
      style={{ left: state.x, top: state.y, transform: "translate(-50%,-50%)" }}
    >
      {state.label}
    </div>
  ) : null;
}
