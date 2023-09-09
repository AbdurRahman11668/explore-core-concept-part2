const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

const getAge = (person) => person.age;
const student = {name: 'ananta', age: 45};
const age = getAge(student);

console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5, 9, 88, 2, 13]);
console.log(third);

// Without bracket
const doubleIt = num => num * 2;


//No Perameter
const getPI = () => Math.PI;
console.log(getPI());

//Large arrow Function
const dpMatch = (x, y, z) => {
    const sum = x + y + z;
    const multy = x * y * z;
    const result = sum + multy;
    return result;
}