// function factorial(number){
//     let result = 1;
//     for (let i = 1; i<=number; i++){
//         result = result * i;
//     }
//     return result;
// }
// const result = factorial(9);
// console.log(result);

/*var factorial = 1;
for (var i = 1; i<=5; i++){
    factorial = factorial * i;
    console.log(i, factorial);
}*/


// For while
/*var i = 1;
var factorial = 1;
while(i<=10){
    factorial = factorial * i;
    // console.log(i, factorial);
    i++;
}
console.log(factorial);*/

// Factorial Recursive
/*function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var result = factorial(10);
console.log(result);*/

//Fibonacci Series Recursive
function fibonacci(n){
    if(n == 0){
        return[0];
    }
    else if(n == 1){
        return[0, 1];
    }
    else{
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacci(10);
console.log(result);