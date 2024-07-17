// let myname : string = 'najim';
// console.log(`input name : ${myname}`);

// console.log(`name in uppar case : ${myname.toUpperCase()}`);
// console.log(`name in lower case : ${myname.toLocaleLowerCase()}`);
// console.log(`name in carecters : ${myname.length}`);

// let myname: string = 'najim';
// console.log(`input name : ${myname}`);

// console.log(`name in upper case : ${myname.toUpperCase()}`);
// console.log(`name in lower case : ${myname.toLocaleLowerCase()}`);
// console.log(`name in characters : ${myname.length}`);


// TypeScript File: all_functions.ts

// Console log
console.log("Hello, TypeScript!");

// String Methods
let myname: string = 'najim';
console.log(`Input name: ${myname}`);
console.log(`Name in upper case: ${myname.toUpperCase()}`);
console.log(`Name in lower case: ${myname.toLowerCase()}`);
console.log(`Name in characters: ${myname.length}`);

// Array Methods
let numbers: number[] = [1, 2, 3, 4, 5];

// Push
numbers.push(6);
console.log(`After push: ${numbers}`); // Output: [1, 2, 3, 4, 5, 6]

// Pop
let lastNumber = numbers.pop();
console.log(`Popped number: ${lastNumber}`); // Output: 6
console.log(`After pop: ${numbers}`); // Output: [1, 2, 3, 4, 5]

// Shift
let firstNumber = numbers.shift();
console.log(`Shifted number: ${firstNumber}`); // Output: 1
console.log(`After shift: ${numbers}`); // Output: [2, 3, 4, 5]

// Unshift
numbers.unshift(1);
console.log(`After unshift: ${numbers}`); // Output: [1, 2, 3, 4, 5]

// Slice
let slicedNumbers = numbers.slice(1, 3);
console.log(`Sliced numbers: ${slicedNumbers}`); // Output: [2, 3]

// Splice
numbers.splice(2, 1);
console.log(`After splice: ${numbers}`); // Output: [1, 2, 4, 5]

// Map
let doubled = numbers.map(num => num * 2);
console.log(`Doubled numbers: ${doubled}`); // Output: [2, 4, 8, 10]

// Filter
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(`Even numbers: ${evenNumbers}`); // Output: [2, 4]

// Reduce
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`Sum of numbers: ${sum}`); // Output: 12

// // Find
// let foundNumber = numbers.find(num => num > 3);
// console.log(`Found number: ${foundNumber}`); // Output: 4

// FindIndex
// let foundIndex = numbers.findIndex(num => num > 3);
// console.log(`Found index: ${foundIndex}`); // Output: 2

// Sort
let unsortedNumbers: number[] = [3, 1, 4, 1, 5];
unsortedNumbers.sort();
console.log(`Sorted numbers: ${unsortedNumbers}`); // Output: [1, 1, 3, 4, 5]

// Reverse
unsortedNumbers.reverse();
console.log(`Reversed numbers: ${unsortedNumbers}`); // Output: [5, 4, 3, 1, 1]

// ForEach
numbers.forEach(num => console.log(`Number: ${num}`));

// Void Function Example
function logMessage(message: string): void {
  console.log(message);
}

logMessage("This is a message.");
