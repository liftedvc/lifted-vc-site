// Partners page — for VCs & accelerators. Netlify form "partners" emails Adam.
function PartnersPage() {
  React.useEffect(() => {
    if (document.getElementById('partner-form-styles')) return;
    const s = document.createElement('style');
    s.id = 'partner-form-styles';
    s.innerHTML = `
      .pfield input, .pfield textarea {
        width: 100%; background: transparent; border: 0;
        border-bottom: 1.5px solid var(--line); padding: 14px 0;
        color: var(--ink); font-family: var(--sans); font-size: 17px;
        outline: none; transition: border-color .25s; resize: vertical;
      }
      .pfield input::placeholder, .pfield textarea::placeholder { color: var(--ink-mute); }
      .pfield input:focus, .pfield textarea:focus { border-color: var(--accent); }
    `;
    document.head.appendChild(s);
  }, []);

  const why = [
    { t: 'Better outcomes, better returns', d: 'Founders who run a real process raise more, faster, and at stronger terms. That flows straight into your markups and follow-on.' },
    { t: 'Off your platform team', d: 'You cannot coach every founder through a raise. I become the dedicated resource who does, at portfolio scale.' },
    { t: 'A proven method', d: 'Every founder gets custom coaching on a systematic approach: warm introductions over cold outreach, a compression sprint, and honest, direct guidance.' },
    { t: 'Preferred rates, no equity', d: 'Your founders get preferred portfolio pricing, month to month, and I never take equity in your companies.' },
  ];
  const how = [
    { t: 'Free office hours for founders', d: 'Any founder in your portfolio can book time with me to talk through their raise, at no cost. Your whole batch gets a fundraising resource, not just the ones actively raising.' },
    { t: '1-on-1 round coaching', d: 'Dedicated coaching for the founders actively raising: narrative, investor list, pitch, and process through close.' },
    { t: 'Workshops for the batch', d: 'Live sessions for your portfolio. Founders bring their real pitch or outreach, we sharpen it on the spot, then open it up for Q&A.' },
  ];

  return (
    <>
      <section style={{ paddingTop: 80, paddingBottom: 60, background: 'var(--cream)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 900 }}>
            <Reveal><div className="eyebrow" style={{ marginBottom: 24 }}>For VCs &amp; accelerators</div></Reveal>
            <Reveal delay={100}>
              <h1 style={{ fontSize: 'clamp(42px, 4.8vw, 66px)', lineHeight: 1.08, margin: 0, textWrap: 'balance' }}>
                More funding means fewer write-offs
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ fontSize: 22, color: 'var(--ink-soft)', maxWidth: 620, marginTop: 32, textWrap: 'pretty' }}>
                I embed with your portfolio as their fundraising coach. More of your companies run a real process and raise faster, without adding load to your platform team.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div style={{ marginTop: 40 }}>
                <a href="#partner" className="btn btn-primary">Partner with Lifted <Arrow /></a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sky">
        <div className="wrap">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 80px' }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Why funds partner with me</div>
              <h2 style={{ fontSize: 'clamp(34px, 3.6vw, 46px)', lineHeight: 1, textWrap: 'balance' }}>
                Your founders raise. You get the upside
              </h2>
            </div>
          </Reveal>
          <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {why.map((w, i) => (
              <Reveal key={w.t} delay={(i % 2) * 80}>
                <div style={{ background: 'var(--cream)', border: '1px solid var(--ink)', borderRadius: 4, padding: 32, height: '100%' }}>
                  <h4 style={{ fontSize: 24, margin: '0 0 12px', lineHeight: 1.15 }}>{w.t}</h4>
                  <p style={{ fontSize: 16.5, color: 'var(--ink-soft)', margin: 0, textWrap: 'pretty' }}>{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="wrap">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 80px' }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>How I plug in</div>
              <h2 style={{ fontSize: 'clamp(34px, 3.6vw, 46px)', lineHeight: 1, textWrap: 'balance' }}>
                Three ways to work together
              </h2>
            </div>
          </Reveal>
          <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {how.map((h, i) => (
              <Reveal key={h.t} delay={i * 80}>
                <div style={{ background: 'var(--cream)', borderRadius: 16, padding: '40px 34px', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, margin: '0 0 12px' }}>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: 32, lineHeight: 1, color: 'var(--gold)', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                    <h4 style={{ fontSize: 24, margin: 0, lineHeight: 1.15 }}>{h.t}</h4>
                  </div>
                  <p style={{ fontSize: 16, color: 'var(--ink-soft)', margin: 0, textWrap: 'pretty' }}>{h.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="partner" className="bg-deep" style={{ paddingTop: 130, paddingBottom: 130 }}>
        <div className="wrap">
          <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <Reveal>
              <div>
                <div className="eyebrow" style={{ marginBottom: 20, color: 'var(--butter)' }}>Let&rsquo;s talk</div>
                <h2 style={{ fontSize: 'clamp(34px, 3.6vw, 46px)', lineHeight: 0.98, color: 'var(--cream)', textWrap: 'balance' }}>
                  Bring me into your portfolio
                </h2>
                <p style={{ fontSize: 19, lineHeight: 1.5, color: 'rgba(251,246,236,0.72)', margin: '24px 0 0', maxWidth: 420, textWrap: 'pretty' }}>
                  Tell me about your fund and your founders. I read every note personally and will get back to you.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div style={{ background: 'var(--cream)', borderRadius: 4, padding: 40 }}>
                <form name="partners" method="POST" action="/partners-thanks.html" data-netlify="true" netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="partners" />
                  <p style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
                    <label>Do not fill this out: <input name="bot-field" /></label>
                  </p>
                  <h3 style={{ fontSize: 24, margin: '0 0 8px', lineHeight: 1.1 }}>Send a quick note.</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: '0 0 26px' }}>It comes straight to my inbox.</p>
                  <div className="pfield" style={{ marginBottom: 18 }}>
                    <label style={{ display: 'block', fontSize: 12, color: 'var(--ink-soft)', marginBottom: 4, fontWeight: 500 }}>Name</label>
                    <input type="text" name="name" placeholder="Your name" required />
                  </div>
                  <div className="pfield" style={{ marginBottom: 18 }}>
                    <label style={{ display: 'block', fontSize: 12, color: 'var(--ink-soft)', marginBottom: 4, fontWeight: 500 }}>Fund or accelerator</label>
                    <input type="text" name="firm" placeholder="Where you invest" />
                  </div>
                  <div className="pfield" style={{ marginBottom: 18 }}>
                    <label style={{ display: 'block', fontSize: 12, color: 'var(--ink-soft)', marginBottom: 4, fontWeight: 500 }}>Email</label>
                    <input type="email" name="email" placeholder="you@fund.com" required />
                  </div>
                  <div className="pfield" style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontSize: 12, color: 'var(--ink-soft)', marginBottom: 4, fontWeight: 500 }}>What is on your mind?</label>
                    <textarea name="message" rows={3} placeholder="Your portfolio, and how I can help"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send it <Arrow /></button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { PartnersPage });
