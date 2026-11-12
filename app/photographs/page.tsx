import Link from "next/link";
import Image from "next/image";
import { collections, getPhoto } from "@/data/content";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Photographs" };

export default function PhotographsPage() {
  return (
    <main className="photobook-shell page-top">
      <div className="photobook-window">
        <div className="photobook-window-bar">
          <div className="window-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="address-bar">localhost:3000/photographs</div>
          <div className="window-toolbar">
            <span>Verify it&apos;s you</span>
            <span>Relaunch to update</span>
          </div>
        </div>

        <div className="photobook-content">
          <div className="photobook-topbar">
            <span className="brand-mark">DEOLA / VOL. 001</span>
            <nav aria-label="Chapter navigation" className="topbar-nav">
              <Link href="/">Index</Link>
              <Link href="/photographs" className="is-active">Photographs</Link>
              <Link href="/archive">Moving images</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <span>Personal Image Archive</span>
            </nav>
          </div>

          <div className="photobook-subheader">
            <span>01 / Photographic collection</span>
            <div className="subheader-meta">
              <span>Vol. 001</span>
              <span>05 chapters</span>
              <span>Demo / updated</span>
            </div>
          </div>

          <div className="photobook-intro">
            <div>
              <h1>The photobook.</h1>
            </div>
            <p>
              Collected impressions and considered frames. Each chapter opens
              another small world.
            </p>
          </div>

          <div className="collection-grid">
            {collections.map((c, i) => (
              <Reveal key={c.id}>
                <article className={`archive-card card-${i + 1}`}>
                  <Link href={"/photographs/" + c.slug} className="group block" data-cursor="OPEN">
                    <div className="archive-card-image">
                      <Image
                        alt={getPhoto(c.cover).alt}
                        src={getPhoto(c.cover).src}
                        fill
                        sizes="(max-width:760px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="archive-card-copy">
                      <div className="card-number">Chapter {String(i + 1).padStart(2, "0")}</div>
                      <div className="card-title-row">
                        <h2>{c.title}</h2>
                        <span>{c.photoIds.length} images</span>
                      </div>
                      <p>{c.description}</p>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
