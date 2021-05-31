// console.log("Hello From NodeJS");

// function add(x, y) {
//     return x + y;
// }

// let b = add(2, 5);
// console.log(b);

// console.log(process.argv);

// const arr = process.argv.slice(2);
// for (let user of arr) {
//     console.log(`Hello From ${user}`);

// }

let n = 16;
for (let i = 0; i <= n; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if ((i % 3 & i % 5) === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}