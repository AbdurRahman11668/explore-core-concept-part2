function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try{
        const age = parseInt(ageText);

        if(isNaN(age)){
            throw "please enter a number";
        }
        else if(age < 18){
            throw "Bacha kacha not allowed";
        }
        else if(age > 30){
            throw "Murubbi ra eikhane aishen na"
        }
        errorTag.innerHTML = '';
    }
    catch(err){
        console.log("ERROR: ", err)
        errorTag.innerHTML = 'ERROR: '+ err;
    }
    finally{
        console.log("all done inside tr catch")
    }
    console.log(11111)
}