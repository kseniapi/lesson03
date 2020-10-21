'use strict';

const books = document.querySelectorAll('.book');

books[0].before(books[1]);
books[5].after(books[2]);
books[4].after(books[3]);

document.querySelector('body').style.backgroundImage = 'url("image/you-dont-know-js.jpg")'; 

const book3 = document.querySelectorAll('h2')[2];
const newBook3 = book3.querySelector('a');
newBook3.textContent = 'Книга 3. this  и Прототипы Объектов';


const advert = document.querySelector('.adv');
advert.remove();

const book2 = document.querySelectorAll('.book')[1];
const li2 = book2.querySelectorAll('li');
li2[3].after(li2[2]);
li2[6].after(li2[2]);
li2[3].after(li2[6]);
li2[6].after(li2[8]);
li2[5].after(li2[7]);
li2[9].after(li2[2]);


const book5 = document.querySelectorAll('.book')[4];
const li5 = book5.querySelectorAll('li');
li5[9].after(li5[2]);
li5[3].before(li5[9]);
li5[4].after(li5[2]);
li5[7].after(li5[5]);

const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';

const book6 = document.querySelectorAll('.book')[5];
const li6 = book6.querySelectorAll('li');
li6[8].after(newChapter);


