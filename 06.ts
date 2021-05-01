// dynamic (any) type
// use it sparingly, or not at all
let valueAge: any = 25;

valueAge = true;
console.log(valueAge);
valueAge = "hello";
console.log(valueAge);
valueAge = { name: 'luigi' };
console.log(valueAge);

let mixedValue: any[] = [];
mixedValue.push(5, 'mario', false);
console.log(mixedValue);

let ninjaObject: { name: any, age: any };

ninjaObject = { name: 'yoshi', age: 25 };
console.log(ninjaObject);

ninjaObject = { name: 25, age: 'yoshi' };
console.log(ninjaObject);
