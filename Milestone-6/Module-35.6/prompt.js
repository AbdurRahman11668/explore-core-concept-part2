const alertUser = () =>{
    alert('focus on learning')
}

const seriousStudent = () =>{
    const serious = confirm('Are you spending 6-8 hrs every single day to learn web develper');

    if(serious === true){
        alert('Well done! keep it up');
    }
    else{
        console.log('kopal e dukkho ase')
    }
}

const getName = () =>{
    const name = prompt("what is your name?");
    console.log(name)
}