import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './sc.css';
import './globals.css';
import Header from '@/components/Header';
import { site } from '@/lib/site';

// The app's own typeface, so the site and the product read as one thing.
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

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
  colorScheme: 'dark',
  themeColor: '#0a0b0f',
};

// Marks the page as scripted before paint. Without it (no JS) the lock scene
// falls back to showing its opened state, so nothing is ever hidden.
const jsFlag = `document.documentElement.classList.add('js')`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
