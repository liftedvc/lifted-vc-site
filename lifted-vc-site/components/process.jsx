// Process — three steps, sky blue background, simpler cards
function Process() {
  const phases = [
    {
      n: '1',
      title: 'Prepare',
      lead: 'Build your investor target list, sharpen your narrative, and get your deck and data room ready so your story feels inevitable.',
    },
    {
      n: '2',
      title: 'Pitch',
      lead: 'Drill your pitch, strategize investor comms, and build your warm intro pipeline. Walk in with confidence.',
    },
    {
      n: '3',
      title: 'Close',
      lead: 'Engineer real demand through timeline compression, parallel processes, and soft commitments. Signal momentum.',
    },
  ];

  return (
    <section id="process" className="bg-sky">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 120, maxWidth: 760, margin: '0 auto 120px' }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>How it works</div>
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
              Good fundraising is built on best practices and the industry's hidden rules.
              I make sure you walk in the room a seasoned pro.
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
            <a href="https://lifted.vc/fundraising-playbook" className="btn btn-ghost">Free fundraising playbook <Arrow /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Process });
