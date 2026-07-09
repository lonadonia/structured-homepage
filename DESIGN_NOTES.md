# Structured™ — Design Notes

Homepage design prototype. Concept: **"Light Core, Dark Shell"** — selected in
`../structured_design_strategy.md`, executed here on the token system in
`../structured_design_tokens.json` (mirrored in `lib/design-tokens.ts`).

---

## 1. Design concept

**The homepage is the first artifact of the framework.** Structured™ claims
that clarity comes from structure — so the page itself must be the proof.
Every device on the page demonstrates the thesis instead of illustrating it:

- **The scroll enacts the brand promise.** The page opens inside the dark
  intelligence layer (ink hero), resolves into a light, rigorously structured
  core where understanding happens (sections 01–05), and closes back in the
  dark (CTA + footer). Dark complexity → structured clarity is both the
  user's journey with the product and the visitor's journey down the page.
  Ink ground appears **exactly twice** — hero and closing bracket.
- **The grid is the brand.** Visible 1px hairlines rule the pillar columns
  and editorial rows; a 24px dot grid sits behind the dark-section diagrams;
  every section carries a mono index (`01 — WHY STRUCTURE`), turning the
  scroll into a numbered argument.
- **Numbers as claims.** No superlatives. Framework Score 86/100, Integrity
  Index 92/100, 128 enterprises — set in tabular numerals like instrument
  readouts. The stat counters ticking up on first view is the page's single
  "live" moment, because the brand is measurement.
- **Diagrams, not decorations.** Every graphic can be captioned: nodes are
  entities, edges are relationships, layers are the framework's levels, the
  hero's scattered field resolving into a lattice is signal becoming order.
  If a visual can't be captioned, it isn't on the page.

## 2. Typography

| Role | Face | Notes |
|---|---|---|
| Everything | **Inter** (variable) | The moodboard's canonical face. Premium comes from range discipline, not font variety: 13px captions to 72px display from one family. |
| The instrument voice | **IBM Plex Mono** | Section indices (`01`), overlines (`FRAMEWORK`), data labels, figure captions. The only uppercase on the page besides the wordmark. |

Rules in force:

- Display and headings use **Semibold (600) only** — never Bold at display
  sizes; it reads more engineered.
- Display sizes are tight (−2% letterspacing, 1.05–1.1 line-height); body is
  generous (17px/1.65, 68ch max measure).
- **Tabular numerals** (`tabular-nums`) on every numeric element.
- Sentence case headlines. Uppercase lives only in mono overlines and the
  wordmark, protecting the wordmark's distinctiveness.
- Full scale defined as utilities in `app/globals.css` (`text-display-xl` …
  `text-data-m`), fluid via `clamp()` between 360px and 1280px viewports.

## 3. Color system

Canonical brand hexes (from the moodboard — never drifted):
`#0B0F17` ink · `#4F46E5` indigo · `#2563EB` blue · `#E5E7EB` mist · `#F8FAFC` paper.

The system's key move is **assigned accent roles**:

- **Blue = interactive.** Buttons, links, focus rings. Only things you can
  click are blue.
- **Indigo = intelligence.** Data lines, diagram nodes, the lattice glow,
  section indices. Never on buttons.

Discipline: **90/8/2 per viewport** — ~90% neutral ground, ~8% secondary
neutrals and hairlines, ≤2% accent. No gradient surfaces anywhere; the only
permitted luminance transition is the radial indigo glow inside dark-section
diagrams (≤25% opacity). Green/red exist only as small numeric deltas.

Full ramps (ink 950–600, gray 50–700, indigo/blue 400–700) live in
`app/globals.css` and `lib/design-tokens.ts`.

## 4. Layout system

- **12-column grid, 1200px content container, 24px gutters** on an 8px
  baseline. A wider 1320px "artifact container" exists only for the
  dashboard presentation.
- **Asymmetry with discipline.** Text sits on columns 1–6, visuals on 7–12.
  Centered layout is reserved for exactly one moment: the closing CTA.
- **Spacing is tokenized** (4·8·12·16·24·32·40·48·64·80·96·128·160). Sections
  breathe at 128px desktop / 64px mobile; any off-scale value is a defect.
- **Proximity encodes meaning:** 8–16px within a unit, 24–32px between
  related units, 48px+ between ideas — the hierarchy survives blurred text.

