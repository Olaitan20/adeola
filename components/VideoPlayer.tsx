"use client";
import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  ScanLine,
} from "lucide-react";
const fmt = (n: number) =>
  Number.isFinite(n)
    ? `${Math.floor(n / 60)
        .toString()
        .padStart(2, "0")}:${Math.floor(n % 60)
        .toString()
        .padStart(2, "0")}`
    : "00:00";
export default function VideoPlayer({
  src,
  poster,
  title,
}: {
  src: string;
  poster: string;
  title: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [analogue, setAnalogue] = useState(true);
  const [error, setError] = useState(false);
  const toggle = async () => {
    const v = ref.current;
    if (!v) return;
    try {
      if (v.paused) await v.play();
      else v.pause();
    } catch {
      setError(true);
    }
  };
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (
        ["INPUT", "TEXTAREA", "BUTTON"].includes(
          (e.target as HTMLElement).tagName,
        )
      )
        return;
      if (e.code === "Space" && document.activeElement === document.body) {
        e.preventDefault();
        void toggle();
      }
      if (e.key === "ArrowRight" && ref.current)
        ref.current.currentTime = Math.min(
          ref.current.duration || 0,
          ref.current.currentTime + 5,
        );
      if (e.key === "ArrowLeft" && ref.current)
        ref.current.currentTime = Math.max(0, ref.current.currentTime - 5);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <div>
      <div
        ref={container}
        className="relative bg-black aspect-video overflow-hidden group"
      >
        <video
          ref={ref}
          className="w-full h-full object-contain"
          src={src}
          poster={poster}
          preload="metadata"
          playsInline
          onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onError={() => setError(true)}
          aria-label={title}
          controls={false}
        />
        {analogue && <div className="video-overlay" aria-hidden="true" />}
        {!playing && !error && (
          <button
            onClick={toggle}
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center text-white"
          >
            <span className="bg-black/55 border border-white/40 p-6 rounded-full">
              <Play size={27} fill="white" />
            </span>
          </button>
        )}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-sm bg-black">
            The sample video could not be loaded. Replace the remote video URL
            with your own file in data/content.ts.
          </div>
        )}
      </div>
      <div className="flex gap-4 items-center py-5 border-b border-[#262626]">
        <button aria-label={playing ? "Pause" : "Play"} onClick={toggle}>
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <span className="text-[10px] tabular-nums min-w-[42px]">
          {fmt(progress)}
        </span>
        <input
          className="flex-1 accent-white h-[2px] cursor-pointer"
          type="range"
          min="0"
          max={duration || 1}
          step=".1"
          value={progress}
          aria-label="Seek position"
          onChange={(e) => {
            if (ref.current) ref.current.currentTime = Number(e.target.value);
          }}
        />
        <span className="text-[10px] tabular-nums min-w-[42px]">
          {fmt(duration)}
        </span>
        <button
          aria-label={volume === 0 ? "Unmute" : "Mute"}
          onClick={() => {
            const v = volume === 0 ? 1 : 0;
            setVolume(v);
            if (ref.current) ref.current.volume = v;
          }}
        >
          {volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}
        </button>
        <input
          aria-label="Volume"
          type="range"
          className="w-[54px] accent-white hidden sm:block"
          min="0"
          max="1"
          step=".05"
          value={volume}
          onChange={(e) => {
            const v = Number(e.target.value);
            setVolume(v);
            if (ref.current) ref.current.volume = v;
          }}
        />
        <button
          title="Toggle analogue overlay"
          aria-label="Toggle analogue overlay"
          aria-pressed={analogue}
          onClick={() => setAnalogue((v) => !v)}
          className={analogue ? "text-white" : "text-[#777]"}
        >
          <ScanLine size={17} />
        </button>
        <button
          aria-label="Fullscreen"
          onClick={() => {
            if (document.fullscreenElement) void document.exitFullscreen();
            else void container.current?.requestFullscreen();
          }}
        >
          <Maximize size={17} />
        </button>
      </div>
    </div>
  );
}
