const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'macbook', price: 150000}
]

// Map
const names = products.map(product => product.name);
// console.log(names);
const price = products.map(price => price.price);
// console.log(price);

// forEach
// products.forEach(p => console.log(p.id))

// Filter
const expensive = products.filter(p => p.price > 50000)
console.log(expensive)

// Find
const affordable = products.find(p => p.price < 50000)
console.log(affordable)

// Reduce
const total = products.reduce((accum, current) => accum + current.price, 10)
console.log(total)