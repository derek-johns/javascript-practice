let firstName = 'John'
let lastName = 'Doe'
let country = 'Canada'

const student = {
    firstName: 'Derek',
    lastName: 'Johnson',
    country: 'USA'
};

({ firstName, lastName } = student)

console.log(firstName, lastName, country)