# Prompt for Claude design

I'm redesigning the **chapter reading experience** of my fundraising playbook (currently live at `lifted.vc/fundraising-playbook`). Specifically, I want a full reimagining of what the playbook looks like when a reader is in **Chapter 3: Communicate Your Story**, including all of the chrome around the chapter — the sidebar navigation, the top bar, the sub-chapter nav, the modals, anything visible while a reader is inside the chapter.

Chapter 3 is the test chapter. It has the most pattern variety in the entire playbook (carousels, framework grids, expandable example modals, warning panels, prose with pull quotes, video walkthroughs). If the design system you build works for Chapter 3, applying it to the other 10 chapters is mostly content-loading, not creative redesign.

This is NOT the public landing page. The landing page is a separate brief. This is what readers see *after* they've entered their email and unlocked the playbook.

I'm not attached to the current visual design and I don't want this redesign to feel constrained by my main marketing site. Treat it as a clean slate.

I've pasted reference sites at the bottom of this message with notes on what I like. Pull from those for visual direction. You don't need to copy any of them — combine elements, take a stand, propose a coherent point of view.

I've also attached `playbook-sample-chapter.md`, which contains the first two sub-chapters of Chapter 3 (Best Practices and The Problem) in clean markdown form, plus structural outlines of the remaining eight sub-chapters. The full source for everything lives in the existing file `fundraising-playbook.html` (I'll share that alongside this brief).

## What the playbook is

A free, gated, 11-chapter interactive course on pre-seed and seed fundraising. Readers move through chapters at their own pace. Each chapter is made up of several sub-chapters with frameworks, worked examples, ~2-minute video walkthroughs, and (in some chapters) knowledge checks. Progress is tracked across the playbook. The experience is meant to feel like a real course, not a blog post.

**Chapter 3 — Communicate Your Story** teaches founders how to communicate every beat of their pitch (problem, why now, solution, market, traction, team, competition, ask). It has 10 sub-chapters and is the most pattern-rich chapter in the whole playbook. That's why it's the test chapter — design a system that works here and the rest of the playbook follows.

## Scope of this redesign

Design **everything a reader sees while inside Chapter 3**. Specifically:

1. **App shell.** Sidebar navigation listing all 11 chapters with progress. Top bar with progress, search, profile / account. Responsive collapse on mobile (drawer pattern).
2. **Chapter 3 hero / overview.** The view a reader sees when they first open Chapter 3. Sets the chapter up.
3. **All 10 sub-chapter pages.** Each gets the redesigned content treatment:
   1. Best Practices
   2. The Problem
   3. Why Now
   4. The Solution
   5. The Market
   6. Traction
   7. The Team
   8. The Competition
   9. The Ask
   10. Wrap
4. **Sub-chapter navigation.** Prev / next buttons, breadcrumbs, in-page anchors, "up next" cues.
5. **Content patterns inside sub-chapters.** These repeat across many chapters; design them well once and the rest of the playbook benefits later.
   - **Carousels** — Best Practices uses one for 9 communication habits, two per slide.
   - **Framework grids** — numbered elements with name + description (2-up, 3-up, 4-up).
   - **Weak / strong example pairs** — side-by-side comparisons throughout Best Practices.
   - **Expandable example modals** — longer worked examples that open over the page (B2B SaaS, HVAC).
   - **Tip / warning callouts** — "where problem pitches flatten" panels that reveal failure modes.
   - **Stacking demonstrations** — three-tier comparisons that show how stacking foundations strengthens an argument (Why Now sub-chapter).
   - **Fill-in-the-blank templates** — accent-tinted boxes with structured prompts.
   - **Video walkthroughs** — embedded YouTube, ~2 min each, with a clear poster + play affordance.
6. **Loading, empty, and completion states** for the chapter.

## Out of scope

- The public landing page (separate brief).
- The email gate / signup flow.
- The dashboard / chapter home (the post-gate index of all chapters).
- The content of the other 10 chapters. Design Chapter 3 well; the system should obviously scale to others later.

## Audience

Pre-seed and seed-stage founders, some Series A. Smart, time-pressed, skeptical of generic fundraising advice. Mostly first- or second-time fundraisers. They're reading this because they're in or about to start a real fundraise. They will read on a desktop while taking notes, on a laptop in coffee shops, and on phones between investor meetings.

## Voice

Founder-to-founder, plainspoken, specific. The sample chapter shows the texture: real numbers, real customer moments, no buzzwords. The page should read like a continuation of that voice.

**The copy itself is locked.** Don't rewrite chapter content, sub-chapter titles, framework names, examples, descriptions, or any other content. Use the exact wording from the existing playbook file. Voice is for calibration only — to inform layout, hierarchy, motion, and visual choices, not to inspire new copywriting.

## Qualities the experience should embody

