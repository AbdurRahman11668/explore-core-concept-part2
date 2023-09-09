// const even = 98;
// const odd = 117;

// if(even / 2){
//     console.log("true")
// }
// if(odd / 1){
//     console.log("false")
// }

function isEven(number){
    const remainder  = number % 2;
    // console.log(remainder);
    if(remainder === 0){
        return true;
    }
    else{
        return false; 
    }
}
const myNumber = isEven(98);
console.log(myNumber);