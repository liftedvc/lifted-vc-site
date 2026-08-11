// Social proof — quiet investor names, no marquee chrome
function Proof() {
  const investors = [
    'Y Combinator', 'a16z', 'Pear Ventures', 'Bessemer',
    'Founder Collective', 'Hustle Fund', 'Techstars', 'Khosla',
  ];
  const all = [...investors, ...investors];

  return (
    <section className="tight" style={{
      paddingTop: 60, paddingBottom: 60,
      background: 'var(--cream)',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div className="wrap" style={{ marginBottom: 28 }}>
        <div style={{
          textAlign: 'center',
          fontSize: 14,
          color: 'var(--ink-soft)',
        }}>
          Founders backed by
        </div>
      </div>
      <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)' }}>
        <div className="marquee">
          {all.map((name, i) => (
            <div key={i} style={{
              fontFamily: 'var(--serif)',
              fontSize: 26,
              color: 'var(--ink-soft)',
              whiteSpace: 'nowrap',
              fontStyle: i % 3 === 0 ? 'italic' : 'normal',
            }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Proof });
