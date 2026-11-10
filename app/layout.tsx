import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';
import Header from '@/components/Header';
import { site } from '@/lib/site';

const pageTitle = `${site.name}: ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: pageTitle, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.developer }],
  keywords: ['private notes app', 'offline notes', 'file organiser', 'voice notes', 'reminders', 'Android', 'PSpace'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    title: pageTitle,
    description: site.description,
    locale: 'en_IN',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: site.description,
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
};

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
