const address = [
    {street:10},
];
function findAddress(obj) {
    const index = obj[0];
    for(let i = 0; i< obj.length; i++){
        const value = obj[i];
        if(value.street != null && value.house == null && value.society == null){
            const street = value.street;
            const house = value.house;
            const society = value.society;
            console.log(street,",__,","__");
        }
        else if(value.street != null && value.house == null && value.society != null){
            const street = value.street;
            const house = value.house;
            const society = value.society;
            console.log(street,",__,", society);
        }
        else{
            const street = value.street;
            const house = value.house;
            const society = value.society;
            console.log(street,",", house,",", society);
        }
    }
}
findAddress(address);
