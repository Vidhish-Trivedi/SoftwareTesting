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
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function complexMathCalculation(a, b, c, d) {
    const sum = add(a, b);
    const difference = subtract(c, d);
    const product = multiply(sum, difference);
    const result = divide(product, 2);
    let finalResult = result;
    
    for (let i = 0; i < 5; i++) {
        if (i % 2 === 0) {
            finalResult = add(finalResult, i);
        } else {
            finalResult = subtract(finalResult, i);
        }
    }
    return finalResult;
}

// mutant ipex
function complexMathCalculation1(d, b, c, a) {
    const sum = add(a, b);
    const difference = subtract(c, d);
    const product = multiply(sum, difference);
    const result = divide(product, 2);
    let finalResult = result;
    
    for (let i = 0; i < 5; i++) {
        if (i % 2 === 0) {
            finalResult = add(finalResult, i);
        } else {
            finalResult = subtract(finalResult, i);
        }
    }
    return finalResult;
}

// mutant imcd
function complexMathCalculation2(a, b, c, d) {
    const sum = 100;
    const difference = subtract(c, d);
    const product = multiply(sum, difference);
    const result = divide(product, 2);
    let finalResult = result;
    
    for (let i = 0; i < 5; i++) {
        if (i % 2 === 0) {
            finalResult = add(finalResult, i);
        } else {
            finalResult = subtract(finalResult, i);
        }
    }
    return finalResult;
}

// mutant irem
function complexMathCalculation3(a, b, c, d) {
    const sum = add(a, b);
    const difference = subtract(c, d);
    const product = multiply(sum, difference);
    const result = divide(product, 2);
    let finalResult = result;
    
    for (let i = 0; i < 5; i++) {
        if (i % 2 === 0) {
            finalResult = add(finalResult, i);
        } else {
            finalResult = subtract(finalResult, i);
        }
    }
    return -finalResult;
}

export { add, subtract, multiply, divide, complexMathCalculation, complexMathCalculation1, complexMathCalculation2, complexMathCalculation3 };