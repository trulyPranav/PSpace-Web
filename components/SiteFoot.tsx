import Link from 'next/link';
import { site } from '@/lib/site';

export default function SiteFoot() {
  return (
    <footer className="foot">
      <span>
        © {new Date().getFullYear()} {site.name} · {site.developer}
      </span>
      <span className="foot-links">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms">Terms</Link>
        {site.contactEmail && <a href={`mailto:${site.contactEmail}`}>Contact</a>}
      </span>
    </footer>
  );
}
