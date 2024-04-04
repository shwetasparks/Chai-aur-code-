const coding = ["js", "css", "html"];
let values = coding.forEach((item) => {
   console.log(item);
});
// console.log(values); //returing undefined
// //forEach does return so if we try to console it outside the scope it is not printing



//filter returns value only if condition is true
const myNum = [1, 2, 33, 4, 67, 9, 76];
let newNum = myNum.filter((nums) => {
   return nums > 4; //*****important  .. return keyword is imp*/
});
console.log(newNum);



//same using forEach
const newNums = [];
myNum.forEach((num) => {
   if (num > 4) {
      newNum.push(num);
   }
});
console.log(newNum);




