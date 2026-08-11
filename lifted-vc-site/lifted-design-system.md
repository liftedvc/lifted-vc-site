# Lifted.vc — Design System

The visual language for lifted.vc. Use this when designing or redesigning any page on the domain (including the fundraising playbook landing) so the surface stays consistent with the rest of the site.

The system is implemented in `styles.css` at the deploy root. Tokens below are exported as CSS variables on `:root` and live alongside several alternate palettes which can be activated via `data-palette` on `<html>`. The default palette is the source of truth here.

---

## Foundations

### Design principles

- **Editorial, not corporate.** Big serif headlines, generous whitespace, italic accents on key words. The site reads like a literary magazine, not a SaaS landing.
- **Warm, not cold.** Cream base, sun-warm color blocks (butter, sage, sky, blush). No grays, no clinical whites.
- **Quiet confidence.** Flat surfaces. Minimal borders. No drop shadows, no gradients, no glow. Type and color do the work.
- **Italic for emphasis.** When a key word in a headline matters, set it in italic Fraunces. Often paired with the terracotta accent color. This is the single most important visual signature of the brand.
- **Color block as section.** Sections are separated by full-bleed background color (cream, butter, sage, sky, blush, or deep navy), not by lines or padding alone.
- **Mobile gets the same care.** Type stays readable, sections stack, buttons stay generous. The aesthetic does not collapse on small screens.

### Voice as design

The copy voice is founder-to-founder, plainspoken, specific. The design should not undercut that with corporate polish. Avoid hero illustrations of abstract figures, stock photography of handshakes, gradient backgrounds, neon shaders, or anything that would look at home in a generic Series B SaaS site.

---

## Color

The palette is grouped into four roles: surface, ink, section blocks, and accent.

### Surface (page background)

| Token | Hex | Use |
|---|---|---|
| `--bg`, `--cream` | `#fbf6ec` | Warm off-white. The default page background. Also the inside of cards on colored sections. |
| `--line` | `#e6dfd0` | Subtle dividers on cream surfaces. |
| `--line-soft` | `#efe9db` | Even softer dividers (e.g. nav border). |

### Ink (text)

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#1a1a1a` | Headings, primary body text, dark buttons. Near-black, slightly warm. |
| `--ink-soft` | `#4f4d49` | Secondary body text, eyebrow labels. |
| `--ink-mute` | `#8a8680` | Tertiary text (footer copyright, photo captions). |

### Section blocks

These are full-bleed background colors used to separate sections. Each comes with a deeper variant available for accents, dividers, or hover states.

| Token | Hex | Where it shows up |
|---|---|---|
| `--butter` | `#f5d574` | Sun-warm yellow. Featured cards, the highlighted plan, the hero color blob. |
| `--butter-deep` | `#d9b449` | |
| `--sage` | `#b6cdb4` | Soft green. The "How we work together" section. |
| `--sage-deep` | `#6f8e6e` | |
| `--sky` | `#aac4dd` | Dusty blue. The Process section, supporting cards. |
| `--sky-deep` | `#5d7d9c` | |
| `--blush` | `#efbfb1` | Warm peach. Featured testimonial sections. |
| `--blush-deep` | `#c2806e` | |
| `--deep` | `#1a2235` | Deep navy. The closing CTA section. Inverted text on this color uses `--cream`. |

Pair section blocks deliberately, not at random. The home page rhythm runs cream → sky → sage → blush → deep navy. Each block runs the full viewport width with `200px` of vertical padding on desktop.

### Accent

| Token | Hex | Use |
|---|---|---|
| `--accent` | `#c25a3c` | Warm terracotta. Used on the italic accent words in headlines, eyebrow dots, link hovers, button hover backgrounds, card tag labels. The single hue that ties the whole site together. |
| `--accent-deep` | `#8d3a24` | Pressed states or dark variants. |

### Combinations to avoid

- Black on cream that isn't actually `--ink`. Don't use `#000`.
- Pure white anywhere. The system has no white surface.
- Accent on butter (terracotta on yellow) at small sizes. Contrast is too low for body text. It works for the accent dot in eyebrows because the dot is decorative, not type.
- Two adjacent section blocks of the same color. Always alternate.

---

## Typography

### Type pair

