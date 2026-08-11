// Primitives — shared building blocks
const { useEffect, useRef, useState } = React;

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, as = 'div', className = '', ...rest }) {
  const ref = useReveal();
  const Comp = as;
  return (
    <Comp ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Comp>
  );
}

// Photo placeholder — labeled, striped. Caption = where it sits, label = what photo to drop in.
function Photo({ label, caption, ratio = '4 / 5', src, alt, style = {}, className = '' }) {
  return (
    <div className={`photo ${className}`} style={{ aspectRatio: ratio, ...style }}>
      {src ? <img src={src} alt={alt || label} /> : <div className="stripes" />}
      {caption && <div className="caption">{caption}</div>}
      {label && !src && <div className="label">{label}</div>}
    </div>
  );
}

// Arrow glyph
function Arrow({ size = 14 }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Counting number (animated reveal)
function CountUp({ value, prefix = '', suffix = '', duration = 1400 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setShown(Math.round(value * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);
  return <span ref={ref}>{prefix}{shown}{suffix}</span>;
}

Object.assign(window, { useReveal, Reveal, Photo, Arrow, CountUp });
