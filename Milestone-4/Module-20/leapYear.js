function leapYear(year){
    var result;
    if (year/400){
      result = true
    }
    else if(year/100){
      result = false
    }
    else if(year/4){
      result= true
    }
    else{
      result= false
    }
    return result
 }

 var finalYear = leapYear(1700);
 console.log(finalYear);