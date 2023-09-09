const numbers = [4, 5, 2, 8, 10];

// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
// }
// console.log(doubled);

// Using map ||  
function doubleIt(num){
    return num * 2;
}
const result = numbers.map(doubleIt);
console.log(result);

// Map using arrow Function
const double2 = n => n * 2;

const result2 = numbers.map(double2);
console.log(result2);

// short map with arrow function
const double3 = numbers.map( num => num * 2);
console.log(double3);

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];
const length = friends.map(len => len.length);
console.log(length);