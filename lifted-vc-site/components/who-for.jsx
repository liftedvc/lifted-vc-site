// Who I work with — selectivity / fit, framed positively. Cream block.
function WhoThisIsFor() {
  const points = [
    { t: 'Raising pre-seed through Series A', d: 'You are at the stage where a tight process and warm intros change the outcome.' },
    { t: 'Ready to run a real process', d: 'You will do the work between calls and move fast when momentum builds.' },
    { t: 'You want the truth', d: 'You would rather hear a direct read on your raise than a comfortable one.' },
    { t: 'Genuinely going for it', d: 'You are committed to the raise, and investors can feel that in the room.' },
  ];
  return (
    <section style={{ background: 'var(--cream)' }}>
      <div className="wrap">
        <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }}>
          <Reveal>
            <div style={{ position: 'sticky', top: 100 }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Who I work with</div>
              <h2 style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1, textWrap: 'balance' }}>
                Selective on <span style={{ fontStyle: 'italic' }}>purpose.</span>
              </h2>
              <p style={{ fontSize: 17, color: 'var(--ink-soft)', marginTop: 22, maxWidth: 400, textWrap: 'pretty' }}>
                I only take on founders I strongly believe can raise. That keeps the roster small, the focus deep, and my incentives honest.
              </p>
            </div>
          </Reveal>
          <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {points.map((p, i) => (
              <Reveal key={p.t} delay={(i % 2) * 80}>
                <div style={{ border: '1px solid var(--line)', borderRadius: 16, padding: 28, height: '100%' }}>
                  <h4 style={{ fontSize: 19, margin: '0 0 10px', lineHeight: 1.2 }}>{p.t}</h4>
                  <p style={{ fontSize: 15, color: 'var(--ink-soft)', margin: 0, textWrap: 'pretty' }}>{p.d}</p>
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
