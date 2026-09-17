// How I work with founders — the engagement, described honestly. Founders page. Lav band.
function HowIWork() {
  const themes = [
    {
      t: 'Weekly 1-on-1 sessions',
      d: 'The core of the engagement: we meet every week and run your raise like an operating cadence.',
      points: ['Weekly 1-on-1 working sessions', 'An agenda set by whatever is live in your pipeline', 'Action items at the end of every session'],
    },
    {
      t: 'Slack and ad hoc calls in between',
      d: 'A term sheet comes in, an investor sends a vague email, a partner meeting moves up.',
      points: ['A private Slack channel with me for quick action', 'Drafts, reviews, and gut checks between calls', 'Ad hoc calls when something big lands'],
    },
    {
      t: 'Narrative, collateral, and pitch reps',
      d: 'Your story and materials, built with you and drilled until the pitch holds up.',
      points: ['Story, one-pager, deck, and data room', 'Mock investor sessions until you are ready for anything in Q&A', 'Term sheet negotiation with leverage when offers come in'],
    },
    {
      t: 'Warm intros and momentum',
      d: "Cold outreach doesn't convert, so we never do it. No founder is born with an investor network, and we build yours.",
      points: ['A target investor list we build together and tier', 'Every investor on the list mapped to a connector who can get you in warm', 'First meetings stacked into a compressed window so a dozen funds are moving at once'],
    },
    {
      t: 'The whole raise in one place',
      d: 'Everything running your raise lives in one place.',
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
