# Lifted Playbook — Chapter 2 Redesign

Test rebuild of Chapter 2 ("The Authentic FOMO Framework") using apple.com as the visual and interaction reference. Goal is to produce a comprehensive style guide via the shared primitives used here, which then get rolled across the rest of the playbook.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (scroll reveals + nav-blur transition only)

## Running locally

```bash
cd redesign-next
npm install
npm run dev
```

Visit http://localhost:3000.

## Design tokens

- **Canvas**: pure white `#FFFFFF` and near-black `#0A0A0A`
- **Single accent**: ink blue `#0047AB`, reserved for primary CTAs and inline links only
- **Font**: SF Pro (system-default on macOS/iOS, with Inter + system-ui fallbacks)
- **Display scale**: 80 / 64 / 48 / 36 with tight letter-spacing and 1.05–1.1 line-heights
- **Body scale**: 24 / 20 / 18 / 15 with 1.5+ line-heights
- **Eyebrow**: 12px uppercase with 0.14em letter-spacing
- **Container column**: 720px max
- **Wide container**: 1120px max
- **Section padding**: 120px top/bottom on desktop, 64px on mobile

## Build progress

- [x] Scaffold (Next.js + Tailwind + Framer Motion)
- [x] Design tokens
- [x] NavBar (sticky, blur on scroll)
- [x] Section 01 — Hero
- [x] Section 02 — What Is Authentic FOMO?
- [ ] Section 03 — The Anatomy of a Raise (dark inverted test)
- [ ] Section 04 — The Activation Hinge
- [ ] Section 05 — The Four Goals
- [ ] Section 06 — Knowledge Check
- [ ] Section 07 — Up Next

## Copy

Every word comes from the existing playbook. No copy changes as part of this redesign.
