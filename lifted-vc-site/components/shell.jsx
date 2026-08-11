// Shared shell — Nav + Footer + tweaks wiring. Use on every page.
function StickyCTA() {
  const path = (typeof window !== "undefined" && window.location) ? window.location.pathname : "";
  if (/contact|partners|scorecard/.test(path)) return null;
  return (
    <a href="contact.html" className="sticky-cta btn btn-primary">Work with me <Arrow size={13} /></a>
  );
}

function PageShell({ children, current }) {
  const [tweaks, setTweak] = useTweaks(window.__TWEAKS__);

  React.useEffect(() => {
    document.documentElement.dataset.palette = tweaks.palette;
    document.documentElement.dataset.type = tweaks.typePair;
  }, [tweaks.palette, tweaks.typePair]);

  return (
    <>
      <Nav current={current} />
      {children}
      <Footer />
      <StickyCTA />
      <TweaksUI tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

Object.assign(window, { PageShell, StickyCTA });
