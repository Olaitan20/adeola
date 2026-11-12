# The Image Archive — Next.js portfolio

A complete editable **multi-route digital photobook and moving-image archive** built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, GSAP/ScrollTrigger and Lucide React.

## Quick start

1. Install **Node.js 20.9+**.
2. Extract this ZIP and open a terminal inside the project folder.
3. Run `npm install`.
4. Run `npm run dev` and open http://localhost:3000.
5. Run `npm run build` to produce a production build; use `npm start` to serve it.
6. To deploy, push the project to GitHub and import it into Vercel. Keep the framework preset as Next.js.

## Routes

- `/` — cover with image-ready intro loader, selected photographs, film preview.
- `/photographs` — photobook index.
- `/photographs/[collection]` — individual photo chapters and keyboard-operable viewer.
- `/archive` — moving-image index.
- `/archive/[video]` — recording player with playback, seek, volume, fullscreen and analogue overlay toggle.
- `/about` — editorial about page.
- `/contact` — contact via mailto link (no pretend backend form).

## Customize your content

**All names, dates, biography, collection labels and portfolio works are explicitly DEMO placeholders**. Edit `data/content.ts`.

- `site` — photographer name, monogram, email, biography, statement and social links.
- `photographs` — photo records with title, URL, metadata, aspect ratio, collection and display order.
- `collections` — chapters, cover photo ID, photo IDs and ordering.
- `recordings` — film URL, still, metadata and order.

For your own media, add photographs under `public/photos` and videos under `public/videos`, then set `src: '/photos/my-photo.jpg'` or `src: '/videos/my-video.mp4'` in `data/content.ts`. Locally hosted assets avoid external dependencies.

**Demo photo URLs** use Unsplash images and require network access. **Demo videos** reference the public MDN sample video URL, also requiring network access. These assets are not included in the ZIP and are not the photographer's original content. Replace before publishing. The sample archive uses the same small clip more than once so that all dynamic video routes are demonstrated without claiming original footage.

## Design & accessibility

- Monochrome UI. Original images and video are not desaturated.
- Responsive top nav, mobile overlay, desktop contextual cursor.
- Semantic links, labels, alt text, accessible viewer controls, Escape and arrow-key viewer navigation.
- Video keyboard support: Space while page background focused, left/right arrows skip ±5 sec.
- Reduced-motion visitors are not forced through animations.
- Loader is dismissed on hero-image `onLoad`, or using Skip. Returning visits bypass the intro.
- GSAP scroll reveals are cleaned up with `context.revert()`.

## Important pre-publication checklist

- [ ] Replace every demo photo and recording with your own or properly licensed assets.
- [ ] Replace photography brand name and biography.
- [ ] Replace placeholder email `hello@example.com`; add real social URL.
- [ ] Check video formats, file sizes, and playback on Safari and mobile.
- [ ] Run `npm install`, `npm run build` and live browser testing in a network-enabled development machine.
- [ ] Ensure you have rights to publish all images and videos.

## Notes

The contact page uses a functional `mailto:` link, deliberately not an unconnected form. Media files are not embedded in this source ZIP because no original images or footage were provided. This project was assembled without internet package installation, so dependency installation and browser verification must be done on your own machine or hosting platform.
