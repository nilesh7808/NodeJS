const square = n => n * n;

const add = (x, y) => x + y;

const PI = 3.14205;

const all = {
        square: square,
        add: add,
        PI: PI
    }
    // console.log(module.exports);
    // module.exports.square = square;
    // module.exports.add = add;
    // module.exports.PI = PI;
    // console.log(square(9));
module.exports = all;
// module.exports = "Hello From Module";