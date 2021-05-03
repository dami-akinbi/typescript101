"use strict";
// FUNCTION BASICS
var greet;
greet = function () {
    console.log('hello, again');
};
var add = function (a, b) {
    console.log(a + b);
};
add(5, 10);
var addAgain = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
addAgain(20, 30);
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
