const numbers = [89, 35, 98, 12]
const student = {
    name: "Abdur Rahman",
    age: 24,
    movies: ["no movies", 'no']
}

// 1. Template String
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;

console.log(about)

// 2. Arrow Function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (x, y) => {
    const sum = x + y;
    return sum;
};

//Spread Operator
const newNumbers = [...numbers];

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];
numbers.push(99);
numbers.push(99);
numbers.push(99);


console.log(numbers)
console.log(newNumbers)
console.log(currentNumbers)