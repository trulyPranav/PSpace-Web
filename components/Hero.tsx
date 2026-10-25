'use client';

import { useRef } from 'react';
import { site } from '@/lib/site';

/** Headline plus a phone that gently follows the pointer. */
export default function Hero() {
  const stage = useRef<HTMLDivElement>(null);

  function move(e: React.PointerEvent) {
    const el = stage.current;
    if (!el || e.pointerType === 'touch') return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--rx', `${(-y * 10).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * 14).toFixed(2)}deg`);
  }

  function leave() {
    const el = stage.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  }

  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="pill">Private · Offline · Free</span>
        <h1>
          Your private space for <em>everything</em> you keep.
        </h1>
        <p className="lede">Files, notes, reminders and voice memos, together in one calm app. No account, no ads, no tracking.</p>
        <div className="cta-row">
          {site.playStoreUrl ? (
            <a className="btn" href={site.playStoreUrl}>
              Get it on Google Play
            </a>
          ) : (
            <span className="btn soon">Coming soon to Google Play</span>
          )}
          <a className="btn ghost" href="#features">
            See what it does
          </a>
        </div>
      </div>

      <div className="hero-stage" ref={stage} onPointerMove={move} onPointerLeave={leave}>
        <div className="glow" />
        <div className="tilt">
          <div className="phone">
            <img
              src="/shots/home.webp"
              alt="PSpace home screen with a reminder note"
              width={560}
              height={1180}
            />
          </div>
        </div>
        <div className="float f1">🔔 Water the plants!</div>
        <div className="float f2">🔒 PIN &amp; fingerprint</div>
        <div className="float f3">🎙 Voice note · 0:06</div>
      </div>
    </section>
  );
}
