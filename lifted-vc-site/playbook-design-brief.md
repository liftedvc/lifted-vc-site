# Fundraising Playbook — Landing Page Design Brief

## Project

Redesign the public-facing landing page for the Lifted.vc Fundraising Playbook. The landing is the page a prospective founder hits when they visit `lifted.vc/fundraising-playbook` for the first time. It sits in front of an email gate and the actual interactive 11-chapter playbook content.

## Goal

Convert a curious founder into an email-gated playbook reader. The single, primary action on the page is clicking a "Get the free playbook" CTA, which opens the email gate. Everything on the page should serve that conversion.

## Audience

Pre-seed and seed-stage founders, with some Series A. They are:
- Smart and skeptical. They have read other fundraising guides and have seen plenty of generic advice.
- Time-constrained. They will scan, not read.
- Looking for credibility signals before investing the time to read 11 chapters.
- Mostly first-time or second-time fundraisers, often technical, often coming through warm intros, Twitter, or referrals from other founders.

## Why this page exists

The playbook is genuinely free, structured, and built from real engagements (300+ coaching sessions, $80M+ raised). The job of the landing is to:
1. Clearly position the playbook as worth their time within 5 seconds.
2. Establish that the curriculum is built from lived experience and real outcomes, not theory.
3. Make it obvious it's free.
4. Show enough about what's inside that the reader trusts the depth before they hand over an email.
5. Get them to click the CTA.

## Brand context

Lifted.vc is Adam Roberts's 1-on-1 fundraising coaching practice. It serves pre-seed through Series A founders. The voice is: confident, plainspoken, founder-to-founder, no jargon. Adam is a YC alum, sold his last company, raised from Pear / Founder Collective / Bessemer / and others, and has been on the investor side. The brand should not feel corporate or VC-bro. It should feel like a working operator who has done it.

The landing page sits inside a larger redesigned site (lifted.vc) which uses an editorial, warm, slightly literary aesthetic. Whatever direction is chosen for the playbook landing should feel like part of that site, even if it leans more dynamic.

## Required content sections

The brief lists what each section must accomplish, the rough order, and the actual claims that should appear. The exact wording is editable.

### 1. Persistent header
- Lifted wordmark, links back to `lifted.vc`.
- Single CTA button: "Get the free playbook." Always visible while scrolling.

### 2. Hero
- A short label / eyebrow: "The Free Fundraising Playbook"
- A clear headline that conveys the central promise. Current working line: "Raise your round the way experienced founders would."
- A short lead-in line that frames the playbook and sets up the validation that follows. Current working line: "A practical guide to pre-seed and seed fundraising built through lived experience and a curation of top VCs:"
- Three validation points presented as a clear, scannable group. These are the proof beats:
  - **Track record:** 300+ coaching sessions that have raised $80M in venture funding.
  - **Curated from the best:** A vetted selection of borrowed top fundraising intellect from Pear VC, Hustle Fund, Y Combinator, First Round Capital, Garry Tan, and more.
  - **Lived experience:** Closed top-tier VCs for Adam's own YC startup.
- Primary CTA button: "Get the free playbook."
- A short embedded "Why we built this playbook" video (≈2 min). Plays in a lightbox.

### 3. Social proof
- Section header along the lines of "What founders say."
- Three short testimonial quotes, each from a founder who used the playbook or coaching. Each quote has a short topical tag, the body, and an attribution (first name + role).
- Quotes:
  - **Process discipline** — "Adam didn't just give me coaching, he gave me a process. One that replaced guesswork with clarity, confidence, and precision. Other founders kept saying, 'You're raising your pre-seed with the diligence of a Series A.'" — Leni
  - **Stacking the window** — "I never ran a process before working with Adam. He made it easy, a lot of work, but the consistent effort paid off in more investor calls than I've ever taken in a 4-week period. My only regret is not having signed up sooner." — Ndonga
  - **Authentic narrative** — "Adam took me from cool science project to funded business. The curriculum gave me tangible mechanics that translated directly into capital raised, and the coaching had an authenticity that earned my trust from the first conversation all the way through close." — Aidan

