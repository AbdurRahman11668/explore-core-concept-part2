// for (of) use on array or string not in object
// for (in) use on object

const numbers = [1, 6, 8, 4];
// for(let i = 0; i< numbers.length; i++){}

for( const num of numbers){
    // console.log(num);
}

const nobab = 'Siraj ud Ullah';
for(const char of nobab){
    // console.log(char);
}

const glass = {
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true
};
// for(const keys of glass){
//     console.log(keys);
// }
for(const key in glass){
    const value = glass[key]
        console.log(key,value);
    }

    