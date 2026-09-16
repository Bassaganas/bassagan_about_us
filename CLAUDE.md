# CLAUDE.md

This file guides Claude Code when working in this repository.

## Overview

This is Paula Bassagañas's personal portfolio: a single-page site built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v3. It is built as a static export (`output: "export"`) and deployed to Vercel by GitHub Actions. There are no tests.

The README is partly out of date: it mentions GitHub Pages, dark mode and a server-side email route. When it disagrees with this file or the code, go by this file and the code.

## Commands

```bash
npm run dev          # dev server on http://localhost:3000
npm run build        # static export to out/
npx tsc --noEmit     # type-check
npx eslint src       # lint (same result as `npm run lint`, which uses the deprecated `next lint`)
```

- `next.config.js` tells the build to skip type-checking and linting, so a passing `npm run build` proves neither. Run `tsc` and `eslint` separately.
- Lint and type-check are both clean. Keep them that way: any error you see is yours.

## Active config files

The repo has leftover duplicate configs. Only these are loaded, so make changes there:

| Concern | Active                                               | Ignored                                                                      |
| ------- | ---------------------------------------------------- | ---------------------------------------------------------------------------- |
| Next.js | `next.config.js`                                     | `next.config.ts`, `next.config.js.bak`, `temp_config.js` (also syntactically invalid) |
| PostCSS | `postcss.config.js` (Tailwind v3 + autoprefixer)     | `postcss.config.mjs` (Tailwind v4 plugin)                                    |
| ESLint  | `eslint.config.mjs` (flat config)                    | `.eslintrc.json` (its rule overrides have no effect)                         |

Next.js loads `next.config.js` before `.ts` and `postcss.config.js` before `.mjs`. ESLint 9 reads only the flat config.

## Architecture

`src/app/page.tsx` is the only page. It renders these sections in order: `Header`, `Hero` (`#about`), `UpcomingEvents` (`#events`), the timeline (`#professional-journey`), `Testimonials` (`#feedback`), `TestingFantasy` (`#testing-fantasy`), `PhotoGallery` (`#gallery`), `ContactSection` (`#contact`), `Footer`. `src/components/Brand.tsx` holds the logo marks (`TildeMark`, `TildeBare`, `Wordmark`, `Lockup`). Almost all content lives in typed arrays under `src/data/`, and the components only render it:

- `src/data/timeline-data.ts`: `timelineData` holds jobs (`type: 'experience'`) and past talks (`type: 'speaking'`).
- `src/data/additional-data.ts`: `upcomingEventsData` holds the Upcoming Events cards, `photosData` the gallery photos (8 per page, auto-rotating) and `testimonialsData` the quotes in the feedback section.

Two helpers sit between the data and the components:

- `src/lib/timeline.ts`: `pastTimelineItems()` filters out future entries and sorts newest first, and `siteStats()` derives the headline numbers shown in the hero and the feedback section (years of experience, talks delivered, average rating, respondents, companies). Ratings are recorded on different scales, so `siteStats` normalises each to a 5 point scale before averaging. **Never hardcode these numbers in a component** — add to the data and let them be derived.
- `src/lib/images.ts`: `isLogo()` marks the files under `public/images/` that are brand marks, so `Timeline` and `PhotoGallery` show them whole instead of cropping them.

The path alias `@/*` maps to `src/*`.

### Adding talks, tutorials and conferences

Follow these rules every time a talk, tutorial or conference is added:

1. **Required fields:** every entry needs a date, a title, a description and a photo, with the photo saved in `public/images/`. If any of these is missing, ask for it rather than leaving it out.
2. **Future events go in `upcomingEventsData`.** The Upcoming Events section must always show the next three upcoming events, soonest first. The component renders the array as it is, without sorting or filtering, so keep it ordered and remove events once they have happened. Note that `EventItem` has no photo field and the cards don't display photos yet; ask before adding one.
3. **Past events go on the journey.** Once an event has happened, move it from `upcomingEventsData` to `timelineData` as `type: 'speaking'`. Give it a `photo` (or `photos` for more than one), a `link` to the session or its materials, `tags`, and `feedback` whenever feedback exists: `feedback.award` for the rating, respondents and rank, and `feedback.quote` for a standout comment. Raw feedback from past events is in `src/data/conference-feedback.ts`. Rewrite the date in the timeline format, for example `"May 11-13, 2026"` becomes `"May 2026"`. Then promote the next future event into `upcomingEventsData` so that it still lists three.

### Editing content

