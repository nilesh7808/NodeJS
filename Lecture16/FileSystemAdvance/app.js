const fs = require('fs');
const path = require('path');

const F1 = path.join(__dirname, 'input1.txt');
const F2 = path.join(__dirname, 'input2.txt');

fs.readFile(F1, (err, data) => {

    const arr1 = data.toString().split('\n');

    fs.readFile(F2, (err, data) => {

        const arr2 = data.toString().split('\n');

        let res = arr1.concat(arr2);

        res.sort((a, b) => a - b);

        res = res.join('\n');

        fs.writeFile("output.txt", res, {
            encoding: 'utf-8',
            flag: 'w'
        }, (err) => {
            if (err) {
                throw err;
            }
            console.log("File has been created successfully");
            console.log("All Done!! ");

        })
    })

});