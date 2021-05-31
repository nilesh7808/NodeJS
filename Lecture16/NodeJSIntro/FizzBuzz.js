// Older way not good version

// function fizzBuzz(n) {

//     for (let i = 0; i <= n; i++) {
//         str = "";
//         if (i % 3 === 0 && i % 5 === 0) {
//             str += "fizzBuzz";
//         } else if (i % 3 === 0) {
//             str += "Fizz";
//         } else if (i % 5 === 0) {
//             str += "Buzz";
//         } else {
//             str += i;
//         }
//         console.log(str);

//     }
// }

// fizzBuzz(30);

// optimize version of fizz

// function fizzBuzzOpt(n) {

//     for (let i = 0; i <= n; i++) {
//         let str = "";
//         if (i % 3 === 0) {
//             str += "Fizz";
//         }
//         if (i % 5 === 0) {
//             str += "Buzz";
//         }
//         if (str === "") {
//             str += i
//         }
//         console.log(str);
//     }

// }
// fizzBuzzOpt(20);