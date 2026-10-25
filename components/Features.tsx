'use client';

import { useState } from 'react';

const items = [
  {
    key: 'home',
    title: 'Notes with reminders',
    body: 'Jot something down and pick a time. PSpace nudges you when it matters, even after your phone restarts.',
    shot: '/shots/home.webp',
    alt: 'Home screen with a note and reminder toggle',
  },
  {
    key: 'folders',
    title: 'Files in your folders',
    body: 'Organise documents, photos and anything else in folders you create. List, grid or tree view, your choice.',
    shot: '/shots/folders.webp',
    alt: 'Folders screen',
  },
  {
    key: 'chat',
    title: 'Notes to self',
    body: 'A private chat with yourself for quick thoughts, links, photos and voice notes. Pin what matters.',
    shot: '/shots/chat.webp',
    alt: 'Notes to self chat with a voice note',
  },
  {
    key: 'backup',
    title: 'Export and backup',
    body: 'Export everything as a plain zip, or make a backup and restore it on a new phone. You are never locked in.',
    shot: '/shots/backup.webp',
    alt: 'Backup and restore screen',
  },
  {
    key: 'lock',
    title: 'Locked when you want',
    body: 'Protect the app with a PIN and your fingerprint. Android keeps your fingerprint; PSpace never sees it.',
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
            <span className="feature-title">{it.title}</span>
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
