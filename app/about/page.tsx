import Link from "next/link";
import Image from "next/image";
import { site, photographs } from "@/data/content";
export const metadata = { title: "About" };
export default function About() {
  return (
    <main className="shell page-top">
      <p className="eyebrow">03 / Behind the image</p>
      <div className="grid md:grid-cols-12 gap-12 md:gap-16 mt-12">
        <div className="md:col-span-5">
          <div className="photo-frame aspect-[3/4]">
            <Image
              src={photographs[3].src}
              alt="Sample editorial portrait, replace with photographer's photo"
              fill
              className="object-cover"
              sizes="(max-width:760px) 100vw,45vw"
            />
          </div>
          <p className="demo mt-4">
            Demo portrait / replace with your photograph
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7 md:pt-24">
          <h1 className="page-title">{site.name}</h1>
          <p className="eyebrow mt-5">Photographer / Artist</p>
          <p className="text-[14px] leading-8 text-[#bdbdbd] mt-14">
            {site.bio}
          </p>
          <div className="border-t border-[#262626] my-12" />
          <p className="eyebrow">Artist's statement</p>
          <p className="text-[14px] leading-8 text-[#bdbdbd] mt-6">
            {site.statement}
          </p>
          <p className="text-[11px] text-[#777] mt-8">
            All personal information here is an editable placeholder, not a real
            biography.
          </p>
          <Link href="/contact" className="linkline mt-12">
            Get in touch 
          </Link>
        </div>
      </div>
    </main>
  );
}
