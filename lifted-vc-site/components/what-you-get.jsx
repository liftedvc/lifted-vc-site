// What you get — concrete deliverables of round coaching. Butter block.
function WhatYouGet() {
  const items = [
    { t: 'A narrative that lands', d: 'A sharpened story, a concise one-pager, and a deck investors actually want to read.' },
    { t: 'Your investor pipeline', d: '60 to 80 qualified, warm, double-opt-in introductions, built through founders who just raised in your space.' },
    { t: 'A data room that is ready', d: 'Organized and complete, so diligence speeds you up instead of slowing you down.' },
    { t: 'Live pitch reps', d: 'Weekly 1-on-1 coaching and live pitch practice until you walk in a known quantity.' },
    { t: 'Support between calls', d: 'Slack access for the email drafts, quick reviews, and gut-checks that come up mid-raise.' },
    { t: 'Process through close', d: 'Investor comms, pipeline management, and momentum from first meeting to signed term sheet.' },
  ];
  return (
    <section className="bg-butter">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 80px' }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>What you get</div>
            <h2 style={{ fontSize: 'clamp(44px, 6vw, 88px)', lineHeight: 1, textWrap: 'balance' }}>
              Everything a real <span style={{ fontStyle: 'italic' }}>raise</span> needs.
            </h2>
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
