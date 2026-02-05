// const user = {
// id: 101,
// name: "Alex",
// profile: {
//     email: "alex@gmail.com",
//     city: "Dhaka"
// }
// };


// // Destructuring Objects
// const { name, profile:{email}} = user;
// // console.log(name);
// // console.log(email);


// // Array Destructuring
// const colors = ["red", "green", "blue", "yellow"];
// const [first, second] = colors;
// // console.log(first);
// // console.log(second);


// const doubleNumbers = numbers => numbers.map(num => num * 2);
// // console.log(doubleNumbers([1, 2, 3, 4]));

// let num = 2;

// const num2 = 5;

// num = 6;

// // console.log(num)

// const addFive = num => num + 5;
// // console.log(addFive(10));


const name = "alex";
const age = 45;

// console.log(`My name is ${name} and i am ${age} years old`);



const fruits = ["apple", "banana", "mango"];
const [one, two] = fruits;
// console.log(one);
// console.log(two);

const user = {
    username: "jarif",
    country: "Bangladesh"
};

const {username, country} = user;
// console.log(username);


const greet = (name = "Guest") => {
    // console.log(name);
};
greet("Alex")
greet();

const numbers = [1, 2, 3];
const newArr = [...numbers, 4 , 5];
// // console.log(newArr);

// const getFirstElement = arr => arr[0];
// // console.log(getFirstElement([10, 20, 30]));

// const colors = ["red", "green", "blue"];

// for ( const color of colors) {
//     console.log(color);
// }

// const person = {
//     name: "Alex",
//     age: 30,
//     sayHello() {
//         console.log("Hello");
//     }
// }
// person.sayHello();

