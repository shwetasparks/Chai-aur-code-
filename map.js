const myNumber = [1, 2, 3, 4, 14, 5, 6, 77, 8];
const newNum = myNumber.map((num) => {
   return num + 100;
});
console.log(newNum);

//chaining 
const newNums = myNumber
.map((nums) => nums * 10)
.map((num)=>num+2)
.filter((num)=>num>40)
console.log(newNums);