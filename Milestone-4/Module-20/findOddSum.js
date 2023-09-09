function getSum(numbers){
    let sum = 0;
    console.log(numbers);
    for(let i = 0; i < myNumbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
}

function getOdd(numbers){
    console.log(numbers);
    for(let i = 0; i < myNumbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0){
            console.log(element);
        }
        
    }
}
const myNumbers = [12, 65, 45, 78, 32, 91, 45];
getSum(myNumbers);
getOdd(myNumbers);