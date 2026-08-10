// Process — three ruled columns on the periwinkle band, gold numerals
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
    <section id="process" className="band-lav" style={{ padding: '84px 0' }}>
      <div className="wrap">
        <Reveal>
          <div className="sechead">
            <span className="eyebrow">The method</span>
            <span className="eyebrow">01</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontSize: 'clamp(34px, 3.6vw, 46px)',
            lineHeight: 1.1, marginTop: 26, textWrap: 'balance',
          }}>
            Three steps to <em>funding.</em>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p style={{
            fontFamily: 'var(--lit)',
            fontSize: 18, lineHeight: 1.65, color: 'var(--ink-soft)',
            marginTop: 18, maxWidth: 640, textWrap: 'pretty',
          }}>
            It is a system I call <em>Authentic FOMO</em>: real demand, engineered honestly.
            No cold outreach and no spray-and-pray, just momentum that makes investors move.
          </p>
        </Reveal>

        <div data-stack="true" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          marginTop: 54,
        }}>
          {phases.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div style={{
                padding: i === 0 ? '0 40px 0 0' : '0 40px',
                borderLeft: i === 0 ? 'none' : '1px solid #cdd3e6',
                height: '100%',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 52, lineHeight: 1,
                  color: 'var(--gold)',
                  fontStyle: 'italic',
                }}>{p.n}</div>
                <h3 style={{ fontSize: 27, lineHeight: 1.1, margin: '18px 0 12px' }}>{p.title}</h3>
                <p style={{
                  fontFamily: 'var(--lit)',
                  fontSize: 15.5, lineHeight: 1.65,
                  color: 'var(--ink-soft)', margin: 0,
                  textWrap: 'pretty',
                }}>{p.lead}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ marginTop: 46 }}>
            <a href="https://lifted.vc/fundraising-playbook" target="_blank" rel="noopener noreferrer" className="tlink">Free fundraising playbook</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Process });
