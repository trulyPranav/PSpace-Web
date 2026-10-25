'use client';

import { useEffect, useState } from 'react';

/** Light / dark switch. Follows the system until the visitor picks one. */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark');
  }, []);

  function toggle() {
    const next = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
    setDark(!dark);
  }

  return (
    <button className="theme" onClick={toggle} aria-label="Toggle dark mode" title="Toggle dark mode">
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
