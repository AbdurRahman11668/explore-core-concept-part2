//truthy = 'almas', 5, true, {}, []
//falsy = '', 0, false, null, undefined


// check truthy
const myVar = 5;
if(myVar){
    myVar = myVar*100;
}
else{
    myVar = 0
}


// check falsy
let myMoney = 50;
if(!myMoney){

}

const money = 80;
let food;
if(money > 100){
    food = 'biryani';
}
else{
    food = 'cha biscuit';
}

//ternary
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
console.log(food1)

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log(drink);


// Number to string convertsion
const num1 = 52;
console.log(num1);
const numstr = num1 + '';
console.log(numstr);


// string to number
const input = '560';
const inputNum = +input;
console.log(inputNum);


const isActive = true;
const showUser = () => console.log('Display User')
const hideUser = () => console.log('Hide USer')

// isActive ? showUser() : hideUser();
isActive && showUser();