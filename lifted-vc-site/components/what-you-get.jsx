// What you get — concrete deliverables of round coaching. Butter block.
function WhatYouGet() {
  const items = [
    { t: 'Weekly 1-on-1 coaching', d: 'Weekly working sessions and live pitch reps until you walk into every meeting a known quantity.' },
    { t: 'A narrative that lands', d: 'A sharpened story, a tight one-pager, and a deck investors want to read, then pressure-tested in mock investor sessions.' },
    { t: 'Your investor pipeline', d: '60 to 80 warm, double-opt-in introductions from a targeted list built for your round, not cold outreach.' },
    { t: 'Your fundraising command center', d: 'A private dashboard with your live pipeline, an investor CRM, and every fundraise number in one place.' },
    { t: 'Every session captured', d: 'Full transcripts of each meeting, a brief before every call, and action items after, so nothing slips between sessions.' },
    { t: 'A partner through close', d: 'A private Slack line between sessions, plus investor comms and pipeline management from first meeting to signed term sheet.' },
  ];
  return (
    <section className="bg-butter">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 80px' }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>What you get</div>
            <h2 style={{ fontSize: 'clamp(44px, 6vw, 88px)', lineHeight: 1, textWrap: 'balance' }}>
              Everything a real <span style={{ fontStyle: 'italic' }}>raise</span> needs.
            </h2>
            <p style={{ fontSize: 18, color: 'var(--ink-soft)', marginTop: 22, textWrap: 'pretty' }}>
              You get me in your corner every week, with a real operating system behind the work so nothing slips.
            </p>
          </div>
        </Reveal>
        <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {items.map((it, i) => (
            <Reveal key={it.t} delay={(i % 3) * 80}>
              <div style={{ background: 'var(--cream)', borderRadius: 16, padding: '32px 30px', height: '100%' }}>
                <div style={{ color: 'var(--accent)', fontSize: 20, marginBottom: 12 }}>&rarr;</div>
                <h4 style={{ fontSize: 21, margin: '0 0 10px', lineHeight: 1.15 }}>{it.t}</h4>
                <p style={{ fontSize: 15.5, color: 'var(--ink-soft)', margin: 0, textWrap: 'pretty' }}>{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { WhatYouGet });
