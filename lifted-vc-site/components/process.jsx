// Process — three ruled columns on the periwinkle band, gold numerals
function Process() {
  const phases = [
    {
      n: '1',
      title: 'Build the story investors buy.',
      lead: "Investors decide in the first minutes, so we build your narrative the way they listen: problem first, conclusion first, plain English. One page before ten slides, because the one-pager is what lands meetings. Then we pressure-test it in mock sessions until the hardest question in the room is one you've already answered.",
    },
    {
      n: '2',
      title: 'Engineer warm access at volume.',
      lead: "Cold outreach doesn't convert, so we never do it. We work the math backward from your round: a target list of 60 to 100 right-fit investors, reached through connectors ranked by whether they'll name the exact investor they'll introduce you to. The result is 60 to 80 warm, double-opt-in introductions, real access, at the volume a round actually requires.",
    },
    {
      n: '3',
      title: 'Compress the round until it closes.',
      lead: "Interest expires, so we stack every first meeting into a two to three week sprint. When a dozen funds are moving at once, the urgency is real and investors can feel it. We lock in the yeses, respect the nos, kill the maybes, and when term sheets land, we negotiate from upside, with the leverage to walk.",
    },
  ];

  return (
    <section id="process" className="band-lav" style={{ padding: '84px 0' }}>
      <div className="wrap">
        <Reveal>
          <div className="sechead">
            <span className="eyebrow">The method</span>
            <span className="eyebrow">01</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontSize: 'clamp(34px, 3.6vw, 46px)',
            lineHeight: 1.1, marginTop: 26, textWrap: 'balance',
          }}>
            Thoughtfully raising your round
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p style={{
            fontFamily: 'var(--lit)',
            fontSize: 18, lineHeight: 1.65, color: 'var(--ink-soft)',
            marginTop: 18, maxWidth: 640, textWrap: 'pretty',
          }}>
            Experienced founders craft a story built for how investors actually listen, line up
            warm intros at volume, and schedule every meeting compressed into one decisive window.
            I've turned that pattern into a system I call <em>Authentic FOMO</em> that generates
            real demand, engineered honestly, and we'll run it together.
          </p>
        </Reveal>

        <div data-stack="true" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          marginTop: 54,
        }}>
          {phases.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div style={{
                padding: i === 0 ? '0 40px 0 0' : '0 40px',
                borderLeft: i === 0 ? 'none' : '1px solid #cdd3e6',
                height: '100%',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, margin: '0 0 12px' }}>
                  <span style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 40, lineHeight: 1,
                    color: 'var(--gold)',
                    flexShrink: 0,
                  }}>{p.n}</span>
                  <h3 style={{ fontSize: 23, lineHeight: 1.2, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{
                  fontFamily: 'var(--lit)',
                  fontSize: 15.5, lineHeight: 1.65,
                  color: 'var(--ink-soft)', margin: 0,
                  textWrap: 'pretty',
                }}>{p.lead}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ marginTop: 46 }}>
            <a href="https://lifted.vc/fundraising-playbook" target="_blank" rel="noopener noreferrer" className="tlink">Free fundraising playbook</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Process });
