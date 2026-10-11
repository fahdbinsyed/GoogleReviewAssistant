# NovoBytes review assistant

Mobile-first React + Tailwind CSS app built with Vite. Draft generation runs locally using deterministic templates; no AI service or backend is required. Notes are kept in memory only.

Run `npm install`, then `npm run dev`. Run `npm test` and `npm run build` for validation.

Edit `src/config.js` to change branding. Copy `.env.example` to `.env.local`, set `VITE_GOOGLE_PLACE_ID` to the business's real Place ID, and optionally set `VITE_FEEDBACK_EMAIL`. Rebuild after changing configuration. No real review destination or private-feedback recipient was supplied, so the demo explicitly handles unconfigured destinations. Private feedback opens an email draft; it does not claim to send or store submissions.

All ratings, including 3 stars, can generate editable drafts and proceed to Google. Ratings of 1 or 2 also offer private feedback without suppressing public reviews. This avoids selective positive-review solicitation, which violates Google's contribution policy.

Clipboard access requires HTTPS or localhost and browser permission. Copy failures leave the editable draft and a direct configured Google link available. The main button awaits clipboard success before navigating, preventing navigation from interrupting the copy operation. Google requires the customer to paste, rate, and submit manually.
