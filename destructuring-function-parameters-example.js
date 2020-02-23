/*

Destructuring can also be applied on function parameters to extract values
and assign them to local variables. Destructured parameter cannot be
omitted (it is required).

*/

const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        math: 74,
        english: 63,
        science: 85
    }
};

// WITHOUT destructuring.
function displayScores(student) {
    console.log('Hello, ' + student.name);
    console.log('Your math score is ' + (student.scores.math || 0));
    console.log('Your english score is ' + (student.scores.english || 0));
    console.log('Your science score is ' + (student.scores.science || 0));
}

displayScores(student);

// WITH destructuring.
function displayScores({name, scores: { math, english, science }} )  {
    console.log('Hello ' + name);
    console.log('Your math score is ' + math);
    console.log('Your english score is ' + english);
    console.log('Your science score is ' + science);
}

displayScores(student);
