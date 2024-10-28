// maths.js

// Importing necessary libraries
const math = require('mathjs'); // Ensure math.js is installed via npm

// Basic arithmetic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Function to evaluate mathematical expressions safely
function evaluateExpression(expression) {
    try {
        return math.evaluate(expression);
    } catch (error) {
        return "Error: Invalid expression";
    }
}

// Advanced mathematical functions
function squareRoot(a) {
    if (a < 0) {
        return "Error: Negative number";
    }
    return Math.sqrt(a);
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Trigonometric functions
function sine(angle) {
    return Math.sin(degreesToRadians(angle));
}

function cosine(angle) {
    return Math.cos(degreesToRadians(angle));
}

function tangent(angle) {
    return Math.tan(degreesToRadians(angle));
}

// Convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Logarithmic functions
function logarithm(base, value) {
    if (base <= 0 || base === 1 || value <= 0) {
        return "Error: Invalid logarithm parameters";
    }
    return Math.log(value) / Math.log(base); // Change of base formula
}

// Function to calculate factorial
function factorial(n) {
    if (n < 0) {
        return "Error: Negative number";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Complex number operations
function addComplex(c1, c2) {
    return {
        real: c1.real + c2.real,
        imaginary: c1.imaginary + c2.imaginary
    };
}

function multiplyComplex(c1, c2) {
    return {
        real: c1.real * c2.real - c1.imaginary * c2.imaginary,
        imaginary: c1.real * c2.imaginary + c1.imaginary * c2.real
    };
}

// Matrix operations
function addMatrices(matrixA, matrixB) {
    return math.add(matrixA, matrixB);
}

function multiplyMatrices(matrixA, matrixB) {
    return math.multiply(matrixA, matrixB);
}

// Statistical functions
function mean(numbers) {
    return math.mean(numbers);
}

function variance(numbers) {
    return math.variance(numbers);
}

function standardDeviation(numbers) {
    return math.std(numbers);
}

function median(numbers) {
    return math.median(numbers);
}

function mode(numbers) {
    return math.mode(numbers);
}

// Basic calculus functions
function derivative(f, x) {
    const h = 1e-10; // Small step size
    return (f(x + h) - f(x)) / h;
}

function definiteIntegral(f, a, b, n = 1000) {
    const h = (b - a) / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += f(a + i * h);
    }
    return sum * h;
}

// Solving ordinary differential equations (ODEs)
function solveODE(ode, y0, t0, tEnd, stepSize) {
    const results = [];
    let t = t0;
    let y = y0;

    while (t <= tEnd) {
        results.push({ t, y });
        y += ode(t, y) * stepSize; // Euler's method
        t += stepSize;
    }

    return results;
}

// Optimization (Gradient Descent for single-variable functions)
function gradientDescent(f, df, x0, learningRate, tolerance, maxIterations) {
    let x = x0;
    let iterations = 0;

    while (iterations < maxIterations) {
        const grad = df(x);
        const xNew = x - learningRate * grad;

        if (Math.abs(xNew - x) < tolerance) {
            break;
        }
        x = xNew;
        iterations++;
    }

    return x;
}

// Exporting functions for use in the chatbot
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    evaluateExpression,
    squareRoot,
    power,
    sine,
    cosine,
    tangent,
    logarithm,
    factorial,
    addComplex,
    multiplyComplex,
    addMatrices,
    multiplyMatrices,
    mean,
    variance,
    standardDeviation,
    median,
    mode,
    derivative,
    definiteIntegral,
    solveODE,
    gradientDescent
};
