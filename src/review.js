export const highlights = [
 {id:'staff',en:'Helpful staff',ta:'உதவிகரமான ஊழியர்கள்',phrase:'the helpful staff',tamil:'ஊழியர்களின் உதவி'},
 {id:'fabric',en:'Fabric quality',ta:'துணியின் தரம்',phrase:'the fabric quality',tamil:'துணியின் தரம்'},
 {id:'collection',en:'Great collection',ta:'சிறந்த ஆடை வகைகள்',phrase:'the great collection',tamil:'சிறந்த ஆடை வகைகள்'},
 {id:'prices',en:'Fair prices',ta:'நியாயமான விலை',phrase:'the fair prices',tamil:'நியாயமான விலை'},
 {id:'shopping',en:'Shopping experience',ta:'ஷாப்பிங் அனுபவம்',phrase:'the shopping experience',tamil:'ஷாப்பிங் அனுபவம்'},
];
const wording = {
 en: {
  ratings: [[],
   ['My visit to {name} was disappointing.', 'I was disappointed with my experience at {name}.', 'I wasn’t happy with my visit to {name}.', 'Overall, my experience at {name} was disappointing.'],
   ['My experience at {name} fell short of expectations.', 'I expected a better experience at {name}.', 'My visit to {name} could have been better.', 'Overall, I wasn’t very satisfied with my visit to {name}.'],
   ['My experience at {name} was okay overall.', 'My visit to {name} was reasonably satisfactory.', 'Overall, I had an average experience at {name}.', 'My experience at {name} was neither great nor disappointing.'],
   ['I had a good experience at {name}.', 'I was happy with my visit to {name}.', 'Overall, a good shopping experience at {name}.', 'My visit to {name} went well.'],
   ['I had a great experience at {name}.', 'I really enjoyed my visit to {name}.', 'I was very happy with my experience at {name}.', 'Overall, a lovely shopping experience at {name}.']],
  details: {
   staff: ['The staff were helpful.', 'I appreciated the help from the staff.', 'The helpful staff stood out to me.'],
   fabric: ['I liked the fabric quality.', 'The quality of the fabric stood out to me.', 'I was pleased with the fabric quality.'],
   collection: ['I liked the collection.', 'The range of clothes stood out to me.', 'I was happy with the selection of clothes.'],
   prices: ['The prices seemed fair to me.', 'I found the pricing reasonable.', 'I appreciated the fair prices.'],
   shopping: ['Shopping here was a positive part of my visit.', 'I liked the shopping experience itself.', 'The shopping experience stood out in a good way.']
  }
 },
 ta: {
  ratings: [[],
   ['{name} கடையில் எனது அனுபவம் ஏமாற்றமளித்தது.', '{name} கடையில் எனது வருகை திருப்தியாக அமையவில்லை.', '{name} கடையில் எனது அனுபவம் எனக்குப் பிடிக்கவில்லை.', 'மொத்தத்தில், {name} கடையில் எனது அனுபவம் ஏமாற்றமாக இருந்தது.'],
   ['{name} கடையில் எனது அனுபவம் எதிர்பார்த்த அளவிற்கு இல்லை.', '{name} கடையில் இன்னும் சிறந்த அனுபவத்தை எதிர்பார்த்தேன்.', '{name} கடையில் எனது வருகை இன்னும் நன்றாக இருந்திருக்கலாம்.', 'மொத்தத்தில், {name} கடையில் எனக்குப் போதிய திருப்தி இல்லை.'],
   ['{name} கடையில் எனது அனுபவம் ஓரளவு திருப்தியாக இருந்தது.', '{name} கடையில் எனது அனுபவம் பரவாயில்லை.', 'மொத்தத்தில், {name} கடையில் எனது அனுபவம் சராசரியாக இருந்தது.', '{name} கடையில் எனது அனுபவம் மிகவும் சிறப்பாகவும் இல்லை, மோசமாகவும் இல்லை.'],
   ['{name} கடையில் எனது அனுபவம் நன்றாக இருந்தது.', '{name} கடைக்கு வந்ததில் மகிழ்ச்சி.', 'மொத்தத்தில், {name} கடையில் நல்ல ஷாப்பிங் அனுபவம் கிடைத்தது.', '{name} கடையில் எனது வருகை திருப்தியாக இருந்தது.'],
   ['{name} கடையில் எனது அனுபவம் மிகவும் சிறப்பாக இருந்தது.', '{name} கடைக்கு வந்தது மிகவும் பிடித்திருந்தது.', '{name} கடையில் எனது அனுபவம் மிகுந்த மகிழ்ச்சி அளித்தது.', 'மொத்தத்தில், {name} கடையில் அருமையான ஷாப்பிங் அனுபவம் கிடைத்தது.']],
  details: {
   staff: ['ஊழியர்கள் உதவியாக இருந்தார்கள்.', 'ஊழியர்களின் உதவி எனக்குப் பிடித்திருந்தது.', 'ஊழியர்கள் உதவிய விதம் நன்றாக இருந்தது.'],
   fabric: ['துணியின் தரம் எனக்குப் பிடித்திருந்தது.', 'துணியின் தரம் நன்றாக இருந்தது.', 'துணியின் தரத்தில் எனக்குத் திருப்தி இருந்தது.'],
   collection: ['ஆடை வகைகள் எனக்குப் பிடித்திருந்தன.', 'ஆடைகளின் தேர்வு நன்றாக இருந்தது.', 'வைத்திருந்த ஆடை வகைகள் என்னைக் கவர்ந்தன.'],
   prices: ['விலை நியாயமாகத் தோன்றியது.', 'நியாயமான விலை எனக்குப் பிடித்திருந்தது.', 'விலைகள் ஏற்றதாக இருந்தன.'],
   shopping: ['ஷாப்பிங் அனுபவம் எனக்குப் பிடித்திருந்தது.', 'ஆடைகள் பார்த்துத் தேர்ந்தெடுத்த அனுபவம் நன்றாக இருந்தது.', 'ஷாப்பிங் செய்தது நல்ல அனுபவமாக இருந்தது.']
  }
 }
};

