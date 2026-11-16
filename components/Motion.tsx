'use client';

import { useEffect } from 'react';

/**
 * The page's quiet motion, in one place.
 *  [data-rv]  fades and lifts in once, when it reaches the screen.
 *  [data-par] gets --p (0 to 1) as it crosses the screen, for a slow drift in CSS.
 * Nothing here runs with reduced motion, and without JS the page is simply there.
 */
export default function Motion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;
    const root = document.documentElement;

    // Reveals. Anything already on screen stays as it is, so nothing flashes.
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-rv]'));
    const vh = window.innerHeight;
    for (const el of items) {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.add('in');
    }
    root.classList.add('rv');
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
    );
    for (const el of items) if (!el.classList.contains('in')) io.observe(el);

    // Slow drift on a few images, tied to the scroll position.
    const drift = Array.from(document.querySelectorAll<HTMLElement>('[data-par]'));
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = window.innerHeight;
      for (const el of drift) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -h || r.top > 2 * h) continue;
        const p = Math.min(1, Math.max(0, (h - r.top) / (h + r.height)));
        el.style.setProperty('--p', p.toFixed(4));
      }
    };
    const queue = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', queue);
      window.removeEventListener('resize', queue);
      if (raf) cancelAnimationFrame(raf);
      root.classList.remove('rv');
    };
  }, []);

  return null;
}
