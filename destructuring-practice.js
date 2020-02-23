/* 

Destructuring

- ES6 feature allowing us to unpack values from arrays, or properties 
from objects, into distinct variables.

- Can also handle nested structures by using nested destructuring syntax

*/
/*
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


//
// Array Destructuring
// - Each variable is mapped to corresponding index within array
const rgb = [255, 200, 0];
const [red, green, blue] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`);

// Default values.
const rgb = [200];
const [red = 255, green, blue = 255] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`);

// - Assignment expression does not require parethneses.
// - Unlike object destructuring.
let red = 100;
let green = 200;
let blue = 50;
const rgb = [200, 255, 100];
[red, green] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`);

// Skipping items.
const rgb = [200, 255, 100];
const [,, blue] = rgb;
console.log(`Blue: ${blue}`);

//
// Nested Array Destructuring
// - Must be an array in order.
const color = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];
const [hex, [red, green, blue]] = color;
console.log(hex, red, green, blue);

//
// Rest Items
// - Rest parameter allows us to assign some items to variables while 
// ensuring the remaining items are captured (assigned to another
// local variable).
// SYNTAX: (...param)
// - Must be last item
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red,, yellow, ...otherColors] = rainbow;
console.log(otherColors);
*/
//
// Mixed Destructuring
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { name, location: {country, city, coordinates: [lat, lng]}} = person;
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`)


