const { price, quantity, tax = 8} = { name: 'shirt', price: 500, quantity: 7 }
// console.log(price, quantity, tax);

// const price = product.price;

// const discount = product.price*20/100;
// const yourPay = product.price - discount;
// const vatAmount = product.price * 7/100;
// const totalAmount = yourPay + vatAmount;

// const discount = price*20/100;
// const yourPay = price - discount;
// const vatAmount = price * 7/100;
// const totalAmount = yourPay + vatAmount;

const device = { name: 'phone', brand: 'samsung', price: 17000};
const { brand } = device;

//-------------------//
const numbers = [25, 88, 89, 101];
const [ first, second, third ] = numbers;
const [ math, physics] = [ 90, 99];
// console.log(first, second),
 console.log(math, physics)