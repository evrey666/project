/*jshint esnext: true */

//To String
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) конкатинация
console.log(typeof(5 + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num); // устаревшая запись

const fontSize = 26 + 'px';

// To Number
// 1)
console.log(typeof(Number('3')));

// 2) унарный плюс
console.log(typeof('+4'));

// 3)
console.log(typeof(parseInt('15px', 10))); 

let answer = +prompt('Hello', '');

//To boolean

// 0, '', null, undefined, NaN; - всегда превращается в false

// 1)
let switcher = null;

if (switcher) {
  console.log('Working...');
}

// 2)
console.log(typeof(Boolean(4)));

// 3)
console.log(typeof(!!'2324'));
