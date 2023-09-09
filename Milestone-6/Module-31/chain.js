// How to data access
const data = [{id: 1, name: 'abul', address: 'lochu khet'}];


const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 165000}
    ]
}
console.log(products.data[1].price);

const user = {
    id: 5001,
    name: 'shoriful raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag r goli',
            thir: 'no dorai'
        },
        city: 'Dhaka'
    }
}
console.log(user.address.street.first)
// Optional Chaining
console.log(user.address.street?.first)