'use client';

import { useEffect, useRef } from 'react';

/**
 * A short title sequence on a navy screen: three words rise and pass one at a
 * time (Private. Offline. Yours.), a hairline fills along the bottom with a
 * small count, the mark and name settle, then the whole screen lifts away with
 * a curved edge. The page is already underneath, so nothing waits on it. The
 * boot script in the layout decides whether it plays, and CSS has its own timer
 * as a fail-safe, so it can never trap anyone.
 */
export default function Intro() {
  const stage = useRef<HTMLDivElement>(null);
  const num = useRef<HTMLSpanElement>(null);
  const line = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('intro')) return;
    const total = 2300;
    const hold = 380; // the name rests for a moment before the screen lifts
    const t0 = performance.now();
    let raf = 0;
    let done: ReturnType<typeof setTimeout> | undefined;
    let out: ReturnType<typeof setTimeout> | undefined;
    let word = -1;

    const tick = (now: number) => {
      const k = Math.min(1, (now - t0) / total);
      const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      if (num.current) num.current.textContent = String(Math.round(e * 100)).padStart(3, '0');
      if (line.current) line.current.style.transform = `scaleX(${e.toFixed(4)})`;
      const w = k < 0.27 ? 0 : k < 0.54 ? 1 : k < 0.8 ? 2 : 3;
      if (w !== word && stage.current) {
        word = w;
        stage.current.setAttribute('data-i', String(w));
      }
      if (k < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        out = setTimeout(() => {
          root.classList.add('intro-out');
          done = setTimeout(() => root.classList.remove('intro', 'intro-out'), 1500);
        }, hold);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (out) clearTimeout(out);
      if (done) clearTimeout(done);
    };
  }, []);

  return (
    <div className="intro-screen" aria-hidden="true">
      <div className="intro-panel">
        <div className="intro-stage" ref={stage} data-i="0">
          <div className="intro-glow" />
          <div className="intro-words">
            <span>Private.</span>
            <span>Offline.</span>
            <span>Yours.</span>
            <span className="intro-lockup">
              <img src="/img/logo-white.png" alt="" width={53} height={62} />
              PSpace
            </span>
          </div>
          <div className="intro-meter">
            <div className="intro-meter-row">
              <span>Personal Ways</span>
              <span className="intro-num" ref={num}>
                000
              </span>
            </div>
            <div className="intro-track">
              <i ref={line} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
