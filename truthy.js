const userEmail="shweta@gmail.com"
if(userEmail){
    console.log("got user email");

} else{
    console.log("no user email");
}

//falsy values
/**
 * false
 * 0 , -0
 * BigInt
 * Null
 * Undefined
 * NaN
 * ""
 * 
 * 
 */

//truthy values
/***
 * 1. "0" 
 *  2. 'false'
 * 3.""
 * 4.[]
 * 5.{}
 * 6.function(){}
 * 
 * 
 * 
 */


//to check array
if(userEmail.length===0){
    console.log("array is empty");
}


const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")

}
if(false==0){
    console.log("true")
}
if (false == "") {
   console.log("true");
}

if ("" == 0) {
   console.log("true");
}

//and &&
//or ||
//nullish coalescing operator(??):null undefined

let val1;
val1=6??10
val3=null?? 10
var1= undefined?? 15
//whatever values it get first asigned to it
console.log(val1)
console.log(var1)
console.log(val3);


//terninary operator
// condition? true:false

const coffeePrice=200;
coffeePrice<=150 ? console.log("lesser than 100"): console.log("greater than 150")