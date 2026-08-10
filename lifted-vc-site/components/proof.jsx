// Social proof — logo wall of funds that have backed coached founders.
// Logos live in images/logos/<file>. Grayscale by default, full color on hover.
function Proof() {
  const logos = [
    { name: 'Y Combinator', file: 'y-combinator.svg' },
    { name: 'Bessemer', file: 'bessemer.svg' },
    { name: 'Techstars', file: 'techstars.svg' },
    { name: 'Pear Ventures', file: 'pear.svg' },
    { name: 'Felicis Ventures', file: 'felicis.png' },
    { name: 'SV Angel', file: 'sv-angel.svg' },
    { name: 'Hustle Fund', file: 'hustle-fund.svg' },
    { name: 'Plug and Play', file: 'plug-and-play.svg' },
    { name: 'Alumni Ventures', file: 'alumni-ventures.svg' },
    { name: 'a16z Speedrun', file: 'speedrun.svg' },
    { name: 'Rebel Fund', file: 'rebel-fund.png' },
    { name: 'HF0', file: 'hf0.png' },
    { name: 'Everywhere Ventures', file: 'everywhere-ventures.svg' },
    { name: 'Liquid 2 Ventures', file: 'liquid-2.svg' },
    { name: 'HCVC', file: 'hcvc.png' },
    { name: '500 Global', file: '500-global.svg' },
    { name: 'Goodwater', file: 'goodwater.svg' },
    { name: 'NFX', file: 'nfx.svg' },
    { name: 'SOSV', file: 'sosv.png' },
    { name: 'gener8tor', file: 'gener8tor.png' },
    { name: 'MassChallenge', file: 'masschallenge.png' },
    { name: 'Capital Factory', file: 'capital-factory.png' },
    { name: 'Pioneer Fund', file: 'pioneer-fund.png' },
    { name: 'Gold House', file: 'gold-house.png' },
    { name: 'Orange DAO', file: 'orange-dao.svg' },
    { name: 'ERA', file: 'era.png' },
    { name: 'Founder Institute', file: 'founder-institute.png' },
    { name: 'Precursor Ventures', file: 'precursor-ventures.png' },
  ];

  return (
    <section className="tight" style={{
      paddingTop: 56, paddingBottom: 64,
      background: 'var(--bg)',
    }}>
      <div className="wrap">
        <div className="eyebrow" style={{ marginBottom: 34 }}>
          Founders I&rsquo;ve coached have raised from
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '38px 36px',
          alignItems: 'center',
          justifyItems: 'center',
        }}>
          {logos.map(l => (
            <img
              key={l.name}
              src={`images/logos/${l.file}`}
              alt={l.name}
              title={l.name}
              loading="lazy"
              style={{
                height: 26, width: 'auto', maxWidth: 130,
                objectFit: 'contain',
                opacity: 0.58,
                filter: 'grayscale(100%)',
                transition: 'opacity .25s ease, filter .25s ease',
              }}
              onError={e => { e.currentTarget.style.display = 'none'; }}
              onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.filter = 'none'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = 0.58; e.currentTarget.style.filter = 'grayscale(100%)'; }}
            />
          ))}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span
              title="And many more"
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 15, fontWeight: 500,
                color: 'var(--ink-mute)', whiteSpace: 'nowrap', opacity: 0.8,
                cursor: 'default', transition: 'color .25s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--steel)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-mute)'; }}
            >+ many more</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Proof });
