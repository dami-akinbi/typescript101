// FUNCTION SUGNATURES

let greetAgain: Function;

// example 1
let greetAgain2: (a: string, b: string) => void;
greetAgain2 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;
calc = (num1: number, num2: number, action: string) => {
    if (action === 'add') { return num1 + num2; }
    else { return num1 - num2; }
}

// example 3
let logDetails2: (obj: { name: string, age: number }) => void;
type person = { name: string, age: number };
logDetails2 = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}