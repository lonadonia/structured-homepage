# Structured™ — Handoff Guide

## 1. Run the project

Requirements: Node.js 18.18+ (built on Node 22), npm.

```bash
npm install
npm run dev        # development — http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint (passes clean)
```

> Windows note: if the project lives in a path containing `&`, npm's `.cmd`
> shims can fail. Invoke the binaries directly instead:
> `node node_modules/next/dist/bin/next dev`

No backend, no external APIs, no environment variables. Fonts (Inter,
IBM Plex Mono) are fetched by `next/font` at build time and self-hosted —
the built site makes no third-party requests.

## 2. How the page is structured

`app/page.tsx` composes nine sections in order; each is one component in
`components/` (see the map in `DESIGN_NOTES.md` §7). The scroll follows the
"Light Core, Dark Shell" choreography:

| Zone | Component | Ground |
|---|---|---|
| Nav | `Header` | ink (transparent → solid on scroll) |
| Hero | `Hero` | **ink-950** + dot grid |
| 01 Why structure | `PositioningSection` | paper |
| 02 The framework | `FrameworkSection` | white |
| 03 Evaluation | `EvaluationSection` | paper |
| 04 The evaluation map | `IdentitySection` | paper |
| 05 Method | `TrustSection` | paper |
| Closing CTA | `CTASection` | **ink-950** + dot grid + glow |
| Footer | `Footer` | **ink-950** |

Design decisions are enforced in two places:

- **`app/globals.css`** — all tokens as a Tailwind v4 `@theme` (colors,
  fonts, shadows, easing) plus custom utilities: the type scale
  (`text-display-xl` … `text-data-m`, fluid via `clamp()`), containers
  (`container-content` 1200px, `container-artifact` 1320px), structural
  surfaces (`bg-dot-grid`, `bg-glow-indigo`), and the reveal/drift motion.
- **`lib/design-tokens.ts`** — the same tokens typed for JS consumers; the
  SVG components import brand hexes from here so artwork can never drift.

Interactive behavior is deliberately minimal: `Header` (scroll state +
mobile panel), `ui/Reveal` (IntersectionObserver, no-JS safe — content is
never hidden without JavaScript), `ui/Counter` (stat tick-up, SSR-renders
the final value). Everything else is server-rendered static markup.

## 3. Recreating the design in Figma

1. **Styles from tokens.** Create color styles from `lib/design-tokens.ts`
   (ink 950–600, gray 50–700, indigo/blue 400–700, paper, mist) and text
   styles from the `typography.scale` table (use the desktop px values;
   Inter Semibold for display/headings, IBM Plex Mono Medium 13px/+8%
   tracking/uppercase for overlines, Inter Light with tabular figures for
   `data-xl`).
2. **Grid.** 1440px frame · 12 columns · 1200px container · 24px gutters ·
   8px baseline. Add a second 1320px container for the dashboard artifact.
   Mobile frame at 390px, 4 columns, 20px margins.
3. **Components.** Build as Figma components: Button (primary / ghost /
   ghost-dark; 52px & 44px heights, 8px radius, trailing arrow), section
   heading (index + overline + h2 + intro), pillar column, principle row,
   stat block (data-xl + mono label), the dashboard frame (16px radius,
   `mist` border, the artifact shadow `0 12 32 -12 rgba(11,15,23,.14)`).
4. **Artwork.** Import the exact page artwork from
   `public/structured-visuals/`: `chaos-to-lattice.svg`,
   `evaluation-map.svg`, `logo-glyph.svg`, `dot-grid-tile.svg` (tile it as a
   fill on dark sections). These are the rendered SVGs extracted from the
   build, so Figma and code stay pixel-identical. (Standalone SVGs fall back
   to system fonts for their few mono labels — set them to IBM Plex Mono
   after import.)
5. **Spacing redlines.** Sections: 128px vertical padding desktop / 64px
   mobile; 48–64px between ideas inside a section; 24–32px between related
   blocks; 8–16px within a unit.

## 4. Implementing in WordPress later

The design was built to translate to a block theme without loss:

- **Tokens → `theme.json`.** `color.semantic-*` and the type scale map 1:1
  onto `settings.color.palette` and `settings.typography.fontSizes`; the
  spacing scale onto `settings.spacing.spacingSizes`. Self-host Inter and
  IBM Plex Mono (variable) exactly as `next/font` does here.
- **Sections → block patterns.** Every section is a self-contained,
  hard-cut band (no cross-section overlaps), i.e. one Group block pattern
  each: hero, positioning, pillars, evaluation, map, method, CTA, footer.
  Dark sections are Groups with the ink background and an inline dot-grid
  background image (`dot-grid-tile.svg`).
- **Artwork → static assets.** All visuals are plain SVG files (no JS
  dependency); the lattice's slow drift and the scroll reveals are ~30 lines
  of CSS plus one tiny IntersectionObserver snippet you can enqueue as a
  theme script. All motion already respects `prefers-reduced-motion`.
- **The dashboard artifact** can ship either as the HTML/CSS block (it is
  plain markup, no React) or as a captured image; prefer the markup for
  crispness.
- Buttons, links, and focus states use only two accent colors with fixed
  roles (blue = interactive, indigo = intelligence) — carry this rule into
  the theme's button and link styles.

## 5. Accessibility & performance checklist (already in place)

- Semantic landmarks (`header/nav/main/section/footer`), one `h1`, ordered
  heading levels, skip-to-content link.
- Keyboard: all interactive elements are native `<a>`/`<button>`; visible
  3px focus ring; Escape closes the mobile menu; scroll lock while open.
- Contrast: body/secondary text meets WCAG AA on both grounds; decorative
  diagrams are `aria-hidden`; the dashboard and map expose single
  descriptive `aria-label`s.
- Reduced motion: reveals collapse to fades, drift and counters disabled.
- Performance: fully static prerender, zero runtime dependencies beyond
  React/Next, all visuals are inline SVG/CSS (no images, no icon font),
  fonts subset + self-hosted.

## 6. Brand assets

The supplied logo/icon PNGs live in `public/brand/` and are consumed by
`components/Logo.tsx`. Use `logo.png` and `icon.png` on light surfaces, and
`white-logo.png` / `white-icon.png` on dark surfaces. The site icon is
`app/icon.png`, copied from the supplied `icon.png`.

## 7. Single-file HTML reference

`structured-homepage-reference.html` (project root) is a fully
self-contained snapshot of the homepage — CSS, fonts, and every image are
inlined as data URIs, so it opens correctly straight from disk (`file://`)
with no server and no network access. Useful for sharing with the client or
archiving a point-in-time visual reference outside of git/Next.js.

JavaScript is intentionally stripped from the snapshot: the page's content
is fully visible without it by design (`ui/Reveal`'s hidden state only
applies once React marks the document motion-ready), so the static file
reads correctly. Only the mobile hamburger menu, scroll-reveal stagger, and
the stat counter tick-up animation are inert.

To regenerate after making changes:

```bash
npm run build && npm run start   # leave this running in one terminal
npm run export:reference         # in another — writes the file at project root
```
