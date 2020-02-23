/*

Cloning Arrays

In JavaScript, arrays are reference types, hence they are assigned
by reference instead of being copied. Therefore if multiple arrays
point to the same array reference in memory, any change to one array
will also be applied to all associated arrays.

*/

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const rainbowClone = rainbow;

console.log(rainbow === rainbowClone);

// Keep first 3 items and discard the rest
rainbowClone.splice(3);

console.log(rainbow);
console.log(rainbowClone);

// Cloning an array WITHOUT destructuring.
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Using Array.prototype.slice
const rainbowClone1 = rainbow.slice();
console.log(rainbow === rainbowClone1);
console.log(rainbowClone1);

// Using Array.prototype.concat
const rainbowClone2 = rainbow.concat();
console.log(rainbow === rainbowClone2);
console.log(rainbowClone2);

// Cloning WITH destructuring and rest parameter.
const [...rainbowClone] = rainbow;
console.log(rainbow === rainbowClone);
console.log(rainbowClone);