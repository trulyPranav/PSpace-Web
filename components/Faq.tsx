'use client';

import { useState } from 'react';

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

/** Accordion: one answer open at a time, smooth height animation. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq">
      {faqs.map(([q, a], i) => (
        <div className={`faq-item ${open === i ? 'open' : ''}`} key={q}>
          <button className="faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
            {q}
            <span className="chev" aria-hidden>
              +
            </span>
          </button>
          <div className="faq-a">
            <div>
              <p>{a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
