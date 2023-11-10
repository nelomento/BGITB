const numbers = [1, 2, 3, 4, 5];

const double = (number) => number = 2;

const doubleNumbers = numbers.map(double);

const isEven = (number) => number % 2 === 0;

const evenNumbers = numbers.filter(isEven);

const sum= (numberArray) => numberArray.reduce((acc, curr) => acc + curr, 0);

const totalSum = sum(numbers);

console.log("Doubled Numbers", doubledNumbers);
console.log("Even numbers", evenNumbers);
console.log("Total Sum", totalSum);