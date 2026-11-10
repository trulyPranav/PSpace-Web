import Link from 'next/link';
import Faq from '@/components/Faq';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Pro from '@/components/Pro';
import Reveal from '@/components/Reveal';
import Stats from '@/components/Stats';
import { site } from '@/lib/site';

// Tells search engines what this is: a free Android app.
const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/og.png`,
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'Android',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  author: { '@type': 'Organization', name: site.developer },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <div className="wrap wide">
        <Hero />
      </div>

      <section id="features" className="section">
        <div className="wrap wide">
          <Reveal>
            <p className="kicker">What it does</p>
            <h2 className="big">Everything you keep, in one calm place.</h2>
          </Reveal>
          <Reveal delay={80}>
            <Features />
          </Reveal>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap wide">
          <Reveal>
            <p className="kicker">Private by design</p>
            <h2 className="big">It stays on your phone. Full stop.</h2>
            <p className="lede narrow-text">
              PSpace works fully offline and never uploads your content, so there is nothing for anyone else to
              see, sell or lose.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Stats />
          </Reveal>
        </div>
      </section>

      <section id="pro" className="section">
        <div className="wrap wide">
          <Reveal>
            <p className="kicker">PSpace Pro</p>
            <h2 className="big">Free to use. Pro when you want more.</h2>
            <p className="lede narrow-text">
              One purchase, no subscription. Your content is never locked behind it, and you can restore it
              any time with the same Google account.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Pro />
          </Reveal>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Questions</p>
            <h2 className="big">Good to know</h2>
          </Reveal>
          <Reveal delay={80}>
            <Faq />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="cta-card">
              <h2>Make some space for yourself.</h2>
              <p>Free, private, and ready when you are.</p>
              {site.playStoreUrl ? (
                <a className="btn" href={site.playStoreUrl}>
                  Get it on Google Play
                </a>
              ) : (
                <span className="btn soon">Coming soon to Google Play</span>
              )}
              <p className="small">
                Read the <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/terms">Terms</Link>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
