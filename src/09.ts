// TYPE ALIASES

type StrOrNum = string|number;
type objWithName = { name: string, uid: StrOrNum };

const logDetails = (uid: StrOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greetUser = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

const greetUserAgain = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}