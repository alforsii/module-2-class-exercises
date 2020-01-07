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

//3.Spread Operator
const reptiles = ['snake', 'lizard', 'alligator'];
const mammals = ['puppy', 'kitten', 'bunny'];

//concat
const animals = [...reptiles, ...mammals];
console.log(animals);

//Advanced
// Rest Parameters - Other uses of the Spread Operator
function add() {
  return [...arguments].reduce((sum, next) => sum + next);
}

add(1, 2, 3); // <== 6
console.log('Output for: add(1, 2, 3)', add(1, 2, 3));

//or
function add2(...numbers) {
  // numbers is the name for the array
  return numbers.reduce((sum, next) => {
    return sum + next;
  });
}

add2(1, 2, 5, 8); // <== 16
console.log('Output for: add (1,2,5,8)', add2(1, 2, 5, 8));

// ❗We can choose to get the first parameters as variables and gather only the rest.

// Here the first two arguments go into variables and the rest go into movies array:

function showMovie(title, year, ...actors) {
  console.log(
    `${title} is released in ${year} and in the cast are: ${actors[0]} and ${actors[1]}.`
  );
}

showMovie('Titanic', '1997', 'Leonardo Di Caprio', 'Kate Winslet');

//4.Class
class Counter {
  constructor() {
    this.count = 1;
  }

  countUp() {
    setInterval(function() {
      this.count++; //<== NaN
      console.log(this.constructor.name); // => Window
    }, 1000);
  }
}

var myCounter = new Counter();
// myCounter.countUp();

//5.Default parameters
// ES6 gives us a way to set default function parameters. Any parameters with a default value are considered to be optional.

// Examples

// In the following example, the second parameter is optional.

function inc(number, increment = 1) {
  return number + increment;
}
console.log(inc(2, 2)); // 4
console.log(inc(2)); // 3

// You can also set default values for parameters that appear before arguments without default values:

function sum(a, b = 2, c) {
  return a + b + c;
}
console.log(sum(1, 5, 10)); // 16 -> b === 5
console.log(sum(1, undefined, 10)); // 13 -> b as default
