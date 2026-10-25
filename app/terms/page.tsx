import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Terms & Conditions' };

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

      <h2>Paid features</h2>
      <p>
        Some features may be offered as optional purchases through Google Play. Payments, refunds and receipts
        are handled by Google Play under its own terms; PSpace never sees your payment details.
      </p>

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
