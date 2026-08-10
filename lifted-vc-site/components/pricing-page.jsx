// Pricing page — consultation + stage-based round coaching + FAQ
function PricingPage() {
  const plans = [
    {
      tag: 'Consultation', price: 'Free', cadence: '30-minute call',
      title: 'Free Fundraising Consultation',
      desc: 'An honest read on where you are and what would unblock your raise. Candid, conversational, entirely on the house.',
      note: null,
      includes: [
        '30-minute working call',
        'Honest read on readiness',
        'Concrete next steps',
        'Open agenda, candid feedback',
      ],
      cta: 'Book a call',
      bg: 'var(--bg)',
    },
    {
      tag: 'Round coaching', price: '$1–2K', cadence: 'per month',
      title: '1-on-1 Round Coaching',
      desc: 'Your dedicated co-pilot from narrative through close. We run your fundraising round together, week by week.',
      note: 'Against a $10–20K engagement, balance due only when you close.',
      includes: [
        'Weekly 1-on-1 coaching',
        'Live pitch practice',
        'Investor list & deck reviews',
        'Process management through close',
      ],
      cta: 'Work with me',
      bg: 'var(--bg)', highlight: true,
    },
  ];

  return (
    <>
      <section style={{ paddingTop: 80, paddingBottom: 60, background: 'var(--cream)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 880 }}>
            <Reveal><div className="eyebrow" style={{ marginBottom: 24 }}>Pricing</div></Reveal>
            <Reveal delay={100}>
              <h1 style={{ fontSize: 'clamp(42px, 4.8vw, 66px)', lineHeight: 1.08, margin: 0, textWrap: 'balance' }}>
                Simple, honest <em>pricing.</em>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ fontSize: 21, color: 'var(--ink-soft)', maxWidth: 640, marginTop: 32, textWrap: 'pretty' }}>
                No equity, ever. Most of the fee is tied to your raise, so I only win when you do.
                Pricing scales with your stage, your timeline, and how involved you want me to be.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 60, paddingBottom: 100, background: 'var(--cream)' }}>
        <div className="wrap">
          <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, maxWidth: 780, margin: '0 auto' }}>
            {plans.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div style={{
                  padding: 36,
                  background: p.bg,
                  border: p.highlight ? '2px solid var(--ink)' : '1px solid var(--ink)',
                  boxShadow: p.highlight ? '6px 6px 0 var(--gold)' : 'none',
                  borderRadius: 4,
                  height: '100%',
                  display: 'flex', flexDirection: 'column',
                  position: 'relative',
                }}>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: p.highlight ? 'var(--butter-deep)' : 'var(--steel)', marginBottom: 14 }}>{p.tag}</div>
                  <h3 style={{ fontSize: 32, margin: '0 0 8px', lineHeight: 1.05 }}>{p.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: p.note ? 8 : 18 }}>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 400, letterSpacing: '-0.02em' }}>{p.price}</span>
                    <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{p.cadence}</span>
                  </div>
                  {p.note && (
                    <div style={{ fontSize: 12.5, color: 'var(--ink-mute)', margin: '0 0 18px', lineHeight: 1.4 }}>{p.note}</div>
                  )}
                  <p style={{ fontSize: 15.5, color: 'var(--ink-soft)', margin: '0 0 24px', textWrap: 'pretty' }}>{p.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, borderTop: '1px solid rgba(0,0,0,0.12)' }}>
                    {p.includes.map(inc => (
                      <li key={inc} style={{
                        padding: '12px 0',
                        borderBottom: '1px solid rgba(0,0,0,0.08)',
                        fontSize: 14.5, color: 'var(--ink)',
                        display: 'flex', gap: 10, alignItems: 'baseline',
                      }}>
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <a href="contact.html" className="btn btn-primary" style={{ marginTop: 24, justifyContent: 'center' }}>{p.cta} <Arrow /></a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EngagementModel />

      <FAQ />
    </>
  );
}

// How the engagement works — stage-based totals + success-aligned structure
function EngagementModel() {
  const rows = [
    { stage: 'Pre-seed', monthly: '$1,000 / mo', total: '$10,000' },
    { stage: 'Seed', monthly: '$1,500 / mo', total: '$15,000' },
    { stage: 'Series A', monthly: '$2,000 / mo', total: '$20,000' },
  ];
  return (
    <section className="bg-sage" style={{ paddingTop: 110, paddingBottom: 110 }}>
      <div className="wrap">
        <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <Reveal>
            <div style={{ position: 'sticky', top: 100 }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>How it works</div>
              <h2 style={{ fontSize: 'clamp(32px, 3.4vw, 44px)', lineHeight: 1.1, textWrap: 'balance' }}>
                Priced to your <em>round.</em>
              </h2>
              <p style={{ fontSize: 17, color: 'var(--ink-soft)', marginTop: 22, maxWidth: 380, textWrap: 'pretty' }}>
                Coaching scales with your stage. You pay a monthly retainer against a fixed
                engagement total, and the balance comes due only when your round closes.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <div style={{ background: 'var(--bg)', border: '1px solid var(--ink)', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr',
                  padding: '16px 28px', fontSize: 12.5, color: 'var(--ink-mute)',
                  fontWeight: 500, borderBottom: '1px solid var(--line)',
                  fontFamily: 'var(--mono)', letterSpacing: '0.04em', textTransform: 'uppercase',
                }}>
                  <div>Stage</div>
                  <div>Monthly retainer</div>
                  <div>Engagement total</div>
                </div>
                {rows.map((r, i) => (
                  <div key={r.stage} style={{
                    display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr',
                    padding: '22px 28px', alignItems: 'baseline',
                    borderBottom: i < rows.length - 1 ? '1px solid var(--line-soft)' : 'none',
                  }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontStyle: 'italic' }}>{r.stage}</div>
                    <div style={{ fontSize: 16, color: 'var(--ink-soft)' }}>{r.monthly}</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--ink)' }}>{r.total}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 24, display: 'grid', gap: 14 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
                  <span style={{ color: 'var(--steel)', fontSize: 15 }}>–</span>
                  <p style={{ fontSize: 15.5, color: 'var(--ink-soft)', margin: 0, textWrap: 'pretty' }}>
                    Your monthly payments count toward the total. The remaining balance is due only when
                    you successfully close your round.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
                  <span style={{ color: 'var(--steel)', fontSize: 15 }}>–</span>
                  <p style={{ fontSize: 15.5, color: 'var(--ink-soft)', margin: 0, textWrap: 'pretty' }}>
                    No equity, ever, and it is month to month. If it is not working, we will both know.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: 'Do you take equity?', a: "No. I don't take equity in your startup. I want to remain unbiased and solely focused on your fundraising goals." },
    { q: 'Who do you take on as clients?', a: "I'm selective on purpose: I only work with founders I strongly believe can successfully fundraise. Small client roster, deep focus." },
    { q: "What if I'm not sure I'm ready to fundraise?", a: "Ask me. Readiness is complex: market timing, revenue, product maturity, and traction all factor in. I help you evaluate before you commit." },
    { q: 'Can you guarantee success?', a: "No, and be skeptical of anyone who does. What I can promise is a process that gives you the best possible shot, and the honesty to tell you when something isn't working." },
    { q: 'How much does it cost?', a: "Round Coaching scales with your stage: $10K at pre-seed, $15K at seed, $20K at Series A, paid as a monthly retainer ($1K to $2K) against that total, with the balance due only when you close. The consultation is free, and I never take equity." },
  ];

  return (
    <section id="faq" style={{ background: 'var(--cream)', paddingTop: 120, paddingBottom: 140 }}>
      <div className="wrap">
        <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
          <Reveal>
            <div style={{ position: 'sticky', top: 100 }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(32px, 3.4vw, 44px)', lineHeight: 1.1, textWrap: 'balance' }}>
                Good questions,<br/><em>straight</em> answers.
              </h2>
            </div>
          </Reveal>
          <div>
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={it.q} style={{ borderBottom: '1px solid var(--line)' }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{
                      width: '100%', display: 'flex',
                      justifyContent: 'space-between', alignItems: 'center', gap: 24,
                      padding: '28px 0', background: 'transparent', border: 0,
                      cursor: 'pointer', textAlign: 'left', color: 'var(--ink)',
                    }}
                  >
                    <span style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.015em' }}>{it.q}</span>
                    <span style={{ fontSize: 22, color: 'var(--gold)', transition: 'transform .3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                  </button>
                  <div style={{ maxHeight: isOpen ? 400 : 0, overflow: 'hidden', transition: 'max-height .5s, padding .3s', paddingBottom: isOpen ? 24 : 0 }}>
                    <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', margin: 0, maxWidth: 640, textWrap: 'pretty' }}>{it.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PricingPage, EngagementModel, FAQ });
