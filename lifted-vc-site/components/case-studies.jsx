// Case studies — anonymized, drawn from real engagements. Founders page.
function CaseStudies() {
  const studies = [
    {
      n: '01',
      bg: 'var(--bg)',
      result: 'A clean seed close a structural conflict could have blown up.',
      title: 'The seed round with a landmine in the cap table',
      body: [
        "A deep-tech founder came in heading into a seed round that looked straightforward on the surface. Underneath it were two constraints on a collision course: an existing investor held pro-rata rights they intended to exercise in full, while the company's eligibility for a government research grant capped how much of the cap table could come from foreign capital. Satisfying one commitment threatened to break the other, and that kind of conflict usually surfaces mid-close, when there is no room left to solve it.",
        "We modeled both constraints before the round opened rather than after. That meant mapping exactly how much room existed for the pro-rata allocation, sequencing which capital could come from where, and building the raise around the regulatory ceiling instead of discovering it at the worst possible moment.",
        "The round closed without the founder having to choose between their lead's commitment and their grant eligibility. The structural work happened up front, so the close itself was uneventful, which is exactly what you want a close to be.",
      ],
      who: 'Seed-stage founder, deep tech',
    },
    {
      n: '02',
      bg: 'var(--bg)',
      result: 'A predatory offer turned into leverage, and materially better terms.',
      title: 'The term sheet that looked like money and wasn’t',
      body: [
        "Mid-raise, a founder received an unusual offer that read like a lifeline and functioned like a trap. The structure granted equity at signing rather than on completing the round, carried a full board seat, bundled in call and put options, and stretched over a three-year timeline. Independent advisors who looked at it described it as a down round of down rounds. The founder's instinct was to take the certainty. The better move was to use the offer itself as leverage.",
        "We reframed the whole negotiation around upside rather than terms, and treated genuine willingness to walk as the strongest card on the table. From there we worked the specifics: the equity grant came down from five percent to a range of two to three and a half, the timeline compressed from three years to four months, the board seat moved to an advisory role, the call and put options were removed, and we pushed to secure capital upfront rather than on a promise.",
        "The founder kept control of their company and their cap table, and converted an offer designed to extract value into one that added it. The lesson that came out of it, lead with upside and keep your willingness to walk credible, now shapes how I coach every term-sheet conversation.",
      ],
      who: 'Founder, bridge round',
    },
    {
      n: '03',
      bg: 'var(--bg)',
      result: 'A pipeline rebuilt around real interest, and more quality investor conversations than the founder had ever run.',
      title: 'Strong numbers, wasted on the wrong rooms',
      body: [
        "A fintech founder came in with traction most companies at their stage would envy: triple-digit year-over-year growth, more than a million in transactions processed, a default rate under one percent, a multi-million-dollar debt facility already secured, and recognition from major international institutions. The problem was where that story was landing. Bandwidth was going to lukewarm investors who showed up late and left early, and new conversations kept getting anchored on a previous raise that had not closed.",
        "We changed two things. First, filtering: early signals like punctuality, depth of engagement, and response speed reliably predict investor quality, so we started reading them and cutting the ones that did not clear the bar rather than chasing them. Second, narrative control: instead of opening new relationships by explaining a past rejection, we framed forward, led with the traction, and let interested parties come to the founder. That turns a push into a pull.",
        "The founder stopped spending a tight runway on investors who were never going to move, and concentrated it on the ones who were. The pipeline got smaller and far better, and the quality of conversations climbed.",
      ],
      who: 'Founder, fintech',
    },
  ];

  return (
    <section style={{ paddingTop: 40, paddingBottom: 120, background: 'var(--cream)' }}>
      <div className="wrap">
        <div style={{ maxWidth: 760, marginBottom: 64 }}>
          <Reveal><div className="eyebrow" style={{ marginBottom: 20 }}>Case studies</div></Reveal>
          <Reveal delay={100}>
            <h2 style={{ fontSize: 'clamp(34px, 3.6vw, 46px)', lineHeight: 1, margin: 0, textWrap: 'balance' }}>
              What it looks like <em>up close.</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ fontSize: 20, color: 'var(--ink-soft)', maxWidth: 640, marginTop: 28, textWrap: 'pretty' }}>
              Three real engagements, anonymized. The moments where the process earned its keep.
            </p>
          </Reveal>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {studies.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 80}>
              <div className="cs-card" style={{ background: s.bg, border: '1px solid var(--ink)', borderRadius: 4, overflow: 'hidden' }}>
                <div className="cs-grid" data-stack="true" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 56, padding: 48, alignItems: 'start' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 44, color: 'var(--gold)', marginBottom: 20 }}>{s.n}</div>
                    <h3 style={{ fontSize: 'clamp(26px, 2.6vw, 34px)', lineHeight: 1.1, margin: '0 0 24px', textWrap: 'balance' }}>{s.title}</h3>
                    <div style={{ paddingTop: 22, borderTop: '1px solid var(--line)' }}>
                      <div style={{ fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 10, fontWeight: 500 }}>Result</div>
                      <p className="serif" style={{ fontSize: 20, lineHeight: 1.35, fontStyle: 'italic', color: 'var(--ink)', margin: 0, textWrap: 'pretty' }}>{s.result}</p>
                    </div>
                  </div>
                  <div>
                    {s.body.map((p, j) => (
                      <p key={j} style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', margin: '0 0 18px', textWrap: 'pretty' }}>{p}</p>
                    ))}
                    <div style={{ marginTop: 26, fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>{s.who}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CaseStudies });
