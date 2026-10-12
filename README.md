# Royal Textiles review assistant

React + Tailwind CSS single-page app for Royal Textiles, Parangipettai, with English and Tamil interfaces and local template-based draft generation.

Run `npm install`, `npm run dev`, `npm test`, and `npm run build`.

`src/config.js` contains the verified Google review-dialogue URL and private-feedback address sales.royaltextiles@gmail.com. The supplied Google share link resolves to Royal textiles, #16 Mettu Street, Parangipettai. The review URL uses that listing's observed Google review-dialogue identifier.

The original supplied logo is in `public/royal-textiles-logo.jpeg`. Translation strings are in `src/translations.js`; stable highlight IDs keep selections intact when switching languages. Existing edited drafts remain unchanged when switching language. Return to the form and create a new draft to use the newly selected language. Personal notes remain verbatim and are not automatically translated.

Private feedback opens an email draft addressed to the shop. Customers must send it in their email app. Nothing is automatically sent or stored. All ratings may write a public review; selecting 1, 2, or 3 stars opens private feedback first, with a visible option to continue to a public review. Ratings 4–5 stay on the review form.

Clipboard access requires HTTPS or localhost. Copy succeeds before navigation. A direct Google review link remains available if copying is blocked. Customers paste their text, choose a rating and submit on Google themselves.

