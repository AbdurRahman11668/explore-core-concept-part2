// Keys
const glass = {
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true
};

console.log(glass);

// Keys
const keys = Object.keys(glass);
console.log(keys)

// // Values
const values = Object.values(glass);
console.log(values);

// Entries    ,,   it provides two dimensional array or array of array
const pair = Object.entries(glass);
console.log(pair);

// delete
delete glass.isCleaned;
// console.log(glass);

const {isCleaned, ...shortGlass} = glass
// console.log(shortGlass)

// Freeze
// Object.freeze(glass);
// glass.source = 'Bangladesh';
// delete glass.name;
// glass.price = 5000;
// console.log(glass);

// Seal
Object.seal(glass);
glass.source = 'Bangladesh';
delete glass.name;
glass.price = 5000;
console.log(glass);