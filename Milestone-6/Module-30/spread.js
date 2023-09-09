const max = Math.max(6, 23, 45, 1, 89, 23);
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(...numbers);
console.log(arrayMax)

//Use spread operator to copy
const nums = [4, 5, 87, 9];
const num2 = nums;
const dosto = [...nums];
console.log(dosto)
nums.push(12);
console.log(dosto);
console.log(nums);

// Advanced
const sonkha = [...nums, 9999];
console.log(sonkha)
