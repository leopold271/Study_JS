"use strict";

function first() {
   //do smth
   setTimeout(function () {
      console.log(1);
   }, 500);
}

function second() {
   console.log(2);
}

first();
second();

function learnJS(lang, callback) {
   console.log(`im learning ${lang}`);
   callback();
}

function done() {
   console.log('i passed this lesson');
}

learnJS('JavaScript', done);