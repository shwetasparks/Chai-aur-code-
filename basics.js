// // // let myName="shweta";
// // // let bro="divyanshu"
// // // bro=myName;
// // // console.log(myName)
// // // console.log(bro)

// // const dishes={
// //     indian:"samosa",
// //     fastFood: "golgappa",
// //     southIndian:"idli"
// // }

// // let myDishes=dishes;
// // myDishes.indian="chaat";
// // myDishes.fastFood="pizza"

// // console.log(myDishes.indian);
// // console.log(dishes.indian)
// // console.log(dishes.fastFood)
// // console.log(myDishes.fastFood)
// // // console.table(dishes);
// // // console.table(myDishes.indian)

// // const name="shweta"
// // const repoCount=67;
// // console.log(`hello my name is ${name} and my repo is ${repoCount}`)

// //declare string
// const catName=new String("lissa")
// // console.log(catName)
// // console.log(catName[1])
// // console.log(catName.__proto__);
// // console.log(catName.charAt(3));
// // console.log(catName.indexOf("i"));
// // console.table(catName.indexOf("l"));
// // console.table(catName.indexOf("i"));
// // console.log(catName.indexOf("s"));
// // console.log(catName.indexOf("a"));
// // for(let i=0;i<catName.length;i++){
// //     console.table(catName.indexOf())
// // // }
// // console.log(catName.slice(1,3));
// // console.log(catName.slice(-2,0))

// const newCatName="  lissa key  "
// console.log(newCatName.trim())

// //number
// const score=89;
// const balance=new Number(100);
// console.log(score)
// console.log(Math.ceil(2.7))
// console.log(Math.floor(2.7));
// console.log(Math.round(2.5));
// console.log(Math.sqrt(25))
// console.log(Math.min(2,7,6.9,0,1));
// console.log(Math.max(2, 7, 6.9, 0, 1));
// console.log(Math.random());
// let min=10;
// let max=20
// console.log(Math.floor(Math.random() * (max-min+1))+ min);

//date and time

// let myTimeStamp=Date.now();
// let arr=[1,2,456,7]
// let newArr=[3,5,6,77]
// let newArrq= [21,3,556,71]
// // console.table(arr.slice(1,3))
// // console.table(arr);
// // console.table(arr.splice(1, 3));
// // console.table(arr)
// arr.push(newArr)

// console.table(arr.concat(newArr));
// console.table([...arr, ...newArr ,...newArrq]);

// let myArr=[2,3,4,[45,67],[4,7,8,[6,1,[22,41]]],33]
// console.log(myArr.flat(Infinity))

// console.log(Array.isArray("shweta"));
// console.log(Array.from("shweta"));
// console.log(Array.from({name:"hello"}));
// let score =100;
// let score1=200;
// let score3=300;
// console.log(Array.of(score,score1,score3));
//singleton

//object literals
const mySym = Symbol("hello");
const jsUser = {
   myName: "shweta",
   age: 20,
   location: "India",
   email: "shweta@gmail.com",
   [mySym]: "my",
};
// console.log( jsUser.email)
// console.log(jsUser['email'])
// console.table( jsUser[mySym])

// console.log(jsUser)

jsUser.greeting = function () {
   console.log("hello bro");
};

jsUser.greeting1 = function () {
   console.log(`hello bro, ${this.name}`);
};
console.log(jsUser.greeting());
console.log(jsUser.greeting1());
//symbol
