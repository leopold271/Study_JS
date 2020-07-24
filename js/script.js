"use strict";

//to string
console.log(typeof (String(null)));
console.log(String(null));

console.log(typeof (5 + ''));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontsize = 26 + 'px';

//to number

console.log(typeof (Number('4')));

console.log(typeof (+'5'));

console.log(typeof (parseInt("15px", 10)));

let asnwer = +prompt('hello!!!', '');

//to boolean

// 0, '', null, udefined, Nan -- false

let switcher = null;
if (switcher) {
   console.log('working..');
}

switcher = 1;
if (switcher) {
   console.log('working..');
}

console.log(typeof (Boolean('4')));

console.log(typeof (!!'sddsds333'));