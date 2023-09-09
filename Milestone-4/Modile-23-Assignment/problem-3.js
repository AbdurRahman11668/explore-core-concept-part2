function sortMaker(arr) {
    var temp;
    if(arr[0] < 0 || arr[1] < 0){
        return 'Invalid Input';
    }
    else if(arr[0] > arr[1]){
        return arr;
    }
    else if(arr[0] < arr[1]){
        temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
        return arr;
    }
    else if(arr[0] === arr[1]){
        return 'equal';
    }
}
const array = [6, 5];
console.log(sortMaker(array));