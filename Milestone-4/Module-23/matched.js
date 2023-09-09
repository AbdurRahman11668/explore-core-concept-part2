const numbers = [45, 64, 23, 98, 19];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }
// same as first for loop
for(const number of numbers){
    console.log(number);
}


/////////
const products = [
    {id:1, name: 'xaomi phone one night', proce: 19000},
    {id:2, name: 'iphone', proce: 19000},
    {id:3, name: 'mac book air', proce: 119000},
    {id:4, name: 'lenovo yoga laptop 2025', proce: 19000},
    {id:5, name: 'dell inspiron laptop', proce: 19000},
    {id:6, name: 'Samsung phone note 7', proce: 19000},
    {id:7, name: 'nakia old age phone', proce: 19000},
    {id:8, name: 'phone one', proce: 19000},
];
// for(const product of products){
//     console.log(product);
// }

function matchProducts(products, search){
    const matched = [];
    for(const product of products){
        // console.log(product.name);
        if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product);
        }
    }
    return matched;

}
const result = matchProducts(products, 'phone');
console.log(result);

