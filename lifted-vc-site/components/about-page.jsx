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
                fontSize: 'clamp(56px, 7.5vw, 120px)',
                lineHeight: 0.96,
                margin: 0,
                textWrap: 'balance',
              }}>
                I've been <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>exactly</span> where you are.
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
                <div style={{ marginTop: 14, fontSize: 14, color: 'var(--ink-soft)', fontStyle: 'italic', fontFamily: 'var(--serif)' }}>
                  Five years at the international level<br/>before tech.
                </div>
              </div>
            </Reveal>

            <div style={{ fontSize: 19, lineHeight: 1.65, color: 'var(--ink)' }}>
              <Reveal>
                <p className="serif" style={{ fontSize: 28, lineHeight: 1.35, margin: '0 0 32px', fontWeight: 400, textWrap: 'pretty' }}>
                  Before tech, I spent five years on the USA Sailing Team, racing the 470 class
                  internationally. That's where I learned to prepare obsessively and perform
                  under pressure.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p style={{ margin: '0 0 24px', textWrap: 'pretty', color: 'var(--ink-soft)' }}>
                  My first tech role was as the first sales hire at <a className="ulink" href="#">inDinero</a>, helping
                  them hit $1M ARR. I then founded <a className="ulink" href="#">Paid Labs</a>, went through Y
                  Combinator S2014, and raised from Pear Ventures and Founder Collective before
                  the company was acquired.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p style={{ margin: '0 0 24px', textWrap: 'pretty', color: 'var(--ink-soft)' }}>
                  After the sale, I joined Zinc Technologies (YC) as head of sales, then became
                  an EIR at Wefunder, where I rediscovered what I love: helping founders turn a
                  messy, terrifying process into something <em>methodical and winnable</em>.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <p style={{ margin: 0, textWrap: 'pretty', color: 'var(--ink-soft)' }}>
                  That led me to launch Lifted.vc. Since then, I've coached <strong style={{ color: 'var(--ink)' }}>100+ founders</strong> from
                  pre-seed through Series A, helping them raise over <strong style={{ color: 'var(--ink)' }}>$80M</strong> in total capital.
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
              <h2 style={{ fontSize: 'clamp(44px, 6vw, 88px)', lineHeight: 1, textWrap: 'balance' }}>
                Coaching done <span style={{ fontStyle: 'italic' }}>differently.</span>
              </h2>
            </div>
          </Reveal>

          <div data-stack="true" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
          }}>
            {[
              { title: 'Founder-focused', body: "I've successfully fundraised myself. My advice comes from the founder perspective, not from a consultant who's never done it." },
              { title: 'No equity, ever', body: "I don't take equity in your startup. I want to remain unbiased and solely focused on your fundraising goals." },
              { title: 'Tactical + mental', body: "Real strategies AND real support to navigate the emotional rollercoaster. Both matter equally." },
              { title: 'Direct, no filler', body: "I cut to the chase, focus on what moves the needle, and never give you homework you'll never do." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 80}>
                <div style={{
                  background: 'var(--cream)',
                  borderRadius: 16,
                  padding: 36,
                  height: '100%',
                }}>
                  <h4 style={{ fontSize: 28, margin: '0 0 14px', lineHeight: 1.1 }}>{p.title}</h4>
                  <p style={{ fontSize: 16.5, color: 'var(--ink-soft)', margin: 0, textWrap: 'pretty' }}>{p.body}</p>
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
