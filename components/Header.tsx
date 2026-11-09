'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  ['/#features', 'Features'],
  ['/#pro', 'Pro'],
  ['/#faq', 'FAQ'],
  ['/privacy-policy', 'Privacy'],
  ['/terms', 'Terms'],
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  // Escape closes the phone menu.
  useEffect(() => {
    if (!open) return;
    const on = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', on);
    return () => window.removeEventListener('keydown', on);
  }, [open]);

  return (
    <header className={`site ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="wrap bar">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="" width={22} height={24} className="brand-logo" />
          PSpace
        </Link>
        <nav>
          <div id="site-links" className={`links ${open ? 'open' : ''}`}>
            {links.map(([href, label]) =>
              // Section links are plain anchors: the browser scrolls to them
              // (and leaves room for the header) on this page or from another.
              href.startsWith('/#') ? (
                <a key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ) : (
                <Link key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                </Link>
              ),
            )}
          </div>
          <ThemeToggle />
          <button
            className={`menu-btn ${open ? 'open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-links"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </nav>
      </div>
    </header>
  );
}