## 5. Visual language

All artwork is **constructed on the page's own grid** (nodes snap to the
24px dot-grid module) and drawn in 1px strokes:

- **Chaos→lattice** (`components/StructuredVisual.tsx`) — the signature hero
  visual. A field of scattered points on the left converges onto an ordered
  lattice on the right; convergence trails show each point's path to its
  snapped position; evaluated entities are ringed in indigo. Replaces the
  generic "AI particle wave" with an owned, reproducible construction
  (seeded PRNG — the same artwork every render).
- **The evaluation map** (`components/EvaluationMap.tsx`) — the identity
  moment. Entities plotted by structural clarity × semantic consistency,
  with a dashed integrity threshold and a scored callout. An instrument, not
  an illustration.
- **The dashboard artifact** (`components/DashboardArtifact.tsx`) — the
  moodboard's product UI rebuilt in live HTML/CSS at readable scale, framed
  by one hairline, one shadow, 16px radius. Never tilted, never floating in
  dark space.
- **Pillar micro-diagrams** — map / measurement / layered planes, 48px, 1.5px
  strokes.

Banned and absent: stock 3D, glassmorphism, gradient meshes, floating cards,
photography, brains/robots.

## 6. Motion

Motion confirms; it never performs.

- Scroll reveals: opacity + 12px translate, 600ms, standard easing, once.
- Stat counters tick from 0 on first view (900ms) — the one live moment.
- Buttons darken one ramp step; the trailing arrow translates 4px.
- The hero lattice drifts in opacity only, on a 24s loop.
- `prefers-reduced-motion` collapses everything to instant opacity fades
  (durations and stagger delays are zeroed).
- No parallax, no scroll-jacking, no Framer Motion — refined CSS only.

## 7. Component system

```
app/page.tsx                    the numbered argument, assembled
components/
  Header.tsx                    ink nav: transparent → solid on scroll; mobile panel
  Hero.tsx                      dark shell opens; tagline, CTAs, lattice, readout bar
  PositioningSection.tsx        01 — editorial why-structure argument
  FrameworkSection.tsx          02 — pillar triad on hairline-ruled columns
  EvaluationSection.tsx         03 — canonical claim + dashboard artifact + metrics
  IdentitySection.tsx           04 — the evaluation map as a captioned figure
  TrustSection.tsx              05 — method principles + ticking stat band
  CTASection.tsx                dark bracket closes; one line, one button
  Footer.tsx                    ink-950; hairlines, mono overlines
  SectionHeading.tsx            indexed overline + headline + intro
  StructuredVisual.tsx          chaos→lattice (seeded, grid-snapped)
  EvaluationMap.tsx             coordinate-field identity visual
  DashboardArtifact.tsx         the product UI as a precision instrument
  Logo.tsx                      canonical lockup (glyph + wordmark) — untouched
  ui/Button.tsx                 primary / ghost / ghost-dark + TextLink
  ui/Card.tsx                   hairline card (hover = accent border, no lift)
  ui/Reveal.tsx                 IntersectionObserver reveal (no-JS safe)
  ui/Counter.tsx                the counting readout (SSR-safe, RM-safe)
lib/design-tokens.ts            typed token source for JS/SVG consumers
app/globals.css                 the same tokens as CSS theme + utilities
```

## 8. Why this design fits Structured™

Structured™ is not another AI product performing magic — it is the
measurement and standards layer for how machines understand information.
Its visual authority is therefore borrowed from things engineered to be
trusted: standards documents, architectural drawings, instrument panels.

The moodboard asked for "strong contrast between dark intelligence and clean
clarity." This page is that sentence as architecture: a dark shell where
depth is the message, a light core where comprehension happens, and a visual
language in which **every element — hairline, index, readout, lattice — is
evidence that structure produces clarity.** Nothing on the page is dated to
2026: flat color, geometric construction, one typeface, restrained motion.
It should still look correct in 2030.

## 9. Brand asset update

The live homepage now uses the supplied PNG identity assets in `public/brand/`:
`logo.png`, `white-logo.png`, `icon.png`, and `white-icon.png`. Header,
footer, dashboard glyphs, CTA icon treatment, and the site favicon have been
switched off the previous inline SVG mark so the UI reflects the provided
brand files.
