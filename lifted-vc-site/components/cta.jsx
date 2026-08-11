// CTA — closing call-to-action. Indigo band, gold button.
function CTA() {
  return (
    <section id="contact" className="band-indigo cta-section" style={{ paddingTop: 130, paddingBottom: 130 }}>
      <div className="wrap">
        <div style={{
          maxWidth: 900,
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <Reveal>
            <h2 style={{
              fontSize: 'clamp(48px, 6vw, 80px)',
              lineHeight: 1,
              fontWeight: 400,
              margin: 0,
              color: 'var(--bg)',
              textWrap: 'balance',
            }}>
              Ready to raise?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{
              fontFamily: 'var(--lit)',
              fontSize: 20, lineHeight: 1.6,
              color: 'rgba(247, 246, 242, 0.72)',
              margin: '28px auto 42px', maxWidth: 560,
              textWrap: 'pretty',
            }}>
              Most founders spend 6–12 months on a raise that should take 3.
              Let's change that.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn btn-gold">
                Work with me <Arrow />
              </a>
              <a href="https://lifted.vc/fundraising-playbook" target="_blank" rel="noopener noreferrer" className="btn" style={{
                background: 'transparent', color: 'var(--bg)',
                border: '1px solid rgba(247, 246, 242, 0.4)',
              }}>
                Use the free playbook
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CTA });
