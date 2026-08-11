// Footer — same on every page
function Footer() {
  return (
    <footer style={{ background: 'var(--cream)', borderTop: '1px solid var(--line)', padding: '64px 0 36px' }}>
      <div className="wrap">
        <div data-stack="true" className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 56,
          marginBottom: 56,
        }}>
          <div>
            <Wordmark />
            <p style={{
              marginTop: 18, fontSize: 16, lineHeight: 1.5,
              color: 'var(--ink-soft)', maxWidth: 320,
              fontFamily: 'var(--serif)', fontStyle: 'italic',
            }}>
              Helping founders raise pre-seed through Series A — methodically, honestly,
              on a timeline that actually works.
            </p>
          </div>

          <FooterCol title="Site" links={[
            { l: 'Home', href: 'index.html' },
            { l: 'About', href: 'about.html' },
            { l: 'Pricing', href: 'pricing.html' },
            { l: 'Founders', href: 'founders.html' },
          ]} />
          <FooterCol title="Resources" links={[
            { l: 'Playbook', href: 'https://lifted.vc/fundraising-playbook' },
            { l: 'Sprint', href: 'https://www.fundraisingsprint.co/' },
            { l: 'FAQ', href: 'pricing.html#faq' },
          ]} />
          <FooterCol title="Connect" links={[
            { l: 'Contact', href: 'contact.html' },
            { l: 'LinkedIn', href: 'https://www.linkedin.com/in/robertsadamj/' },
            { l: 'Email', href: 'mailto:adam@lifted.vc' },
          ]} />
        </div>

        <div className="footer-bottom" style={{
          paddingTop: 28, borderTop: '1px solid var(--line)',
          display: 'flex', justifyContent: 'space-between',
          gap: 16, flexWrap: 'wrap',
          fontSize: 13, color: 'var(--ink-mute)',
        }}>
          <div>© 2026 Lifted.vc</div>
          <div style={{ fontStyle: 'italic', fontFamily: 'var(--serif)', fontSize: 15, color: 'var(--ink-soft)' }}>
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
      <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 16, color: 'var(--ink)' }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {links.map(l => (
          <li key={l.l} style={{ marginBottom: 10 }}>
            <a href={l.href} style={{
              fontSize: 15, color: 'var(--ink-soft)',
              transition: 'color .2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-soft)'}
            >{l.l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Object.assign(window, { Footer, FooterCol });
