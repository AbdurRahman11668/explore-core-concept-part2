function cubeNumber(number){
    let cube;
    if(typeof(number) == 'number'){
        cube = number * number * number;
    }
    else{
        if(typeof(number) !== 'number'){
            cube = "Enter a valid number"
        }
    }
    return cube;
}
const totalNumbers = cubeNumber(4);
console.log(totalNumbers);