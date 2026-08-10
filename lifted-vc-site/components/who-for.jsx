// Who I work with — gold-tint band, ruled 2x2 grid
function WhoThisIsFor() {
  const points = [
    { t: 'Raising pre-seed through Series A', d: 'You are at the stage where a tight process and warm intros change the outcome.' },
    { t: 'Ready to run a real process', d: 'You will do the work between calls and move fast when momentum builds.' },
    { t: 'You want the truth', d: 'You would rather hear a direct read on your raise than a comfortable one.' },
    { t: 'Genuinely going for it', d: 'You are committed to the raise, and investors can feel that in the room.' },
  ];
  return (
    <section className="band-gold" style={{ padding: '84px 0' }}>
      <div className="wrap">
        <Reveal>
          <div className="sechead">
            <span className="eyebrow">Who I work with</span>
            <span className="eyebrow">04</span>
          </div>
        </Reveal>
        <div data-stack="true" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr',
          gap: 70, alignItems: 'start', marginTop: 26,
        }}>
          <Reveal delay={80}>
            <div>
              <h2 style={{
                fontSize: 'clamp(34px, 3.6vw, 46px)',
                lineHeight: 1.1, textWrap: 'balance',
              }}>
                Selective on purpose.
              </h2>
              <p style={{
                fontFamily: 'var(--lit)',
                fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.65,
                marginTop: 20, maxWidth: 400, textWrap: 'pretty',
              }}>
                I only take on founders I strongly believe can raise. That keeps the roster small,
                the focus deep, and my incentives honest.
              </p>
            </div>
          </Reveal>
          <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {points.map((p, i) => (
              <Reveal key={p.t} delay={(i % 2) * 80}>
                <div style={{
                  border: '1px solid #e2d5b4',
                  background: 'rgba(255,255,255,0.35)',
                  padding: 26,
                  margin: '-1px 0 0 -1px',
                  height: '100%',
                }}>
                  <h4 style={{ fontSize: 18, margin: '0 0 8px', lineHeight: 1.25 }}>{p.t}</h4>
                  <p style={{
                    fontFamily: 'var(--lit)', fontSize: 14.5, lineHeight: 1.6,
                    color: 'var(--ink-soft)', margin: 0, textWrap: 'pretty',
                  }}>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { WhoThisIsFor });
