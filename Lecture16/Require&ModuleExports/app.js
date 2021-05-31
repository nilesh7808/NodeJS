// const math = require('./math');

const { square, add, PI } = require('./math');

// console.log(math);
console.log(square(13));
console.log(add(12, 18));
console.log(PI);

// console.log(math.square(12));
// console.log(math.add(15, 15));
// console.log(math.PI);

const person = {
    name: "Nilesh",
    age: 22,
    faveColor: "blue"
}

const { name, age, faveColor } = person;

console.log(name);
console.log(age);
console.log(faveColor);