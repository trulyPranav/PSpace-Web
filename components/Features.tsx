'use client';

import { useState } from 'react';

const items: {
  key: string;
  title: string;
  body: string;
  shot: string;
  alt: string;
  pro?: boolean;
}[] = [
  {
    key: 'home',
    title: 'Notes with reminders',
    body: 'Jot something down and pick a time. PSpace nudges you when it matters, even after your phone restarts. With Pro, a reminder can repeat daily, weekly or monthly.',
    shot: '/shots/home.webp',
    alt: 'Home screen with a note and reminder toggle',
  },
  {
    key: 'folders',
    title: 'Files in your folders',
    body: 'Organise documents, photos and anything else in folders you create. List, grid or tree view, your choice. Free includes 10 folders and 5 subfolders in each; Pro removes the limits.',
    shot: '/shots/folders.webp',
    alt: 'Folders screen',
  },
  {
    key: 'chat',
    title: 'Notes to self',
    body: 'A private chat with yourself for quick thoughts, links, photos and voice notes. Pin what matters: three pins are free, unlimited with Pro.',
    shot: '/shots/chat.webp',
    alt: 'Notes to self chat with a voice note',
  },
  {
    key: 'backup',
    title: 'Export and backup',
    pro: true,
    body: 'With Pro, export everything as a plain zip, or make a backup and restore it on a new phone. Restoring your own backup is always free.',
    shot: '/shots/backup.webp',
    alt: 'Backup and restore screen',
  },
  {
    key: 'lock',
    title: 'Locked when you want',
    body: 'Protect the app with a PIN and your fingerprint. Android keeps your fingerprint; PSpace never sees it. With Pro, you can also hide private folders and files behind your PIN.',
    shot: '/shots/lock.webp',
    alt: 'PIN lock screen',
  },
];

/** Pick a feature on the left, see it on the phone on the right. */
export default function Features() {
  const [active, setActive] = useState(0);

  return (
    <div className="features">
      <div className="feature-list" role="tablist" aria-label="Features">
        {items.map((it, i) => (
          <button
            key={it.key}
            role="tab"
            aria-selected={i === active}
            className={`feature ${i === active ? 'on' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="feature-title">
              {it.title}
              {it.pro && <span className="tag">Pro</span>}
            </span>
            <span className="feature-body">{it.body}</span>
          </button>
        ))}
      </div>

      <div className="feature-phone">
        <div className="phone">
          {items.map((it, i) => (
            <img
              key={it.key}
              src={it.shot}
              alt={it.alt}
              width={560}
              height={1180}
              className={i === active ? 'show' : ''}
              aria-hidden={i !== active}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
