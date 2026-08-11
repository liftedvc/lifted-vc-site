// Hero — simpler, butter yellow color block, less chrome
function Hero() {
  return (
    <section id="top" style={{
      paddingTop: 40, paddingBottom: 0,
      background: 'var(--cream)',
    }}>
      <div className="wrap">
        <div data-stack="true" className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: 64,
          alignItems: 'center',
          minHeight: '88vh',
          paddingTop: 100, paddingBottom: 140,
        }}>
          <div>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 28 }}>
                Pre-seed · Seed · Series A
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 style={{
                fontSize: 'clamp(56px, 7.5vw, 124px)',
                lineHeight: 0.96,
                margin: 0,
                textWrap: 'balance',
              }}>
                Raise your<br/>round like a<br/>
                <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>repeat founder.</span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p style={{
                fontSize: 22,
                lineHeight: 1.45,
                color: 'var(--ink-soft)',
                maxWidth: 540,
                margin: '36px 0 44px',
                textWrap: 'pretty',
              }}>
                1-on-1 fundraising coaching for founders. Built on 100+ founders coached
                and 50+ closed rounds.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href="#contact" className="btn btn-primary">Work with me <Arrow /></a>
                <a href="#process" className="btn btn-ghost">How it works</a>
                <a href="https://lifted.vc/fundraising-playbook" className="btn btn-ghost">Free fundraising playbook <Arrow /></a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div style={{ position: 'relative' }}>
              {/* Big color blob behind photo */}
              <div style={{
                position: 'absolute',
                inset: '-30px -30px -30px -30px',
                background: 'var(--butter)',
                borderRadius: '50% 50% 50% 50% / 60% 40% 60% 40%',
                zIndex: 0,
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <Photo
                  ratio="4 / 5"
                  src="images/adam-sailing.jpg"
                  alt="Adam Roberts"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats bar */}
        <Reveal>
          <div data-stack="true" className="stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            borderTop: '1px solid var(--line)',
            paddingTop: 56, paddingBottom: 100,
          }}>
            <Stat num="$80M+" label="Raised by coached founders" />
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
        fontSize: 'clamp(48px, 6vw, 80px)',
        letterSpacing: '-0.03em',
        lineHeight: 1,
        color: 'var(--ink)',
      }}>{num}</div>
      <div style={{
        fontSize: 14,
        color: 'var(--ink-soft)',
        marginTop: 12,
      }}>{label}</div>
    </div>
  );
}

Object.assign(window, { Hero });
