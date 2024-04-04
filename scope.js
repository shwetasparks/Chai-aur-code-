//global scope
let a=450;


if (true) {
    //block scope
   let a = 34;
   const b = 44;
   var c = 12;  
   console.log("block scope : inner=",a) 
   
}

console.log("global scope a = ",a);
console.log(b);
console.log(c);
