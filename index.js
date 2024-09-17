// 1) Function to calculate the difference between two arguments
function calculateDifference(num1, num2) {
    return num1 - num2;
}

// 2) Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// 3) Function to find the minimum number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// 4) Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5) Function to sort an array in descending order
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

// 6) Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7) Function to count the number of vowels in a string
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 8) Function to find the average of an array of numbers
function findAverage(arr) {
    if (arr.length === 0) return 0;
    let sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}

console.log(calculateDifference(12, 3));
console.log(isOdd(3));
console.log(findMin([3, 5, 1, 9])); 
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(sortArrayDescending([5, 1, 9, 2]));
console.log(lowercaseFirstLetter('Hello'));
console.log(countVowels('Hello World'));
console.log(findAverage([1, 2, 3, 4]));
