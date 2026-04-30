// Shared shell — Nav + Footer + tweaks wiring. Use on every page.
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
      <TweaksUI tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

Object.assign(window, { PageShell });
