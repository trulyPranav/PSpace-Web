import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
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
  colorScheme: 'light',
  themeColor: '#f6f7fb',
};

// Runs before paint. The short intro plays on every visit to the home page,
// and never with reduced motion. Without JS nothing here runs, so the
// page is simply there.
const bootScript = `(function(){try{var d=document.documentElement;d.classList.add('js');if(location.pathname==='/'&&!location.hash&&!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('intro')}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <Intro />
        <Header />
        {children}
      </body>
    </html>
  );
}
