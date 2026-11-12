import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { recordings } from "@/data/content";
import VideoPlayer from "@/components/VideoPlayer";
export function generateStaticParams() {
  return recordings.map((r) => ({ video: r.slug }));
}
export default async function RecordingPage({
  params,
}: {
  params: Promise<{ video: string }>;
}) {
  const { video } = await params;
  const i = recordings.findIndex((r) => r.slug === video);
  if (i < 0) notFound();
  const r = recordings[i],
    prev = recordings[(i - 1 + recordings.length) % recordings.length],
    next = recordings[(i + 1) % recordings.length];
  return (
    <main className="shell page-top">
      <div className="flex justify-between gap-4 mb-12">
        <p className="eyebrow">Moving images / {r.id}</p>
        <Link className="eyebrow hover:text-white" href="/archive">
          ← Archive index
        </Link>
      </div>
      <div className="max-w-[1140px] mx-auto">
        <VideoPlayer src={r.src} poster={r.thumbnail} title={r.title} />
        <div className="flex flex-col sm:flex-row sm:justify-between gap-8 mt-12">
          <div>
            <h1 className="page-title">{r.title}</h1>
            <p className="text-[13px] text-[#bdbdbd] max-w-md mt-5 leading-7">
              {r.description}
            </p>
          </div>
          <div className="meta-grid sm:min-w-[360px]">
            <div>
              <p className="eyebrow text-[#777]">Date</p>
              <p className="text-[11px] mt-3">{r.date}</p>
            </div>
            <div>
              <p className="eyebrow text-[#777]">Location</p>
              <p className="text-[11px] mt-3">{r.location}</p>
            </div>
            <div>
              <p className="eyebrow text-[#777]">Duration</p>
              <p className="text-[11px] mt-3">{r.duration}</p>
            </div>
            <div>
              <p className="eyebrow text-[#777]">Format</p>
              <p className="text-[11px] mt-3">{r.format}</p>
            </div>
          </div>
        </div>
        <nav
          aria-label="Recordings"
          className="mt-32 border-t border-[#262626] pt-9 flex justify-between gap-6"
        >
          <Link href={"/archive/" + prev.slug} className="text-[12px]">
            ← <span className="eyebrow">Previous recording</span>
            <span className="block mt-3 text-[18px]">{prev.title}</span>
          </Link>
          <Link
            href={"/archive/" + next.slug}
            className="text-[12px] text-right"
          >
            <span className="eyebrow">Next recording</span> →
            <span className="block mt-3 text-[18px]">{next.title}</span>
          </Link>
        </nav>
      </div>
    </main>
  );
}
