'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const links = [
  ['/', 'Home'],
  ['/#features', 'What it does'],
  ['/#private', 'Privacy'],
  ['/#pro', 'Pro'],
  ['/#faq', 'Questions'],
] as const;

/**
 * Two parts: the name on the left and a menu icon on the right. The icon opens
 * a full-width panel of large page names, with the install button at its
 * bottom right.
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const on = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', on);
    document.documentElement.classList.add('menu-open');
    return () => {
      window.removeEventListener('keydown', on);
      document.documentElement.classList.remove('menu-open');
    };
  }, [open]);

  return (
    <>
      <header className="bar">
        <Link href="/" className="bar-brand" aria-label="PSpace home" onClick={() => setOpen(false)}>
          <img src="/img/logo.png" alt="" width={24} height={28} />
          <span>PSpace</span>
        </Link>
        <button
          type="button"
          className="bar-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          <span className="bar-lines" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </header>

      <nav id="menu" className={`menu ${open ? 'open' : ''}`} aria-label="Pages" aria-hidden={!open}>
        <ul>
          {links.map(([href, label]) => (
            <li key={href}>
              {href.startsWith('/#') ? (
                <a href={href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                  {label}
                </a>
              ) : (
                <Link href={href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="menu-foot">
          <p>
            <Link href="/privacy-policy" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              Privacy Policy
            </Link>
            <Link href="/terms" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              Terms
            </Link>
          </p>
          {site.playStoreUrl && (
            <a className="btn" href={site.playStoreUrl} tabIndex={open ? 0 : -1}>
              Get PSpace
            </a>
          )}
        </div>
      </nav>
    </>
  );
}
