// Pricing page — full pricing + FAQ
function PricingPage() {
  const plans = [
    {
      tag: 'Consultation', price: 'Free', cadence: '30-minute call',
      title: 'Free Fundraising Consultation',
      desc: 'An honest read on where you are and what would unblock your raise. Candid, conversational, entirely on the house.',
      includes: [
        '30-minute working call',
        'Honest read on readiness',
        'Concrete next steps',
        'Open agenda, candid feedback',
      ],
      cta: 'Book a call',
      bg: 'var(--sky)',
    },
    {
      tag: 'Round coaching', price: '~$1K', cadence: 'per month',
      title: '1-on-1 Round Coaching',
      desc: 'Your dedicated co-pilot from narrative through close. We run your fundraising round together, week by week.',
      includes: [
        'Weekly 1-on-1 coaching',
        'Live pitch practice',
        'Investor list & deck reviews',
        'Process management through close',
      ],
      cta: 'Work with me',
      bg: 'var(--butter)',
      highlight: true,
    },
    {
      tag: 'Prep coaching', price: '~$1K', cadence: 'per month',
      title: '1-on-1 Round Prep Coaching',
      desc: 'For founders building toward their raise. We sharpen entrepreneurship, customer discovery, and company-building until you are investor-ready.',
      includes: [
        'Entrepreneurship fundamentals',
        'Customer discovery',
        'Company-building strategy',
        'Investor-readiness checkpoints',
      ],
      cta: "Let's talk",
      bg: 'var(--blush)',
    },
  ];

  return (
    <>
      <section style={{ paddingTop: 80, paddingBottom: 60, background: 'var(--cream)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 880 }}>
            <Reveal><div className="eyebrow" style={{ marginBottom: 24 }}>Pricing</div></Reveal>
            <Reveal delay={100}>
              <h1 style={{ fontSize: 'clamp(56px, 7.5vw, 120px)', lineHeight: 0.96, margin: 0, textWrap: 'balance' }}>
                Three ways to <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>work together.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ fontSize: 21, color: 'var(--ink-soft)', maxWidth: 640, marginTop: 32, textWrap: 'pretty' }}>
                No equity taken — ever. Pricing is honest and flexible: pick what fits your stage,
                your timeline, and how involved you want me to be.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 60, paddingBottom: 100, background: 'var(--cream)' }}>
        <div className="wrap">
          <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {plans.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div style={{
                  padding: 36,
                  background: p.bg,
                  borderRadius: 16,
                  height: '100%',
                  display: 'flex', flexDirection: 'column',
                  position: 'relative',
                }}>
                  {p.highlight && (
                    <div style={{
                      position: 'absolute', top: -12, right: 24,
                      background: 'var(--ink)', color: 'var(--cream)',
                      padding: '6px 14px', borderRadius: 999,
                      fontSize: 12, fontWeight: 500,
                    }}>Most popular</div>
                  )}
                  <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500, marginBottom: 14 }}>{p.tag}</div>
                  <h3 style={{ fontSize: 32, margin: '0 0 8px', lineHeight: 1.05 }}>{p.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 18 }}>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 400, letterSpacing: '-0.02em' }}>{p.price}</span>
                    <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{p.cadence}</span>
                  </div>
                  <p style={{ fontSize: 15.5, color: 'var(--ink-soft)', margin: '0 0 24px', textWrap: 'pretty' }}>{p.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, borderTop: '1px solid rgba(0,0,0,0.12)' }}>
                    {p.includes.map(inc => (
                      <li key={inc} style={{
                        padding: '12px 0',
                        borderBottom: '1px solid rgba(0,0,0,0.08)',
                        fontSize: 14.5, color: 'var(--ink)',
                        display: 'flex', gap: 10, alignItems: 'baseline',
                      }}>
                        <span style={{ color: 'var(--accent)' }}>→</span> {inc}
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

      <FAQ />
    </>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: 'Do you take equity?', a: "No. I don't take equity in your startup — I want to remain unbiased and solely focused on your fundraising goals." },
    { q: 'Who do you take on as clients?', a: "I'm selective on purpose: I only work with founders I strongly believe can successfully fundraise. Small client roster, deep focus." },
    { q: "What if I'm not sure I'm ready to fundraise?", a: "Ask me — readiness is complex. Market timing, revenue, product maturity, and traction all factor in. I help you evaluate before you commit." },
    { q: 'Can you guarantee success?', a: "No, and be skeptical of anyone who does. What I can promise is a process that gives you the best possible shot — and the honesty to tell you when something isn't working." },
    { q: 'How much does it cost?', a: "Round Coaching and Round Prep Coaching run around $1K/month on retainer. The fundraising consultation is on the house. Reach out and we'll find the right fit for your stage." },
  ];

  return (
    <section id="faq" style={{ background: 'var(--cream)', paddingTop: 120, paddingBottom: 140 }}>
      <div className="wrap">
        <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
          <Reveal>
            <div style={{ position: 'sticky', top: 100 }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1, textWrap: 'balance' }}>
                Good questions,<br/><span style={{ fontStyle: 'italic' }}>straight</span> answers.
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
                    <span style={{ fontSize: 22, color: 'var(--accent)', transition: 'transform .3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
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

Object.assign(window, { PricingPage, FAQ });