- **Serif: Fraunces.** All headings, italic accents, blockquotes, the wordmark. Display family. Uses optical sizing.
- **Sans: Inter Tight.** Body, eyebrows, buttons, navigation, footer.
- **Mono: Geist Mono.** Sparingly. Photo placeholder labels, ordinal numbers in mobile drawer, occasional metadata.

Loaded from Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter+Tight:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Scale

The system is fluid (`clamp()` for headings) so it scales naturally between mobile and desktop. Numbers below are the desktop ceiling.

| Element | Family | Size (desktop) | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Hero h1 | Fraunces | `clamp(56px, 7.5vw, 124px)` | 400 | 0.96 | -0.025em |
| Section h2 | Fraunces | `clamp(44px, 6vw, 88px)` | 400 | 1 | -0.025em |
| Card h3 | Fraunces | 28-36px | 400 | 1.05-1.1 | -0.025em |
| Card h4 | Fraunces | 24-28px | 400 | 1.1 | -0.025em |
| Body large (subhead, quote sub) | Inter Tight | 19-22px | 400 | 1.45 | -0.005em |
| Body | Inter Tight | 16-18px | 400 | 1.55 | -0.005em |
| Eyebrow | Inter Tight | 13px | 500 | n/a | 0.02em |
| Caption / mono label | Geist Mono | 10.5-11px | 400 | n/a | 0.06-0.1em |

Headings always use 400 weight Fraunces. The visual weight comes from size, not boldness. Bold sans-serif headings are out of system.

### Italic accent rule

Highlight one or two words in any heading by wrapping them in an italic span colored with `--accent`.

```html
<h1>Raise your round like a <span style="font-style: italic; color: var(--accent);">repeat founder.</span></h1>
```

This treatment is the brand's signature. Use it on every hero. Use it on most section h2s. Don't use it on every word, on long phrases, or in body copy.

A second variant uses italic *without* the accent color (still serif, still italic, but in `--ink`). This works for follow-up emphasis or for headlines on already-colored backgrounds where the accent would clash:

```html
<h2>Three ways in,<br><span style="font-style: italic;">one shared goal.</span></h2>
```

### Eyebrow

A small label that sits above section titles and hero headlines. Sans, 13px, weight 500, with a `--accent` colored dot prefix.

```html
<div class="eyebrow">How it works</div>
```

```css
.eyebrow {
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--ink-soft);
  display: inline-flex; align-items: center; gap: 8px;
}
.eyebrow::before {
  content: '';
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--accent);
  display: inline-block;
}
```

---

## Spacing & layout

### Container

```css
.wrap { max-width: 1280px; margin: 0 auto; padding: 0 56px; }
```

Tablet (`max-width: 1024px`) drops side padding to `32px`. Mobile (`max-width: 768px`) drops to `20px`.

### Section padding

```css
section { padding: 200px 0; }
section.tight { padding: 100px 0; }
```

Tablet drops to `140px / 80px`. Mobile clamps to `80px / 60px`. The closing CTA uses heavier padding (`200px desktop / 100px mobile`) to feel like a final breath before the footer.

The generous padding is part of the editorial feel. Resist the temptation to compress.

### Grid

Three-column grids are the default for content-heavy sections (cards, stats, testimonials). They stack to a single column at the mobile breakpoint:

```html
<div data-stack="true" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
  <div>…</div><div>…</div><div>…</div>
</div>
```

Add `data-stack="true"` to any 2- or 3-column grid. The stylesheet's mobile rule collapses it:

```css
@media (max-width: 768px) {
  [data-stack="true"] { grid-template-columns: 1fr !important; gap: 32px !important; }
}
```

Two-column grids (e.g. About page sticky-image + body, Contact page form layout) use the same `data-stack` pattern.

### Border radii

| Token / value | Use |
|---|---|
| `8px` | Photo placeholder corners |
| `16px` | All cards (testimonials, services, pricing, validation, FAQ items) |
| `999px` | Buttons, pills, stat tags, mobile nav toggle |

Cards always use `16px`. Buttons always use `999px`. Pick one or the other; do not introduce intermediate values.

---

## Components

### Buttons

Three variants. All are pills.

