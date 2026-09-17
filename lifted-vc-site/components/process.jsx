// Process — three ruled columns on the periwinkle band, gold numerals
function Process() {
  const phases = [
    {
      n: '1',
      title: 'Build a narrative that resonates with investors',
      lead: "Investors decide in the first minutes, so we build your narrative the way they listen: problem first, conclusion first, plain English. We will pressure-test in mock sessions until we know it lands, and make sure you are ready for anything during Q&A.",
    },
    {
      n: '2',
      title: 'Engineer warm access at volume',
      lead: "Cold outreach to investors doesn't convert, so we never do it. We'll craft a high-fit target investor list and network our way into high-quality introductions to every investor. No founder is born with an investor network, and we will build yours.",
    },
    {
      n: '3',
      title: 'Compress meetings for leverage',
      lead: "We stack every first meeting into a compressed time window. When a dozen funds are moving at once, the urgency is real, and investors can feel it. We lock in the yeses, respect the nos, kill the maybes, and operate with leverage.",
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
            Thoughtfully raising your round
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p style={{
            fontFamily: 'var(--lit)',
            fontSize: 18, lineHeight: 1.65, color: 'var(--ink-soft)',
            marginTop: 18, maxWidth: 640, textWrap: 'pretty',
          }}>
            Experienced founders craft a story built for how investors take in information, line up
            quality warm intros at volume, and schedule every meeting compressed into one decisive window.
            I've turned that pattern into a system I call <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Authentic FOMO</strong> that generates
            real demand, engineered honestly, and we'll run it together.
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
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, margin: '0 0 12px' }}>
                  <span style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 40, lineHeight: 1,
                    color: 'var(--gold)',
                    flexShrink: 0,
                  }}>{p.n}</span>
                  <h3 style={{ fontSize: 23, lineHeight: 1.2, margin: 0 }}>{p.title}</h3>
                </div>
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
