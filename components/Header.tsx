'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={`site ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap bar">
        <Link href="/" className="brand">
          <img src="/logo.png" alt="" width={22} height={24} className="brand-logo" />
          PSpace
        </Link>
        <nav>
          <Link href="/#features">Features</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
