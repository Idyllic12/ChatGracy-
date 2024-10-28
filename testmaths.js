// testMaths.js

const maths = require('./maths.js');

function testMaths() {
    console.log("Testing Addition:");
    console.log("three + seven =", maths.add("three", "seven")); // Expected: 10

    console.log("Testing Subtraction:");
    console.log("ten - six =", maths.subtract("ten", "six")); // Expected: 4

    console.log("Testing Multiplication:");
    console.log("five * four =", maths.multiply("five", "four")); // Expected: 20

    console.log("Testing Division:");
    console.log("nine / three =", maths.divide("nine", "three")); // Expected: 3

    console.log("Testing Invalid Input:");
    console.log("five + eleven =", maths.add("five", "eleven")); // Expected: Invalid input message
    console.log("ten / zero =", maths.divide("ten", "zero")); // Expected: Cannot divide by zero.
}

testMaths();