**Primary (filled, ink on cream).** Default CTA.
```html
<a href="…" class="btn btn-primary">Work with me <Arrow /></a>
```
Hover: background swaps from `--ink` to `--accent` and lifts 1px.

**Ghost (outlined).** Secondary action.
```html
<a href="…" class="btn btn-ghost">How it works</a>
```
Hover: fills with `--ink`, text inverts to `--cream`.

**Butter (yellow on dark).** Used on the deep-navy CTA block where ink-on-cream wouldn't have the contrast or warmth.
```html
<a class="btn" style="background: var(--butter); color: var(--deep);">Work with me <Arrow /></a>
```

Padding is `16px 28px` desktop, `13px 22px` mobile. Font is Inter Tight 16px / 500. Border radius `999px`. Border `1.5px` (transparent on primary, ink on ghost).

The arrow glyph after the label is a custom SVG that nudges 3px right on hover:

```html
<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### Cards

A card is a rounded `16px` block with `40px` of padding. Cards always sit on a colored section block; their fill color is one of:

- `--cream` — default. Most cards, including those on sage / sky / blush sections.
- A section-block color — used for emphasis (the highlighted pricing card uses `--butter`, testimonial cards on the Founders page rotate through `--blush`, `--butter`, `--sage`, `--sky`).

Card structure (services teaser pattern):

```html
<div style="padding: 40px; background: var(--cream); border-radius: 16px; display: flex; flex-direction: column;">
  <div style="font-size: 13px; color: var(--accent); font-weight: 500; margin-bottom: 14px;">Tag</div>
  <h4 style="font-size: 28px; margin: 0 0 12px; line-height: 1.1;">Title</h4>
  <p style="font-size: 15.5px; color: var(--ink-soft); margin: 0 0 22px;">Description.</p>
  <ul style="list-style: none; padding: 0; margin: 0 0 28px; flex: 1; border-top: 1px solid rgba(0,0,0,0.12);">
    <li style="padding: 11px 0; border-bottom: 1px solid rgba(0,0,0,0.08); font-size: 14px; display: flex; gap: 10px; align-items: baseline;">
      <span style="color: var(--accent);">→</span> Feature
    </li>
    …
  </ul>
  <a class="btn btn-primary" style="margin-top: auto; justify-content: center;">CTA <Arrow /></a>
</div>
```

The "most popular" card variant adds a small dark pill above the card flagging the highlight:

```html
<div style="position: absolute; top: -12px; right: 24px; background: var(--ink); color: var(--cream); padding: 6px 14px; border-radius: 999px; font-size: 12px; font-weight: 500;">Most popular</div>
```

Cards never have drop shadows. Hover lifts the whole card 3px when interactive.

### Testimonial / quote card

Quotes live on colored cards (one of `--blush`, `--butter`, `--sage`, `--sky`). They have a large italic Fraunces opening quote mark, the body in italic Fraunces, a divider, and an avatar circle + name (italic Fraunces) + role (sans).

```html
<div style="padding: 40px; background: var(--blush); border-radius: 16px; display: flex; flex-direction: column;">
  <div style="font-family: var(--serif); font-size: 80px; color: var(--ink); line-height: 0.5; margin-bottom: 24px; opacity: 0.4; font-style: italic;">"</div>
  <p style="font-family: var(--serif); font-style: italic; font-size: 22px; line-height: 1.4; color: var(--ink); margin: 0 0 32px; flex: 1; font-weight: 400;">Quote text.</p>
  <div style="display: flex; align-items: center; gap: 14px; padding-top: 24px; border-top: 1px solid rgba(0,0,0,0.12);">
    <Avatar letter="L" />
    <div>
      <div style="font-family: var(--serif); font-size: 17px; font-style: italic;">Leni</div>
      <div style="font-size: 13px; color: var(--ink-soft);">Pre-seed founder</div>
    </div>
  </div>
