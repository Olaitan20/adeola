import Link from "next/link";
export default function NotFound() {
  return (
    <main className="shell page-top min-h-[70vh]">
      <p className="eyebrow">404 / Page missing</p>
      <h1 className="page-title mt-10">This page is not in the archive.</h1>
      <Link className="linkline mt-12" href="/">
        Return to index ↗
      </Link>
    </main>
  );
}
