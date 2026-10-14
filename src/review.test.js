import test from 'node:test';
import assert from 'node:assert/strict';
import {createReview} from './review.js';
const fixed={random:()=>0};
test('rating sentiment remains distinct without selected highlights',()=>{
 const drafts=[1,2,3,4,5].map(r=>createReview(r,[],'','Shop','en',fixed));
 assert.equal(new Set(drafts).size,5);
 assert.match(drafts[0],/disappointing/);assert.match(drafts[2],/okay/);assert.match(drafts[4],/great/);
 for(const draft of drafts)assert.doesNotMatch(draft,/fabric|staff|prices|bought|recommend/);
});
test('customer notes lead the draft and are preserved, including criticism',()=>{
 const draft=createReview(2,['fabric'],'  My item was damaged!  ','Shop','en',fixed);
 assert.ok(draft.startsWith('My item was damaged! '));assert.match(draft,/fabric quality/);
 assert.doesNotMatch(draft,/staff|prices|collection|great experience/);
});
test('missing and invalid ratings are rejected',()=>{for(const r of [0,6,-1,1.5])assert.throws(()=>createReview(r,[],'','Shop'))});
test('Tamil drafts use Tamil phrasing and retain the original note',()=>{
 for(const r of [1,2,3,4,5]){
  const draft=createReview(r,['staff','prices'],'எனது குறிப்பு!','ராயல் டெக்ஸ்டைல்ஸ்','ta',fixed);
  assert.ok(draft.startsWith('எனது குறிப்பு! '));assert.match(draft,/ஊழியர்/);assert.match(draft,/விலை/);
  assert.doesNotMatch(draft,/undefined|I appreciated|shopping|துணியின் தரம்/);
 }
});
test('alternative wording does not repeat the previous draft even with fixed randomness',()=>{
 for(const language of ['en','ta'])for(const rating of [1,2,3,4,5]){
  const first=createReview(rating,['fabric'],'A customer note!','Shop',language,fixed);
  const second=createReview(rating,['fabric'],'A customer note!','Shop',language,{...fixed,previous:first});
  assert.notEqual(first,second);assert.ok(second.startsWith('A customer note! '));
 }
});
test('different choices vary wording while retaining only selected subjects',()=>{
 const first=createReview(4,['staff','prices'],'','Shop','en',fixed);
 const second=createReview(4,['staff','prices'],'','Shop','en',{random:()=>0.95});
 assert.notEqual(first,second);
 for(const draft of [first,second]){assert.match(draft,/staff/);assert.match(draft,/prices|pricing/);assert.doesNotMatch(draft,/fabric|clothes|bought|recommend/);}
});
test('unknown and duplicate highlights do not create unsupported details',()=>{
 assert.equal(createReview(4,['fabric','fabric','invented'],'','Shop','en',fixed),createReview(4,['fabric'],'','Shop','en',fixed));
});
test('both languages have complete matching UI keys',async()=>{
 const {translations}=await import('./translations.js');assert.deepEqual(Object.keys(translations.en).sort(),Object.keys(translations.ta).sort());assert.equal(translations.ta.ratings.length,6);
});
