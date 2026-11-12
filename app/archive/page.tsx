import Link from "next/link";
import Image from "next/image";
import { recordings } from "@/data/content";
import Reveal from "@/components/Reveal";
export const metadata = { title: "Moving Image Archive" };
export default function Archive() {
  return (
    <main className="shell page-top">
      <div className="flex justify-between items-start gap-8 pb-12 border-b border-[#262626]">
        <div>
          <div className="eyebrow">02 / Personal moving-image archive</div>
          <h1 className="page-title mt-7">Moving images.</h1>
          <p className="text-[13px] text-[#bdbdbd] mt-5 max-w-md leading-7">
            Recordings, small observations and moments between photographs.
            Sample footage is provided for demonstration.
          </p>
        </div>
        <div className="eyebrow text-right">
          Vol. 001
          <br />
          {recordings.length} recordings
          <br />
          Demo / undated
        </div>
      </div>
      <div className="mt-24">
        {recordings.map((r, i) => (
          <Reveal
            key={r.id}
            className={
              "mb-24 md:mb-36 " + (i % 2 ? "md:ml-[32%]" : "md:mr-[19%]")
            }
          >
            <Link href={"/archive/" + r.slug} data-cursor="PLAY">
              <div
                className="photo-frame grain"
                style={{ aspectRatio: i === 1 ? "4 / 3" : "16 / 9" }}
              >
                <Image
                  src={r.thumbnail}
                  alt={"Sample video still for " + r.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:760px) 100vw,70vw"
                />
                <span className="absolute z-10 top-5 left-5 eyebrow text-white">
                  {r.id} / {r.format}
                </span>
                <span className="absolute z-10 bottom-5 right-6 text-[10px] border border-white/70 px-4 py-3 tracking-[.17em]">
                  PLAY 
                </span>
              </div>
              <div className="flex justify-between items-start mt-5 gap-6">
                <div>
                  <div className="eyebrow text-[#777]">
                    Recording {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-[20px] mt-3">{r.title}</h2>
                </div>
                <div className="eyebrow text-right text-[#777]">
                  {r.date}
                  <br />
                  {r.duration}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
