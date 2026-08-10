// Services teaser — two bordered cards; coaching carries the gold offset shadow.
function ServicesTeaser() {
  const items = [
    {
      tag: 'Consultation',
      title: 'Free Fundraising Consultation',
      desc: 'An honest read on where you are and what would unblock your raise. Candid, conversational, entirely on the house.',
      includes: [
        '30-minute working call',
        'Honest read on readiness',
        'Concrete next steps',
        'Open agenda, candid feedback',
      ],
      cta: 'Book a call',
      href: 'contact.html',
    },
    {
      tag: 'Round coaching',
      title: '1-on-1 Round Coaching',
      desc: 'Your dedicated co-pilot from narrative through close. We run your fundraising round together, week by week.',
      includes: [
        'Weekly 1-on-1 coaching',
        'Live pitch practice',
        'Investor list & deck reviews',
        'Process management through close',
      ],
      cta: 'Work with me',
      href: 'contact.html',
      highlight: true,
    },
  ];

  return (
    <section style={{ padding: '84px 0', background: 'var(--bg)' }}>
      <div className="wrap">
        <Reveal>
          <div className="sechead">
            <span className="eyebrow">How we work together</span>
            <span className="eyebrow">03</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontSize: 'clamp(34px, 3.6vw, 46px)',
            lineHeight: 1.1, marginTop: 26, textWrap: 'balance',
          }}>
            Two ways in, <em>one shared goal.</em>
          </h2>
        </Reveal>

        <div data-stack="true" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
          alignItems: 'stretch',
          maxWidth: 900,
          marginTop: 54,
        }}>
          {items.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div style={{
                position: 'relative',
                padding: 36,
                background: 'var(--bg)',
                border: s.highlight ? '2px solid var(--ink)' : '1px solid var(--ink)',
                boxShadow: s.highlight ? '6px 6px 0 var(--gold)' : 'none',
                borderRadius: 4,
                height: '100%',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: s.highlight ? 'var(--butter-deep)' : 'var(--steel)',
                  marginBottom: 14,
                }}>{s.tag}</div>
                <h4 style={{ fontSize: 25, margin: '0 0 10px', lineHeight: 1.15 }}>{s.title}</h4>
                <p style={{
                  fontFamily: 'var(--lit)', fontSize: 15, lineHeight: 1.6,
                  color: 'var(--ink-soft)', margin: '0 0 20px', textWrap: 'pretty',
                }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 26px', flex: 1, borderTop: '1px solid var(--line)' }}>
                  {s.includes.map(inc => (
                    <li key={inc} style={{
                      fontFamily: 'var(--sans)',
                      padding: '11px 0',
                      borderBottom: '1px solid var(--line)',
                      fontSize: 14, color: 'var(--ink)',
                    }}>
                      {inc}
                    </li>
                  ))}
                </ul>
                <a
                  href={s.href}
                  className={s.highlight ? 'btn btn-primary' : 'btn btn-ghost'}
                  style={{ marginTop: 'auto', justifyContent: 'center' }}
                >
                  {s.cta} <Arrow />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ marginTop: 46 }}>
            <a href="pricing.html" className="tlink">See pricing &amp; details</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { ServicesTeaser });
