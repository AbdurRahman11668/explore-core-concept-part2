const jim = 84;
const dela = 99;
const chinku = 77;

// if(jim > dela){
//     console.log('Jim will ge the cake');
// }
// else{
//     console.log('Dela you will get the cake');
// }

if(jim > dela && jim > chinku){
    console.log('Jim will get the cake');
}
else if(dela > jim && dela > chinku){
    console.log('Dela will get the cake');
}
else{
    console.log('Chinku will get the cake');
}