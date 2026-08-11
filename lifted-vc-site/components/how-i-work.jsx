// How I work with founders — the engagement, described honestly. Founders page. Lav band.
function HowIWork() {
  const themes = [
    {
      t: 'A weekly rhythm that ships',
      d: 'The core of the engagement: we meet every week and run your raise like an operating cadence.',
      points: ['Weekly 1-on-1 working sessions', 'An agenda driven by your live pipeline', 'Action items in your inbox after every call'],
    },
    {
      t: 'There between sessions',
      d: "Fundraising doesn't wait for the next call, so neither do I.",
      points: ['A private Slack line for drafts, reviews, and gut checks', 'Ad hoc sessions when something big lands', 'A brief before every call so we start at full speed'],
    },
    {
      t: 'Built to win the room',
      d: 'Your story and materials, sharpened and pressure-tested before investors ever see them.',
      points: ['Narrative, deck, and one-pager built with you', 'Mock investor sessions and a red-team panel', 'Term-sheet and negotiation support when offers land'],
    },
    {
      t: 'Warm access, earned',
      d: 'No one can hand you intros worth having. I coach you through earning them at volume.',
      points: ['A targeted investor list of 60 to 100', 'A process that earns 60 to 80 double-opt-in introductions', 'Connector strategy that gets you in the room'],
    },
    {
      t: 'Resources at your fingertips',
      d: 'Everything running your raise lives in one place, so nothing slips between sessions.',
      points: ['Your private dashboard at app.lifted.vc', 'An investor CRM, built and kept current', 'Full transcripts of every session', 'The free fundraising playbook, woven into the work'],
    },
    {
      t: 'Aligned from day one',
      d: 'Simple terms that keep the focus on your raise.',
      points: ['No equity, ever', 'Month to month, no lock-in', 'A small roster, deep focus'],
    },
  ];
  return (
    <section className="band-lav" style={{ padding: '84px 0' }}>
      <div className="wrap">
        <Reveal>
          <div className="sechead">
            <span className="eyebrow">How I work with you</span>
            <span className="eyebrow">01</span>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <div style={{ maxWidth: 760, marginBottom: 56, marginTop: 26 }}>
            <h2 style={{
              fontSize: 'clamp(34px, 3.6vw, 46px)',
              lineHeight: 1.1, textWrap: 'balance',
            }}>
              A coach in your corner, with a real system behind it
            </h2>
            <p style={{
              fontFamily: 'var(--lit)',
              fontSize: 18, color: 'var(--ink-soft)', lineHeight: 1.65,
              marginTop: 18, textWrap: 'pretty',
            }}>
              The coaching is the heart of it. The system makes sure the work sticks, the
              momentum holds, and nothing gets lost.
            </p>
          </div>
        </Reveal>
        <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {themes.map((th, i) => (
            <Reveal key={th.t} delay={(i % 2) * 80}>
              <div style={{ border: '1px solid var(--ink)', borderRadius: 4, padding: 32, height: '100%', background: 'var(--bg)' }}>
                <h3 style={{ fontSize: 22, margin: '0 0 10px', lineHeight: 1.2 }}>{th.t}</h3>
                <p style={{ fontFamily: 'var(--lit)', fontSize: 15.5, color: 'var(--ink-soft)', margin: '0 0 20px', textWrap: 'pretty' }}>{th.d}</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {th.points.map((p) => (
                    <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: 'var(--ink)', fontFamily: 'var(--sans)' }}>
                      <span style={{ color: 'var(--steel)', flexShrink: 0, marginTop: 1 }}>–</span>
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
