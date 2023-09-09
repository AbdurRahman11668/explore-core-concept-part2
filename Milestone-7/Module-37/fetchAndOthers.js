// 1. JSON

const student = {
    name: "Abdur Rahman",
    age: 24,
    movies: ["no movies", 'no']
}

// strungify
const studentJSON = JSON.stringify(student);
console.log(student)
console.log(studentJSON)

// parse
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


// 2. Fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

//keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 54, 23, 43];
numbers.forEach(num => console.log(num));
numbers.map(num => num *2);

//for -> of on Array like Object
//loop on an object using for -> in


//Add or remove from an array
const products = [
    {name: 'laptop', price: 3200, brand: 'len', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'htc', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ray bon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
];

const newProduct = {name: 'webcam', price: 700, brank: 'lal'};

//copy products array and then Add newProduct
const newProducts = [...products, newProduct]


// Create a new array without one specific items
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone')