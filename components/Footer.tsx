import Link from "next/link";
import { site } from "@/data/content";
export default function Footer() {
  return (
    <footer className="shell border-t border-[#262626] mt-28 py-10 md:py-14 flex flex-col md:flex-row gap-8 md:items-end md:justify-between">
      <div>
        <div className="eyebrow">Personal image archive / Vol. 001</div>
        <div className="mt-3 text-[22px] tracking-tight">{site.name}</div>
        <div className="text-[10px] text-[#777] mt-4">
          © {new Date().getFullYear()} · Replace demo credits before publication
        </div>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {[
          ["/", "Index"],
          ["/photographs", "Photographs"],
          ["/archive", "Moving images"],
          ["/about", "About"],
          ["/contact", "Contact"],
        ].map(([href, label]) => (
          <Link key={href} href={href} className="navlink">
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