- **Timeline `date` format:** start with a full English month name and year, for example `"November 2025"` or `"July 2022 - Present"`. Only the part before `" - "` is parsed, and that part drives both sorting and the future-date filter. Other formats are parsed incorrectly.
- **Dates are evaluated at build time.** Because the site is a static export, the future-date filter in `page.tsx` and the copyright year in `Footer.tsx` are fixed when the site is built. An entry for an upcoming month appears only after a rebuild once that month has started.
- **Roles:** experience entries carry `role` and `company` alongside `title`. The card shows `role` as its heading and `company` underneath, falling back to `title`. Keep all three in step when editing one.
- **Long lists collapse.** The timeline shows 4 entries and the feedback wall 6, each with a down-arrow that reveals more. This keeps the page scrollable rather than endless, so don't remove it when adding entries; new data simply raises the "N more" count.
- **Talks:** speaking entries carry `talk`, the session title, shown under the conference name. When it is absent the card falls back to deriving it from `feedback.award.title`, stripping the organiser's session code (`"Tut D - "`). Prefer setting `talk` explicitly on new entries.
- **Photos:** on a timeline item, `photos` (a carousel) takes precedence over `photo`.
- **Logos vs photographs:** a file listed in `src/lib/images.ts` is shown whole on a light background; everything else is cropped. Add the distinctive part of the file name there when a new logo arrives, or it gets cropped like a photo.
- **Image files:** put them in `public/images/` and reference them as `/images/<file>` (`next/image` runs with `unoptimized: true`). Paths are case-sensitive in production on Vercel's Linux builds, even though macOS accepts a mismatched case locally.
- **Section anchors:** the section `id`s (`about`, `events`, `professional-journey`, `feedback`, `testing-fantasy`, `gallery`, `contact`) are link targets in `Header.tsx` (which also highlights the one in view), `Footer.tsx` and `Hero.tsx`. If you rename one, update those links.

### Contact form

`ContactSection.tsx` sends messages from the browser with EmailJS (`emailjs.sendForm`). It reads `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, which are baked into the bundle at build time. Locally they come from `.env.local` (gitignored). The form field names `user_name`, `user_email` and `message` must match the variables in the EmailJS template.

### Unused code

- `src/app/api/contact/route.ts` is a SendGrid POST handler that nothing calls. A static export doesn't include route handlers, so it can't run in production either.
- `page.tsx` doesn't import `src/components/Contact.tsx`, an early draft of the contact form that still carries a placeholder email and the pre-redesign styling.
- Nothing imports `src/data/conference-feedback.ts`. It archives the raw feedback emails from conference organizers; use it as the source when adding `feedback` quotes to timeline items.
- `public/images/README.md` lists outdated file names.

## Design system

Defined in `tailwind.config.js` and `src/app/globals.css`. Stay inside it rather than reaching for raw Tailwind palettes.

- **Colour:** the palette is the brand's, with hexes from `brand/README.txt`: coral-600 `#C2371F` is the mark, coral-400 `#FF6B4A` the light variant for ink grounds, ink-950 `#1A1613` the ink, ink-500 `#6F655E` the label grey, `cream` `#FFFDFB` the light ground. `coral-*` is the brand accent (calls to action, experience entries, highlights). `ink-*` is the cool neutral for text, borders and the dark sections. `aqua-*` is the secondary accent for talks, awards and audience feedback. `orange-*` survives only inside gradients. Don't reintroduce `purple-*` or Tailwind's default `gray-*`.
- **Type:** `font-sans` is Inter, `font-display` is Poppins (applied to all headings), `font-mono` is JetBrains Mono, used for dates, counters, statistics and eyebrow labels. That mono detailing is what makes the page read as technical, so keep it for data rather than prose.
- **Component classes** in `globals.css`: `.shell` (the one horizontal container, used by every section), `.section` (vertical rhythm), `.eyebrow` + `.section-title` + `.section-lead` (the heading trio each section opens with), `.card` / `.card-hover`, `.chip`, `.btn` with `.btn-primary` / `.btn-secondary`, and the `.dot-bg` / `.grid-bg` background textures.
- **Each section is a page.** Every top-level section carries `.snap-section`, which fills the viewport and snaps on scroll, so landing on an anchor shows that section alone and never a slice of the next. Snapping is `proximity`, never `mandatory`, so taller sections still scroll freely inside themselves.
- **No seams between sections.** Neighbouring sections share a ground colour and fade into each other with gradients; don't add borders between them. The two dark bands (feedback, footer) keep a crisp edge on purpose.
- **Section rhythm:** light and dark sections alternate. The feedback section and the footer are `ink-950`; everything else is white or `ink-50`.

### Voice

**Never use em dashes (`—`, `&mdash;`) or en dashes in site copy.** Paula reads them as a sign the text was generated rather than written. Use a comma, a colon, or a second sentence instead. This covers component copy, the descriptions in `src/data/`, and image alt text. The raw organiser emails archived in `src/data/conference-feedback.ts` are quoted source material and stay as they are.

