// maths.js

// Function to evaluate basic arithmetic
function calculateBasic(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return "Sorry, I can't calculate that.";
    }
}

// Function for advanced calculations using math.js
function calculateAdvanced(expression) {
    const sanitizedExpression = expression.replace(/[^0-9+\-*/().^ ]/g, ''); // Sanitize input
    try {
        return math.evaluate(sanitizedExpression);
    } catch (error) {
        return "Sorry, I can't calculate that.";
    }
}

// Function to solve quadratic equations
function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `Roots are ${root1} and ${root2}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return `Root is ${root}`;
    } else {
        return "No real roots.";
    }
}

// Function for trigonometric calculations
function calculateTrigonometry(func, angle) {
    switch (func.toLowerCase()) {
        case 'sin':
            return Math.sin(math.unit(angle, 'degrees').toNumber('radians'));
        case 'cos':
            return Math.cos(math.unit(angle, 'degrees').toNumber('radians'));
        case 'tan':
            return Math.tan(math.unit(angle, 'degrees').toNumber('radians'));
        default:
            return "Unknown trigonometric function.";
    }
}

// Function for calculating factorial
function factorial(n) {
    if (n < 0) return "Factorial not defined for negative numbers.";
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function for calculating permutations and combinations
function permutations(n, r) {
    return factorial(n) / factorial(n - r);
}

function combinations(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

// Function to calculate mean, median, mode
function statistics(data) {
    const sorted = data.slice().sort((a, b) => a - b);
    const mean = sorted.reduce((a, b) => a + b, 0) / sorted.length;

    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

    const mode = sorted.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    
    const modes = Object.keys(mode).filter(key => mode[key] === Math.max(...Object.values(mode)));

    return { mean, median, modes };
}

// Export functions (if using Node.js)
// module.exports = {
//     calculateBasic,
//     calculateAdvanced,
//     solveQuadratic,
//     calculateTrigonometry,
//     factorial,
//     permutations,
//     combinations,
//     statistics
// };
