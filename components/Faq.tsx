'use client';

import { useState } from 'react';

const faqs = [
  ['Does PSpace need an account or internet?', 'No. There is no sign-up and the app works fully offline. It does not ask for internet access at all.'],
  ['Where is my data stored?', "Only on your phone, inside the app's private storage. The developer cannot see it or recover it."],
  ['What happens if I lose my phone?', 'Use Backup in Settings to save a copy somewhere safe, like Drive or your computer, and restore it on a new phone. Backups are not encrypted, so keep them private.'],
  ['What if I forget my PIN?', "A forgotten PIN cannot be reset without clearing the app's data, so keep it somewhere safe and make a backup first."],
  ['Can I take my data out?', 'Yes. Export creates a normal zip with your files in their folders, your chat as text, and your notes. Nothing is locked in.'],
  ['Is it free?', 'Yes, you can download it for free. Some extra features may become optional purchases later, and restoring your own data will always be free.'],
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
