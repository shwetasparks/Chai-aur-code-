//function is like a package

// function myName(){
// console.log("hello i am here");
// }
// console.log(myName());
// console.log(myName); //instance of function

// function addNumber(x,y){
//     console.log(x+y)
// }
// let result=addNumber(3,6)
// console.log(result) //gives undefined


//return in function is imp

// function addNumbers(x, y) {
//    let result =x+y;
//    return result;
// }
// let results = addNumbers(3, 6);
// console.log("ans is :",results); 


// function loginUser(user){
//     return `${user} logged in successfully`
// }
// console.log(loginUser()) //if no data passed then return 'undefined'

function loginUser(username="sam"){
    if(!username){
       // username===undefined)
       console.log("enter your username");
       return;
    }
    return `${username} logged in successfully`
}
console.log(loginUser())  //if value is not passed then undefined