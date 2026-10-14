# Royal Textiles review assistant

React + Tailwind CSS single-page app for Royal Textiles, Parangipettai, with English and Tamil interfaces and local template-based draft generation.

Run `npm install`, `npm run dev`, `npm test`, and `npm run build`.

`src/config.js` contains the business-provided direct Google review URL and private-feedback address sales.royaltextiles@gmail.com. The supplied Google share link resolves to Royal textiles, #16 Mettu Street, Parangipettai. The review destination is https://g.page/r/CRx_9v9dM0QHEAE/review.

The original supplied logo is in `public/royal-textiles-logo.jpeg`. Translation strings are in `src/translations.js`; stable highlight IDs keep selections intact when switching languages. Existing edited drafts remain unchanged when switching language. Return to the form and create a new draft to use the newly selected language. Personal notes remain verbatim and are not automatically translated.

Private feedback opens an email draft addressed to the shop. Customers must send it in their email app. Nothing is automatically sent or stored. All ratings may write a public review; selecting 1 or 2 stars opens private feedback first, with a visible option to continue to a public review. Ratings 3–5 stay on the review form.

Clipboard access requires HTTPS or localhost. Copy succeeds before navigation. A direct Google review link remains available if copying is blocked. Customers paste their text, choose a rating and submit on Google themselves.



Drafts use varied local English/Tamil phrasing and shuffled selected-highlight sentences. Customer notes appear first and retain their original wording. Try another wording avoids an identical consecutive draft, and Undo restores the prior text and language. These are finite wording alternatives, not an AI API or a guarantee of uniqueness; customers should edit the result to reflect their own visit. No unselected purchase details, staff names, or recommendations are generated.
