---
name: June Cho Portfolio
description: A quiet, editorial design portfolio built to prove process and craft to hiring managers fast.
colors:
  ink: "#33302F"
  label-gray: "#5E5E5E"
  tag-gray: "#737373"
  year-gray: "#ADADAD"
  paper: "#FFFFFF"
typography:
  display:
    fontFamily: "Inter, 'Inter Placeholder', -apple-system, sans-serif"
    fontSize: "clamp(1.6rem, 1.1rem + 2vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Inter, 'Inter Placeholder', -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.03em"
  label:
    fontFamily: "Inter, 'Inter Placeholder', -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.04em"
  meta:
    fontFamily: "Inter, 'Inter Placeholder', -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "-0.022em"
rounded:
  pill: "999px"
  avatar: "50%"
spacing:
  page-margin-desktop: "120px"
  page-margin-mobile: "24px"
  row-gap: "40px"
components:
  nav-tab:
    textColor: "{colors.label-gray}"
    typography: "{typography.label}"
  nav-tab-active:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  view-toggle:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "4px"
  work-row-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  work-row-meta:
    textColor: "{colors.tag-gray}"
    typography: "{typography.label}"
---

# Design System: June Cho Portfolio

## Overview

**Creative North Star: "The Quiet Case File"**

This is a portfolio that gets out of its own way. There is no hero photograph, no gradient, no card-hover chrome — just an avatar, a single sentence of positioning, and a scannable list of work, set in one confident sans-serif and printed on plain white. The system's whole personality is restraint: type does the work that color and imagery would do elsewhere, and the rare interactive moment (a hover preview, a pill toggle) is deliberately the only decoration on the page. This is a **preserved identity**, extracted directly from the owner's live site at ycho.me and carried into the rebuild verbatim — not a new direction, and not open for reinterpretation without the owner's sign-off.

Confirmed visual rejections: no hero imagery on the homepage, no card grid with shadow/lift hover states, no color accent beyond near-black ink and mid-grays, no rounded "soft SaaS" surfaces beyond the pill-shaped view toggle.

**Key Characteristics:**
- Flat, white, type-led — the page reads before it decorates.
- One weight of confidence: Inter Medium (500) carries every heading and label; nothing competes with it.
- Tight, slightly negative letter-spacing throughout — headlines and labels sit closer than default, giving the type a set, deliberate feel rather than a loose default one.
- A strict three-step gray ladder (ink / label-gray / tag-gray / year-gray) does all the hierarchy work; there is no accent color.
- The only ornament is circular: the avatar and the List/Grid toggle are the system's sole rounded forms in an otherwise square, ruleless layout.

## Colors

Entirely neutral: warm near-black ink on pure white, stepped through three grays for hierarchy. No accent color exists in the source system — hierarchy is carried by weight, size, and gray value alone.

### Primary
- **Ink** (`#33302F`): the only "dark" color in the system. Used for the bio headline and every project title. Not a pure black — a warm charcoal that keeps the page from feeling cold or clinical.

### Neutral
- **Paper** (`#FFFFFF`): page background, full-bleed, no exceptions observed.
- **Label Gray** (`#5E5E5E`): nav tab labels (Work / Art / About) and other primary UI labels at rest.
- **Tag Gray** (`#737373`): project metadata tags (role, category, e.g. "UX", "Management", "SAAS").
- **Year Gray** (`#ADADAD`): the lightest step, reserved for the least important scannable fact — the project year.

### Named Rules
**The No-Accent Rule.** There is no accent color anywhere in the source system. Every "call to action" (contact links, project rows) is carried by ink-on-white plus type weight, never by color. Do not introduce a brand accent color without the owner's explicit sign-off — it would break the preserved identity.

## Typography

**Display/Body Font:** Inter (with `-apple-system, sans-serif` fallback)

**Character:** One typeface, one voice. Inter Medium (500) is used for nearly everything with a job to do — headlines, project titles, labels — while a lighter weight (400) is reserved only for the least important scannable fact (the year). Letter-spacing runs consistently tight and negative (roughly −0.022em to −0.04em depending on size), which is what keeps a plain system-adjacent sans from reading generic.

### Hierarchy
- **Display** (500, `clamp(1.6rem, 1.1rem + 2vw, 2.25rem)` ≈ 25.6px mobile / 36px desktop, 1.2 line-height, −0.03em tracking): the one-sentence bio/positioning statement at the top of the homepage. The single largest text on the site.
- **Title** (500, 18px, 1.4 line-height, −0.03em tracking): project/case-study titles in the work list.
- **Label** (500, 15px, 1.4 line-height, −0.04em tracking): nav tabs, project metadata tags, the List/Grid toggle.
- **Meta** (400, 18px, 1.4 line-height, −0.022em tracking): the project year — deliberately the one place the system drops to regular weight.

### Named Rules
**The One-Weight Rule.** Everything that matters is Medium (500). Regular (400) exists only to make the year read as the least important fact on a row. Do not introduce Bold/700 or Light/300 weights; the system's confidence comes from restraint, not a wide weight ramp.

## Layout

Single-column, left-aligned, generous side margins: roughly 120px on desktop (observed at a 1440px viewport, content column ~1200px, symmetric margins), collapsing to a much narrower mobile margin (~24px) at phone widths. No visible grid lines or containers — rhythm is carried by consistent vertical spacing between rows (roughly 40px) rather than borders or background shading. The work list is a simple vertical stack of rows (title + year + tags); a List/Grid toggle in the top-right switches the same content into a grid arrangement without changing the type system.

