// const fs = require('fs');

// const data = "Hello from file system";

// fs.writeFile('abc.txt', data, {
//     encoding: 'utf-8',
//     flag: 'w'
// }, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("File written successfully");
// });

// fs.readFile('abc.txt', {
//     encoding: 'utf-8',
//     flag: 'r'
// }, (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// })

const fs = require('fs');
const path = require('path');
const F1 = path.join(__dirname, 'files', 'msg.txt');
// console.log(process.cwd());
// console.log(__dirname);

// const message = "Inside another folder";

// fs.writeFile(F1, message, {
//     encoding: 'utf-8',
//     flag: 'w'
// }, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("File has been created Successfully");
// });

fs.readFile(F1, {
    encoding: 'utf-8',
    flag: 'r'
}, (err, message) => {
    if (err) {
        throw err;
    }
    console.log(message);
})