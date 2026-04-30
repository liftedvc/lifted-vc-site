// Services teaser — three offers on the home page. Sage green block.
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
    {
      tag: 'Prep coaching',
      title: '1-on-1 Round Prep Coaching',
      desc: 'For founders building toward their raise. We sharpen entrepreneurship, customer discovery, and company-building until you are investor-ready.',
      includes: [
        'Entrepreneurship fundamentals',
        'Customer discovery',
        'Company-building strategy',
        'Investor-readiness checkpoints',
      ],
      cta: "Let's talk",
      href: 'contact.html',
    },
  ];

  return (
    <section className="bg-sage">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 120px' }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>How we work together</div>
            <h2 style={{
              fontSize: 'clamp(44px, 6vw, 88px)',
              lineHeight: 1, textWrap: 'balance',
            }}>
              Three ways in,<br/>
              <span style={{ fontStyle: 'italic' }}>one shared goal.</span>
            </h2>
          </div>
        </Reveal>

        <div data-stack="true" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          alignItems: 'stretch',
        }}>
          {items.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div style={{
                position: 'relative',
                padding: 40,
                background: s.highlight ? 'var(--butter)' : 'var(--cream)',
                borderRadius: 16,
                height: '100%',
                display: 'flex', flexDirection: 'column',
              }}>
                {s.highlight && (
                  <div style={{
                    position: 'absolute', top: -12, right: 24,
                    background: 'var(--ink)', color: 'var(--cream)',
                    padding: '6px 14px', borderRadius: 999,
                    fontSize: 12, fontWeight: 500,
                  }}>Most popular</div>
                )}
                <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500, marginBottom: 14 }}>{s.tag}</div>
                <h4 style={{ fontSize: 28, margin: '0 0 12px', lineHeight: 1.1 }}>{s.title}</h4>
                <p style={{ fontSize: 15.5, color: 'var(--ink-soft)', margin: '0 0 22px', textWrap: 'pretty' }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', flex: 1, borderTop: '1px solid rgba(0,0,0,0.12)' }}>
                  {s.includes.map(inc => (
                    <li key={inc} style={{
                      padding: '11px 0',
                      borderBottom: '1px solid rgba(0,0,0,0.08)',
                      fontSize: 14, color: 'var(--ink)',
                      display: 'flex', gap: 10, alignItems: 'baseline',
                    }}>
                      <span style={{ color: 'var(--accent)' }}>→</span> {inc}
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
          <div style={{ textAlign: 'center', marginTop: 88 }}>
            <a href="pricing.html" className="btn btn-ghost">See pricing & details <Arrow /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { ServicesTeaser });
