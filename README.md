# Ho Quang Thanh — Frontend Developer Portfolio

A React + Vite portfolio for Frontend Developer Intern / OJT applications. The design uses warm ivory, charcoal, terracotta, large editorial typography, and layered interface studies.

## Run locally

From this directory (`portfolio-ojt-thanh/` inside the workspace):

```sh
npm install
npm run dev
```

If dependencies are already installed, only `npm run dev` is needed. Open the local URL printed by Vite.

```sh
npm run build
npm run preview
```

The production output is `dist/`. There is currently no configured lint script.

## Content and assets

Personal details, categorized skills, and verified ChayBook contributions live in `src/data/portfolio.js`. The contact email follows the V2 brief: `thanhhqse183846@fpt.edu.vn`.

ChayBook shows two authentic application screenshots supplied by the owner: **Home Page** and **Recipes**. The original PNGs are copied unchanged into `public/projects/`. The recipe listing provides application context; it does not add to the stated individual contributions.

The screenshot gallery supports pointer selection, arrow keys, Home/End, visible focus, and an explicit link to open the selected image at full size. Its image dimensions reserve space while loading.

To add another screenshot, place the image in `public/projects/` and add its metadata to the project's `screenshots` array in `src/data/portfolio.js`:

```js
{
  label: 'Home Page',
  src: '/projects/chaybook-home.png',
  alt: 'ChayBook Home Page',
  width: 1883,
  height: 985,
}
```

`ProjectVisual` reuses the browser-frame presentation and retains its labeled placeholder as a fallback for projects without screenshots. Add project `source` and `demo` URLs only when verified and shareable. Their links stay hidden while empty.

The GitHub profile and mail links are functional. LinkedIn is omitted until `profile.linkedin` has a real URL. A CV download appears only when `profile.resume` is configured; put the actual PDF in `public/` before setting that path.

## Interface behavior

- Sticky navigation, current-section indication, and smooth anchor scrolling with a header offset.
- Mobile disclosure menu with Escape focus restoration, outside-click dismissal, and close-on-navigation behavior.
- Clipboard email copying with an announced success or failure message; the email link remains available.
- Short opacity reveals and restrained hover feedback. Large type and layered previews stay aligned without rotation or scaling.
- `prefers-reduced-motion` disables motion and keeps all content visible, including when the preference changes while the page is open.
- Semantic sections, keyboard focus styles, and a skip-to-content link.

Only two font families are used: Space Grotesk (600/700) for headings and Inter (400/500/600) for body text and controls. The font stylesheet loads directly from the document head with preconnections and `display=swap`. Google Fonts requires an internet connection; system sans-serif fallbacks are provided and were checked with remote fonts blocked. No dependencies were added.

The custom uppercase `HT` monogram uses square geometric SVG paths with consistent stroke widths and matching cap heights. `public/monogram.svg` is shared by the navigation and interface illustration; `public/favicon.svg` uses the same paths on a cream tile. Both remain legible at 16, 24, and 40px.

Color, font, typography scale, border radius, spacing, shadow, and transition tokens live in `:root` in `src/styles.css`. The Hero uses a primary charcoal button and a secondary terracotta outline button. Controls share clear hover, pressed, and keyboard-focus states and have at least 44px touch targets.

V2 tightens section spacing, balances the About columns, raises supporting metadata sizes, and emphasizes ReactJS and JavaScript without expertise ratings. ChayBook contributions keep the verified descriptions. Each contribution has an optional `technicalDetail` field that stays hidden while empty; populate it only with implementation details verified in ChayBook source or documentation.

## Source structure

```text
public/favicon.svg                  Personal monogram favicon
public/monogram.svg                 Geometric uppercase HT mark
public/projects/                    Authentic ChayBook PNG screenshots
src/App.jsx                         Navigation and portfolio sections
src/components/ProjectVisual.jsx    Screenshot or labeled placeholder
src/components/ProjectScreenshots.jsx Accessible screenshot gallery
src/data/portfolio.js               Personal and project content
src/styles.css                      Theme, layout, responsive CSS, motion
src/main.jsx                        React entry point
index.html                          Page metadata and font preconnections
```

## Verification

The refinement was checked with Chromium through Playwright at 1440, 1024, 768, 390, and 375px. Checks covered horizontal and main-text overflow, font loading and fallbacks, valid section anchors, keyboard focus, mobile menu behavior, sticky navigation, clipboard success/failure, reduced-motion behavior, SVG logo/favicon loading, and the screenshot gallery's pointer and keyboard behavior. This does not replace testing on physical devices or other browser engines.

The existing React, Vite, and Lucide dependencies and project configuration are preserved.
