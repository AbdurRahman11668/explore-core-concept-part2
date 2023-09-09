//How to declare a variable using let and const
const fatherNmae = 'Aftab';
let season = 'rainy'
season = 'winter'

//6 basic consitions: <, >, ===, !==, <=, >=
//multiply conditions: &&, ||

if(fatherNmae === 'Aftab' || season === "rainy"){

}
else if(fatherNmae === "Aftab"){

}
else{

}

//3. array declare
//index
//length, push
const number = [89, 35, 98, 12]
number[0] = 56;

//4. for loop
for(let i = 0; i< number.length; i++){
    const num = number[i]
    console.log(num)
}

//5. function
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);
console.log(output);


// 6.Object
const student = {
    name: "Abdur Rahman",
    age: 24,
    movies: ["no movies", 'no']
}
const myVariable = 'age';

console.log(student.age);
console.log(student['age']);
console.log(student[myVariable]);