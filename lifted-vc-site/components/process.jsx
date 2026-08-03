// Process — three steps, sky blue background, the Authentic FOMO method
function Process() {
  const phases = [
    {
      n: '1',
      title: 'Prepare',
      lead: 'Sharpen your story and build a crisp one-pager, deck, and data room. We lead with the one-pager, because it is concise, investors prefer it, and it lands meetings faster.',
    },
    {
      n: '2',
      title: 'Pitch',
      lead: 'Skip cold outreach. We map 20 to 30 founders who just raised in your space, turn their investors into 60 to 80 warm, double-opt-in intros, and drill your pitch until you walk in a known quantity.',
    },
    {
      n: '3',
      title: 'Close',
      lead: 'Batch every meeting into a two to three week sprint, up to five a day. Real demand, timeline pressure, and parallel processes turn interest into term sheets.',
    },
  ];

  return (
    <section id="process" className="bg-sky">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 120, maxWidth: 780, margin: '0 auto 120px' }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>The method</div>
            <h2 style={{
              fontSize: 'clamp(44px, 6vw, 88px)',
              lineHeight: 1, textWrap: 'balance',
            }}>
              Three steps to <span style={{ fontStyle: 'italic' }}>funding.</span>
            </h2>
            <p style={{
              fontSize: 19, color: 'var(--ink-soft)',
              marginTop: 24, textWrap: 'pretty',
            }}>
              It is a system I call <em>Authentic FOMO</em>: real demand, engineered honestly.
              No cold outreach and no spray-and-pray, just momentum that makes investors move.
            </p>
          </div>
        </Reveal>

        <div data-stack="true" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {phases.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div style={{
                background: 'var(--cream)',
                borderRadius: 16,
                padding: '56px 44px 60px',
                height: '100%',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 88, lineHeight: 0.9,
                  color: 'var(--accent)',
                  fontStyle: 'italic',
                  marginBottom: 24,
                }}>{p.n}</div>
                <h3 style={{
                  fontSize: 36, lineHeight: 1, margin: '0 0 16px',
                }}>{p.title}</h3>
                <p style={{
                  fontSize: 16.5, lineHeight: 1.55,
                  color: 'var(--ink-soft)', margin: 0,
                  textWrap: 'pretty',
                }}>{p.lead}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ textAlign: 'center', marginTop: 88 }}>
            <a href="https://lifted.vc/fundraising-playbook" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Free fundraising playbook <Arrow /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Process });
