export const highlights = [
 {label:'Friendly staff', phrase:'the friendly staff', icon:'Smile'},
 {label:'Quick service', phrase:'the quick service', icon:'Zap'},
 {label:'Good quality', phrase:'the quality', icon:'BadgeCheck'},
 {label:'Clean & comfortable', phrase:'the clean, comfortable space', icon:'Armchair'},
 {label:'Good value', phrase:'the good value', icon:'Wallet'},
];
export function createReview(rating, selected, note, name) {
 if (!Number.isInteger(rating) || rating < 1 || rating > 5) throw new Error('Choose a rating first.');
 const openings = ['',`My experience at ${name} was disappointing.`,`My experience at ${name} fell short of expectations.`,`My experience at ${name} was okay overall.`,`I had a good experience at ${name}.`,`I had a great experience at ${name}.`];
 const phrases = highlights.filter(h => selected.includes(h.label)).map(h => h.phrase);
 const joined = phrases.length < 2 ? phrases[0] : phrases.slice(0,-1).join(', ') + ' and ' + phrases.at(-1);
 const details = joined ? `${rating < 3 ? 'One positive was' : 'I appreciated'} ${joined}.` : '';
 const trimmed = note.trim();
 return [openings[rating], details, trimmed ? trimmed + (/[.!?…]$/.test(trimmed) ? '' : '.') : ''].filter(Boolean).join(' ');
}
