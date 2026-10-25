# PSpace website

Static Next.js site: home, `/privacy-policy`, `/terms`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static files in ./out
```

Edit `lib/site.ts` for the contact email, Play Store link and "last updated" date.
Keep the policy text in sync with `pspace/lib/features/settings/info/policy_screen.dart`.

## Deploy (Vercel)
Import this folder's repo in Vercel. Framework: Next.js, no settings needed.
The Play Console privacy policy URL is then `https://<your-site>/privacy-policy`.
