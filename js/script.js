// 'use strict';

// function first() {
//   // что-то присходит
//   setTimeout(function() {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS (lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('Я прошёл этот урок');
// }

// learnJS('JavaScript', done);

function myFunc() {
  const a = [4, 5, 6];
  document.querySelector('out-1').innerHTML = a.join('-');
}