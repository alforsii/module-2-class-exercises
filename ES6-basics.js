// Potential interview questions:

// hoisted/initialized	scope	updated	redeclared
// var	/	global or functional(local)
// let	/	block
// const	/	block
// ⭐️ var and let can be declared and later on initialized.
// ⭐️ const have to be initialized when declared.

//1.ES6 new string methods

// startsWith() method
let str = 'To be, or not to be, that is the question.';
console.log(str.startsWith('To be')); // true
console.log(str.startsWith('not to be')); // false
console.log(str.startsWith('not to be', 10)); // true

//endsWith() method
str = 'To be, or not to be, that is the question.';
console.log(str.endsWith('question.')); // true
console.log(str.endsWith('to be')); // false
console.log(str.endsWith('to be', 19)); // true

//includes() method
str = 'To be, or not to be, that is the question.';
console.log(str.includes('to be')); // true
console.log(str.includes('question')); // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1)); // false

//2.Object and Array Destructuring
//Destructuring is an easy and convenient way of extracting data from arrays and objects.

//Object destructuring
const person = {
  name: 'Ironhacker',
  age: 25,
  favoriteMusic: 'Metal',
  address: {
    street: 'Super Cool St',
    number: 123,
    city: 'Miami',
  },
};

let { name, address } = person;
console.log(name);
console.log(address.street); // <== Super Cool St
console.log(address.number); // <== Super Cool St
console.log(address.city); // <== Super Cool St

//Array destructuring
const numbers = ['one', 'two', 'three', 'four', 'five'];
const [first] = numbers;
console.log(first); // <== one
const [, , , , second] = numbers;
console.log(second); // <== five
// const [a, b = 1] = [2];
// console.log(a); // <== 2
// console.log(b); // <== 1

let [a, b = 2, c, d = 1] = [3, 4];
console.log(a, b, c, d);

const reptiles = ['snake', 'lizard', 'alligator'];
const mammals = ['puppy', 'kitten', 'bunny'];

const animals = [];
animals.concat(mammals);
console.log(animals);

function add() {
  return [...arguments].reduce((sum, next) => sum + next);
}

add(1, 2, 3);
console.log('Output for: add(1, 2, 3)', add(1, 2, 3));