## Elevation & Depth

Flat. No shadows were observed anywhere in the system — not on the avatar, the view toggle, or any interactive element. Depth, where it exists at all, is conveyed by the hover-preview interaction (a project thumbnail appearing beside the row on hover) rather than by lift or shadow.

### Named Rules
**The Flat-By-Default Rule.** No `box-shadow` anywhere. If a future component seems to need elevation to read as interactive, use a hover-state color or weight shift instead, never a shadow.

## Shapes

Two shape languages, deliberately split: everything structural is square/ruleless (no rounded cards, no bordered containers), while the two truly circular/pill elements — the profile avatar (fully circular, ~50px) and the List/Grid view toggle (full pill, ~999px radius) — are the system's only soft forms. This contrast is a real signature, not an oversight: keep new rounded elements rare and reserve full-round (avatar/pill) treatment rather than partial radii (8px, 12px "card" rounding).

## Components

### Navigation
Plain text tabs (Work / Art / About), no underline or background chip. Inactive tabs sit in Label Gray; the active tab shifts to Ink. No icons.

### View Toggle (signature component)
A two-option pill switch (List / Grid) at the top-right of the work list, white background, fully rounded (999px), each option in Label typography. This is the system's one piece of "control" chrome and should stay visually minimal — it must not gain a shadow, gradient, or accent color.

### Work Row (signature component)
The core repeating unit: project title (Title style) + year (Meta style) + one or more tag labels (Label style, Tag Gray), stacked as plain text with no card border or background. On hover, a small preview image/thumbnail of the project appears beside the row — the system's one piece of motion/reveal, and worth preserving as the signature interaction in the rebuild.

### Avatar
A small (~50px) fully circular profile photo, placed above the bio headline. No border or ring.

## Case Study Pages

Case studies (`src/layouts/CaseStudy.astro` + `src/pages/work/*`) share one composition system. **Onect AI is the reference implementation** — Manifest OS and GEMI (and future projects) must reuse the same grid, gaps, and structural classes. Copy can differ; structure should not.

### Page chrome
- Sticky left **anchor nav** via `anchors` prop (`Overview` + chapter ids).
- Header: italic Crimson Pro **title**, Inter **eyebrow** with optional `brand` span, then hero media.
- Intro via `slot="intro"` with centered `.lede` paragraphs.
- Facts row: Role / Timeline / Team / Skills (skills use `.skill-pill`, same as `.tag`).

### Structural classes (required patterns)
| Class | Role | Gap / grid |
|---|---|---|
| `.section-label` | Numbered chapter rail (`01 — Problem`) | Top `var(--case-section-gap)` (150px) |
| `.split` | 2-col: left `h3`, right body | Col gap `24px` (`--case-col-gap`) |
| `.content-div` / `.label-block` | Vertical stack inside a split column | Gap `20px` |
| `.content-stack` | Grouped blocks (impact, media, notes) | Gap `20px` |
| `.section-stack` | Large research/competitor groupings | Gap `100px` |
| `.media-stack` | Stacked figures | Gap `12px` |
| `.media-pair` | Two figures side by side | Gap `12px` |
| `.impact` | Achievement + contribution panel | 2-col, gap `12px` |
| `.tag-row` + `.tag` | Method chips | Gap `8px`, radius `8px` |
| `.checklist` | Goal/constraint lists | Divider rows, `12px` padding |
| `.prose-label` / `.user-label` / `.impact-label` | Uppercase section labels | 14px / 600 / `var(--case-accent)` |

### Tokens (CaseStudy scope)
- `--case-max: 1300px`, `--case-section-gap: 150px`, `--case-col-gap: 24px`
- Media/figure radius: **12px** (tags **8px**)
- Per-project accent via `accent` prop → `--case-accent` on `.page`
  - Onect: `--color-onect` (`#6366f1`)
  - GEMI: `--color-gemi` (`#5AC5A3`)
  - Default fallback: `--color-onect`

### Do / Don't (case studies)
- **Do** wrap chapters as `section-label` → `split` → `content-div` / `label-block`.
- **Do** put proof up top in `.impact` when metrics or contributions exist.
- **Do** keep NDA-safe pages on the same grid (Manifest) — redact media, not the layout.
- **Don't** fall back to bare `h2` + `p` linear flow.
- **Don't** invent a second gap scale per project.

## Do's and Don'ts

### Do:
- **Do** keep the homepage type-first: bio statement, then a plain scannable work list — no hero image, no card grid, no gradients.
- **Do** carry hierarchy with the ink → label-gray → tag-gray → year-gray ladder and Inter's 500/400 weight split, not with new colors or weights.
- **Do** keep letter-spacing tight and negative on headings/labels (≈ −0.03em to −0.04em) — it's a large part of why the plain sans reads deliberate rather than default.
- **Do** preserve the hover-preview-on-work-row interaction as the signature motion moment.
- **Do** keep rounded treatment rare and binary: fully circular/pill, or square. No 8–16px "soft card" radii on the homepage; case-study media may use 12px radii as documented above.

### Don't:
- **Don't** add a brand accent color, gradient, shadow, or card-lift hover state on the homepage — none exist in the preserved system, and introducing one is a scope change, not a bug fix.
- **Don't** swap Inter for a display/serif face on the homepage; case-study titles may use Crimson Pro italic as established.
- **Don't** turn the flat text-row work list into an image-first card grid by default — Grid is a user-toggled view, not the primary reading mode.
