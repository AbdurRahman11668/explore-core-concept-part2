

// fibo[2] = fiba[2-1] + fibo[2-2];
// fibo[3] = fiba[3-1] + fibo[3-2];
// fibo[4] = fiba[4-1] + fibo[4-2];
// fibo[5] = fiba[5-1] + fibo[5-2];
// fibo[n] = fiba[n-1] + fibo[n-2];
// fibo[i] = fiba[i-1] + fibo[i-2];

//Normal for loop using
/*var fibo = [0,1];
for(var i = 2; i <= 10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);*/

//Using Function
/* function fibonacci(n){
    var fibo = [0,1];
    for(var i = 2; i <= 10; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);*/ 

// Using Recursive
function fibonacci(n){
    if(n == 0){
        return 0;
    }
    else if(n == 1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var result = fibonacci(10);
console.log(result);