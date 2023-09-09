const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59];
// const selected = players.filter(p => p > 60);
const selected = players.filter(p => p % 2 === 1);
console.log(selected);

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];
const length = friends.filter(len => len.length > 4);
console.log(length);