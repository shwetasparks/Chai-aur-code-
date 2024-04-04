// //arrow function
const chai = () => {
   let user = "shweta";
   console.log(this); //gives undefined in output
};
chai();

//arrow
// ()=>{}
//explicit: use return keyword
const addNum = (num1, num2) => {
   return num1 + num2;
};
console.log(addNum(4, 9));

//implicit return function: no return keyword required
//no { } required
//can use parenthesis => used more often in react
const addNums = (num1, num2) => (num1 + num2);
console.log(addNums(4, 9));



//object return 
const addNumz = (num1, num2) => ({ user: "shweta" }); //use of parenthesis is must to wrap it
console.log(addNumz(4, 9));
//output: { user: 'shweta' }

const myArray=[34,66,55,22]
myArray.forEach(function () {})
//or
myArray.forEach(()=> {});
//or
myArray.forEach(()=>());