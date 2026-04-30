// Contact page — full form. Submits to Netlify Forms (form name: "contact").
// A hidden static shadow form lives in index.html so Netlify discovers it at build time.
function ContactPage() {
  const [stage, setStage] = React.useState('Pre-seed');
  const stages = ['Pre-seed', 'Seed', 'Series A', 'Not sure yet'];

  // Inject input styles once
  React.useEffect(() => {
    if (document.getElementById('form-styles')) return;
    const s = document.createElement('style');
    s.id = 'form-styles';
    s.innerHTML = `
      .field-input input, .field-input textarea {
        width: 100%; background: transparent; border: 0;
        border-bottom: 1.5px solid var(--line); padding: 14px 0;
        color: var(--ink); font-family: var(--sans); font-size: 17px;
        outline: none; transition: border-color .25s; resize: vertical;
      }
      .field-input input::placeholder, .field-input textarea::placeholder { color: var(--ink-mute); }
      .field-input input:focus, .field-input textarea:focus { border-color: var(--accent); }
    `;
    document.head.appendChild(s);
  }, []);

  return (
    <section style={{ paddingTop: 80, paddingBottom: 120, background: 'var(--cream)' }}>
      <div className="wrap">
        <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <Reveal><div className="eyebrow" style={{ marginBottom: 24 }}>Let's talk</div></Reveal>
            <Reveal delay={100}>
              <h1 style={{ fontSize: 'clamp(56px, 7.5vw, 120px)', lineHeight: 0.96, margin: 0, textWrap: 'balance' }}>
                Ready to <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>raise?</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="serif" style={{
                fontSize: 22, lineHeight: 1.45, color: 'var(--ink-soft)',
                margin: '32px 0 0', maxWidth: 480, fontStyle: 'italic',
                textWrap: 'pretty',
              }}>
                Most founders spend 6–12 months on a raise that should take 3.
                Let's change that.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div style={{ background: 'var(--butter)', borderRadius: 16, padding: 40 }}>
              <form
                name="contact"
                method="POST"
                action="/thank-you.html"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

                <h3 style={{ fontSize: 26, margin: '0 0 8px', lineHeight: 1.1 }}>Tell me about your raise.</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: '0 0 28px' }}>I respond personally within 48 hours.</p>

                <Field label="Name"><input type="text" name="name" placeholder="Your name" required /></Field>
                <Field label="Email"><input type="email" name="email" placeholder="you@company.com" required /></Field>
                <Field label="Company"><input type="text" name="company" placeholder="What you're building" /></Field>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 12, color: 'var(--ink-soft)', marginBottom: 10, fontWeight: 500 }}>Stage</label>
                  <input type="hidden" name="stage" value={stage} />
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {stages.map(s => (
                      <button type="button" key={s} onClick={() => setStage(s)}
                        style={{
                          padding: '8px 16px',
                          background: stage === s ? 'var(--ink)' : 'transparent',
                          color: stage === s ? 'var(--cream)' : 'var(--ink)',
                          border: '1.5px solid var(--ink)',
                          borderRadius: 999, fontSize: 14, cursor: 'pointer',
                          fontFamily: 'var(--sans)',
                        }}
                      >{s}</button>
                    ))}
                  </div>
                </div>

                <Field label="What's on your mind?"><textarea name="message" rows={3} placeholder="Where are you, and what would help most?"></textarea></Field>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                  Send it <Arrow />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div className="field-input" style={{ marginBottom: 18 }}>
      <label style={{ display: 'block', fontSize: 12, color: 'var(--ink-soft)', marginBottom: 4, fontWeight: 500 }}>{label}</label>
      {children}
    </div>
  );
}

Object.assign(window, { ContactPage, Field });
