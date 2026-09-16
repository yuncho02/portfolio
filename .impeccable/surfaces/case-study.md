# Surface: Case Study

## Intent
Prove process and craft on individual project pages. Recruiters should scan outcomes first, then move through problem → research → solution with a consistent grid.

## Primary target
- Layout: `src/layouts/CaseStudy.astro`
- Pages: `src/pages/work/onect-ai.astro` (reference), `src/pages/work/gemi.astro`, `src/pages/work/manifest-os.astro`

## Composition contract
Follow **Onect AI** as the source of truth for structure:

1. `anchors` for sticky chapter nav
2. Optional `slot="intro"` with `.lede`
3. Opening `.content-stack` with `.impact` (and optional `.info-card` / media)
4. Chapters as `.section-label` + `.split` (`h3` | `.content-div` / `.label-block`)
5. Methods as `.prose-label` + `.tag-row`
6. Media as `.media-stack` / `.media-pair` (12px gaps, 12px radius)

## Spacing tokens
- Section: `--case-section-gap` = 150px
- Split columns: `--case-col-gap` = 24px
- Content stacks / content-div: 20px
- Section-stack (large research groups): 100px
- Media stack/pair: 12px

## Constraints
- Manifest OS stays NDA-safe: no real product screens; keep redaction + same layout system.
- Do not invent metrics or claims; restructure existing copy only.
- Homepage Quiet Case File rules still apply to Work/About; case studies may use the shared indigo accent (`--color-onect`) for labels and brand eyebrow.