- **Learning-forward.** This is a curriculum, not a content dump. The design should reinforce the "I'm working through something structured" feel. Reading a chapter should feel like making progress, not browsing a long blog post.
- **Interactive where it matters.** Hover states, scroll triggers, micro-animations, components that invite play. *Snappy but fluid* (see brilliant.org reference). Carousels, expandable examples, weak-vs-strong reveals, the stacking foundations demo — these are the moments where motion can do real work, used with intent, never just for decoration.
- **Substantive, not slick.** The depth should feel earned. Avoid the polished sheen of a generic SaaS course product. A little texture and rawness reads as more honest.
- **Confidence-building.** Frameworks should land. Examples and weak/strong pairs should be the most visually weighted things on screen at the right moments. Readers should feel sharper after each sub-chapter.
- **Density as a feature.** Readers came to learn something real, not to scroll past empty hero space. Don't hide content behind unnecessary clicks. But manage density so the page is scannable on first read and rewarding on a second pass.
- **Mobile-respectable.** Roughly half the audience is on a phone. The sidebar collapses cleanly to a drawer. Carousels work with touch. Frameworks and weak/strong pairs hold up in a single column.
- **Re-readable.** Readers come back to specific sections to share with a co-founder or save for later. Make it easy to deep-link, anchor, and share a specific framework.

## Content (use verbatim)

All Chapter 3 content — sub-chapter titles, intro lines, framework labels, descriptions, weak/strong examples, modal contents, warning panels, video labels, prev/next labels — comes from the attached `playbook-sample-chapter.md` (full content for sub-chapters 1 and 2, structural outlines for the remaining 8) and from `fundraising-playbook.html` (full source for everything). Use verbatim.

The shape of Chapter 3's sub-chapters, for orientation:

1. **Best Practices.** Intro line + walkthrough video. A carousel of nine communication habits, each with a name, a description, and a weak / strong example pair. Two habits per slide.
2. **The Problem.** Intro line + walkthrough video. Four-element framework grid (specific scene / customer POV / cost and scope / band-aid solutions). Two expandable example modals (B2B SaaS + commercial HVAC). One "where problem pitches flatten" warning panel listing five failure modes.
3. **Why Now.** Intro line + walkthrough video. Three-foundation framework (Cost dropped / Tech arrived / Buyer changed) with examples. A specifics-and-date callout. A stacking demo — three nested comparison cards that show how stacking foundations strengthens the argument from "fragile" → "credible" → "undeniable." A draft-your-Why-Now section with a wizard CTA + fill-in-the-blank template. Extra-credit framework grid (Name the graveyard / Pin the window). Warning panel listing six failure modes.
4. **The Solution.** Intro line + walkthrough video. The three questions a strong solution answers. Frameworks for each. Examples.
5. **The Market.** Intro line + walkthrough video. Sizing without overreach. Stage-aware guidance (numbers swap based on pre-seed / seed / Series A).
6. **Traction.** Intro line + walkthrough video. Which metrics carry weight at which stage. Common traps. Stage-aware.
7. **The Team.** Intro line + walkthrough video. The team slide that earns trust. Founder-market-fit signaling.
8. **The Competition.** Intro line + walkthrough video. Handling the competition slide gracefully. Comp matrix patterns.
9. **The Ask.** Intro line + walkthrough video. The structure of a strong ask: round size, milestones, use of funds.
10. **Wrap.** Chapter-end review. Recap of the nine pitch beats. A nudge into Chapter 4.

## Technical constraints

- **Single static HTML file.** The whole experience drops into the existing repo as updates to `fundraising-playbook.html`. Inline `<style>` and `<script>`. No build step, no framework, no bundler.
- **Existing JS handlers stay.** Functions like `openVideoLightbox(id, label)`, `goToSub(chapterSlug, subNum)`, `goToChapter(slug)`, `openExampleModal(id)`, `openWhyNowWizard()` already exist. Don't reinvent them; hook into them.
- **All sub-chapters are loaded into the DOM at once** and toggled via `display` + an `.active` class, not loaded async. Keep that behavior.
- **The sidebar and top bar are persistent** across the chapter — they don't get re-rendered between sub-chapters.
- **Mobile-first.** Around 50% of traffic is mobile. The sidebar collapses to a drawer below 900px. Top bar gets a hamburger.
- **Fast first paint.** The first sub-chapter (Best Practices) should be visible without waiting on the embedded video to load.
- **Type.** Any combination of Google Fonts or system fonts is fine. Keep total payload reasonable.
- **Accessibility.** Semantic markup, keyboard navigation, focus management when modals open, sufficient contrast, proper ARIA on interactive components (carousel, expandable panels, etc.).

## Deliverable

A working HTML implementation of the redesigned Chapter 3 experience.

1. A single self-contained HTML file (or a representative excerpt that drops cleanly into `fundraising-playbook.html`) containing:
   - The redesigned app shell — sidebar with all 11 chapter slots populated, top bar.
   - The Chapter 3 hero / overview.
   - All 10 of Chapter 3's sub-chapters with the redesigned content patterns.
   - Sub-chapter prev/next nav working.
   - Mobile drawer / responsive behavior.
