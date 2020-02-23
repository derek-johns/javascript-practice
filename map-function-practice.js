/*

Map function is used to to apply a function on every element in an array.
A new array is then returned.

SYNTAX: 

let newArr = oldArr.map((val, index, arr) => {
    // return element to new Array
})

*/

//
// Essentially a for loop that is specifically for transforming values.
// Using for loop.
var arr = [1, 2, 3, 4];
var plus5 = [];

for(var i = 0; i < arr.length; i++) {
    plus5[i] = arr[i] + 5;
}
console.log(arr);
console.log(plus5);

// Using map() function.
let arr = [1, 2, 3, 4];
let plus5 = arr.map((val, i, arr) => {
    return val + 5;
});
console.log(arr);
console.log(plus5);

// Mapping example with index.
let arr = [1, 2, 3, 4];
let newArr = arr.map((val, i, arr) => {
    return {
        value: val,
        index: i
    };
});
console.log(arr);
console.log(newArr);

//
// Mapping some items, but not all.
// Double even numbers.
let arr = [1, 2, 3, 4];
let newArr = arr.map((val, i, arr) => {
    return val % 2 === 0 ? val * 2: val;
});
console.log(arr);
console.log(newArr);

