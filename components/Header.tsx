import Link from 'next/link';
import { site } from '@/lib/site';

/**
 * The page chrome is a lock indicator, not a menu. On the home page a small
 * script flips it from Locked to Unlocked when the visitor opens the private
 * room. On other pages the status is hidden and a plain link takes its place.
 */
export default function Header() {
  return (
    <header className="bar">
      <Link href="/" className="bar-brand" aria-label="PSpace home">
        <img src="/img/mark.webp" alt="" width={26} height={26} />
        <span>PSpace</span>
      </Link>
      <div className="bar-right">
        <span className="vault-status" role="status" aria-live="polite">
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" className="ico-locked">
            <path d="M7 10V8a5 5 0 0 1 10 0v2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h1Zm2 0h6V8a3 3 0 0 0-6 0v2Z" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" className="ico-open">
            <path d="M15 10V8a3 3 0 0 0-6 0h-2a5 5 0 0 1 10 0v2h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h9Z" fill="currentColor" />
          </svg>
          <span className="vs-locked">Locked</span>
          <span className="vs-open">Unlocked</span>
        </span>
        <Link href="/" className="bar-home">
          Home
        </Link>
        {site.playStoreUrl ? (
          <a className="btn btn-sm" href={site.playStoreUrl}>
            Get PSpace
          </a>
        ) : null}
      </div>
    </header>
  );
}