2. Inline styles, semantic markup, accessible interactions. Comment the major sections so I can find things quickly.
3. Where real assets need to be dropped in (video poster images, etc.), leave a clearly labeled placeholder (`<!-- TODO: video poster for Best Practices -->`).

After the file, write a short note (under 300 words) explaining:
- The visual direction you took and why.
- How the content patterns work together (sidebar ↔ chapter overview ↔ sub-chapter ↔ modals).
- Which of my reference sites you pulled from, and what specifically.
- One or two choices you'd consider revisiting in v2.

## What I am explicitly not asking for

- **Don't rewrite any of the copy.** Every word in `fundraising-playbook.html` and `playbook-sample-chapter.md` is locked. Sub-chapter titles, framework names, examples, descriptions, warning panel content, video labels — all fixed. Your job is layout, hierarchy, motion, and visual treatment.
- **Don't redesign the public landing page.** Separate brief.
- **Don't redesign the email gate or the chapter dashboard.** Out of scope.
- **Don't add new sections or content blocks** beyond what's in Chapter 3 today. If the experience feels like it needs something more, propose it in your post-deliverable note rather than inventing it in the file.
- **Don't try to match my main marketing site (lifted.vc).** Treat the playbook as a standalone surface.

## Reference sites I like

### `https://brilliant.org`

Visual reference for **colors, buttons, and motion.**

- **Colors.** A confident bright purple as the dominant accent, paired with warm gradient highlights (pink → orange → yellow) on the most important CTAs. Off-white surfaces, soft borders, generous whitespace. The pairing reads as playful and modern but not childish — that balance is exactly what I want.
- **Buttons.** Big and pill-shaped. The primary CTA is solid purple. The promotional "Explore Premium" button uses a multi-stop warm gradient that runs the full length of the pill. Both feel substantial, tappable, and clearly the most important thing on screen. Pull from this for hierarchy and shape.
- **Motion.** When you scroll, elements slide in. When you click something, components slide and shift the same way. **Snappy but fluid** — fast enough to feel responsive, eased enough to feel smooth, never jarring. The "snappy but fluid" character is the key thing to emulate; the specific animations are less important than the timing and feel.

### `https://apple.com`

General reference for **the overall experience** — the calm, premium, take-it-seriously feel of the page.

- **Confidence in scale.** Headlines are huge and earn their size. Single thoughts per section. Plenty of breathing room around every element. Nothing feels squeezed.
- **Photography as the hero.** Product shots and photographs do most of the visual work. Whitespace and photo composition replace what most sites do with illustration or graphics.
- **Subtle, purposeful motion.** Scroll-driven fades, gentle parallax, occasional scale-on-scroll. Motion is never the point; it rewards attention without demanding it.
- **Restrained UI.** Buttons are small, often text-style with a chevron. The page itself is the focal point, not the controls.
- **Neutral surfaces.** Mostly whites, grays, blacks. Color appears intentionally and earns its presence.

The takeaway for the playbook: the experience should feel like *this is a considered, premium product*. The reader should treat it with the same focus they'd give to a new iPhone announcement.

### `https://stripe.com`

General reference for **the sophistication of the execution** — the way a technical, content-heavy product can feel modern and well-made.

- **Type pairing and rhythm.** Stripe's typography (Sohne) sets a high bar. The way headlines, sub-headers, and body sit together creates an effortless reading rhythm. Pull from how they balance display type with body density.
- **Gradient surfaces and aurora backgrounds.** Stripe uses subtle moving gradient meshes, often as section backdrops. They add depth and warmth without becoming the focal point.
- **Smart illustrations and diagrams.** Where Apple uses photos, Stripe uses purpose-built diagrams to explain mechanics. The diagrams feel like they're part of the same design system as the rest of the page.
- **Smooth scroll choreography.** Sections enter and exit with timing that feels engineered. Motion serves comprehension; nothing animates for the sake of it.
- **Clean section modularity.** Each block does one thing and stops. There's no feature-creep within sections.

The takeaway for the playbook: the experience should feel like *whoever made this knows what they're doing.* Sophistication shows through restraint, type, and motion timing — not through ornament.

*[Adam: add 1–2 more reference sites here if anything specific is missing. Useful angles to cover: a typography-driven editorial site, a long-form / chapter-oriented learning product, or anything where the visual style of a "course" or "guide" feels distinctive.]*

- `https://example.com` — *one sentence on what specifically lands and why.*

## Attachments

- `playbook-sample-chapter.md` — full content for the first two sub-chapters (Best Practices, The Problem) plus structural outlines for the remaining eight. Voice and density reference. Read first.
- `fundraising-playbook.html` — the live playbook file. Source of truth for every word of Chapter 3, plus the existing JS handlers and chrome.
