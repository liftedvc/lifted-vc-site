// Scorecard page — full fundraising readiness questionnaire.
// Flow: founder answers 10 questions -> sees instant band + full per-dimension
// breakdown mapped to playbook chapters -> enters email to get the full written
// report + Adam's personal review, which submits everything to Netlify Forms
// (form name: "scorecard") so Adam receives the assessment by email to follow up.
// A hidden static shadow form lives in scorecard.html for Netlify build discovery.

const SC_STAGES = ["Pre-seed", "Seed", "Series A", "Not sure yet"];
const SC_CAL = "https://calendly.com/adam-gozh/free-fundraising-consultation";
const SC_PLAYBOOK = "https://lifted.vc/fundraising-playbook";

const SC_STAGE_BAR = {
  "Pre-seed": "The bar at pre-seed: a credible idea and founding team. Rounds run up to about $3M, averaging near $1.5M.",
  "Seed": "The bar at seed: early product-market-fit signals like real usage and retention. Rounds run roughly $2M to $8M.",
  "Series A": "The bar at Series A: around $300K ARR with strong growth. Rounds run roughly $8M to $20M and up.",
  "Not sure yet": "Most founders raising now sit at pre-seed or seed. Answer honestly and Adam will help you place yourself."
};

const SC_QUESTIONS = [
  { id: "q_traction", dim: "Traction vs your stage bar", chapter: "Chapter 2 \u00b7 How Venture Capital Works",
    q: "Compared with the typical bar for your stage, where does your traction stand?",
    opts: [ { t: "Above the bar, with proof", p: 3 }, { t: "Right at the bar", p: 2 }, { t: "A little below", p: 1 }, { t: "Well below, or not sure", p: 0 } ] },
  { id: "q_roundmath", dim: "Round math", chapter: "Chapter 2 \u00b7 How Venture Capital Works",
    q: "Is your round size and valuation built from a plan and a target lead ownership around 10%?",
    opts: [ { t: "Sized from an 18 to 24 month plan", p: 3 }, { t: "A rough number I can defend", p: 2 }, { t: "A number that felt right", p: 1 }, { t: "Haven't worked it out", p: 0 } ] },
  { id: "q_unlock", dim: "What the capital unlocks", chapter: "Chapter 3 \u00b7 The Authentic FOMO Framework",
    q: "Do you know exactly what this round buys you, milestone by milestone?",
    opts: [ { t: "Crystal clear on the milestones", p: 3 }, { t: "A rough idea", p: 1 }, { t: "Not defined yet", p: 0 } ] },
  { id: "q_whynow", dim: "Why now", chapter: "Chapter 4 \u00b7 Communicate Your Story",
    q: "How sharp is your why-now?",
    opts: [ { t: "Specific and compelling", p: 3 }, { t: "Somewhat there", p: 1 }, { t: "Not really", p: 0 } ] },
  { id: "q_weaknesses", dim: "Weaknesses surfaced", chapter: "Chapter 9 \u00b7 Pitching Best Practices",
    q: "Have you surfaced the weaknesses investors will probe, and prepared reframes?",
    opts: [ { t: "All surfaced and reframed", p: 3 }, { t: "Some of them", p: 1 }, { t: "Hoping they won't dig", p: 0 } ] },
  { id: "q_materials", dim: "Materials and narrative", chapter: "Chapter 5 \u00b7 Prepare Your Materials",
    q: "Where are your deck, one-pager, and narrative?",
    opts: [ { t: "Tight and tested on real investors", p: 3 }, { t: "Drafted, not yet pressure-tested", p: 2 }, { t: "Rough early versions", p: 1 }, { t: "Not built yet", p: 0 } ] },
  { id: "q_pitch_practice", dim: "Pitch, pressure-tested", chapter: "Chapter 10 \u00b7 Refine Through Practice",
    q: "Have you pressure-tested your pitch out loud with people who give honest feedback?",
    opts: [ { t: "Many reps, sharpened each time", p: 3 }, { t: "A couple of run-throughs", p: 1 }, { t: "Not yet", p: 0 } ] },
  { id: "q_targetlist", dim: "Target list", chapter: "Chapter 6 \u00b7 Build Your Target List",
    q: "Do you have a researched, filtered list of fit investors, roughly 80 to 120, tiered?",
    opts: [ { t: "Built and tiered", p: 3 }, { t: "A partial list", p: 2 }, { t: "A handful of names", p: 1 }, { t: "None yet", p: 0 } ] },
  { id: "q_connectors", dim: "Warm paths", chapter: "Chapter 7 \u00b7 Map Your Connectors",
    q: "Do you have warm intro paths mapped to your top targets?",
    opts: [ { t: "Mapped to most", p: 3 }, { t: "A few", p: 1 }, { t: "Mostly cold", p: 0 } ] },
  { id: "q_intro_email", dim: "Forwardable intro", chapter: "Chapter 8 \u00b7 Activate Your Intros",
    q: "Is your forwardable intro email tight and ready to send?",
    opts: [ { t: "Tight and tested", p: 3 }, { t: "Drafted", p: 1 }, { t: "Not written yet", p: 0 } ] },
  { id: "q_pipeline", dim: "Running the process", chapter: "Chapter 11 \u00b7 Manage Your Pipeline",
    q: "Do you have a system to run investors in parallel and hold momentum?",
    opts: [ { t: "A clear system", p: 3 }, { t: "A loose idea", p: 1 }, { t: "No plan yet", p: 0 } ] },
  { id: "q_data_room", dim: "Diligence ready", chapter: "Chapter 12 \u00b7 Diligence & Term Sheet",
    q: "Is your data room ready for when interest turns into diligence?",
    opts: [ { t: "Built and organized", p: 3 }, { t: "Partly there", p: 1 }, { t: "Not started", p: 0 } ] },
  { id: "q_close", dim: "Closing and terms", chapter: "Chapter 13 \u00b7 Close the Round",
    q: "Do you know how to turn a first yes into a full round and handle the terms?",
    opts: [ { t: "Confident on the mechanics", p: 3 }, { t: "Roughly", p: 1 }, { t: "Not really", p: 0 } ] },
  { id: "q_motivation", dim: "Why raise now", chapter: "Chapter 3 \u00b7 The Authentic FOMO Framework",
    q: "Honestly, what is driving the timing?",
    opts: [ { t: "A clear strategic unlock", p: 3 }, { t: "Runway is getting tight", p: 1 }, { t: "It's the expected next step", p: 0 }, { t: "Not fully sure", p: 0 } ] },
  { id: "q_alternatives", dim: "Raising from strength", chapter: "Chapter 2 \u00b7 How Venture Capital Works",
    q: "Could you keep building right now without raising (revenue, grants, waiting)?",
    opts: [ { t: "Yes, and I'm choosing to raise from strength", p: 3 }, { t: "Maybe, it would be tight", p: 2 }, { t: "No, I need capital to really start", p: 0 } ] },
  { id: "q_time", dim: "Focused sprint", chapter: "Chapter 2 \u00b7 How Venture Capital Works",
    q: "Can you run the raise as a focused sprint rather than part-time over many months?",
    opts: [ { t: "Yes, calendar cleared", p: 3 }, { t: "Somewhat", p: 1 }, { t: "No, it would be part-time", p: 0 } ] }
];

