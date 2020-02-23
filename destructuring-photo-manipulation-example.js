/* 

Swapping Local Variables

- Photo manipulation app where the 'height' and 'width' dimensions
of a photo can be swapped when the orientation of the photo is switched
between landscape and portrait.

*/

let width = 300;
let height = 400;
const landscape = true;

console.log(`${width} X ${height}`);

/* WITHOUT destructuring.

if (landscape) {
    let initialWidth = width;
    width = height;
    height = initialWidth;
    console.log(`${width} X ${height}`);
}

*/

// WITH destructuring.
if (landscape) {
    [width, height] = [height, width];
    console.log(`${width} X ${height}`);
}


