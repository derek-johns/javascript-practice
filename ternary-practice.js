/*

Ternary (conditional) operator has 3 operands:
    1. Condition, followed by question mark (?).
    2. Expression to execute if condition is truthy, followed by colon (:).
    3. Expression to execute if condition is falsey.

SYNTAX:

let variableName = (condition) ? truthyExpression : falseyExpression

Used as shortcut for if statement.



// Old method.
const x = 20;
let answer;

if (x > 10) {
    answer = 'greater than 10';
} else {
    answer = 'less than 10';
}


// New method.
const x = 20;
let answer = (x > 10) ? 'greater than 10' : 'less than 10';

console.log(answer);


// Second example.
// Old method.
let accessAllowed;
let age = 29;
if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
*/

// New method.
let age = 17;
let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);



