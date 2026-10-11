export const highlights = [
 {id:'staff',en:'Helpful staff',ta:'உதவிகரமான ஊழியர்கள்',phrase:'the helpful staff',tamil:'ஊழியர்களின் உதவி'},
 {id:'fabric',en:'Fabric quality',ta:'துணியின் தரம்',phrase:'the fabric quality',tamil:'துணியின் தரம்'},
 {id:'collection',en:'Great collection',ta:'சிறந்த ஆடை வகைகள்',phrase:'the great collection',tamil:'சிறந்த ஆடை வகைகள்'},
 {id:'prices',en:'Fair prices',ta:'நியாயமான விலை',phrase:'the fair prices',tamil:'நியாயமான விலை'},
 {id:'shopping',en:'Shopping experience',ta:'ஷாப்பிங் அனுபவம்',phrase:'the shopping experience',tamil:'ஷாப்பிங் அனுபவம்'},
];
export function createReview(rating,selected,note,name='Royal Textiles',language='en') {
 if (!Number.isInteger(rating)||rating<1||rating>5) throw new Error('Choose a rating first.');
 const tamil=language==='ta';
 const openings=tamil?['',`${name} கடையில் எனது அனுபவம் ஏமாற்றமளித்தது.`,`${name} கடையில் எனது அனுபவம் எதிர்பார்த்த அளவிற்கு இல்லை.`,`${name} கடையில் எனது அனுபவம் ஓரளவு திருப்தியாக இருந்தது.`,`${name} கடையில் எனது ஷாப்பிங் அனுபவம் நன்றாக இருந்தது.`,`${name} கடையில் எனது ஷாப்பிங் அனுபவம் மிகவும் சிறப்பாக இருந்தது.`]:['',`My shopping experience at ${name} was disappointing.`,`My shopping experience at ${name} fell short of expectations.`,`My shopping experience at ${name} was okay overall.`,`I had a good shopping experience at ${name}.`,`I had a great shopping experience at ${name}.`];
 const phrases=highlights.filter(h=>selected.includes(h.id)).map(h=>tamil?h.tamil:h.phrase);
 const joined=phrases.length<2?phrases[0]:phrases.slice(0,-1).join(', ')+(tamil?' மற்றும் ':' and ')+phrases.at(-1);
 const details=joined?(tamil?(phrases.length===1?`${joined} ${rating<3?'பாராட்டத்தக்க அம்சமாக இருந்தது':'எனக்குப் பிடித்திருந்தது'}.`:`${joined} ஆகியவை ${rating<3?'பாராட்டத்தக்க அம்சங்களாக இருந்தன':'எனக்குப் பிடித்திருந்தன'}.`):`${rating<3?'I did appreciate':'I appreciated'} ${joined}.`):'';
 const trimmed=note.trim();
 return [openings[rating],details,trimmed?trimmed+(/[.!?…]$/.test(trimmed)?'':'.'):''].filter(Boolean).join(' ');
}
