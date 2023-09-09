function canPay(changeArray, totalDue) {
    let sum = 0
    for(let i = 0; i<changeArray.length; i++){
        sum += changeArray[i];
    }
    if( changeArray[0] == 0){
        return 'Invalid Input';
    }
    else if(sum < 10) {
        return false;
    }
    else if(sum >= 10) {
        return true;
    }
}

const array = [1,5,5];
const total = 10;
console.log(canPay(array, total));