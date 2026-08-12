#!/usr/bin/env node
/*
 * build-shared-playbook.mjs
 * -------------------------
 * The client dashboard (app.lifted.vc) embeds https://lifted.vc/fundraising-playbook-shared
 * in an iframe. That "shared" page is the SAME playbook, adapted for signed-in
 * clients. It is generated here from the single source of truth,
 * fundraising-playbook.html, so the two can never drift again.
 *
 * The client version differs from the public one in exactly three ways:
 *   1. No Cloudflare analytics (the public page tracks; the embedded one shouldn't).
 *   2. No "Ask Adam / Office Hours" floating widget (the ASK-ENH block) — clients
 *      already have direct access to Adam.
 *   3. Adds pbEmbeddedAccess()/pbPrefillFromParams() + a one-line hook in the gate,
 *      so a founder opening it from the dashboard (with ?embed=1&email=...) skips
 *      the email/stage gate and lands straight in the playbook.
 * Everything else is copied verbatim, so the client always sees the current content.
 *
 * Edit ONLY fundraising-playbook.html. This runs on every deploy (see the
 * [build] command in netlify.toml). It never fails the build: if a target it
 * expects has changed, it warns and skips that step rather than erroring.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(here, "../fundraising-playbook.html");
const OUT = resolve(here, "../fundraising-playbook-shared.html");

const log = (m) => console.log("[build-shared-playbook] " + m);
const warn = (m) => console.warn("[build-shared-playbook] " + m);

// The embedded-access logic (verbatim from the client version). Injected just
// before pbGateNeeded so it's defined before use. Depends on liftedReadUser /
// liftedReadProfile, which already exist in the playbook.
const EMBED_BLOCK = `// When the playbook is embedded in the client dashboard, the founder is already
// authenticated. The dashboard passes their identity via URL params so the
// email/stage gate never appears and they always have access. Returns true when
// such an embedded/prefilled context is detected.
function pbEmbeddedAccess() {
  try {
    if (typeof window === 'undefined' || !window.location) return false;
    var q = new URLSearchParams(window.location.search || '');
    return !!(q.get('embed') === '1' || q.get('email'));
  } catch (e) {
    return false;
  }
}

// Persist the founder's identity from URL params into localStorage so progress
// tracking and analytics have it. Best-effort: if storage is blocked (e.g. a
// third-party iframe), pbEmbeddedAccess() still keeps the gate closed.
(function pbPrefillFromParams() {
  try {
    if (typeof window === 'undefined' || !window.location) return;
    var q = new URLSearchParams(window.location.search || '');
    var email = q.get('email');
    if (!email) return;
    var u = liftedReadUser();
    if (!u || !u.email) {
      localStorage.setItem('lifted_user', JSON.stringify({
        firstName: q.get('firstName') || q.get('name') || '',
        lastName: q.get('lastName') || '',
        email: email,
        company: q.get('company') || '',
        createdAt: new Date().toISOString()
      }));
    }
    var p = liftedReadProfile();
    if (!p || !p.stage) {
      localStorage.setItem('lifted_profile', JSON.stringify({ stage: q.get('stage') || 'seed' }));
    }
  } catch (e) {/* storage blocked — pbEmbeddedAccess covers the gate */}
})();

`;

const GATE_ANCHOR = "function pbGateNeeded() {\n  if (isPlaybookDevMode()) return false;";
const GATE_WITH_HOOK = "function pbGateNeeded() {\n  if (isPlaybookDevMode()) return false;\n  if (pbEmbeddedAccess()) return false;";

let html;
try {
  html = readFileSync(SRC, "utf8");
} catch (e) {
  warn("Could not read " + SRC + " — leaving the existing shared page untouched.");
  process.exit(0);
}

function removeBetween(label, startMarker, endMarker) {
  const s = html.indexOf(startMarker);
  const e = html.indexOf(endMarker);
  if (s === -1 || e === -1 || e < s) {
    warn('Skipped "' + label + '": markers not found (playbook may have changed).');
    return;
  }
  html = html.slice(0, s) + html.slice(e + endMarker.length);
  // tidy any leftover blank lines at the seam
  html = html.slice(0, s).replace(/[ \t]*\n{3,}$/, "\n\n") + html.slice(s);
  log('Applied: ' + label);
}

// 1) Strip Cloudflare analytics.
removeBetween("remove analytics", "<!-- Cloudflare Web Analytics -->", "<!-- End Cloudflare Web Analytics -->");

// 2) Strip the "Ask Adam / Office Hours" floating widget.
removeBetween("remove Ask-Adam widget", "<!-- ASK-ENH v3 -->", "<!-- /ASK-ENH -->");

// 3) Add the embedded-access helpers before the gate.
if (!html.includes("function pbEmbeddedAccess")) {
  if (html.includes("function pbGateNeeded() {")) {
    html = html.replace("function pbGateNeeded() {", EMBED_BLOCK + "function pbGateNeeded() {");
    log("Applied: inject pbEmbeddedAccess/pbPrefillFromParams");
  } else {
    warn('Skipped "inject embed helpers": pbGateNeeded not found.');
  }
} else {
  warn('Skipped "inject embed helpers": pbEmbeddedAccess already present.');
}

// 4) Hook the gate so embedded founders skip it.
if (html.includes(GATE_ANCHOR) && !html.includes("if (pbEmbeddedAccess()) return false;")) {
  html = html.replace(GATE_ANCHOR, GATE_WITH_HOOK);
  log("Applied: gate skips for embedded founders");
} else if (!html.includes(GATE_ANCHOR)) {
  warn('Skipped "gate hook": gate anchor not found.');
}

writeFileSync(OUT, html);
log("Wrote " + OUT + " (" + html.length + " bytes).");
