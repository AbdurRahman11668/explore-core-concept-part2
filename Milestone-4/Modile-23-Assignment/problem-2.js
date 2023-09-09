function matchFinder(string1, string2) {
    const index = string1.indexOf(string2);
    // console.log(index);
    if(index !== -1){
        return true;
    }
    else if(typeof(string1) != 'string' || typeof(string2) != 'string'){
        return "Enter a String Variable, Otherwise You will not get the accurate answer."
    }
    else{
        return false;
    }
}

console.log(matchFinder("Peter Parker", "pet"));