// What you get — the navy band. Ruled ledger of deliverables.
function WhatYouGet() {
  const items = [
    { t: 'Weekly 1-on-1 sessions', d: 'We meet every week and run your raise like an operating cadence. The agenda is whatever is live in your pipeline, and every session ends with action items.' },
    { t: 'Slack and ad hoc calls in between', d: 'A term sheet comes in, an investor goes quiet, a partner meeting moves up. You have a private Slack channel with me, so you send it over and we get on a call.' },
    { t: 'A target investor list we build together', d: 'Who invests at your stage and in your space, who is actually deploying right now, and who can get you in warm. We build it together and tier it, because a tight list of real fits beats a long list of maybes.' },
    { t: 'Narrative, collateral, and pitch reps', d: 'Your story, one-pager, deck, and data room, built with you and drilled in mock investor sessions until the pitch holds up and you are ready for anything in Q&A.' },
    { t: 'A warm-intro pipeline', d: 'Cold outreach doesn’t convert, so we map every investor on your list to a connector who can get you in warm. No founder is born with an investor network, and we build yours.' },
    { t: 'Momentum that closes rounds', d: 'We stack your first meetings into a compressed window so a dozen funds are moving at once. Investors can feel that, and it is what gets rounds closed quickly.' },
    { t: 'Term sheet negotiation', d: 'When offers come in, we read them together and negotiate with leverage, so you know what to push on, what to give, and when to walk.' },
    { t: 'The whole raise in one place', d: 'A private dashboard at app.lifted.vc with your pipeline, an investor CRM, and full transcripts of every session.' },
  ];
  return (
    <section className="band-navy" style={{ padding: '84px 0' }}>
      <div className="wrap">
        <Reveal>
          <div className="sechead">
            <span className="eyebrow">What you get</span>
            <span className="eyebrow">02</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontSize: 'clamp(34px, 3.6vw, 46px)',
            lineHeight: 1.1, marginTop: 26, textWrap: 'balance',
          }}>
            An experienced fundraising copilot
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p style={{
            fontFamily: 'var(--lit)',
            fontSize: 18, lineHeight: 1.65, color: 'rgba(247,246,242,0.75)',
            marginTop: 18, maxWidth: 640, textWrap: 'pretty',
          }}>
            I co-pilot the whole round with you, week by week from prep to close. It is the tactical
            mechanics, the strategy, and the mental side of raising, kept succinct and direct.
          </p>
        </Reveal>

        <div data-stack="true" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '0 70px', marginTop: 44,
        }}>
          {items.map((it, i) => (
            <Reveal key={it.t} delay={(i % 2) * 80}>
              <div style={{
                padding: '22px 0',
                borderTop: '1px solid rgba(247,246,242,0.18)',
                display: 'grid', gridTemplateColumns: '210px 1fr', gap: 24,
                height: '100%',
              }}>
                <h4 style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.3, color: 'var(--bg)' }}>{it.t}</h4>
                <p style={{
                  fontFamily: 'var(--lit)', fontSize: 15, lineHeight: 1.6,
                  color: '#b8bdd4', margin: 0, textWrap: 'pretty',
                }}>{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { WhatYouGet });
