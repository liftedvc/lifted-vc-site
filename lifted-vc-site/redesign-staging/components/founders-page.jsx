// Founders page — all testimonials
function FoundersPage() {
  const quotes = [
    { q: "Adam didn't just give me coaching, he gave me a process. One that replaced guesswork with clarity, confidence, and precision. Other founders kept saying, 'You're raising your pre-seed with the diligence of a Series A.'", who: 'Leni', tag: 'Pre-seed founder', bg: 'var(--blush)' },
    { q: "10/10. The sprint was extremely helpful to understand the VC game. I wish I had found it even earlier — it would have saved me at least 100 hours and $20K+.", who: 'Misha', tag: 'Sprint alum', bg: 'var(--butter)' },
    { q: "I never ran a process before working with Adam. He made it easy — a lot of work, but the consistent effort paid off in more investor calls than I've ever taken in a 4-week period.", who: 'Ndonga', tag: 'Seed founder', bg: 'var(--sage)' },
    { q: "Adam took me from cool science project to funded business. The curriculum gave me tangible mechanics that translated directly into capital raised.", who: 'Aidan', tag: 'Pre-seed founder', bg: 'var(--sky)' },
    { q: "I highly recommend this program. You'll learn a lot about how to run a tight fundraising process, refine your pitch, and set the right mindset.", who: 'Mary-Ann', tag: 'Seed founder', bg: 'var(--blush)' },
  ];

  return (
    <>
      <section style={{ paddingTop: 80, paddingBottom: 60, background: 'var(--cream)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 880 }}>
            <Reveal><div className="eyebrow" style={{ marginBottom: 24 }}>Founders</div></Reveal>
            <Reveal delay={100}>
              <h1 style={{ fontSize: 'clamp(56px, 7.5vw, 120px)', lineHeight: 0.96, margin: 0, textWrap: 'balance' }}>
                Results speak <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>louder.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ fontSize: 21, color: 'var(--ink-soft)', maxWidth: 640, marginTop: 32, textWrap: 'pretty' }}>
                From first-time founders to repeat entrepreneurs — a small selection of recent
                engagements.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40, paddingBottom: 120, background: 'var(--cream)' }}>
        <div className="wrap">
          <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {quotes.map((q, i) => (
              <Reveal key={q.who} delay={(i % 2) * 80}>
                <div style={{
                  padding: 40,
                  background: q.bg,
                  borderRadius: 16,
                  height: '100%',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 80, color: 'var(--ink)', lineHeight: 0.5, marginBottom: 24, opacity: 0.4, fontStyle: 'italic' }}>"</div>
                  <p className="serif" style={{ fontSize: 22, lineHeight: 1.4, color: 'var(--ink)', margin: '0 0 32px', textWrap: 'pretty', flex: 1, fontWeight: 400 }}>
                    {q.q}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 24, borderTop: '1px solid rgba(0,0,0,0.12)' }}>
                    <Avatar letter={q.who[0]} small />
                    <div>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontStyle: 'italic' }}>{q.who}</div>
                      <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{q.tag}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { FoundersPage });
