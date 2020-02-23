/* 

Destructuring

- ES6 feature allowing us to unpack values from arrays, or properties 
from objects, into distinct variables.

- Can also handle nested structures by using nested destructuring syntax

*/

//
// Example WITHOUT destructuring.
const student = {
    name: 'John Doe',
    age: 16,
    scores : {
        math: 74,
        english: 63,
        science: 85
    }
};

function displayScores(student) {
    console.log('Hello, ' + student.name)
    console.log('Your math score is ' + (student.scores.math || 0))
    console.log('Your english score is ' + (student.scores.english || 0))
    console.log('Your science score is ' + (student.scores.science || 0))
}

//displayScores(student)

//
// Example WITH destructuring.
function displayScores2({ name, scores: { math=0, english=0, science=0 }}) {
    console.log('Hello, ' + name);
    console.log('Your math score is ' + math);
    console.log('Your english score is ' + english);
    console.log('Your science score is ' + science);
}

//displayScores2(student)

//
// Object literal on left side of assignment expression.
const student1 = {
    firstName: 'Derek',
    lastName: 'Johnson',
    country: 'USA'
};

//const { firstName, lastName, country } = student1
//console.log(firstName, lastName, country)

//
// Can be used in variable assignment
let country = 'Canada';
let firstName = 'John';
let lastName = 'Doe';

const student2 = {
    firstName: 'Derek',
    lastName: 'Johnson',
    country: 'USA'
};

({ firstName, lastName } = student2);

console.log(firstName, lastName, country);

//
// - Assigning a variable corresponding to a non-existent key will
// produce undefined value.
// - Pass default values to avoid undefined.

const person = {
    name: 'John Doe',
    country: 'Canada'
};

const { name, country, age  = 25 } = person;

console.log(`I am ${name} from ${country} and I am ${age} years old.`);

//
// - Can assign values to different variable names.
const person = {
    name: 'John Doe',
    country: 'USA'
};

const { name: fullName, country: place, age: years = 25} = person;

console.log(`I am ${fullName} from ${place} and I am ${years} years old.`);

//
// Nested object destructuring.
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        math: 74,
        english: 63
    }
};

const { name, scores: { math, science = 50 } } = student;

console.log(`${name} scored ${math} in math and ${science} in science.`)
