// Featured testimonial + compact proof row for the home page. Blush block.
function FeaturedQuote() {
  const mini = [
    { result: 'Saved 100+ hours and $20K+', who: 'Misha', tag: 'Coached founder' },
    { result: 'More investor calls in 4 weeks than ever before', who: 'Ndonga', tag: 'Seed founder' },
    { result: 'From science project to funded business', who: 'Aidan', tag: 'Pre-seed founder' },
  ];
  return (
    <section className="bg-blush">
      <div className="wrap">
        <Reveal>
          <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: 32 }}>What founders say</div>
            <p className="serif" style={{ fontSize: 'clamp(30px, 4vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em', margin: '0 0 40px', fontStyle: 'italic', fontWeight: 400, textWrap: 'balance' }}>
              &ldquo;He gave me a process. One that replaced guesswork with clarity, confidence, and precision.&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
              <Avatar letter="L" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontStyle: 'italic' }}>Leni</div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Pre-seed founder</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 1000, margin: '64px auto 0' }}>
            {mini.map((m) => (
              <div key={m.who} style={{ background: 'var(--cream)', borderRadius: 14, padding: '26px 24px' }}>
                <div style={{ fontSize: 17.5, fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.01em', marginBottom: 16 }}>{m.result}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Avatar letter={m.who[0]} small />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 15, fontStyle: 'italic' }}>{m.who}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{m.tag}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <a href="founders.html" className="btn btn-ghost">Read more stories <Arrow /></a>
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
