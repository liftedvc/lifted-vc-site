// Featured testimonial — editorial quote on paper, gold quote mark.
function FeaturedQuote() {
  return (
    <section style={{ padding: '88px 0', background: 'var(--bg)' }}>
      <div className="wrap">
        <Reveal>
          <div style={{
            maxWidth: 940,
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>What founders say</div>
            <p style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              margin: '18px 0 26px',
              fontWeight: 500,
              textWrap: 'balance',
            }}>
              &ldquo;He gave me a process. One that replaced guesswork with clarity, confidence, and precision.&rdquo;
            </p>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink-soft)' }}>
              <b style={{ color: 'var(--ink)' }}>Leni</b> · Pre-seed founder
            </div>
            <div style={{ marginTop: 26 }}>
              <a href="/founders" className="tlink">Read more stories</a>
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
      background: 'var(--lav)', color: 'var(--indigo)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--serif)',
      fontSize: small ? 16 : 22, fontWeight: 600,
      flexShrink: 0,
    }}>{letter}</div>
  );
}

Object.assign(window, { FeaturedQuote, Avatar });
