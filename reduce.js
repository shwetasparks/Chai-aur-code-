const myNums = [1, 3, 4, 5, 6];
myNums.reduce(function (acc, curVal) {
   console.log(`accumulator is ${acc} and current value is ${curVal}`);
   return acc + curVal;
}, 0);
console.log(myNums);

//using arrow function
let totalVal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(totalVal);

//practical value  to implement reduce
const shoppingCart = [
   {
      name: "milk",
      price: 10,
   },
   {
      name: "eggs",
      price: 20,
   },
   {
      name: "bread",
      price: 30,
   },
];
let totalAmount = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalAmount);
