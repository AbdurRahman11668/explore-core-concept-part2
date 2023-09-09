// function add(a, b){
//     const result = a + b;
//     return result;
// }
// const sum = add(5, 90);
// console.log(sum);


function add(a, b){
    const result = a + b;
    return result;
}

// Function Expression
const add2 = function(a, b){
    return a + b;
}

// Arrow Function
const add3 = (a, b)=> a+b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

// const sum = add3(5, 93);
const sum = add4(5, 6, 7, 8);
console.log(sum);