// About page — full story + philosophy/ethos consolidated
function AboutPage() {
  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: 80, paddingBottom: 60, background: 'var(--cream)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 880 }}>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 24 }}>About</div>
            </Reveal>
            <Reveal delay={100}>
              <h1 style={{
                fontSize: 'clamp(42px, 4.8vw, 66px)',
                lineHeight: 1.08,
                margin: 0,
                textWrap: 'balance',
              }}>
                I've been exactly where you are
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story — sage block */}
      <section className="bg-sage" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="wrap">
          <div data-stack="true" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 80,
            alignItems: 'start',
          }}>
            <Reveal>
              <div style={{ position: 'sticky', top: 100 }}>
                <Photo ratio="4 / 5" src="images/adam-470.jpg" alt="USA Sailing Team · 470" />
                <div style={{ marginTop: 14, fontSize: 14, color: 'var(--ink-soft)', fontFamily: 'var(--lit)' }}>
                  Five years at the international level<br/>before tech.
                </div>
              </div>
            </Reveal>

            <div style={{ fontFamily: 'var(--lit)', fontSize: 19, lineHeight: 1.65, color: 'var(--ink)' }}>
              <Reveal>
                <p style={{ fontSize: 28, lineHeight: 1.35, margin: '0 0 32px', fontWeight: 400, textWrap: 'pretty' }}>
                  Before tech, I spent five years on the USA Sailing Team, racing the 470 class
                  internationally. That's where I learned to prepare obsessively and perform
                  under pressure.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p style={{ margin: '0 0 24px', textWrap: 'pretty', color: 'var(--ink-soft)' }}>
                  My first tech role was as the first sales hire at <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>inDinero</strong>, helping
                  them hit $1M ARR. I then founded <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Paid Labs</strong>, went through Y
                  Combinator S2014, and raised from Pear Ventures and Founder Collective before
                  the company was acquired.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p style={{ margin: '0 0 24px', textWrap: 'pretty', color: 'var(--ink-soft)' }}>
                  After the sale, I joined Zinc Technologies (YC) as head of sales, then became
                  an EIR at Wefunder, where I rediscovered what I love: helping founders turn a
                  messy, terrifying process into something <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>methodical and winnable</strong>.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <p style={{ margin: 0, textWrap: 'pretty', color: 'var(--ink-soft)' }}>
                  That led me to launch Lifted.vc. Since then, I've coached <strong style={{ color: 'var(--ink)' }}>100+ founders</strong> from
                  pre-seed through Series A, helping them raise <strong style={{ color: 'var(--ink)' }}>over $100M</strong> in total capital.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Principles — combined philosophy + ethos, simpler */}
      <section className="bg-butter">
        <div className="wrap">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 72px' }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>How I work</div>
              <h2 style={{ fontSize: 'clamp(34px, 3.6vw, 46px)', lineHeight: 1, textWrap: 'balance' }}>
                Coaching done differently
              </h2>
            </div>
          </Reveal>

          <div data-stack="true" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
          }}>
            {[
              { title: 'Founder-focused', body: "I'm a YC alum who raised my own company, Paid Labs, from Pear Ventures and Founder Collective. Everything I coach comes from having sat in the founder seat and run the raise myself." },
              { title: 'No equity, ever', body: "I don't take equity or a percentage of your raise, and most of what I charge comes due after you close. The only thing I'm optimizing for is a speedy close on good terms." },
              { title: 'Tactical and mental', body: "It's the tactical mechanics, the strategy, and the mental side of raising. Months of pitching and hearing no wear on everyone, so we work that part too, and it's a real reason rounds get closed." },
              { title: 'Direct, no filler', body: "You get a straight answer on where you stand, including when the honest answer is to wait a quarter or tighten something before going out. Sessions are succinct, and the action items are ones you'll actually do." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 80}>
                <div style={{
                  background: 'var(--cream)',
                  border: '1px solid var(--ink)',
                  borderRadius: 4,
                  padding: 36,
                  height: '100%',
                }}>
                  <h4 style={{ fontSize: 28, margin: '0 0 14px', lineHeight: 1.1 }}>{p.title}</h4>
                  <p style={{ fontFamily: 'var(--lit)', fontSize: 16.5, lineHeight: 1.55, color: 'var(--ink-soft)', margin: 0, textWrap: 'pretty' }}>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { AboutPage });
