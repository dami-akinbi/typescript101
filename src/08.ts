// FUNCTION BASICS

let greet: Function;
greet = () => {
    console.log('hello, again');
}

const add = (a: number, b: number) => {
    console.log(a + b);
}
add(5, 10);

const addAgain = (a: number, b: number, c?: number|string): void => {
    console.log(a + b);
    console.log(c);
}
addAgain(20, 30);

const minus = (a: number, b: number): number => {
    return a + b;
}
let result = minus(10, 7);