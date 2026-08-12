# lifted-vc-site — Lifted marketing website (lifted.vc)

Static HTML site. No framework, no build step for the pages themselves.
This folder is the **canonical clone**. Repo: `https://github.com/liftedvc/lifted-vc-site`.

## Layout

Site files live in the **`lifted-vc-site/` subfolder**, not at the repo root.

```
lifted-vc-site/
  index.html  about.html  founders.html  pricing.html  contact.html
  partners.html  partners-thanks.html  thank-you.html  404.html
  fundraising-playbook.html            <- the playbook (SOURCE OF TRUTH)
  fundraising-playbook-shared.html     <- GENERATED, never hand-edit
  scripts/build-shared-playbook.mjs    <- the generator
  netlify.toml  _redirects  sitemap.xml  robots.txt
  styles.css  theatre.css  playbook-extras.css
  components/  images/  audio/
  lifted-design-system.md              <- full design system reference
```

## How it deploys

Netlify builds from GitHub `main` on every push. Netlify's **base directory is `lifted-vc-site/`**, so `netlify.toml` lives there.

- Build command: `node scripts/build-shared-playbook.mjs`
- Publish directory: `.`

Adam commits and pushes in **GitHub Desktop**. Netlify picks it up automatically. Nothing else to run.

## The fundraising playbook

`fundraising-playbook.html` is one self-contained HTML file: a React SPA written in compiled `React.createElement` form, so there is no bundler and no build step. It is ~730 KB with ~18 `<script>` blocks.

`fundraising-playbook-shared.html` is the version the client dashboard embeds at `lifted.vc/fundraising-playbook-shared`. It is **auto-generated** from the main file by `scripts/build-shared-playbook.mjs`, which runs as the Netlify build command on every deploy. It differs in exactly three ways: no Cloudflare analytics, no "Ask Adam / Office Hours" floating widget, and it adds `pbEmbeddedAccess()` / `pbPrefillFromParams()` plus a one-line hook in `pbGateNeeded()` so a founder arriving with `?embed=1&email=…` skips the email/stage gate.

**Edit only `fundraising-playbook.html`.** The shared file regenerates itself.

The generator is deliberately best-effort: if a marker it looks for has moved it warns and skips that step rather than failing the build. So after a structural edit to the playbook, check the deploy log for `[build-shared-playbook] Skipped …` warnings.

### After editing the playbook

Node-check every `<script>` block. Extract each inline block to a temp file and run `node --check` on it. A syntax error in one block silently kills the whole SPA in the browser.

## House style

| Token | Value |
|---|---|
| Accent slate | `#3d5c66` |
| Ink | `#0a0a0a` |
| Borders | `#e9e8e3` |
| Soft background | `#f6f5f2` |
| Green | `#4f7d5b` |
| Coral | `#c0512d` |
| Radius | `2px` |
| Typeface | Inter Tight |

`lifted-design-system.md` has the full reference.

## Embedding and CSP

The dashboard at `app.lifted.vc` iframes `lifted.vc/fundraising-playbook-shared`. The `Content-Security-Policy: frame-ancestors` header in `netlify.toml` allows `lifted.vc`, `www.lifted.vc`, `app.lifted.vc`, and `lifted-dashboard-staging.netlify.app`. Adding a new embedding origin means adding it there.

## Gotchas

- **Never run git commands against this repo from a Cowork sandbox.** It can leave a `.git/index.lock` that blocks GitHub Desktop. Use file tools only; Adam runs git in GitHub Desktop.
- Division of labor: Claude edits and verifies files, Adam commits and pushes, Netlify deploys.
- Always work in `/Users/adamroberts/Documents/GitHub/lifted-vc-site`. Older copies under `Documents/Claude/Projects/…` are stale and superseded.
- The website and the dashboard are **separate repos with separate deploys**. Dashboard code lives in `liftedvc/lifted-dashboard`.
- `redesign-next/`, `redesign-staging/`, `chapter-2-redesign.html`, `fundraising-playbook-preview.html` and `fundraising-playbook-redesign.html` are exploration artifacts, not the live site.
