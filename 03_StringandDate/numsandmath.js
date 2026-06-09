const score = 400
// console.log(score);

const balance = new Number(100)// ab yeh ek object ke form dikhega
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));// point ke nu,ber fix kr deta h

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));// decimal ke pehle wale numbers ko priority miltui h

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++
// librearyh hai javascript ki
// console.log(Math);
// console.log(Math.abs(-4));// changes to positive
// console.log(Math.round(4.6));// for round off
// console.log(Math.ceil(4.2));// output me 5 return krega
// console.log(Math.floor(4.9));// output me 4 return krke dega
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());// hamesha return krta 0 aur 1 ke bich ki value
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)