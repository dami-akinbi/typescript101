"use strict";
// explicit types
let character;
let age;
let isLoggedIn;
// age = 'luigi';
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
let ninjas = [];
ninjas.push('shaun');
// union types
let mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
let uid;
uid = '123';
uid = 123;
// objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
// ninjaOne = 'hello';
ninjaOne = [];
let ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
console.log(ninjaTwo);
console.log('It worked, hallelujah!');