### Brand

The logo kit and its written rules live in `brand/` at the repo root, deliberately **outside `public/`** so the source files and the brand guide are versioned but never published. Read `brand/README.txt` before touching anything visual. The rules that bite most often:

- **The ñ is always coral**, in every lockup and heading. Never set the wordmark in one flat colour, never replace it with a plain `n`.
- **Purple is for talks and speaking only**, never for the logo. Coral is the mark, the ñ and links.
- **Never put the coral icon on a coral ground** — use the cream (reverse) mark, as the Testing Fantasy panel does.
- The lockup is rebuilt in JSX in `Brand.tsx` rather than loaded from the SVG files, because those set live Poppins text that falls back to Helvetica inside an `<img>`.
- Favicons are the only brand files under `public/`, at the root, wired up in `layout.tsx`.
- **The tilde as a graphic** appears on the three brand-coloured surfaces only: the dark feedback panel, the coral guild panel and the dark footer. One large mark each (`TildeWatermark` in `Brand.tsx`), tilted, bleeding off a corner, at 6-10% cream. The light content sections stay clean. This rule is what keeps it from looking scattered: the mark shows up where the brand ground shows up, nowhere else.
- **Do not tile it.** A repeating tilde texture was tried across the whole page and was too busy; the light sections keep the neutral dot grid and the dark panel its engineering grid, which stay quiet behind text.
- Favicons are the only brand files under `public/`, at the root, wired up in `layout.tsx`.
- **The tilde pattern** (`.tilde-bg` for light grounds, `.tilde-bg-light` for ink) is the page texture: one SVG tile holding four marks at different sizes, angles and mirrorings, repeating at 360px so the eye reads scatter rather than a grid. Apply it as a `pointer-events-none absolute inset-0` overlay inside a `relative` section, with the content on `relative z-10`. Keep the opacity inside the SVG; it must stay faint enough not to touch legibility.
- **Don't combine the pattern with a large single mark** on the same surface. The guild panel keeps its accent mark and skips the tile for that reason.
- **The single watermark** (`TildeWatermark` in `Brand.tsx`) is placed by hand, never tiled: at most one per section, always in dead space beside or below the content, never behind text, and hidden at widths where that space disappears. Vary size, rotation and mirroring so it reads as composed rather than repeated. Content beside one needs `relative z-10`, and the section needs `relative overflow-hidden`.

### Images must be optimised by hand

`next.config.js` sets `images.unoptimized: true`, which is required for `output: "export"`. **Next does not resize anything**, so whatever is committed is what every visitor downloads. The hero portrait was a 3.1MB PNG displayed at 320px until it was converted to a 64KB WebP.

Before adding an image, resize it to roughly twice its largest display size and convert it:

```bash
cwebp -q 82 -resize 800 0 source.png -o public/images/name.webp
```

Every referenced image is already a WebP. The original JPG/PNG files are still in `public/images/` but nothing points at them; keep new additions in WebP so it stays that way.

### SEO

`src/lib/site.ts` holds the canonical origin, title and description; `robots.ts`, `sitemap.ts`, the metadata in `layout.tsx` and the JSON-LD all read from it, so the domain is defined in exactly one place. `StructuredData.tsx` emits a schema.org graph (Person, WebSite, the Testing Fantasy organisation, and an Event per upcoming talk) derived from `src/data`, so it cannot drift from the page. Keep the meta description under ~155 characters or search engines truncate it.

### Responsiveness

The layout is verified from 320px to 1920px, and must stay that way:

- **No horizontal overflow at any width.** The usual culprit is a `truncate` (nowrap) or long unbroken string inside a grid or flex item: it forces the track wider than the viewport. Give such an item `min-w-0`, or let the text wrap.
- Keep decorative blurs and gradients `pointer-events-none` and `aria-hidden`; they're allowed past the viewport edge because `body` hides horizontal overflow.
- Tap targets stay at least ~28px tall. Carousel and pagination dots are small bars wrapped in a taller padded button, so keep the wrapper when editing them.
- To check a change, run `npm run dev` and drive a headless browser over a range of widths, asserting `document.documentElement.scrollWidth` never exceeds `clientWidth`. Disable smooth scrolling in the harness (`html{scroll-behavior:auto}`), or screenshots catch the page mid-scroll.

## Deployment

`.github/workflows/deploy.yml` deploys with the Vercel CLI on Node 18:

- A push to `main` deploys to production.
- A push to `feature/**`, or a pull request into `main`, creates a preview deployment.

The workflow needs these GitHub secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` and the three `NEXT_PUBLIC_EMAILJS_*` variables. Branches are named `feature/...` or `fix/...`, and commit messages use `feat:` / `fix:` prefixes.
