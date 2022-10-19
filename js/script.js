/*jshint esnext: true */
'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'), //получили псевдомассив
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
// console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px'; // пишем как в нормальном css

btns[1].style.borderRadius = '50%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {   // на практике циклы не используют
//   hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); // данный элемент существует только внутри джаваскрипта
// const text = document.createTextNode('Тут могла быть ваша реклама'); // так почти не делают

div.classList.add('black');

// document.body.append(div); // добавляем элемент в конец body
// document.querySelector('.wrapper').append(div);
wrapper.append(div);
// wrapper.prepend(div); // вставляем элемент в начале wrapper

// hearts[0].before(div);
// hearts[1].after(div);

// circles[0].remove();

hearts[0].replaceWith(circles[0]);

// устаревшие конструкции
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[1]);
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = '<h1>Hello world</h1>';
// div.textContent = 'Hello';

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');


