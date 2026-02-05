// function sum(num1, num2 = 0){
//     const total = num1 + num2;
//     console.log(num1, num2, total);
// }
// sum(10);
// sum(10, 40);
// NaN --- Not a Numbar

// function multiply(num1 = 1, num2 = 1) {
//     const result = num1 * num2;
//     console.log(result)
// }
// multiply()


function fullName (first, last = '') {
    const name = first + "" + last;
    console.log(name)
}
fullName('kamrul')


/**
 * some thumb rule of defult value. may be useful
 * add, substract ---> 0
 * 
 * multiply ---> 1
 * 
 * string ---> ''
 * 
 * array = []
 * 
 * object ={}
 */