# Lifted Playbook — Video Script Quick Guide

Scripts for short animated explainer videos that go on each sub-chapter of the Lifted Fundraising Playbook. Voiceover is produced via **Golpo**.

Playbook page: `/Users/adamroberts/Documents/Claude/Projects/Website/lifted-vc-site/fundraising-playbook.html`

---

## Script writing tips (Adam style)

**Voice.** Declarative, punchy, conversational. Keep contractions. No corporate warm-up phrases. No story-narrative picture-painting. Full sentences with internal commas carry the rhythm; fragments are used sparingly for emphasis on key beats, not as a default. If a paragraph has more than two fragments back-to-back, combine them.

**Two hard rules from Adam's preferences:**
- Never use the em-dash with space ("— "). Use colons, semicolons, periods, or restructure.
- Don't say what a thing isn't, just say what it is. Avoid "X isn't Y, it's Z" constructions.

**Three Adam-specific things to avoid:**
- Don't predict investor behavior. Reframe as founder-action ("Frame the round around X" instead of "Investors fund X").
- Don't be overly definitive about variables. Use "tend to," "often," "can," "depends on" to acknowledge variability.
- Don't predict consequences as certainties. "X can lead to Y" beats "X leads to Y."

**Structural patterns that work:**
- Page subtitle as the opener (already approved).
- Page's "single test" callout as the closer when one exists.
- Colon-then-list patterns for AI voiceover delivery (long inline lists between subject and verb trip the AI voice).
- Internal periods inside long quotes give the AI voice clean breath beats.
- Bridge sentences between distinct beats ("From there," "Once X is set," "Then anticipate...") help spoken flow.
- Combine short sentences when there are too many fragments back-to-back. Adam will say "too many short sentences."

**Length targets:**
- Chapter intro / framing videos: ~1:00 to 1:15 (~900-1,100 chars).
- Standard content sub-chapter videos: ~2:00 to 2:10 (~2,000-2,100 chars).
- Hard cap: ~2,100 chars.

**Two video types:**
- **Content videos** teach the highest-leverage moves on the page. Keep all moves, condense each. Drop strong/weak comparisons (live on the page). Drop example modals.
- **Chapter intro / framing videos** don't teach content. They frame the chapter, give theory/principles, describe how to get the most out of it. Less definitive, more meta.

---

## Logistics: file structure

Three files per script. Keep them in sync.

**Canonical (working file):** `lifted-vc-site/scripts/<topic-name>.md`
- Lowercase with hyphens. E.g., `the-team.md`.
- Contains: status header, script body, AI voiceover notes, attribution notes.

**Final paste-ready:** `lifted-vc-site/scripts/final/NN_<topic-name>.md`
- One file per video, with three blocks together: the script body, a YouTube-optimized title, and a YouTube-optimized description. See "YouTube best practices" below for the format.
- Numbering starts at 01.

**Outputs deliverable:** outputs folder (Cowork temp folder, varies per session)
- Full Golpo-ready script + YouTube title (primary + 3 alts) + YouTube description with bullets and timestamp chapters + embed swap HTML.
- Numbering starts at 00. Outputs is offset from final by 1.

---

## Logistics: page placeholder and embed pattern

The video block sits inside `<div class="ss-body">` of the relevant sub-panel.

**Placeholder (before upload):**
```html
<div class="video-section">
  <button type="button" class="video-thumb placeholder" disabled aria-label="Video coming soon: [Title]">
    <span class="video-thumb-play" aria-hidden="true">&#9654;</span>
    <span class="video-thumb-badge">Coming soon</span>
  </button>
  <div class="video-section-caption">Watch: [Title]</div>
</div>
```

**Live (after Adam sends YouTube ID):**
```html
<div class="video-section">
  <button type="button" class="video-thumb" onclick="openVideoLightbox('YOUTUBE_ID','[Title]')" aria-label="Play video: [Title]">
    <img src="https://img.youtube.com/vi/YOUTUBE_ID/hqdefault.jpg" alt="">
    <span class="video-thumb-play" aria-hidden="true">&#9654;</span>
    <span class="video-thumb-badge">Watch the walkthrough</span>
  </button>
  <div class="video-section-caption">Watch: [Title]</div>
</div>
```

---

## Workflow

1. Find the sub-panel HTML in `fundraising-playbook.html`. Read the page-head-sub, sections, examples, single-test callout if present.
2. Draft canonical script. Create outputs deliverable. Present both to Adam.
3. Iterate. Adam edits word by word. Honor his preferred phrasings even if they break grammar conventions.
4. Cold-viewer evaluation pass when Adam asks: identify jargon and undefined terms.
5. Trim pass to hit character target.
6. AI voiceover check: identify spots where Golpo might trip on cadence.
7. Finalize: copy script body to `scripts/final/NN_<topic>.md` together with a YouTube-optimized title and description (see "YouTube best practices" below). Update outputs file, mark canonical status as Finalized.
8. When Adam sends the YouTube ID, swap the placeholder block on the page for the live block. Update canonical status header and outputs embed section.

---

## YouTube best practices

Every finalized script in `scripts/final/` includes three blocks together: the script body, a YouTube-optimized title, and a YouTube-optimized description.

**Title:**
- Under 60 characters so it doesn't truncate in YouTube search results
- Front-load keywords matching search intent
- Use numbers and value props where they fit ("3 Principles", "How to...")

**Description:**
- First 150 characters are the above-the-fold hook; front-load the key idea and keywords
- Bulleted list of what's in the video (4-5 bullets)
- Chapter timestamps in `M:SS Title` format on their own lines (auto-generates YouTube chapters; min 3 chapters, each ≥10 seconds, first at 0:00)
- CTA linking to https://lifted.vc/fundraising-playbook
- 3-5 relevant hashtags at the end (e.g. `#startups #venturecapital #fundraising #founders`)

**File format:**

```
# [Topic title]

**Placement:** [chapter and sub]
**Length:** [target time]

---

## Script

[script body]

---

## YouTube Title

[title]

---

## YouTube Description

[description body with bullets, chapters, CTA, and hashtags]
```
