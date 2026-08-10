// Founders page — testimonials, outcome-forward
function FoundersPage() {
  const quotes = [
    { result: 'Pre-seed, run like a Series A', q: "Adam didn't just give me coaching, he gave me a process. One that replaced guesswork with clarity, confidence, and precision. Other founders kept saying, 'You're raising your pre-seed with the diligence of a Series A.'", who: 'Leni', tag: 'Pre-seed founder', },
    { result: 'Saved 100+ hours and $20K+', q: "10/10. The coaching was extremely helpful to understand the VC game. I wish I had found it even earlier, it would have saved me at least 100 hours and $20K+.", who: 'Misha', tag: 'Coached founder', },
    { result: 'More investor calls in 4 weeks than ever before', q: "I never ran a process before working with Adam. He made it easy. A lot of work, but the consistent effort paid off in more investor calls than I've ever taken in a 4-week period.", who: 'Ndonga', tag: 'Seed founder', },
    { result: 'From science project to funded business', q: "Adam took me from cool science project to funded business. The coaching gave me tangible mechanics that translated directly into capital raised.", who: 'Aidan', tag: 'Pre-seed founder', },
    { result: null, q: "I highly recommend working with Adam. You'll learn a lot about how to run a tight fundraising process, refine your pitch, and set the right mindset.", who: 'Mary-Ann', tag: 'Seed founder', },
  ];

  return (
    <>
      <section style={{ paddingTop: 56, paddingBottom: 40, background: 'var(--cream)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 880 }}>
            <Reveal><div className="eyebrow" style={{ marginBottom: 24 }}>Founders</div></Reveal>
            <Reveal delay={100}>
              <h1 style={{ fontSize: 'clamp(56px, 7.5vw, 120px)', lineHeight: 0.96, margin: 0, textWrap: 'balance' }}>
                Results speak louder.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ fontSize: 21, color: 'var(--ink-soft)', maxWidth: 640, marginTop: 32, textWrap: 'pretty' }}>
                From first-time founders to repeat entrepreneurs, a small selection of recent engagements.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 24, paddingBottom: 72, background: 'var(--cream)', overflow: 'hidden' }}>
        <div
          onMouseEnter={e => { const m = e.currentTarget.querySelector('.marquee'); if (m) m.style.animationPlayState = 'paused'; }}
          onMouseLeave={e => { const m = e.currentTarget.querySelector('.marquee'); if (m) m.style.animationPlayState = 'running'; }}
        >
          <div className="marquee" style={{ gap: 20, alignItems: 'stretch', animationDuration: '60s' }}>
            {[...quotes, ...quotes].map((q, i) => (
              <div key={q.who + i} style={{
                width: 'min(420px, 78vw)',
                flexShrink: 0,
                padding: 30,
                background: 'var(--bg)',
                border: '1px solid var(--ink)',
                borderRadius: 4,
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 56, color: 'var(--gold)', lineHeight: 0.5, marginBottom: 18, fontStyle: 'italic' }}>&ldquo;</div>
                <p className="serif" style={{ fontSize: 16.5, lineHeight: 1.5, color: 'var(--ink)', margin: '0 0 22px', textWrap: 'pretty', flex: 1, fontWeight: 400, fontStyle: 'italic' }}>
                  {q.q}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid var(--line)' }}>
                  <Avatar letter={q.who[0]} small />
                  <div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 14.5, fontWeight: 600 }}>{q.who}</div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 12.5, color: 'var(--ink-mute)' }}>{q.tag}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

Object.assign(window, { FoundersPage });
