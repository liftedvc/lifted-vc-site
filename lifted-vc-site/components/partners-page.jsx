// Partners page — for VCs & accelerators. Netlify form "partners" emails Adam.
// Content per partner-program brief: no client/fund names, no discounts, access not coupons.
function CopyEmailButton() {
  const [copied, setCopied] = React.useState(false);
  /* TODO(adam): replace this draft intro email with the final text that ships with the one-pager */
  const email = `Hi [Founder name],

I want to introduce you to Adam Roberts at Lifted (lifted.vc). He coaches founders 1:1 through their raise, narrative, investor targeting, warm introductions, and process through close, pre-seed to Series A.

We partner with Lifted so any founder in the portfolio can talk to him. The first conversation is free and worth taking before you go out: lifted.vc/contact

[Your name]`;
  const copy = () => {
    try {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) { /* clipboard unavailable */ }
  };
  return (
    <button onClick={copy} className="btn" style={{
      background: 'transparent', color: 'var(--bg)',
      border: '1px solid rgba(247,246,242,0.4)', padding: '10px 18px', fontSize: 13.5,
    }}>{copied ? 'Copied' : 'Copy intro email'}</button>
  );
}

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

  const gap = [
    { t: 'Better outcomes, better returns', d: 'Founders who run a real process raise faster and at stronger terms. That flows straight into your markups and follow-on.' },
    { t: 'Off your platform team', d: "You can't coach every founder through a raise. I become the dedicated resource who does, at portfolio scale." },
    { t: 'A proven method', d: 'Warm introductions over cold outreach, a compression sprint, and honest, direct guidance. The playbook is public at lifted.vc/fundraising-playbook.' },
    { t: 'Access, not discounts', d: 'One published price for every founder, no equity, ever. What partners get is priority access, portfolio programming, and reporting, never a coupon.' },
  ];
  const program = [
    { t: 'Free office hours', d: 'Any founder in your portfolio can book time to talk through their raise, at no cost, not just the ones actively raising.' },
    { t: 'Quarterly portfolio workshops', d: 'Live sessions where founders bring their real pitch or outreach and we sharpen it on the spot.' },
    { t: '1:1 round coaching', d: 'For founders who want a co-pilot through the whole raise: narrative, investor list, pitch, and process through close.' },
    { t: 'Direct line', d: 'Know a founder heading into a raise? Introduce us anytime. Every note gets a reply within a day.' },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 0, paddingBottom: 56, background: 'var(--bg)' }}>
        <div className="wrap">
          <div className="rule-thick" style={{ marginBottom: 56 }} />
          <div style={{ maxWidth: 900 }}>
            <Reveal><div className="eyebrow" style={{ marginBottom: 24 }}>For VCs &amp; accelerators</div></Reveal>
            <Reveal delay={100}>
              <h1 style={{ fontSize: 'clamp(42px, 4.8vw, 66px)', lineHeight: 1.08, margin: 0, textWrap: 'balance' }}>
                The fundraising bench for your portfolio
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ fontFamily: 'var(--lit)', fontSize: 19, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 640, marginTop: 28, textWrap: 'pretty' }}>
                Your founders' next round is your next markup. I embed with your portfolio as their
                fundraising expert, 1:1, pre-seed through Series A, so more of your companies run a
                real process and raise faster, without adding load to your platform team.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div style={{ marginTop: 36, display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
                <a href="#partner" className="btn btn-gold">Partner with Lifted <Arrow /></a>
                {/* TODO(adam): upload lifted-portfolio-program.pdf; link 404s until then */}
                <a href="/lifted-portfolio-program.pdf" target="_blank" rel="noopener noreferrer" className="tlink">Download the program one-pager</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The gap */}
      <section className="band-lav" style={{ padding: '84px 0' }}>
        <div className="wrap">
          <Reveal>
            <div className="sechead">
              <span className="eyebrow">The gap</span>
              <span className="eyebrow">01</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 style={{ fontSize: 'clamp(34px, 3.6vw, 46px)', lineHeight: 1.1, marginTop: 26, textWrap: 'balance' }}>
              Every fund has this gap
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: 'var(--lit)', fontSize: 18, lineHeight: 1.65, color: 'var(--ink-soft)', marginTop: 18, maxWidth: 680, textWrap: 'pretty' }}>
              Platform teams are small. Fundraising help inside most funds is a deck review the week
              before the raise and a list of intros. But the difference between a founder who raises
              in six weeks and one who stalls for six months is rarely the intros. It's narrative,
              sequencing, and reps. That work takes hours per founder that no platform team has.
              Funds route it to Lifted.
            </p>
          </Reveal>
          <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginTop: 44 }}>
            {gap.map((w, i) => (
              <Reveal key={w.t} delay={(i % 2) * 80}>
                <div style={{ background: 'var(--bg)', border: '1px solid var(--ink)', borderRadius: 4, padding: 32, height: '100%' }}>
                  <h4 style={{ fontSize: 21, margin: '0 0 10px', lineHeight: 1.2 }}>{w.t}</h4>
                  <p style={{ fontFamily: 'var(--lit)', fontSize: 15.5, color: 'var(--ink-soft)', margin: 0, textWrap: 'pretty' }}>{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who to send */}
      <section style={{ padding: '84px 0', background: 'var(--bg)' }}>
        <div className="wrap">
          <Reveal>
            <div className="sechead">
              <span className="eyebrow">Who to send</span>
              <span className="eyebrow">02</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 style={{ fontSize: 'clamp(34px, 3.6vw, 46px)', lineHeight: 1.1, marginTop: 26, maxWidth: 820, textWrap: 'balance' }}>
              Send me any founder raising pre-seed through Series A
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: 'var(--lit)', fontSize: 18, lineHeight: 1.65, color: 'var(--ink-soft)', marginTop: 18, maxWidth: 680, textWrap: 'pretty' }}>
              This works across your whole portfolio, not just the companies that are struggling.
              Your breakout founders raise faster and on better terms with an expert running the
              process alongside them; your quieter ones get a raise that actually comes together.
              The highest-leverage moments to start are a few weeks before going out, or mid-raise
              when momentum stalls, but earlier is always fine.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p style={{ fontFamily: 'var(--lit)', fontStyle: 'italic', fontSize: 17, lineHeight: 1.6, color: 'var(--ink)', marginTop: 24, maxWidth: 620, textWrap: 'pretty' }}>
              Every founder you send gets a straight answer on the first call, including the times
              the honest answer is to wait a quarter or tighten something before going out.
              Your referral is your reputation. I treat it that way.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Proof — anonymized, fundraising only */}
      <section className="band-navy" style={{ padding: '84px 0' }}>
        <div className="wrap">
          <Reveal>
            <div className="sechead">
              <span className="eyebrow">Proof</span>
              <span className="eyebrow">03</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 style={{ fontSize: 'clamp(34px, 3.6vw, 46px)', lineHeight: 1.1, marginTop: 26, textWrap: 'balance' }}>
              The scoreboard is public
            </h2>
          </Reveal>
          <div data-stack="true" style={{ display: 'flex', gap: 80, marginTop: 40, flexWrap: 'wrap' }}>
            {[['$96M+','Raised by Lifted founders'],['50+','Rounds closed'],['100+','Founders coached']].map(([n,k]) => (
              <div key={k}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 700, lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: '#b8bdd4', marginTop: 8, fontWeight: 500 }}>{k}</div>
              </div>
            ))}
          </div>
          {/* TODO(adam): point this at the scoreboard page when it goes live */}
          <div style={{ marginTop: 28 }}>
            <a href="/founders" className="tlink" style={{ color: 'var(--bg)' }}>See the record</a>
          </div>
          <p style={{ fontFamily: 'var(--lit)', fontSize: 17, lineHeight: 1.6, color: 'rgba(247,246,242,0.75)', marginTop: 32, maxWidth: 560, textWrap: 'pretty' }}>
            Most Lifted founders are referred by their existing investors.
          </p>
          {/* TODO(adam): supply the real figure, then unhide:
              <p>A YC company went from first partner meeting to a signed lead in [X] weeks.</p> */}
        </div>
      </section>

      {/* The Partner Program */}
      <section className="band-gold" style={{ padding: '84px 0' }}>
        <div className="wrap">
          <Reveal>
            <div className="sechead">
              <span className="eyebrow">The Lifted Partner Program</span>
              <span className="eyebrow">04</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 style={{ fontSize: 'clamp(34px, 3.6vw, 46px)', lineHeight: 1.1, marginTop: 26, textWrap: 'balance' }}>
              One published price for founders. Partners get access
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: 'var(--lit)', fontSize: 18, lineHeight: 1.65, color: 'var(--ink-soft)', marginTop: 18, maxWidth: 640, textWrap: 'pretty' }}>
              What your portfolio gets:
            </p>
          </Reveal>
          <div data-stack="true" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 40 }}>
            {program.map((h, i) => (
              <Reveal key={h.t} delay={(i % 2) * 80}>
                <div style={{ background: 'rgba(255,255,255,0.35)', border: '1px solid #e2d5b4', borderRadius: 4, padding: 28, height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, margin: '0 0 10px' }}>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: 30, lineHeight: 1, color: 'var(--gold)', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                    <h4 style={{ fontSize: 21, margin: 0, lineHeight: 1.2 }}>{h.t}</h4>
                  </div>
                  <p style={{ fontFamily: 'var(--lit)', fontSize: 15.5, color: 'var(--ink-soft)', margin: 0, textWrap: 'pretty' }}>{h.d}</p>
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
                <div style={{ marginTop: 28, paddingTop: 22, borderTop: '1px solid rgba(247,246,242,0.2)', maxWidth: 420 }}>
                  <p style={{ fontFamily: 'var(--lit)', fontSize: 15.5, lineHeight: 1.6, color: 'rgba(247,246,242,0.72)', margin: '0 0 14px', textWrap: 'pretty' }}>
                    Want to see how it works first? The program one-pager covers it, and any
                    founder's first conversation is free.
                  </p>
                  <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
                    {/* TODO(adam): upload lifted-portfolio-program.pdf to the site root; this link 404s until then */}
                    <a href="/lifted-portfolio-program.pdf" target="_blank" rel="noopener noreferrer" className="tlink" style={{ color: 'var(--bg)' }}>Download the program one-pager</a>
                    <CopyEmailButton />
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div style={{ background: 'var(--cream)', borderRadius: 4, padding: 40 }}>
                <form name="partners" method="POST" action="/partners-thanks" data-netlify="true" netlify-honeypot="bot-field">
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

Object.assign(window, { PartnersPage, CopyEmailButton });
