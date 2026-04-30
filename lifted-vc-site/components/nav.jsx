// Top navigation — multi-page version. `current` is the active page slug.
function Nav({ current = 'home' }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer open
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { href: 'index.html', slug: 'home', label: 'Home' },
    { href: 'about.html', slug: 'about', label: 'About' },
    { href: 'founders.html', slug: 'founders', label: 'Founders' },
    { href: 'pricing.html', slug: 'pricing', label: 'Pricing' },
    { href: 'https://lifted.vc/fundraising-playbook', slug: 'playbook', label: 'Playbook' },
  ];

  return (
    <React.Fragment>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: scrolled || open ? 'rgba(251, 246, 236, 0.92)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(18px) saturate(140%)' : 'none',
        WebkitBackdropFilter: scrolled || open ? 'blur(18px) saturate(140%)' : 'none',
        borderBottom: scrolled || open ? '1px solid var(--line-soft)' : '1px solid transparent',
        transition: 'background .35s ease, border-color .35s ease',
      }}>
        <div className="wrap" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 'var(--nav-h, 76px)',
        }}>
          <a href="index.html" style={{ display: 'flex', alignItems: 'center' }}>
            <Wordmark />
          </a>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            <ul style={{
              listStyle: 'none', margin: 0, padding: 0,
              display: 'flex', gap: 32,
              fontSize: 15,
            }}>
              {links.map(l => {
                const active = l.slug === current;
                return (
                  <li key={l.href}>
                    <a href={l.href} style={{
                      color: active ? 'var(--ink)' : 'var(--ink-soft)',
                      fontWeight: active ? 500 : 400,
                      transition: 'color .2s',
                      borderBottom: active ? '1.5px solid var(--accent)' : '1.5px solid transparent',
                      paddingBottom: 4,
                    }}
                    onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'var(--ink)'; }}
                    onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'var(--ink-soft)'; }}
                    >{l.label}</a>
                  </li>
                );
              })}
            </ul>
            <a href="contact.html" className="btn btn-primary" style={{ padding: '11px 22px', fontSize: 14 }}>
              Work with me <Arrow size={12} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
            style={{
              display: 'none',
              alignItems: 'center', justifyContent: 'center',
              width: 44, height: 44,
              background: 'transparent',
              border: '1px solid var(--line)',
              borderRadius: 999,
              cursor: 'pointer',
              color: 'var(--ink)',
            }}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <line x1="0" y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="1.5"
                style={{ transition: 'transform .25s, opacity .25s', transformOrigin: '50% 50%',
                  transform: open ? 'translate(0, 6px) rotate(45deg)' : 'none' }}/>
              <line x1="0" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5"
                style={{ transition: 'opacity .2s', opacity: open ? 0 : 1 }}/>
              <line x1="0" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.5"
                style={{ transition: 'transform .25s, opacity .25s', transformOrigin: '50% 50%',
                  transform: open ? 'translate(0, -6px) rotate(-45deg)' : 'none' }}/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className="mobile-drawer" style={{
        position: 'fixed',
        top: 'var(--nav-h, 76px)', left: 0, right: 0, bottom: 0,
        zIndex: 49,
        background: 'var(--bg)',
        transform: open ? 'translateY(0)' : 'translateY(-110%)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'transform .35s ease, opacity .25s ease',
        display: 'flex', flexDirection: 'column',
        padding: '40px 24px 60px',
      }}>
        <ul style={{
          listStyle: 'none', margin: 0, padding: 0,
          display: 'flex', flexDirection: 'column', gap: 4,
          fontFamily: 'var(--serif)',
        }}>
          {links.map(l => {
            const active = l.slug === current;
            return (
              <li key={l.href}>
                <a href={l.href} style={{
                  display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                  padding: '20px 8px',
                  borderBottom: '1px solid var(--line-soft)',
                  fontSize: 32, fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: active ? 'var(--accent)' : 'var(--ink)',
                  fontStyle: active ? 'italic' : 'normal',
                }}>
                  <span>{l.label}</span>
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: 11,
                    color: 'var(--ink-mute)', letterSpacing: '0.1em',
                  }}>{String(links.indexOf(l) + 1).padStart(2, '0')}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <a href="contact.html" className="btn btn-primary" style={{
          marginTop: 32, alignSelf: 'flex-start',
          padding: '16px 28px', fontSize: 15,
        }}>
          Work with me <Arrow size={13} />
        </a>
      </div>
    </React.Fragment>
  );
}

function Wordmark() {
  return (
    <img
      src="assets/lifted-logo-full.png"
      alt="Lifted"
      className="wordmark-img"
      style={{ height: 36, width: 'auto', display: 'block' }}
    />
  );
}

Object.assign(window, { Nav, Wordmark });
