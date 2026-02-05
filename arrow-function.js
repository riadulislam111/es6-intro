// function declaration
// add(5,7)
function add (num1, num2) {
    return num1 + num2;
}
// add(5,7)

// function expression//
const addition = function(num1, num2){
    return num1 + num2
}

// arrow function
const add2 = (num1, num2) => num1 + num2;
const multiply = (a, b) => a * b;
const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
const isFirstBig = (x, y) => x > y;
const result = add2(17, 13);
const mult = multiply(5, 7);
// console.log(mult);

const isBig = isFirstBig(5, 12);
// console.log(isBig)


// multiLine arrow Function 
const doMath = (x, y) => {
    const makeDouble = x*2;
    const againDouble = y *2;
    const result = makeDouble+againDouble; 
    return result
}
console.log(result)