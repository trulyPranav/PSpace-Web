import Link from 'next/link';
import { site } from '@/lib/site';

const features = [
  ['Folders and files', 'Organise anything you keep, in the folders you make.'],
  ['Notes with reminders', 'Jot something down and get nudged at the right time.'],
  ['Notes to self', 'A private chat with yourself, including voice notes.'],
  ['PIN and fingerprint', 'Lock the app so only you can open it.'],
  ['Export and backup', 'Take everything with you, or restore it on a new phone.'],
  ['Offline by design', 'Your data stays on your phone. No account, no ads, no tracking.'],
];

export default function Home() {
  return (
    <>
      <h1>{site.name}</h1>
      <p className="muted" style={{ fontSize: 19, marginTop: 0 }}>{site.tagline}</p>
      {site.playStoreUrl ? (
        <a className="btn" href={site.playStoreUrl}>Get it on Google Play</a>
      ) : (
        <p className="muted">Coming soon to Google Play.</p>
      )}
      <div className="grid">
        {features.map(([title, body]) => (
          <div className="card" style={{ margin: 0 }} key={title}>
            <h2 style={{ fontSize: 17 }}>{title}</h2>
            <p className="muted" style={{ margin: 0 }}>{body}</p>
          </div>
        ))}
      </div>
      <p className="muted" style={{ marginTop: 36 }}>
        Read our <Link href="/privacy-policy">Privacy Policy</Link> and{' '}
        <Link href="/terms">Terms &amp; Conditions</Link>.
      </p>
    </>
  );
}
