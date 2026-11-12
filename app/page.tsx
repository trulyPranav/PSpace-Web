import Link from 'next/link';
import SiteFoot from '@/components/SiteFoot';
import StickyCta from '@/components/StickyCta';
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

const screens = [
  { img: 'home', w: 720, h: 1519, title: 'Notes that remind you', body: 'Write it down, pick a time, and PSpace nudges you. Reminders survive a restart.', alt: 'PSpace home screen with a note and a reminder time' },
  { img: 'folders', w: 720, h: 1517, title: 'Folders you control', body: 'Organise documents, photos and anything else. List, grid or tree, your choice.', alt: 'The My Files screen with three folders' },
  { img: 'chat', w: 720, h: 1517, title: 'A chat with only you', body: 'Quick thoughts, links, photos and voice notes. Pin the ones that matter.', alt: 'Notes to self, a private chat with a voice note' },
  { img: 'backup', w: 720, h: 1508, title: 'Take it with you', body: 'Export everything as a zip, or back up and restore on a new phone.', alt: 'The Backup and restore screen', pro: true },
];

const facts = [
  ['No account', 'Nothing to sign up for.'],
  ['Works offline', 'No internet needed to use it.'],
  ['No ads, no tracking', 'No analytics, nothing to opt out of.'],
  ['PIN and fingerprint', 'Android keeps your fingerprint. PSpace never sees it.'],
];

const perks = [
  ['Export', 'Take everything out as a plain zip.'],
  ['Backup and restore', 'Keep a copy and bring it to a new phone.'],
  ['Hidden space', 'Keep chosen folders and files out of sight.'],
  ['Unlimited folders', 'Beyond the free limit, as many as you need.'],
  ['Unlimited pins', 'Pin as many chats, files and folders as you like.'],
  ['Accent colours', 'Make PSpace yours with extra colour themes.'],
  ['App icons', 'Choose a different icon for your home screen.'],
  ['Repeating reminders', 'Daily, weekly or monthly, set once.'],
];

const faqs = [
  ['Does PSpace need an account or internet?', 'No. There is no sign-up and the app works fully offline. Only Google Play, on your phone, goes online (for Pro, updates and the rating prompt); PSpace never sends your content anywhere.'],
  ['Where is my data stored?', "Only on your phone, inside the app's private storage. The developer cannot see it or recover it."],
  ['What happens if I lose my phone?', 'Use Backup in Settings (a Pro feature) to save a copy somewhere safe, like Drive or your computer, and restore it on a new phone. Restoring your own backup is always free. Backups are not encrypted, so keep them private.'],
  ['What if I forget my PIN?', "A forgotten PIN cannot be reset without clearing the app's data, so keep it somewhere safe and make a backup first."],
  ['Can I take my data out?', 'Yes. Export (a Pro feature) creates a normal zip with your files in their folders, your chat as text, and your notes. Your content always stays yours, and you can share any single file from the app for free.'],
  ['Is it free?', 'Yes. PSpace is free to use. PSpace Pro is an optional one-time purchase, with no subscription, that adds extras. Your content is never locked, and restoring your own data is always free.'],
  ['What are the free limits?', 'Free includes up to 10 folders, with 5 subfolders inside any one folder, plus 3 pinned messages and 3 pinned files or folders. Anything you already have is never removed or locked, even if you are over a limit.'],
  ['What does PSpace Pro add?', 'Export and backup, hidden folders and files, unlimited folders and pins, extra app icons and accent colours, and repeating reminders. Buy it once and restore it any time with the same Google account.'],
];

function GetButton({ id }: { id?: string }) {
  return site.playStoreUrl ? (
    <a id={id} className="btn" href={site.playStoreUrl}>
      Get PSpace
    </a>
  ) : (
    <span id={id} className="btn soon">
      Coming soon
    </span>
  );
}

export default function Home() {
  return (
    <main id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />

      {/* First screen: the name, one line, one action, and the real app. */}
      <section className="hero">
        <div className="hero-copy">
          <p className="note">Free · Offline · No account</p>
          <h1>Your private space for everything you keep.</h1>
          <p className="lede">Files, notes, reminders and voice memos in one calm app. Nothing leaves your phone.</p>
          <div className="cta-row">
            <GetButton id="hero-cta" />
            <span className="fine">Free on Android</span>
          </div>
        </div>
        <div className="hero-phone">
          <img src="/img/ph-home.webp" alt="The PSpace home screen" width={720} height={1519} fetchPriority="high" />
        </div>
      </section>

      <section id="features" className="band">
        <div className="wrap">
          <h2>Everything you keep, in one calm place.</h2>
          <div className="shots">
            {screens.map((s) => (
              <figure key={s.img}>
                <img src={`/img/ph-${s.img}.webp`} alt={s.alt} width={s.w} height={s.h} loading="lazy" />
                <figcaption>
                  <h3>
                    {s.title}
                    {s.pro && <span className="tag">Pro</span>}
                  </h3>
                  <p>{s.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="private" className="band band--ink">
        <div className="wrap private">
          <div className="private-copy">
            <h2>It stays on your phone. Full stop.</h2>
            <p className="lede">
              PSpace works fully offline and never uploads what you store, so there is nothing for anyone else to see,
              sell or lose.
            </p>
            <dl className="facts">
              {facts.map(([t, d]) => (
                <div key={t}>
                  <dt>{t}</dt>
                  <dd>{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <img className="private-shot" src="/img/ph-lock.webp" alt="The PSpace lock screen asking for a PIN" width={720} height={1517} loading="lazy" />
        </div>
      </section>

      <section id="pro" className="band">
        <div className="wrap split">
          <div>
            <h2>Free to use. Pro when you want more.</h2>
            <p className="lede">
              One purchase, no subscription, priced in your local currency on Google Play. Your content is never locked
              behind it, and you can restore it any time with the same Google account.
            </p>
          </div>
          <dl className="perks">
            {perks.map(([t, d]) => (
              <div key={t}>
                <dt>{t}</dt>
                <dd>{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="faq" className="band band--soft">
        <div className="wrap split">
          <h2>Good to know</h2>
          <div className="faq">
            {faqs.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="end" className="end">
        <div className="wrap">
          <h2>Make some space for yourself.</h2>
          <div className="cta-row">
            <GetButton />
          </div>
          <p className="fine">
            Free to use. Pro is an optional one-time purchase. Read the <Link href="/privacy-policy">Privacy Policy</Link>{' '}
            and <Link href="/terms">Terms</Link>.
          </p>
        </div>
      </section>

      <SiteFoot />
      <StickyCta />
    </main>
  );
}
