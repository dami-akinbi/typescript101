"use strict";
// FUNCTION SUGNATURES
var greetAgain;
// example 1
var greetAgain2;
greetAgain2 = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example 2
var calc;
calc = function (num1, num2, action) {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
// example 3
var logDetails2;
logDetails2 = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
