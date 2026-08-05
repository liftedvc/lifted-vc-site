// How I work with founders — the machine behind the coaching. Founders page. Cream block.
function HowIWork() {
  const themes = [
    {
      t: 'Weekly coaching, close and direct',
      d: 'The human work is the point: weekly sessions and a straight read on where your raise really stands.',
      points: ['Weekly 1-on-1 working sessions', 'Live pitch reps and mock investor grillings', 'Honest, founder-first guidance'],
    },
    {
      t: 'A real operating system',
      d: 'Everything running your raise lives in one place, so nothing slips between sessions.',
      points: ['Your private dashboard at app.lifted.vc', 'An investor CRM, built and kept current', 'Full transcripts, pre-call briefs, and action items'],
    },
    {
      t: 'Unfair access',
      d: 'Warm introductions instead of cold outreach, from a list built for your round.',
      points: ['A targeted investor list of 60 to 100', 'Double-opt-in intros through founders who just raised', 'Connector strategy that gets you in the room'],
    },
    {
      t: 'Built to win the room',
      d: 'Your story and materials, sharpened and pressure-tested before investors ever see them.',
      points: ['Narrative, deck, and one-pager built with you', 'Mock investor sessions and a red-team panel', 'Term-sheet and negotiation support when offers land'],
    },
  ];
  return (
    <section style={{ background: 'var(--cream)' }}>
      <div className="wrap">
        <Reveal>
          <div style={{ maxWidth: 760, marginBottom: 64 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>How I work with you</div>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 68px)', lineHeight: 1, margin: 0, textWrap: 'balance' }}>
              A coach in your corner, <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>with a real system behind it.</span>
            </h2>
            <p style={{ fontSize: 20, color: 'var(--ink-soft)', marginTop: 28, textWrap: 'pretty' }}>
              The coaching is the heart of it. The system makes sure the work sticks, the momentum holds, and nothing gets lost.
            </p>
          </div>
        </Reveal>
        <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {themes.map((th, i) => (
            <Reveal key={th.t} delay={(i % 2) * 80}>
              <div style={{ border: '1px solid var(--line)', borderRadius: 16, padding: 36, height: '100%', background: 'var(--cream)' }}>
                <h3 style={{ fontSize: 24, margin: '0 0 12px', lineHeight: 1.15 }}>{th.t}</h3>
                <p style={{ fontSize: 16, color: 'var(--ink-soft)', margin: '0 0 22px', textWrap: 'pretty' }}>{th.d}</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {th.points.map((p) => (
                    <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: 'var(--ink)' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1 }}>&rarr;</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { HowIWork });
