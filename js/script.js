'use strict';

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  let num = 10;
  console.log(num);
}
// такой вид функции называется function declaration
// после фигурных скобок не нужно ставить точку с запятой
// создаётся до начала выполнения скрипта
// можно вызвать перед объявлением

showFirstMessage('Hello World!');
console.log(num);

// function calc(a, b) {
//   return(a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
  console.log('Hello!')
}; // такой вид записи называтся function expression
// при такой записи необходимо ставть точку с запятой
// создаётся только тогда, когдаа до неё доходит поток кода
// можно вызвать только после объявления

logger();


const calc = (a, b) => {
  console.log('1');
  return a + b
};
// это стрелочная функция
// не имеет контекста вызова
// если функция умещается в одну строку -
// можно опустить фигурные скобки и return