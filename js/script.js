"use strict";

let num = 20;

function showFirstMessage(text) {
   console.log(text);
   console.log(num);
}

showFirstMessage('Hello world');
console.log(num);

// function calc(a, b) {
//    return (a + b);
//    //unreacheble code
// }

// console.log(calc(42, 6));
// console.log(calc(23, 2));
// console.log(calc(411, 124));

function ret() {
   num = 50;

   // some code

   return num;
}

const anotheNum = ret();
console.log(anotheNum);

const logger = function () {
   console.log('hello');
};

logger();

const calc = (a, b) => a + b;