import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { collections, getPhoto } from "@/data/content";
import Viewer from "@/components/Viewer";
export function generateStaticParams() {
  return collections.map((c) => ({ collection: c.slug }));
}
export default async function CollectionPage({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection } = await params;
  const index = collections.findIndex((c) => c.slug === collection);
  if (index < 0) notFound();
  const c = collections[index];
  const photos = c.photoIds.map(getPhoto);
  const prev =
      collections[(index - 1 + collections.length) % collections.length],
    next = collections[(index + 1) % collections.length];
  return (
    <main>
      <section className="shell page-top">
        <p className="eyebrow">
          Photographs / Chapter {String(index + 1).padStart(2, "0")}
        </p>
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-9 my-8 md:my-12">
          <div>
            <h1 className="page-title">{c.title}</h1>
            <p className="text-[13px] text-[#bdbdbd] mt-5 max-w-md">
              {c.description}
            </p>
          </div>
          <div className="eyebrow">
            {c.dateRange}
            <br />
            {c.photoIds.length} images / Vol. 001
          </div>
        </div>
      </section>
      <div className="relative w-full h-[65vh] min-h-[400px] photo-frame grain">
        <Image
          src={getPhoto(c.cover).src}
          alt={getPhoto(c.cover).alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <section className="shell">
        <div className="pt-8 flex justify-between gap-4 eyebrow">
          <span>
            Chapter {String(index + 1).padStart(2, "0")} / {c.title}
          </span>
          <span>Select any image to examine</span>
        </div>
        <div className="photosequence">
          <Viewer photos={photos} />
        </div>
        <nav
          aria-label="Collection chapters"
          className="border-t border-[#262626] mt-32 pt-9 flex gap-6 justify-between items-end"
        >
          <Link href={"/photographs/" + prev.slug} className="text-[12px]">
            ← <span className="eyebrow">Previous</span>
            <span className="block mt-3 text-[18px]">{prev.title}</span>
          </Link>
          <Link href="/photographs" className="linkline hidden sm:block">
            All chapters
          </Link>
          <Link
            href={"/photographs/" + next.slug}
            className="text-[12px] text-right"
          >
            <span className="eyebrow">Next</span> →
            <span className="block mt-3 text-[18px]">{next.title}</span>
          </Link>
        </nav>
      </section>
    </main>
  );
}
