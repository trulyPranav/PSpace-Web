import Link from 'next/link';
import Mount from '@/components/Mount';
import SiteFoot from '@/components/SiteFoot';
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

function GetButton({ className = 'btn' }: { className?: string }) {
  return site.playStoreUrl ? (
    <a className={className} href={site.playStoreUrl}>
      Get PSpace
    </a>
  ) : (
    <span className={`${className} soon`}>Coming soon</span>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <noscript>
        <style>{`[data-sc-cue],[data-sc-in],[data-sc-stagger]>*{opacity:1!important;transform:none!important}`}</style>
      </noscript>
      <span data-sc-progress aria-hidden="true" />
      <div className="sc-grain" aria-hidden="true" />

      <main id="top">
        {/* 1 · Recognition. A locked phone, with the things it keeps hanging around it. */}
        <section className="hero" data-sc-act="pin" data-sc-span="2" data-hero>
          <div className="sc-stage hero-stage" data-sc-stage>
            <div className="plane" data-sc-parallax="-0.7" aria-hidden="true">
              <div className="bed" />
            </div>

            <div className="plane plane-folder" data-sc-parallax="-1.1" aria-hidden="true">
              <div className="depth" data-depth="0.5">
                <img src="/img/fr-folder.webp" alt="" width={405} height={352} />
              </div>
            </div>

            <div className="plane plane-phone" data-sc-parallax="-0.25">
              <div className="depth" data-depth="0.9">
                <div className="phone phone-hero">
                  <img src="/img/ph-lock.webp" alt="The PSpace lock screen asking for a PIN" width={720} height={1517} />
                </div>
              </div>
            </div>

            <div className="plane plane-voice" data-sc-parallax="-1.6" aria-hidden="true">
              <div className="depth" data-depth="1.3">
                <img src="/img/fr-voice.webp" alt="" width={760} height={205} />
              </div>
            </div>

            <div className="plane plane-reminder" data-sc-parallax="-2.8" aria-hidden="true">
              <div className="depth" data-depth="1.8">
                <img src="/img/fr-reminder.webp" alt="" width={842} height={275} />
              </div>
            </div>

            <div className="sc-copy sc-copy--lead hero-copy" data-sc-cue="0 0.78 0">
              <h1 className="sc-display sc-display--xl" data-sc-kinetic="lines">
                Your private space for everything you keep.
              </h1>
              <p className="sc-lede">Files, notes, reminders and voice memos in one calm app. Offline, no account, no ads.</p>
              <div className="cta-row">
                <GetButton />
                <span className="fine">Free · Android</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2 · Tension. An argument, held still. */}
        <section className="tension" data-sc-act="pin" data-sc-span="1.8">
          <div className="sc-stage tension-stage" data-sc-stage>
            <div className="scatter" aria-hidden="true">
              <span style={{ left: '9%', top: '20%' }} data-sc-parallax="-1.2">Notes</span>
              <span style={{ left: '72%', top: '14%' }} data-sc-parallax="1.1">Files</span>
              <span style={{ left: '15%', top: '72%' }} data-sc-parallax="1.6">Voice memos</span>
              <span style={{ left: '76%', top: '66%' }} data-sc-parallax="-1.5">Photos</span>
              <span style={{ left: '46%', top: '84%' }} data-sc-parallax="0.9">Reminders</span>
              <span style={{ left: '50%', top: '9%' }} data-sc-parallax="-0.8">Links</span>
            </div>
            <div className="line-stack">
              <p className="line" data-sc-cue="0 0.36 0 0.14">
                Notes in one app. Files in another.
              </p>
              <p className="line" data-sc-cue="0.3 0.68 0.14 0.14">
                Voice memos in a third. Screenshots wherever they landed.
              </p>
              <p className="line line--turn" data-sc-cue="0.62 1 0.14 0.02">
                Somewhere along the way, it stopped feeling like yours.
              </p>
            </div>
          </div>
        </section>

        {/* 3 · Turn. A wipe is a change of state. */}
        <section className="turn" data-sc-act="flow">
          <div className="sc-wrap turn-grid">
            <div className="sc-stack turn-copy" data-sc-in data-sc-stagger="70">
              <h2 className="sc-display sc-display--lg">One calm place, only yours.</h2>
              <p className="sc-lede">
                PSpace keeps your files, notes, reminders and voice memos together on your phone. Nothing to sign up
                for, nothing to sync, nothing to hand to anyone else.
              </p>
            </div>
            <figure className="turn-fig" data-sc-reveal="up" data-sc-reveal-at="0.1 0.5">
              <div className="phone">
                <img src="/img/ph-home.webp" alt="The PSpace home screen with a note and a reminder" width={720} height={1519} />
              </div>
            </figure>
          </div>
        </section>

        {/* 4 · Substance. The real app, one screen per idea. */}
        <section className="tour" data-sc-act="pin" data-sc-span="2.8" data-tour>
          <div className="sc-stage tour-stage" data-sc-stage data-step="0">
            <div className="tour-phone" data-sc-tilt="5">
              <div className="phone">
                <img className="ts ts-0" src="/img/ph-home.webp" alt="Notes with a reminder time" width={720} height={1519} />
                <img className="ts ts-1" src="/img/ph-folders.webp" alt="Folders in My Files" width={720} height={1517} loading="lazy" />
                <img className="ts ts-2" src="/img/ph-chat.webp" alt="Notes to self, a private chat with a voice note" width={720} height={1517} loading="lazy" />
                <img className="ts ts-3" src="/img/ph-backup.webp" alt="Backup and restore" width={720} height={1508} loading="lazy" />
              </div>
            </div>
            <div className="tour-copy">
              <div className="tc" data-sc-cue="0 0.245 0 0.03">
                <h2 className="sc-display sc-display--md">Notes that remind you.</h2>
                <p className="sc-body">Write it down, pick a time, and PSpace nudges you. Reminders survive a restart.</p>
              </div>
              <div className="tc" data-sc-cue="0.255 0.495 0.03 0.03">
                <h2 className="sc-display sc-display--md">Folders you control.</h2>
                <p className="sc-body">Organise documents, photos and anything else. List, grid or tree, your choice.</p>
              </div>
              <div className="tc" data-sc-cue="0.505 0.745 0.03 0.03">
                <h2 className="sc-display sc-display--md">A chat with only you in it.</h2>
                <p className="sc-body">Quick thoughts, links, photos and voice notes. Pin the ones that matter.</p>
              </div>
              <div className="tc" data-sc-cue="0.755 1 0.03 0.02">
                <h2 className="sc-display sc-display--md">
                  Take it with you <span className="tag">Pro</span>
                </h2>
                <p className="sc-body">Export everything as a zip, or back up and restore on a new phone.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 · Silence, on purpose. The quiet before the peak. */}
        <section className="silence" aria-label="Pause" data-sc-act="flow">
          <div data-sc-in>
            <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
              <path d="M7 10V8a5 5 0 0 1 10 0v2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h1Zm2 0h6V8a3 3 0 0 0-6 0v2Z" fill="currentColor" />
            </svg>
          </div>
        </section>

        {/* 6 · The peak. The page is a lock. */}
        <section id="private" className="vault" data-sc-act="pin" data-sc-span="3.6" data-vault-act>
          <div className="sc-stage vault-stage" data-sc-stage data-vault-stage>
            <div className="vault-lock">
              <div className="vault-copy">
                <h2 className="sc-display sc-display--lg">Closed to everyone but you.</h2>
                <p className="sc-lede">
                  No account. No cloud. No ads or tracking. The only lock is yours: a PIN and your fingerprint.
                </p>
              </div>
              <div className="pad" role="group" aria-label="Demo PIN pad">
                <img className="pad-mark" src="/img/mark.webp" alt="" width={84} height={84} />
                <p className="pad-name">PSpace</p>
                <p className="pad-hint" data-pad-hint aria-live="polite">Enter your PIN</p>
                <div className="pad-dots" aria-hidden="true">
                  <i /><i /><i /><i />
                </div>
                <div className="pad-keys">
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((d) => (
                    <button key={d} type="button" className="key" data-key={d} aria-label={d}>
                      {d}
                    </button>
                  ))}
                  <button type="button" className="key key--ghost" data-key="finger" aria-label="Use fingerprint (demo)">
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M5 11a7 7 0 0 1 14 0v1.5" />
                      <path d="M8 19c-.6-1.3-1-2.8-1-4.5a5 5 0 0 1 10 0c0 .8.1 1.6.4 2.3" />
                      <path d="M12 12.5v2c0 2 .6 3.6 1.7 5" />
                      <path d="M9.5 14.5c0 1.6.3 3 .9 4.2" />
                      <path d="M15 14.5c0 .9.2 1.7.5 2.4" />
                    </svg>
                  </button>
                  <button type="button" className="key" data-key="0" aria-label="0">
                    0
                  </button>
                  <button type="button" className="key key--ghost" data-key="back" aria-label="Delete">
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 5h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9l-6-7 6-7Z" />
                      <path d="m12.5 10 4 4m0-4-4 4" />
                    </svg>
                  </button>
                </div>
                <p className="pad-note">This is a demo. Any four digits open it.</p>
              </div>
            </div>

            <div className="vault-room" data-vault-room aria-hidden="true">
              <div className="room-inner">
                <h2 className="sc-display sc-display--lg">Now it is yours.</h2>
                <p className="sc-lede">
                  Everything in PSpace stays in here, on your phone. Free to use, with an optional one-time Pro upgrade.
                </p>
                <div className="cta-row">
                  <GetButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7 · Ownership. Easy and open after the held breath. */}
        <section id="pro" className="pro" data-sc-act="flow">
          <div className="sc-wrap pro-grid">
            <div className="sc-stack pro-head" data-sc-in data-sc-stagger="70">
              <h2 className="sc-display sc-display--lg">Free to use. Pro when you want more.</h2>
              <p className="sc-lede">
                One purchase, no subscription, priced in your local currency on Google Play. Your content is never
                locked behind it, and you can restore it any time with the same Google account.
              </p>
            </div>
            <dl className="perks" data-sc-in data-sc-stagger="45">
              {perks.map(([t, d]) => (
                <div key={t}>
                  <dt>{t}</dt>
                  <dd>{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 8 · Questions. Administrative, so compressed. */}
        <section id="faq" className="faq" data-sc-act="flow">
          <div className="sc-wrap faq-wrap">
            <h2 className="sc-display sc-display--md" data-sc-in>
              Good to know
            </h2>
            <div data-sc-in>
              {faqs.map(([q, a], i) => (
                <details key={q} open={i === 0}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9 · Commitment. One line, one button, and it holds. */}
        <section className="close" data-sc-act="pin" data-sc-span="1.3">
          <div className="sc-stage close-stage" data-sc-stage>
            <div className="close-inner">
              <h2 className="sc-display sc-display--lg" data-sc-cue="0 1 0 0">
                Make some space for yourself.
              </h2>
              <div className="cta-row" data-sc-cue="0 1 0 0" data-sc-rise="0">
                <GetButton />
              </div>
              <p className="fine" data-sc-cue="0 1 0 0">
                Read the <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/terms">Terms</Link>.
              </p>
            </div>
            <SiteFoot />
          </div>
        </section>
      </main>

      <Mount />
    </>
  );
}
