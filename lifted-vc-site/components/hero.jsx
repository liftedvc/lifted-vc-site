// Hero — editorial paper, photo column, ruled stat line
function Hero() {
  return (
    <section id="top" style={{ paddingTop: 0, paddingBottom: 0, background: 'var(--bg)' }}>
      <div className="wrap">
        <div className="rule-thick" />
        <div data-stack="true" className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.25fr 0.85fr',
          gap: 70,
          alignItems: 'start',
          paddingTop: 72, paddingBottom: 0,
        }}>
          <div>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 26 }}>
                Pre-seed · Seed · Series A
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 style={{
                fontSize: 'clamp(42px, 4.8vw, 66px)',
                lineHeight: 1.06,
                margin: 0,
                textWrap: 'balance',
              }}>
                Raise your round like a repeat founder
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p style={{
                fontFamily: 'var(--lit)',
                fontSize: 19,
                lineHeight: 1.65,
                color: 'var(--ink-soft)',
                maxWidth: 530,
                margin: '30px 0 38px',
                textWrap: 'pretty',
              }}>
                I run your raise with you, from narrative to close. Warm introductions instead of
                cold outreach, and a tight two to three week sprint that turns interest into term sheets.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
                <a href="/contact" className="btn btn-primary">Work with me <Arrow /></a>
                <a href="https://lifted.vc/fundraising-playbook" target="_blank" rel="noopener noreferrer" className="tlink">Free fundraising playbook</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div>
              <Photo
                ratio="4 / 5"
                src="images/adam-sailing.jpg"
                alt="Adam Roberts"
                style={{ borderRadius: 4 }}
              />
              <div style={{
                fontFamily: 'var(--sans)', fontSize: 13,
                color: 'var(--ink-mute)', marginTop: 12,
              }}>
                Adam Roberts, founder of Lifted.
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats line */}
        <Reveal>
          <div data-stack="true" className="stats-grid" style={{
            display: 'flex',
            gap: 80,
            borderTop: '1px solid var(--ink)',
            marginTop: 64,
            paddingTop: 24, paddingBottom: 0,
          }}>
            <Stat num="$96M+" label="Raised by coached founders" />
            <Stat num="100+" label="Founders coached" />
            <Stat num="50+" label="Closed rounds" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ num, label }) {
  return (
    <div>
      <div style={{
        fontFamily: 'var(--serif)',
        fontSize: 32,
        fontWeight: 500,
        letterSpacing: '-0.01em',
        lineHeight: 1,
        color: 'var(--ink)',
      }}>{num}</div>
      <div style={{
        fontFamily: 'var(--sans)',
        fontSize: 12.5,
        fontWeight: 500,
        color: 'var(--ink-mute)',
        marginTop: 6,
      }}>{label}</div>
    </div>
  );
}

Object.assign(window, { Hero, Stat });
