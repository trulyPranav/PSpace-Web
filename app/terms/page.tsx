import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms for using PSpace, including how PSpace Pro purchases work.',
  alternates: { canonical: '/terms' },
  openGraph: { url: '/terms', title: 'Terms & Conditions · PSpace' },
};

export default function Terms() {
  return (
    <div className="wrap legal">
      <h1>Terms &amp; Conditions</h1>
      <p className="muted">
        {site.name} · Last updated {site.policyUpdated}
      </p>

      <div className="card">
        <h2>In short</h2>
        <ul>
          <li>Use PSpace for your own personal content.</li>
          <li>Your data is on your phone, so keeping copies is up to you.</li>
          <li>The app is provided as it is, without guarantees.</li>
        </ul>
      </div>

      <h2>Using PSpace</h2>
      <p>
        By installing or using PSpace you agree to these terms. You may use the app for personal,
        non-commercial purposes. Please do not copy, resell, reverse-engineer or misuse it.
      </p>

      <h2>Your content</h2>
      <p>
        Everything you store belongs to you. PSpace does not upload it, so the developer cannot see it or
        recover it. Because data lives only on your device, you are responsible for keeping your own copies of
        anything important. Please do not use the app to store content that is illegal.
      </p>

      <h2>Export, backup and restore</h2>
      <p>
        You can export your data or make a backup and keep it wherever you like. You are responsible for where
        those copies are stored and who can open them, as they are not encrypted. When you restore a backup,
        you choose whether to add it to your current data or replace it; replacing cannot be undone. Only
        restore backups you made yourself or trust.
      </p>

      <h2>Keeping it safe</h2>
      <p>If you set a PIN, keep it somewhere safe. A forgotten PIN cannot be reset without clearing the app&apos;s data.</p>

      <h2>PSpace Pro (paid features)</h2>
      <p>
        PSpace is free to use. PSpace Pro is an optional one-time purchase, not a subscription, made through
        Google Play and tied to your Google account. Payments, refunds and receipts are handled by Google Play
        under its own terms; PSpace never sees your payment details.
      </p>
      <ul>
        <li>
          Pro unlocks the extra features listed on the Pro screen, such as export, backup, hidden items, extra
          folders and pins, app icons, accent colours and repeating reminders. What is included may grow over
          time.
        </li>
        <li>
          The free version has limits on folders and pins. Your existing content is never locked or deleted if
          you do not have Pro, or if Pro is refunded; you just cannot add past the free limits.
        </li>
        <li>
          If you reinstall or change phone, use Restore purchase on the Pro screen with the same Google
          account. Restoring is always free.
        </li>
        <li>
          Refunds follow Google Play&apos;s refund policy. If Pro is refunded, Pro-only features stop being
          available to use.
        </li>
      </ul>

      <h2>No warranty and liability</h2>
      <p>
        PSpace is provided &quot;as is&quot;, without warranties of any kind. To the extent the law allows, the
        developer is not liable for lost data, lost files or any indirect damage from using the app.
      </p>

      <h2>Updates and ending use</h2>
      <p>
        The app and these terms may change over time; continuing to use PSpace after a change means you accept
        it. You can stop at any time by uninstalling the app.
      </p>

      <Contact />
    </div>
  );
}
