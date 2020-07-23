"use strict";

let a = 5,
   b = a;

b = b + 5;

// console.log(a);
// console.log(b);

const obj = {
   a: 5,
   b: 1
};

const copy = obj; // не копия, а ссылка
copy.a = 10;

// console.log(copy);
// console.log(obj);

function copyObject(mainObj) {
   let objCopy = {};

   for (let key in mainObj) {
      objCopy[key] = mainObj[key];
   }

   return objCopy;
}

const number = {
   a: 2,
   b: 5,
   c: {
      x: 7,
      y: 4
   }
};

const newNumber = copyObject(number);

newNumber.a = 10;
newNumber.c.x = 10;

// console.log(newNumber);
// console.log(number);

const add = {
   d: 17,
   e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'kk';

console.log(oldArray);
console.log(newArray);

const video = ['utube', 'vimeo', 'rutube'],
   blogs = ['wordpress', 'livejournal', 'blogger'],
   internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function log(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];
const newArrray = [...array];

const q = {
   one: 1,
   two: 2
};

const newq = {
   ...q
};