"use client";
import Image from "next/image";
import { Photograph } from "@/data/content";
export default function Photo({
  photo,
  priority = false,
  onClick,
  ratio,
}: {
  photo: Photograph;
  priority?: boolean;
  onClick?: () => void;
  ratio?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      data-cursor={onClick ? "VIEW" : undefined}
      className="block w-full text-left disabled:opacity-100"
      aria-label={onClick ? `View ${photo.title}` : undefined}
    >
      <div
        className="photo-frame"
        style={{
          aspectRatio:
            ratio ||
            (photo.ratio === "portrait"
              ? "3 / 4"
              : photo.ratio === "square"
                ? "1 / 1"
                : "3 / 2"),
        }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width:768px) 100vw, 70vw"
          priority={priority}
          className="object-cover"
        />
      </div>
      <div className="captionline">
        <span>
          {photo.id.toUpperCase()} / {photo.title}
        </span>
        <span>{photo.date}</span>
      </div>
    </button>
  );
}
