// //global scope
// let a=450;

// if (true) {
//     //block scope
//    let a = 34;
//    const b = 44;
//    var c = 12;
//    console.log("block scope : inner=",a)

// }

// console.log("global scope a = ",a);
// console.log(b);
// console.log(c);

//nested function

function one() {
   const username = "shweta";
   function two() {
      const website = "youtube";
      console.log(username);
   }
   // console.log(website)
   two();
}
one();


//if else scope

if(true){
    const username = "shweta";
    if(username==="shweta"){
        const website="youtube"
        console.log(username+" "+ website)
    }
    // console.log(website) //error out of scope
}
// console.log(username) //outof scope


//*********  interesting */
console.log(addone(4));
function addone(num){
    return num+1;
}


//understanding hoisting
//expression
console.log(addTwo(6));  //can't declare function expression before declaration
const addTwo= function (num){
    return num+2;

}
