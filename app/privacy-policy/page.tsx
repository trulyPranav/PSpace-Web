import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'What PSpace stores, what it never collects, and how purchases and permissions work.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: { url: '/privacy-policy', title: 'Privacy Policy · PSpace' },
};

export default function PrivacyPolicy() {
  return (
    <div className="wrap legal">
      <h1>Privacy Policy</h1>
      <p className="muted">
        {site.name} · Last updated {site.policyUpdated}
      </p>

      <div className="card">
        <h2>In short</h2>
        <ul>
          <li>PSpace keeps your data on your phone.</li>
          <li>We do not collect, sell or share your personal information.</li>
          <li>No account, no ads and no tracking.</li>
        </ul>
      </div>

      <h2>What PSpace stores</h2>
      <p>When you use PSpace, the things you create are saved inside the app&apos;s private storage on your device:</p>
      <ul>
        <li>Files and folders you add, with their names and dates.</li>
        <li>Notes and reminder times.</li>
        <li>Chat messages, attachments and voice notes.</li>
        <li>Your settings, and a scrambled (hashed) version of your PIN.</li>
      </ul>

      <h2>What we do not collect</h2>
      <p>
        The developer never receives your content. PSpace does not collect your name, email, location,
        contacts, device identifiers or usage analytics, and it contains no advertising.
      </p>

      <h2>Permissions and why</h2>
      <p>PSpace asks only for what a feature needs:</p>
      <ul>
        <li>Microphone: to record voice notes, only while you record.</li>
        <li>Notifications and alarms: to deliver your note reminders on time.</li>
        <li>
          Fingerprint: lets your phone unlock the app. Android handles this; PSpace never sees your
          fingerprint.
        </li>
        <li>
          Photos and files: only the items you choose in the system picker or share into the app. PSpace does
          not browse your other files.
        </li>
        <li>Vibration and restart: small taps of feedback, and restoring reminders after your phone restarts.</li>
        <li>
          Internet: used only by Google Play features (buying or restoring Pro, update checks and the rating
          prompt). PSpace never uses it to send your content anywhere.
        </li>
      </ul>

      <h2>Internet and sharing</h2>
      <p>
        PSpace has no servers and no account, and it does not send your notes, files or chats anywhere. Files
        leave your phone only when you choose to share them with another app. The only things that go online
        are handled by Google Play on your phone: buying or restoring PSpace Pro, checking for app updates,
        and the occasional request to rate the app. If other online features are added later, they will be
        opt-in and this policy will be updated first.
      </p>

      <h2>Purchases (PSpace Pro)</h2>
      <p>
        PSpace Pro is an optional one-time purchase made through Google Play. Google handles the payment and
        keeps the receipt; PSpace and its developer never see your card or payment details.
      </p>
      <ul>
        <li>
          PSpace asks Google Play whether this Google account owns Pro, and remembers the answer on your phone
          so Pro keeps working offline.
        </li>
        <li>
          Your choices (app icon, accent colour, hidden items, reminder repeats) are stored only on your
          phone, like the rest of your data.
        </li>
        <li>Hiding an item only keeps it out of sight inside PSpace. It is not encryption.</li>
      </ul>

      <h2>Export and backup</h2>
      <p>
        Export and Backup create a file on your phone containing your files, chat, voice notes and notes.
        PSpace does not upload it anywhere. It leaves your phone only when you pick where to save or send it
        in the share sheet.
      </p>
      <ul>
        <li>These files are not encrypted. Anyone who gets one can read it, so keep it somewhere private.</li>
        <li>Backups never include your PIN, fingerprint or theme settings.</li>
        <li>Restoring reads a backup file you choose and adds its contents to PSpace on your phone.</li>
      </ul>

      <h2>Phone backups</h2>
      <p>PSpace asks Android not to include its data in automatic cloud backups. Use Backup inside the app to keep your own copy.</p>

      <h2>Your control</h2>
      <ul>
        <li>Delete any item at any time.</li>
        <li>Use Settings → Data → Clear all data to erase everything PSpace holds.</li>
        <li>Uninstalling the app removes its data from your phone.</li>
      </ul>

      <h2>Children and changes</h2>
      <p>
        PSpace is not directed at children under 13. If this policy changes, the date at the top will change
        and important updates will be shown in the app.
      </p>

      <Contact />
    </div>
  );
}
