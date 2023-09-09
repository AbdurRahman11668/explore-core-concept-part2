const actor = {
    name: 'Ananta',
    age: 30,
    phone: '0171234567',
    money: 123456789
}

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

// If right side is an object, left side of destruction will be object as well
// Use property name as a variable that contains the property value
const {phone, age: boyos, name} = actor;

console.log(name);
console.log(phone);
console.log(boyos);

// Array destructuring
const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];

//Advanced
function doubleThem(a, b){
    return [a*2, b*2];
}
const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);