// const myInches = 144;
// const myFeet = myInches / 12;
// console.log(myFeet);

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const myInches = 60;
const sum = inchToFeet(myInches);
console.log(sum)