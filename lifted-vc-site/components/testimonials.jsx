// Featured testimonial — short version for home page. Blush block.
function FeaturedQuote() {
  return (
    <section className="bg-blush">
      <div className="wrap">
        <Reveal>
          <div style={{
            maxWidth: 980,
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <div className="eyebrow" style={{ marginBottom: 32 }}>What founders say</div>
            <p className="serif" style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              margin: '0 0 40px',
              fontStyle: 'italic',
              fontWeight: 400,
              textWrap: 'balance',
            }}>
              "He gave me a process. One that replaced guesswork with clarity, confidence, and precision."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
              <Avatar letter="L" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontStyle: 'italic' }}>Leni</div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Pre-seed founder</div>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>
              <a href="founders.html" className="btn btn-ghost">Read more stories <Arrow /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Avatar({ letter, small }) {
  const size = small ? 38 : 48;
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: 'var(--cream)', color: 'var(--accent)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--serif)', fontStyle: 'italic',
      fontSize: small ? 16 : 22, fontWeight: 400,
      flexShrink: 0,
    }}>{letter}</div>
  );
}

Object.assign(window, { FeaturedQuote, Avatar });
