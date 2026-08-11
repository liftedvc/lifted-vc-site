// Tweaks panel — palette + type pairing
function TweaksUI({ tweaks, setTweak }) {
  return (
    <TweaksPanel>
      <TweakSection title="Palette">
        <TweakRadio
          value={tweaks.palette}
          onChange={(v) => setTweak('palette', v)}
          options={[
            { value: 'default', label: 'Default' },
            { value: 'bright', label: 'Bright' },
            { value: 'muted', label: 'Muted' },
            { value: 'mono', label: 'Mono' },
          ]}
        />
      </TweakSection>
      <TweakSection title="Type pairing">
        <TweakRadio
          value={tweaks.typePair}
          onChange={(v) => setTweak('typePair', v)}
          options={[
            { value: 'fraunces-inter', label: 'Fraunces + Inter' },
            { value: 'newsreader-geist', label: 'Newsreader + Geist' },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}
Object.assign(window, { TweaksUI });
