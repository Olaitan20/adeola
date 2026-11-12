import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { photographs, recordings, site } from "@/data/content";
export default function Home() {
  return (
    <main>
      <Hero />
      <section className="shell py-24">
        <Reveal className="flex flex-col md:flex-row justify-between gap-9 items-start mb-24">
          <div>
            <p className="eyebrow">01 / Selected photographs</p>
            <h2 className="page-title mt-5">Fragments of an archive.</h2>
          </div>
          <p className="text-[13px] leading-7 text-[#bdbdbd] max-w-sm">
            A collection of moments, details and places, arranged as pages
            rather than a feed. All content shown here is sample material.
          </p>
        </Reveal>
        <div className="grid grid-cols-12 gap-y-24 md:gap-y-36">
          <Reveal className="col-span-12 md:col-span-8">
            <Link href="/photographs/portraits" data-cursor="OPEN">
              <div className="photo-frame aspect-[4/3]">
                <Image
                  src={photographs[0].src}
                  fill
                  alt={photographs[0].alt}
                  className="object-cover"
                  sizes="(max-width:760px) 100vw,70vw"
                />
              </div>
              <div className="captionline">
                <span>01 / {photographs[0].title}</span>
                <span>View chapter</span>
              </div>
            </Link>
          </Reveal>
          <Reveal className="col-span-8 col-start-5 md:col-span-4 md:col-start-9 md:mt-40">
            <Link href="/photographs/personal" data-cursor="OPEN">
              <div className="photo-frame aspect-[3/4]">
                <Image
                  src={photographs[4].src}
                  alt={photographs[4].alt}
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
              <div className="captionline">
                <span>02 / {photographs[4].title}</span>
              </div>
            </Link>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-9 md:col-start-2">
            <Link href="/photographs/street" data-cursor="OPEN">
              <div className="photo-frame aspect-[16/9]">
                <Image
                  src={photographs[5].src}
                  alt={photographs[5].alt}
                  fill
                  className="object-cover"
                  sizes="80vw"
                />
              </div>
              <div className="captionline">
                <span>03 / {photographs[5].title}</span>
                <span>View chapter</span>
              </div>
            </Link>
          </Reveal>
        </div>
        <div className="text-center mt-24">
          <Link className="linkline" href="/photographs">
            Explore photographs 
          </Link>
        </div>
      </section>
      <section className="border-t border-[#262626] mt-10 py-24">
        <div className="shell">
          <Reveal>
            <div className="flex justify-between gap-5 mb-8">
              <p className="eyebrow">02 / Moving image archive</p>
              <p className="eyebrow">REC / 001</p>
            </div>
            <Link
              href={"/archive/" + recordings[0].slug}
              data-cursor="PLAY"
              className="block relative photo-frame aspect-[16/8] grain"
            >
              <Image
                alt="Sample recording still"
                fill
                className="object-cover"
                src={recordings[0].thumbnail}
                sizes="100vw"
              />
              <span className="absolute bottom-6 left-6 text-[11px] tracking-[.2em] uppercase border border-white/60 px-4 py-3">
                Play recording 
              </span>
            </Link>
            <div className="flex justify-between gap-6 items-start mt-6">
              <div>
                <p className="text-sm">{recordings[0].title}</p>
                <p className="eyebrow mt-3 text-[#777]">
                  {recordings[0].id} / {recordings[0].date}
                </p>
              </div>
              <Link className="linkline" href="/archive">
                Enter archive 
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <div className="shell py-12">
        <p className="eyebrow">{site.subtitle}</p>
        <p className="text-[11px] text-[#777] mt-4">
          Demo portfolio — customize content in data/content.ts
        </p>
      </div>
    </main>
  );
}