// Alternatives change wording only: never add a purchase, staff name, promise,
// recommendation or other detail the customer did not provide.
export function createReview(rating, selected, note, name='Royal Textiles', language='en', options={}) {
 if (!Number.isInteger(rating)||rating<1||rating>5) throw new Error('Choose a rating first.');
 const {random=Math.random, previous=''}=options;
 const phrases=wording[language]||wording.en;
 const pick=(list)=>list[Math.min(list.length-1,Math.max(0,Math.floor(random()*list.length)))];
 const selectedIds=highlights.filter(h=>selected.includes(h.id)).map(h=>h.id);
 const build=()=>{
  const summary=pick(phrases.ratings[rating]).replace('{name}',name);
  const details=selectedIds.map(id=>pick(phrases.details[id]));
  // Fisher–Yates varies sentence order without adding or dropping highlights.
  for(let i=details.length-1;i>0;i--){const j=Math.min(i,Math.max(0,Math.floor(random()*(i+1))));[details[i],details[j]]=[details[j],details[i]];}
  const ownWords=note.trim();
  const noteSentence=ownWords?ownWords+(/[.!?…]$/.test(ownWords)?'':'.'):'';
  const parts=rating<4||random()<0.5?[summary,...details]:[...details,summary];
  return [noteSentence,...parts].filter(Boolean).join(' ');
 };
 let result=build();
 for(let attempt=0;result===previous&&attempt<8;attempt++)result=build();
 if(result===previous){
  // A bounded fallback also works if the random source repeats the same value.
  for(const alternative of phrases.ratings[rating]){
   const sentence=alternative.replace('{name}',name);
   const current=phrases.ratings[rating].map(s=>s.replace('{name}',name)).find(s=>result.includes(s));
   if(current&&sentence!==current){result=result.replace(current,sentence);break;}
  }
 }
 return result;
}
