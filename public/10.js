"use strict";
// FUNCTION SUGNATURES
let greetAgain;
// example 1
let greetAgain2;
greetAgain2 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
// example 3
let logDetails2;
logDetails2 = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
