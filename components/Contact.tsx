import { site } from '@/lib/site';

export default function Contact() {
  if (!site.contactEmail) return null;
  return (
    <>
      <h2 id="contact">Contact</h2>
      <p>
        Questions? <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
      </p>
    </>
  );
}
