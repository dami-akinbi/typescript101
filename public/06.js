"use strict";
// dynamic (any) type
// use it sparingly, or not at all
var valueAge = 25;
valueAge = true;
console.log(valueAge);
valueAge = "hello";
console.log(valueAge);
valueAge = { name: 'luigi' };
console.log(valueAge);
var mixedValue = [];
mixedValue.push(5, 'mario', false);
console.log(mixedValue);
var ninjaObject;
ninjaObject = { name: 'yoshi', age: 25 };
console.log(ninjaObject);
ninjaObject = { name: 25, age: 'yoshi' };
console.log(ninjaObject);
