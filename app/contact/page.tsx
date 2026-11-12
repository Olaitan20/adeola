import { site } from "@/data/content";
export const metadata = { title: "Contact" };
export default function Contact() {
  return (
    <main className="shell page-top min-h-[75vh]">
      <p className="eyebrow">04 / Final page</p>
      <div className="grid md:grid-cols-12 mt-20 md:mt-28">
        <div className="md:col-span-8">
          <h1 className="page-title">A note, a question, a collaboration.</h1>
          <p className="text-[14px] text-[#bdbdbd] leading-8 mt-8 max-w-lg">
            For commissions, collaborations or simply a conversation about
            photographs, write a note. Replace the demo email address in the
            content file before going live.
          </p>
          <a
            href={"mailto:" + site.email}
            className="inline-block text-[clamp(19px,3vw,32px)] border-b border-[#777] pb-3 mt-16 hover:border-white break-all"
          >
            {site.email} 
          </a>
          <div className="mt-20 border-t border-[#262626] pt-8">
            <p className="eyebrow">Other places</p>
            <p className="text-[12px] text-[#777] mt-5">
              Instagram link not supplied. Add your profile URL in
              data/content.ts.
            </p>
            {site.instagram && (
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="linkline mt-4"
              >
                Instagram 
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
