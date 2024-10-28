// maths.js

const numberWords = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    // Extend this list as needed
};

function wordToNumber(word) {
    return numberWords[word.toLowerCase()] || null;
}

function add(word1, word2) {
    const num1 = wordToNumber(word1);
    const num2 = wordToNumber(word2);
    if (num1 === null || num2 === null) {
        return "Invalid input. Please use numbers from zero to ten.";
    }
    return num1 + num2;
}

function subtract(word1, word2) {
    const num1 = wordToNumber(word1);
    const num2 = wordToNumber(word2);
    if (num1 === null || num2 === null) {
        return "Invalid input. Please use numbers from zero to ten.";
    }
    return num1 - num2;
}

function multiply(word1, word2) {
    const num1 = wordToNumber(word1);
    const num2 = wordToNumber(word2);
    if (num1 === null || num2 === null) {
        return "Invalid input. Please use numbers from zero to ten.";
    }
    return num1 * num2;
}

function divide(word1, word2) {
    const num1 = wordToNumber(word1);
    const num2 = wordToNumber(word2);
    if (num1 === null || num2 === null) {
        return "Invalid input. Please use numbers from zero to ten.";
    }
    if (num2 === 0) {
        return "Cannot divide by zero.";
    }
    return num1 / num2;
}

// Exporting functions for use in other files
module.exports = {
    add,
    subtract,
    multiply,
    divide,
};

const maths = require('./maths.js');

const resultAdd = maths.add("five", "three"); // 8
const resultSubtract = maths.subtract("nine", "four"); // 5
const resultMultiply = maths.multiply("two", "six"); // 12
const resultDivide = maths.divide("eight", "two"); // 4

console.log(resultAdd, resultSubtract, resultMultiply, resultDivide);
