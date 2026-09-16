# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (delegated: chosen for a design portfolio — ships static, near-zero-JS pages by default for fast load on image-heavy case studies, supports component reuse for repeated layout patterns, and deploys easily as a static site to any host).

## Users

Primary users are recruiters and hiring managers evaluating the site owner (June Seoyun Cho) for a product/UX design role or internship. They are scanning quickly, comparing candidates, and deciding whether to move someone to an interview or resume/portfolio review.

## Product Purpose

A personal portfolio site whose job is to get the owner hired: prove design skill and process quickly, and lead a recruiter/hiring manager toward next steps (contact, resume, interview request).

## Positioning

Inferred from the owner's existing case-study content (source: her current site, ycho.me — confirm before treating as a committed claim): she pairs AI-forward product work with rigorous, research-backed UX process — measurable outcomes (e.g., large reductions in task time, comprehension gains), real user research with the professionals affected (attorneys, applicants), and disciplined design-system craft, applied specifically to complex/high-stakes domains (legal tech, healthcare-adjacent AI). The differentiator is process rigor plus AI fluency, not just visual polish.

## Operating Context

Evaluators will typically view the site on desktop during a hiring review, and may also open it on mobile from a job posting or LinkedIn/email link. Content will center on design case studies (process, artifacts, outcomes).

## Capabilities and Constraints

- Real case-study content exists and is being migrated from the owner's current site (ycho.me), not invented from scratch — see Evidence on Hand.
- At least one project (Manifest OS) is under NDA: no real product screens may be shown; the case study there must stay limited to role, process, and outcomes, same as the source site does.
- One project (Ghost AI, Amazon + MHCID) is unreleased — treat as a "coming soon" placeholder, not a fleshed-out case study, until the owner says otherwise.
- Full write-ups were confirmed for Manifest OS, Onect AI, and GEMI during this session. XOMOX and the "Fun/Archive" items have no detail page on the current site (confirmed by inspection) — only title/year/role tag exists; do not invent their narrative, metrics, or images.

## Brand Commitments

- Name: June Seoyun Cho, goes by "June Cho." Tagline used on the current site: a product designer (3+ years experience) who makes complex things feel understandable and human.
- **Binding decision (2026-09-15):** preserve the visual identity of the current site (ycho.me) rather than adopt a new visual world. The rebuild's job is to reproduce this system faithfully in the new stack (Astro/static), not reinterpret it. See `DESIGN.md` for the extracted tokens (colors, type, spacing, components) captured directly from the live site.

## Evidence on Hand

Source: owner's existing site at https://ycho.me (read directly this session). Real content to migrate/rebuild, not invent:

**About/bio:** Currently a product designer at Manifest O.S. rebuilding the case workflow for attorneys and paralegals; recent graduate of the HCID (Human-Computer Interaction and Design) Master's program at the University of Washington. Bio touches on a Korean name (Seoyun) and a childhood spent moving across schools/cities/countries, framed as the source of her adaptability and sensitivity to how people experience environments.

**Contact:** email (yunchobusiness@gmail.com), résumé link, LinkedIn, Medium — all present on the current site.

**Work (case studies), in the order listed on the current site:**
1. Manifest OS: Legal AI Tech (2026, part-time Product Designer, remote, May 2026–current) — NDA'd legal-tech product for attorneys/paralegals. Confirmed real contributions: a design-system token audit/reduction (785 → 230 variables), a shipped "Case Health Radar" feature validated with attorney user testing, and a shipped AI assistant/chat + inline document editing in the case detail page.
2. Ghost AI (Amazon + MHCID) — "Coming soon," Product Engineer, Master's capstone. No content yet; the live site shows a placeholder message, not a case study.
3. Onect: Legal Tech (Onect AI) (2026, Aug 2025–Mar 2026, Product designer + AI workflow architecture, team of 1 designer + 2 motion designers) — AI-native legal-tech SAAS for the U.S. O-1 visa process, serving both visa applicants and immigration attorneys on a shared data layer with separate views. UX Design Awards 2026 nominee. Reported outcomes: ~70% reduction in document filing time and ~80% improvement in client-side comprehension of legal documents via an AI cursor interface. Full narrative includes problem framing, user research (7 interviews + competitor audit), a "human sign-off on every AI action" design principle, three shipped features, and a design-system section framed around trust.
4. GEMI: Every Small Win Is a Gem (2024, Aug 2023–Jun 2024, sole designer — research/UX/prototyping/visual design/design system/3D & animation) — undergrad senior thesis, a mobile app for adults with ADHD that replaces shame-driven to-do lists with a gamified, visual "growth" metaphor (a personal gemstone that develops as tasks are completed). Grounded in mixed-method research (a 110-person public survey, an 11-person ADHD-specific survey/focus group, and a literature review on ADHD neurology) that found existing productivity tools fail to close the feedback loop for ADHD users. Three shipped systems: a personalized "gemstone" onboarding, to-do/progress tracking tied to that gemstone's growth, and an opt-in social focus mode ("Enter Cave," built around body-doubling). Stated design principle: additive-only progress, no streak penalties, no clinical claims.
5. XOMOX: BAIE New York (2025) — Product Designer, e-commerce, web, launched. Confirmed real (title/year/role/tags only) — the current site has no detail page for it, so no further narrative, metrics, or images exist to migrate; treat as a placeholder-content entry until the owner provides more.

**Fun/Archive (lighter, non-case-study projects), title/year only:** AI Tamagotchi — small-talk helper (2026, has a Medium article); Reimagining Mini-golf (2026); Vibecode Horror Game (2026, playable link); Freshy: Food Tracker (2023); Birding by Ears (2025).

**Art section:** the current site has a separate nav tab showing a gallery grid of ~30 personal art pieces (editorial illustration, 3D modeling, drawing, painting, video, poster/currency/album design, one Unity game) — confirms a broader creative practice, but **out of scope for this rebuild** (owner's decision, 2026-09-15): this build covers Work + About only, no Art section.

## Product Principles

1. Optimize for a fast, confident read by a time-pressured recruiter — clarity and proof over cleverness.
2. Let real design work be the evidence; do not fabricate credibility (fake testimonials, metrics, or case studies).
3. Keep the path to contact/next-step (resume, email, calendar) obvious from any page.
4. Build content structures that are easy for the owner to fill in later without a redesign.

## Accessibility & Inclusion

No project-specific requirement established yet.
