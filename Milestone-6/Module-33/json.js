const user = {id: 1, name: 'Gorib Amir', job: 'Actor'};
const stringified = JSON.stringify(user); //It(Stringify) converts into string.
console.log(user);
console.log(stringified);


const shop = {
    owner: 'Alia',
    address: {
        streent: 'kochukhet bhuter goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ["laptop", 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON)
const shopObj = JSON.parse(shopJSON);//It(parse) converts into OBJECT.
console.log(shopObj)