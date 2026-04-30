// CTA — closing call-to-action. Deep navy block.
function CTA() {
  return (
    <section id="contact" className="bg-deep cta-section" style={{ paddingTop: 200, paddingBottom: 200 }}>
      <div className="wrap">
        <div style={{
          maxWidth: 900,
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <Reveal>
            <h2 style={{
              fontSize: 'clamp(56px, 8vw, 132px)',
              lineHeight: 0.94,
              fontWeight: 400,
              margin: 0,
              color: 'var(--cream)',
              textWrap: 'balance',
            }}>
              Ready to <span style={{ fontStyle: 'italic', color: 'var(--butter)' }}>raise?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="serif" style={{
              fontSize: 24, lineHeight: 1.45,
              color: 'rgba(251, 246, 236, 0.7)',
              margin: '36px auto 48px', maxWidth: 580,
              fontStyle: 'italic',
              textWrap: 'pretty',
            }}>
              Most founders spend 6–12 months on a raise that should take 3.
              Let's change that.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="contact.html" className="btn" style={{
                background: 'var(--butter)', color: 'var(--deep)',
              }}>
                Work with me <Arrow />
              </a>
              <a href="https://lifted.vc/fundraising-playbook" className="btn" style={{
                background: 'transparent', color: 'var(--cream)',
                border: '1.5px solid rgba(251, 246, 236, 0.3)',
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
