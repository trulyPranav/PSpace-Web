'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

/** On phones: a slim install bar once the first screen's button has scrolled away. */
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const first = document.getElementById('hero-cta');
    const last = document.getElementById('end');
    if (!first || !last || typeof IntersectionObserver === 'undefined') return;
    const seen = { first: true, last: false };
    const update = () => setShow(!seen.first && !seen.last);
    const io1 = new IntersectionObserver(([e]) => { seen.first = e.isIntersecting; update(); });
    const io2 = new IntersectionObserver(([e]) => { seen.last = e.isIntersecting; update(); });
    io1.observe(first);
    io2.observe(last);
    return () => { io1.disconnect(); io2.disconnect(); };
  }, []);

  if (!site.playStoreUrl) return null;
  return (
    <div className={`sticky ${show ? 'on' : ''}`} aria-hidden={!show}>
      <span>
        <strong>PSpace</strong> Free on Android
      </span>
      <a className="btn btn-sm" href={site.playStoreUrl} tabIndex={show ? 0 : -1}>
        Get PSpace
      </a>
    </div>
  );
}