</div>
```

The avatar is a `38px` circle with a single italic serif letter, `--cream` background, `--accent` text.

### Validation card (proof point)

A simpler card used in the playbook hero to surface 3 proof statements. Same `40px` padding and `16px` radius as a regular card, but the body is large serif instead of small sans, and there's no list or CTA. Each card uses a different section-block color.

```html
<div style="padding: 40px; background: var(--blush); border-radius: 16px; display: flex; flex-direction: column; gap: 22px;">
  <div class="eyebrow">Track record</div>
  <p style="font-family: var(--serif); font-size: 24px; line-height: 1.35; letter-spacing: -0.015em; color: var(--ink); font-weight: 400;"><strong style="font-weight: 500; font-style: italic;">300+ coaching sessions</strong> that raised $80M in venture funding.</p>
</div>
```

### Photo placeholder

When a photo isn't ready, render a striped placeholder with a small caption (top-left) and a label (bottom-left). Once a real image is dropped in, the stripes hide automatically.

```html
<div class="photo" style="aspect-ratio: 4 / 5;">
  <img src="images/adam-coach.jpg" alt="Adam Roberts">
  <!-- or for placeholder: -->
  <!-- <div class="stripes"></div> -->
  <div class="caption">Adam Roberts</div>
  <div class="label">adam-coach.jpg</div>
</div>
```

The stripes use a 135deg repeating gradient, very low opacity. Border-radius `8px`. Caption is 12px sans. Label is 10.5px mono in a small cream pill.

### Stats bar

Three values laid out in a 3-column grid with a top divider. Used in the home hero and could be used on the playbook landing as an alternative proof treatment.

```html
<div data-stack="true" style="display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); padding-top: 56px;">
  <div>
    <div style="font-family: var(--serif); font-size: clamp(48px, 6vw, 80px); letter-spacing: -0.03em; line-height: 1; color: var(--ink);">$80M+</div>
    <div style="font-size: 14px; color: var(--ink-soft); margin-top: 12px;">Raised by coached founders</div>
  </div>
  …
</div>
```

The number uses serif at 80px (no italic by default). The label is 14px sans-soft. No card background. Pure typography.

### Marquee strip

A horizontally-scrolling row of investor / brand names. Used on the home page proof strip. Names are 26px serif, alternating italic / regular every third item, in `--ink-soft`. The track infinite-scrolls left.

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.marquee { display: flex; gap: 64px; width: max-content; animation: marquee 50s linear infinite; }
```

Wrap the marquee in an overflow-hidden container with a fade mask on the left and right edges.

### Sticky navigation

The nav is `position: sticky` at top. Background is transparent at scroll-y 0, then turns into a `rgba(251, 246, 236, 0.92)` blurred surface (`backdrop-filter: blur(18px) saturate(140%)`) once scrolled past 12px. Height is `76px` desktop, `64px` mobile.

Layout: wordmark left, link list center-right, primary "Work with me" button far right. Active link gets `1.5px solid var(--accent)` underline.

Mobile: hides the link list, shows a `44px` circular hamburger button with three animated lines that rotate to an X when open. Tap opens a full-viewport drawer with the link list set in 32px italic Fraunces and a numbered mono label per item.

### Footer

Cream background, `1px solid var(--line)` top border, `64px 0 36px` padding. Four columns: wordmark + tagline (italic serif), then three link columns ("Site", "Resources", "Connect"). Bottom row has the copyright and the brand tagline ("Honest fundraising. Tighter timelines.") in italic serif.

Mobile: stacks to a single column. Bottom row stacks vertically.

### Tweaks panel

A floating dev-only panel for switching palette and type pair without re-deploying. Hidden by default, shows only when activated by a parent frame. Safe to leave on production. Don't redesign or remove.

---

## Section pattern

Almost every section on the site follows the same shape:

1. **Eyebrow** (one short label with the accent dot).
2. **H2 with italic accent** (1-2 italic words at the end, sometimes accent-colored, sometimes plain ink).
3. *Optional* **lead paragraph** in 19px sans-soft.
4. **Content** — a 3-column card grid, a 2-column body, a stats bar, etc.

Centered text in the section header is the default. Left-aligned only in editorial flows like the About page story column.

```html
<section class="bg-sky">
  <div class="wrap">
    <div class="reveal" style="text-align: center; max-width: 760px; margin: 0 auto 96px;">
      <div class="eyebrow" style="margin-bottom: 20px;">How it works</div>
      <h2 style="font-size: clamp(44px, 6vw, 88px); line-height: 1;">Three steps to <span style="font-style: italic;">funding.</span></h2>
      <p style="font-size: 19px; color: var(--ink-soft); margin-top: 24px;">Lead paragraph here.</p>
    </div>
    <!-- 3-col card grid here -->
  </div>
</section>
```

