// What you get — the navy band. Ruled ledger of deliverables.
function WhatYouGet() {
  const items = [
    { t: 'Weekly 1-on-1 coaching', d: 'Weekly working sessions and live pitch reps until you walk into every meeting a known quantity.' },
    { t: 'A narrative that lands', d: 'A sharpened story, a tight one-pager, and a deck investors want to read, then pressure-tested in mock investor sessions.' },
    { t: 'Your investor pipeline', d: 'A process that earns 60 to 80 warm, double-opt-in introductions from a targeted list built for your round, instead of cold outreach.' },
    { t: 'Your fundraising command center', d: 'A private dashboard with your live pipeline, an investor CRM, and every fundraise number in one place.' },
    { t: 'Every session captured', d: 'Full transcripts of each meeting, a brief before every call, and action items after, so nothing slips between sessions.' },
    { t: 'A partner through close', d: 'A private Slack line between sessions, plus investor comms and pipeline management from first meeting to signed term sheet.' },
  ];
  return (
    <section className="band-navy" style={{ padding: '84px 0' }}>
      <div className="wrap">
        <Reveal>
          <div className="sechead">
            <span className="eyebrow">What you get</span>
            <span className="eyebrow">02</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontSize: 'clamp(34px, 3.6vw, 46px)',
            lineHeight: 1.1, marginTop: 26, textWrap: 'balance',
          }}>
            An experienced fundraising copilot
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p style={{
            fontFamily: 'var(--lit)',
            fontSize: 18, lineHeight: 1.65, color: 'rgba(247,246,242,0.75)',
            marginTop: 18, maxWidth: 640, textWrap: 'pretty',
          }}>
            You get me in your corner every week, with a real operating system behind the work so nothing slips.
          </p>
        </Reveal>

        <div data-stack="true" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '0 70px', marginTop: 44,
        }}>
          {items.map((it, i) => (
            <Reveal key={it.t} delay={(i % 2) * 80}>
              <div style={{
                padding: '22px 0',
                borderTop: '1px solid rgba(247,246,242,0.18)',
                display: 'grid', gridTemplateColumns: '210px 1fr', gap: 24,
                height: '100%',
              }}>
                <h4 style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.3, color: 'var(--bg)' }}>{it.t}</h4>
                <p style={{
                  fontFamily: 'var(--lit)', fontSize: 15, lineHeight: 1.6,
                  color: '#b8bdd4', margin: 0, textWrap: 'pretty',
                }}>{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { WhatYouGet });
