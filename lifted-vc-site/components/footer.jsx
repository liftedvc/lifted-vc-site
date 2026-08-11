// Footer — same on every page. Paper, thick rule bookend.
function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', padding: '64px 0 36px' }}>
      <div className="wrap">
        <div className="rule-thick" style={{ marginBottom: 26 }} />
        <div data-stack="true" className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 56,
          marginBottom: 48,
        }}>
          <div>
            <Wordmark />
            <p style={{
              marginTop: 16, fontSize: 15.5, lineHeight: 1.55,
              color: 'var(--ink-soft)', maxWidth: 320,
              fontFamily: 'var(--lit)', fontStyle: 'italic',
            }}>
              Helping founders raise pre-seed through Series A — methodically, honestly,
              on a timeline that actually works.
            </p>
          </div>

          <FooterCol title="Site" links={[
            { l: 'Home', href: '/' },
            { l: 'About', href: '/about' },
            { l: 'Pricing', href: '/pricing' },
            { l: 'Founders', href: '/founders' },
          ]} />
          <FooterCol title="Resources" links={[
            { l: 'Playbook', href: 'https://lifted.vc/fundraising-playbook', external: true },
            { l: 'FAQ', href: '/pricing#faq' },
          ]} />
          <FooterCol title="Connect" links={[
            { l: 'Contact', href: '/contact' },
            { l: 'LinkedIn', href: 'https://www.linkedin.com/in/robertsadamj/' },
            { l: 'Email', href: 'mailto:adam@lifted.vc' },
          ]} />
        </div>

        <div className="footer-bottom" style={{
          paddingTop: 24, borderTop: '1px solid var(--line)',
          display: 'flex', justifyContent: 'space-between',
          gap: 16, flexWrap: 'wrap',
          fontSize: 13, color: 'var(--ink-mute)',
        }}>
          <div>© 2026 Lifted.vc</div>
          <div style={{ fontStyle: 'italic', fontFamily: 'var(--lit)', fontSize: 15, color: 'var(--ink-soft)' }}>
            Honest fundraising. Tighter timelines.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 14, color: 'var(--ink)', fontFamily: 'var(--sans)' }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {links.map(l => (
          <li key={l.l} style={{ marginBottom: 9 }}>
            <a href={l.href}
            target={l.external ? '_blank' : undefined}
            rel={l.external ? 'noopener noreferrer' : undefined}
            style={{
              fontSize: 14.5, color: 'var(--ink-soft)',
              fontFamily: 'var(--sans)',
              transition: 'color .2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--steel)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-soft)'}
            >{l.l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Object.assign(window, { Footer, FooterCol });