const SC_MAX = SC_QUESTIONS.length * 3;

function scTier(score) {
  if (score >= 75) return { name: "Raise from strength", color: "var(--sage-deep)", line: "You are in good shape. Tighten the last gaps and run a fast, confident process." };
  if (score >= 45) return { name: "Almost there", color: "var(--butter-deep)", line: "The bones are there. Close a few gaps before you open the round and you will raise faster." };
  return { name: "Build first", color: "var(--accent)", line: "Raising now would be chopping off a limb to save the body. Build a little more, then raise from strength." };
}
function scStatus(p) {
  if (p >= 3) return { label: "Strong", color: "var(--sage-deep)" };
  if (p === 2) return { label: "Solid", color: "var(--ink)" };
  if (p === 1) return { label: "Shore up", color: "var(--butter-deep)" };
  return { label: "Gap", color: "var(--accent)" };
}

function ScorecardPage() {
  const [stage, setStage] = React.useState("Pre-seed");
  const [answers, setAnswers] = React.useState({});
  const [step, setStep] = React.useState(0);           // 0 = intro/stage, 1..N = questions
  const [view, setView] = React.useState("quiz");      // "quiz" | "results"
  const [shownScore, setShownScore] = React.useState(0);
  const [contact, setContact] = React.useState({ name: "", email: "", company: "", website: "" });
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (document.getElementById("sc-form-styles")) return;
    const st = document.createElement("style");
    st.id = "sc-form-styles";
    st.innerHTML = ".sc-field input{width:100%;background:transparent;border:0;border-bottom:1.5px solid var(--line);padding:12px 0;color:var(--ink);font-family:var(--sans);font-size:17px;outline:none;transition:border-color .25s;}.sc-field input::placeholder{color:var(--ink-mute);}.sc-field input:focus{border-color:var(--accent);}.sc-opt:hover{border-color:var(--ink);}";
    document.head.appendChild(st);
  }, []);

  const N = SC_QUESTIONS.length;
  const points = SC_QUESTIONS.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
  const score = Math.round((points / SC_MAX) * 100);
  const tier = scTier(score);
  const answeredCount = Object.keys(answers).length;

  React.useEffect(() => {
    if (view !== "results") { setShownScore(0); return; }
    let cur = 0; const inc = Math.max(1, Math.round(score / 26));
    const t = setInterval(() => { cur += inc; if (cur >= score) { cur = score; clearInterval(t); } setShownScore(cur); }, 28);
    return () => clearInterval(t);
  }, [view, score]);

  const advanceFrom = (sIdx) => {
    if (sIdx >= N) { setView("results"); window.scrollTo({ top: 0, behavior: "smooth" }); }
    else { setStep(sIdx + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }
  };
  const choose = (q, atStep) => (p) => {
    setAnswers(a => Object.assign({}, a, { [q.id]: p }));
    window.setTimeout(() => advanceFrom(atStep), 240);
  };
  const back = () => setStep(sIdx => Math.max(0, sIdx - 1));

  const submitReport = (e) => {
    e.preventDefault();
    if (submitting) return;
    setError("");
    if (!contact.name.trim() || !contact.email.trim()) { setError("Please add your name and email."); return; }
    const fields = {
      "form-name": "scorecard", "bot-field": "",
      name: contact.name, email: contact.email, company: contact.company, website: contact.website,
      stage: stage, readiness_score: String(score), readiness_tier: tier.name
    };
    SC_QUESTIONS.forEach(q => {
      const chosen = q.opts.find(o => o.p === answers[q.id]);
      fields[q.id] = q.dim + ": " + (chosen ? chosen.t : "");
    });
    const body = Object.keys(fields).map(k => encodeURIComponent(k) + "=" + encodeURIComponent(fields[k])).join("&");
    setSubmitting(true);
    fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body })
      .then(() => setSent(true))
      .catch(() => setError("Something went wrong. Please try again, or email adam@lifted.vc."))
      .finally(() => setSubmitting(false));
  };

  // ---------- RESULTS VIEW ----------
  if (view === "results") {
    return (
      <section style={{ paddingTop: 64, paddingBottom: 140, background: "var(--cream)" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Your readiness read</div>
          <h1 style={{ fontSize: "clamp(40px, 5.4vw, 76px)", lineHeight: 0.98, margin: 0, textWrap: "balance" }}>
            <span style={{ fontStyle: "italic", color: tier.color }}>{tier.name}.</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--ink-soft)", margin: "20px 0 0", maxWidth: 560 }}>{tier.line}</p>

          <div style={{ margin: "30px 0 6px", display: "flex", alignItems: "baseline", gap: 12 }}>
            <span style={{ fontFamily: "var(--serif, Fraunces)", fontSize: 44, lineHeight: 1, color: "var(--ink)" }}>{shownScore}</span>
            <span style={{ fontSize: 14, color: "var(--ink-mute)" }}>/ 100 readiness</span>
          </div>
          <div style={{ height: 8, background: "var(--line-soft)", borderRadius: 999, overflow: "hidden", marginBottom: 8 }}>
            <div style={{ height: "100%", width: shownScore + "%", background: tier.color, transition: "width .1s linear" }} />
          </div>
          <p style={{ fontSize: 13.5, color: "var(--ink-mute)", margin: "0 0 34px" }}>{SC_STAGE_BAR[stage]}</p>

          <div className="eyebrow" style={{ marginBottom: 14 }}>Your readiness, dimension by dimension</div>
          <div style={{ display: "grid", gap: 0, borderTop: "1px solid var(--line)" }}>
            {SC_QUESTIONS.map(q => {
              const p = answers[q.id] || 0;
              const stt = scStatus(p);
              const chosen = q.opts.find(o => o.p === p);
              return (
                <div key={q.id} style={{ padding: "16px 0", borderBottom: "1px solid var(--line)", display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "start" }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 500, color: "var(--ink)" }}>{q.dim}</div>
                    <div style={{ fontSize: 13.5, color: "var(--ink-soft)", marginTop: 3 }}>{chosen ? chosen.t : ""}</div>
                    {p < 3 ? <a href={SC_PLAYBOOK} target="_blank" rel="noopener" style={{ fontSize: 13, color: "var(--accent)", marginTop: 6, display: "inline-block" }}>{q.chapter} &rarr;</a> : null}
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: stt.color, whiteSpace: "nowrap", paddingTop: 3 }}>{stt.label}</span>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 34, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={SC_CAL} target="_blank" rel="noopener" className="btn btn-primary">Book your free consultation <Arrow /></a>
            <a href={SC_PLAYBOOK} target="_blank" rel="noopener" className="btn btn-ghost">Open the playbook</a>
          </div>

          <div style={{ background: "var(--butter)", borderRadius: 16, padding: "30px 30px 28px", marginTop: 34 }}>
            {sent ? (
              <React.Fragment>
                <h3 style={{ fontSize: 22, margin: "0 0 8px", lineHeight: 1.15 }}>On its way to Adam.</h3>
                <p style={{ fontSize: 15, color: "var(--ink-soft)", margin: 0, maxWidth: 520 }}>He reviews every assessment personally and will follow up with the full written report and his read on your highest-leverage moves.</p>
              </React.Fragment>
            ) : (
              <form name="scorecard" onSubmit={submitReport}>
                <h3 style={{ fontSize: 22, margin: "0 0 6px", lineHeight: 1.15 }}>Want it in writing? (optional)</h3>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: "0 0 20px", maxWidth: 520 }}>Your results are already above. Add your email and Adam will send the full written report plus his personal read on your best next moves.</p>
                <div className="sc-field" style={{ marginBottom: 16 }}>
                  <input type="text" placeholder="Your name" value={contact.name} onChange={e => setContact(c => Object.assign({}, c, { name: e.target.value }))} />
                </div>
                <div className="sc-field" style={{ marginBottom: 16 }}>
                  <input type="email" placeholder="you@company.com" value={contact.email} onChange={e => setContact(c => Object.assign({}, c, { email: e.target.value }))} />
                </div>
                <div className="sc-field" style={{ marginBottom: 22 }}>
                  <input type="text" placeholder="Company (optional)" value={contact.company} onChange={e => setContact(c => Object.assign({}, c, { company: e.target.value }))} />
                </div>
                {error ? <p style={{ color: "var(--accent-deep)", fontSize: 14, margin: "0 0 12px" }}>{error}</p> : null}
                <button type="submit" className="btn btn-primary" disabled={submitting} style={{ minWidth: 200, justifyContent: "center" }}>{submitting ? "Sending..." : "Send me the report"} <Arrow /></button>
              </form>
            )}
          </div>

          <div style={{ marginTop: 22 }}>
            <button type="button" className="btn btn-ghost" onClick={() => { setView("quiz"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Back to my answers</button>
          </div>
        </div>
      </section>
    );
  }

  // ---------- QUIZ VIEW (stepped) ----------
  const q = step > 0 ? SC_QUESTIONS[step - 1] : null;
  const progressPct = Math.round((step / N) * 100);
  return (
    <section style={{ paddingTop: 64, paddingBottom: 120, background: "var(--cream)" }}>
      <div className="wrap" style={{ maxWidth: 680 }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
            <span className="eyebrow">{step === 0 ? "Free readiness assessment" : "Question " + step + " of " + N}</span>
            {step > 0 ? <span style={{ fontSize: 12, color: "var(--ink-mute)" }}>{progressPct}%</span> : null}
          </div>
          <div style={{ height: 4, background: "var(--line-soft)", borderRadius: 999, overflow: "hidden" }}>
            <div style={{ height: "100%", width: progressPct + "%", background: "var(--accent)", transition: "width .35s ease" }} />
          </div>
        </div>

        {step === 0 ? (
          <div>
            <Reveal>
              <h1 style={{ fontSize: "clamp(44px, 6.4vw, 92px)", lineHeight: 0.97, margin: 0, textWrap: "balance" }}>
                Are you <span style={{ fontStyle: "italic", color: "var(--accent)" }}>ready</span> to raise?
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p style={{ fontSize: 20, lineHeight: 1.5, color: "var(--ink-soft)", margin: "26px 0 34px", maxWidth: 560 }}>
                Sixteen quick questions, about two to three minutes. You will get an instant read on where your raise stands, dimension by dimension. Raising from strength beats raising on hope.
              </p>
            </Reveal>
            <label style={{ display: "block", fontSize: 12, color: "var(--ink-soft)", marginBottom: 10, fontWeight: 500 }}>What stage are you raising?</label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {SC_STAGES.map(sv => (
                <button type="button" key={sv} onClick={() => setStage(sv)} style={{ padding: "8px 16px", background: stage === sv ? "var(--ink)" : "transparent", color: stage === sv ? "var(--cream)" : "var(--ink)", border: "1.5px solid var(--ink)", borderRadius: 999, fontSize: 14, cursor: "pointer", fontFamily: "var(--sans)" }}>{sv}</button>
              ))}
            </div>
            <p style={{ fontSize: 13.5, color: "var(--ink-mute)", margin: "14px 0 32px", maxWidth: 560 }}>{SC_STAGE_BAR[stage]}</p>
            <button type="button" className="btn btn-primary" onClick={() => { setStep(1); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Start the assessment <Arrow /></button>
          </div>
        ) : (
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}><span style={{ color: "var(--accent)" }}>{String(step).padStart(2, "0")}</span>&nbsp;&nbsp;{q.dim}</div>
            <h2 style={{ fontSize: "clamp(26px, 3.4vw, 40px)", lineHeight: 1.12, margin: "0 0 24px", fontWeight: 400, fontFamily: "var(--serif, Fraunces)", letterSpacing: "-0.02em", textWrap: "balance" }}>{q.q}</h2>
            <div style={{ display: "grid", gap: 10 }}>
              {q.opts.map(o => {
                const active = answers[q.id] === o.p;
                return (
                  <button type="button" key={o.t} className="sc-opt" onClick={() => choose(q, step)(o.p)} style={{ textAlign: "left", padding: "16px 20px", background: active ? "var(--ink)" : "var(--cream)", color: active ? "var(--cream)" : "var(--ink)", border: "1.5px solid " + (active ? "var(--ink)" : "var(--line)"), borderRadius: 12, fontSize: 16.5, cursor: "pointer", fontFamily: "var(--sans)", transition: "border-color .2s, background .2s" }}>{o.t}</button>
                );
              })}
            </div>
            <div style={{ marginTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <button type="button" className="btn btn-ghost" onClick={back}>Back</button>
              {answers[q.id] !== undefined
                ? <button type="button" className="btn btn-primary" onClick={() => advanceFrom(step)}>{step >= N ? "See my results" : "Next"} <Arrow /></button>
                : <span style={{ fontSize: 13, color: "var(--ink-mute)" }}>Pick one to continue</span>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { ScorecardPage });
