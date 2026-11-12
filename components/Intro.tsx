'use client';

import { useEffect, useRef } from 'react';

const RING = 289; // circumference of the ring (r = 46)

/**
 * A short title sequence: the mark fades up in a soft light, a ring draws
 * around it while a big count climbs and three words land (Private. Offline.
 * Yours.), then two doors open on the page. The page is already underneath, so
 * nothing waits on it. The boot script in the layout decides whether it plays,
 * and CSS has its own timer as a fail-safe, so it can never trap anyone.
 */
export default function Intro() {
  const stage = useRef<HTMLDivElement>(null);
  const num = useRef<HTMLSpanElement>(null);
  const arc = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('intro')) return;
    const total = 1700;
    const t0 = performance.now();
    let raf = 0;
    let done: ReturnType<typeof setTimeout> | undefined;
    let word = -1;

    const tick = (now: number) => {
      const k = Math.min(1, (now - t0) / total);
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      if (num.current) num.current.textContent = String(Math.round(e * 100));
      if (arc.current) arc.current.style.strokeDashoffset = String(RING * (1 - e));
      const w = e < 0.3 ? 0 : e < 0.58 ? 1 : e < 0.86 ? 2 : 3;
      if (w !== word && stage.current) {
        word = w;
        stage.current.setAttribute('data-i', String(w));
      }
      if (k < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        root.classList.add('intro-out');
        done = setTimeout(() => root.classList.remove('intro', 'intro-out'), 1300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (done) clearTimeout(done);
    };
  }, []);

  return (
    <div className="intro-screen" aria-hidden="true">
      <div className="intro-door intro-door--l" />
      <div className="intro-door intro-door--r" />
      <div className="intro-stage" ref={stage} data-i="0">
        <div className="intro-glow" />
        <div className="intro-center">
          <div className="intro-mark">
            <svg className="intro-ring" viewBox="0 0 100 100">
              <circle className="track" cx="50" cy="50" r="46" />
              <circle className="arc" ref={arc} cx="50" cy="50" r="46" />
            </svg>
            <img src="/img/logo-white.png" alt="" width={53} height={62} />
          </div>
          <p className="intro-word">
            <span>Private.</span>
            <span>Offline.</span>
            <span>Yours.</span>
            <span>PSpace</span>
          </p>
        </div>
        <div className="intro-count">
          <span ref={num}>0</span>
          <small>%</small>
        </div>
      </div>
    </div>
  );
}
