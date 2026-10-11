import test from 'node:test';
import assert from 'node:assert/strict';
import {createReview} from './review.js';
test('all five ratings have appropriate distinct drafts',()=>{const drafts=[1,2,3,4,5].map(r=>createReview(r,[],'','Test'));assert.equal(new Set(drafts).size,5);assert.match(drafts[0],/disappointing/);assert.match(drafts[2],/okay/);assert.match(drafts[4],/great/)});
test('only selected highlights and verbatim notes are included',()=>{const draft=createReview(2,['Quick service'],'  My item was damaged!  ','Shop');assert.match(draft,/quick service/);assert.match(draft,/My item was damaged!$/);assert.doesNotMatch(draft,/friendly staff|great experience/)});
test('missing and invalid ratings are rejected',()=>{for(const r of [0,6,-1,1.5])assert.throws(()=>createReview(r,[],'','Shop'))});