---

## Motion

### Reveal on scroll

Every above-the-fold and below-the-fold block fades up on scroll using an `IntersectionObserver`. Apply by wrapping content in a `<Reveal delay={ms}>` component (the React primitives provide it).

```css
.reveal { opacity: 0; transform: translateY(20px); transition: opacity .8s cubic-bezier(.2,.8,.2,1), transform .8s cubic-bezier(.2,.8,.2,1); }
.reveal.in { opacity: 1; transform: translateY(0); }
```

Cards in a row stagger by `100ms` per index. Use sparingly on dense sections so it doesn't feel like waves.

### Hover

- Buttons: lift 1px, smooth color swap.
- Cards (when interactive): lift 3px.
- Links: smooth color swap to `--accent`.
- Arrow glyph: nudges 3px right.

All transitions are `0.25s ease` unless otherwise specified.

### Marquee

Continuous left-translate at 50s per loop. Pauses on hover (optional). Mask the edges with a transparent-to-black gradient so words fade in/out.

---

## Don'ts

- No drop shadows. Anywhere.
- No gradients on backgrounds, buttons, or cards. The single exception is the `repeating-linear-gradient` stripe pattern inside the photo placeholder.
- No glow, neon, or noise textures.
- No bold sans-serif for headings. Serif at weight 400 only.
- No "card-on-card" depth (a card inside a card with a heavier shadow). Flat surfaces only.
- No two adjacent section blocks of the same color.
- No drop caps, all-caps display headings, or condensed-stencil display fonts.
- No sans-serif italic anywhere. Italic is exclusively for serif.
- No "—" with surrounding spaces in any copy. Use a period or a comma.
- No emoji as functional UI (icons, status dots, badges). The accent dot in the eyebrow is the only "visual punctuation" the system uses.
- No icons for the sake of icons. The arrow glyph is the only icon used outside of the mobile hamburger and the photo-placeholder UI. If a card needs more visual weight, give it a colored background, not an icon.
- No stock photography of generic business handshakes, abstract data visualizations, or "diverse team in a meeting room." Photos in the system are real Adam shots (sailing, coaching, speaking) shown in a striped placeholder frame with a caption + filename label.

---

## Asset paths (current site)

For consistency across pages, reference these exact paths.

| Asset | Path |
|---|---|
| Wordmark (color, on cream) | `images/lifted-logo.png` |
| Wordmark (white, on deep) | `images/lifted-logo-white.png` |
| Mark only | `images/sail-mark.png` |
| Adam coaching shot | `images/adam-coach.jpg` |
| Adam sailing | `images/adam-sailing.jpg` |
| Adam 470 (alt sailing) | `images/adam-470.jpg` |
| Adam speaking | `images/adam-speaking-cocreate.jpg` |
| Favicon | `favicon.ico` |
| Apple touch icon | `apple-touch-icon.png` |

---

## Applying this to a new page

To add a page that fits the system:

1. **Layout.** Use the same `<head>` boilerplate as the other pages — Google Fonts link, `styles.css?v=3` include, react / react-dom / babel CDN scripts.
2. **Shell.** Wrap the page body in `<PageShell current="page-slug"><CTA /></PageShell>` so the sticky nav, footer, and final-CTA color block all come along.
3. **Sections.** Compose the page out of `<section className="bg-X">` color blocks. Alternate colors. Always start on cream (the hero) and end on deep navy (the closing CTA).
4. **Each section header** uses eyebrow + h2-with-italic-accent + optional lead.
5. **Content inside sections** is one of the established patterns: 3-column card grid, stats bar, 2-column editorial, marquee, or quote card.
6. **CTAs** are pill buttons. Primary (filled `--ink`) for the conversion action. Ghost (outlined) for secondary. Butter for use on `--deep` backgrounds.
7. **Italic accents** in headlines, sparingly — one or two per section, never on body copy.
8. **Reveal-on-scroll** on every block. Stagger card rows.

That's the whole system. Anything that wants to feel native to the site lives inside these tokens, components, patterns, and don'ts.