### 4. Why this playbook (credibility)
- Section header along the lines of "Built from real raises, not theory."
- Three credibility points:
  - **From lived experience.** Adam founded and sold a YC company, raised from top-tier funds, and spent years on the investor side. The playbook is the curriculum he wishes he'd had on his own raises.
  - **100+ founders, $80M+ raised.** Every framework here came out of an actual coaching session with a real founder closing a real round.
  - **Backed by funds founders want.** Founders using these moves have closed checks from Y Combinator, Andreessen Horowitz, Pear Ventures, Bessemer, Founder Collective, Hustle Fund, Techstars, and Khosla Ventures.

### 5. What's inside
- Section header along the lines of "What's inside."
- Eleven chapter cards. Each card shows: chapter number, chapter title, one-sentence description.
  1. **Fundraising Mindset** — The Authentic FOMO framework and the four goals that frame every strong raise.
  2. **Communicate Your Story** — Problem, Why Now, Solution, Market, Traction, Team, Competition, Ask.
  3. **Prepare Your Materials** — Blurb, one-pager, deck, demo, data room.
  4. **Build Your Target List** — 80 to 120 qualified investors, 70% Tier 1A, with hard and soft filters.
  5. **Map Your Connectors** — The A–D connector hierarchy. Quality of connector matters as much as investor fit.
  6. **Activate Your Intros** — Double opt-in, simultaneous launch, momentum from day one.
  7. **Pitching Best Practices** — Anatomy of a first meeting, leading with the problem, pyramid answers.
  8. **Refine Through Practice** — Drill the pitch, sharpen the answers, walk in confident.
  9. **Manage Your Pipeline** — CRM setup, reading investor signals, knowing when to cut a lead.
  10. **Diligence & Term Sheet** — Key terms, valuation conversations, what diligence actually looks like.
  11. **Close the Round** — Securing the lead, the first close, getting the wire.

### 6. Final CTA
- A closing block that drives the same single action.
- Short headline along the lines of "Get the free playbook."
- One sentence reinforcing the offer. Current working line: "Eleven chapters of hard-won knowledge. Free, self-serve, immediately useful."
- Primary CTA button: "Get the free playbook."

## Functional requirements

- Single conversion goal: clicking a "Get the free playbook" button opens an email gate (existing JS function `window.startEmailGate()`). The gate captures first name, last name, email, optional company. Submit unlocks the chapter content within the same page.
- The same email-gate trigger powers every CTA on the page. There are at least three CTAs (header, hero, final). All must call the same handler.
- The "Why we built this playbook" video plays in an in-page lightbox (existing JS function `openVideoLightbox(id, label)`).
- The page lives at `/fundraising-playbook` (URL is rewritten by Netlify; canonical filename is `fundraising-playbook.html`).
- It must work as a single static HTML file. The chapter content lives in the same file behind the email gate, so the landing must coexist visually and structurally with the rest of the document. Inline CSS and JS are fine. No build step.
- The landing should perform well on mobile (50%+ of traffic). One-handed scroll-and-tap flow.
- Word "free" must be unmissable above the fold and on every CTA.
- Page must be fast on first paint. Hero content visible without waiting on the video to load.

## Out of scope for this brief

- Visual style — colors, typography, photography, illustration. Adam will provide example websites for visual reference separately.
- The interactive playbook chapters themselves (post email gate). Those have their own design system.
- Email gate UI styling.
- Brand identity work.

## What success looks like

- A founder lands on the page, scans for under 30 seconds, and clicks the CTA. The page communicates: this is from someone who has actually fundraised and coached founders to close $80M+, the curriculum is real and structured, it's free, and it's worth the email.

## Existing assets available

- Wordmark / logo PNG.
- Photos of Adam (coaching, sailing, speaking).
- Video file (or YouTube ID) for the "Why we built this playbook" embed.
- The 11-chapter content already lives behind the email gate.

## Constraints / things to preserve

- The existing email gate flow.
- The existing video lightbox.
- The 11 chapter titles and descriptions.
- The three founder quotes (real founders, real names).
- The investor list (real funds).
- Mobile-first behavior.
