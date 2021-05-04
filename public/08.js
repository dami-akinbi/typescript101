"use strict";
// FUNCTION BASICS
let greet;
greet = () => {
    console.log('hello, again');
};
const add = (a, b) => {
    console.log(a + b);
};
add(5, 10);
const addAgain = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
addAgain(20, 30);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
