'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { n: 0, label: 'accounts needed' },
  { n: 0, label: 'ads' },
  { n: 0, label: 'trackers' },
  { n: 100, suffix: '%', label: 'on your phone' },
];

function Count({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / 1100);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <strong>
            <Count to={s.n} suffix={s.suffix} />
          </strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
