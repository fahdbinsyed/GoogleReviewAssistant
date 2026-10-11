import test from 'node:test';
import assert from 'node:assert/strict';
import {createReview} from './review.js';
test('all five ratings have appropriate distinct drafts',()=>{const drafts=[1,2,3,4,5].map(r=>createReview(r,[],'','Test'));assert.equal(new Set(drafts).size,5);assert.match(drafts[0],/disappointing/);assert.match(drafts[2],/okay/);assert.match(drafts[4],/great/)});
test('only selected highlights and verbatim notes are included',()=>{const draft=createReview(2,['fabric'],'  My item was damaged!  ','Shop');assert.match(draft,/fabric quality/);assert.match(draft,/My item was damaged!$/);assert.doesNotMatch(draft,/helpful staff|great shopping experience/)});
test('missing and invalid ratings are rejected',()=>{for(const r of [0,6,-1,1.5])assert.throws(()=>createReview(r,[],'','Shop'))});
test('Tamil drafts support every rating and preserve notes',()=>{const drafts=[1,2,3,4,5].map(r=>createReview(r,['staff','prices'],'எனது குறிப்பு!','ராயல் டெக்ஸ்டைல்ஸ்','ta'));assert.equal(new Set(drafts).size,5);for(const draft of drafts){assert.match(draft,/ஊழியர்களின் உதவி/);assert.match(draft,/நியாயமான விலை/);assert.match(draft,/எனது குறிப்பு!$/);assert.doesNotMatch(draft,/undefined|I appreciated|shopping/)}assert.match(drafts[0],/ஏமாற்றமளித்தது/)});
test('both languages have complete matching UI keys',async()=>{const {translations}=await import('./translations.js');assert.deepEqual(Object.keys(translations.en).sort(),Object.keys(translations.ta).sort());assert.equal(translations.ta.ratings.length,6)});
