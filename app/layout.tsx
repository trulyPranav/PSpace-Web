import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';
import Header from '@/components/Header';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: { default: `${site.name}: ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.tagline,
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

// Runs before paint so the page never flashes the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <footer className="site">
          <div className="wrap foot">
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
            <span className="foot-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
              {site.contactEmail && <a href={`mailto:${site.contactEmail}`}>Contact</a>}
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
