// Home CTA section — one focused action: book the free consultation.
function ServicesTeaser() {
  const includes = [
    '30-minute working call',
    'Honest read on readiness',
    'Concrete next steps',
    'Open agenda, candid feedback',
  ];
  return (
    <section style={{ padding: '84px 0', background: 'var(--bg)' }}>
      <div className="wrap">
        <Reveal>
          <div className="sechead">
            <span className="eyebrow">Get started</span>
            <span className="eyebrow">03</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontSize: 'clamp(34px, 3.6vw, 46px)',
            lineHeight: 1.1, marginTop: 26, textWrap: 'balance',
          }}>
            Start with a free consultation
          </h2>
        </Reveal>

        <div data-stack="true" style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 64,
          alignItems: 'start',
          marginTop: 44,
        }}>
          <Reveal delay={140}>
            <div>
              <p style={{
                fontFamily: 'var(--lit)', fontSize: 18, lineHeight: 1.65,
                color: 'var(--ink-soft)', margin: 0, maxWidth: 520, textWrap: 'pretty',
              }}>
                An honest read on where you are and what would unblock your raise.
                Candid, conversational, entirely on the house.
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
                <a href="/contact" className="btn btn-primary">Book a free consultation <Arrow /></a>
                <a href="/pricing" className="tlink">See pricing &amp; details</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div style={{
              padding: 32,
              background: 'var(--bg)',
              border: '2px solid var(--ink)',
              boxShadow: '6px 6px 0 var(--gold)',
              borderRadius: 4,
            }}>
              <div style={{
                fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'var(--butter-deep)', marginBottom: 10,
              }}>Free consultation · 30 minutes</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--line)' }}>
                {includes.map(inc => (
                  <li key={inc} style={{
                    fontFamily: 'var(--sans)',
                    padding: '12px 0',
                    borderBottom: '1px solid var(--line)',
                    fontSize: 14.5, color: 'var(--ink)',
                  }}>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ServicesTeaser });
