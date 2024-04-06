//promise: task in queue , complete in future
//Promise is object represent completion or failure of async  task
/**
 * Promises has three states:
 * 1.
 *
 *
 *
 */

//promise created
const promiseOne = new Promise(function (resolve, reject) {
   //do an async task

   //DBcalls,cryptography,network
   setTimeout(function () {
      console.log("async task completed");
   }, 1000);
});

//consume 

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise=(function(resolve,reject){
    setTimeout(function(){
        console.log("async task2")
        resolve()
    },1000)

  
}).then (function(){
    console.log("async task 2 resolved")
})



const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        //pass data
        resolve({username:"chai",email:"shweta@gmail.com"})

     },1000)
})

promiseThree.then(function(user){
console.log(user);
})


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "shweta", password: "123" });
        } else {
            reject('error');
        }
    }, 1000);
});

promiseFour
.then((user)=>{
    console.log(user)
    return user.username 
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("promise is resolved or rejected"))



const promiseFive =new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "divyanshu", password: "123" });
        } else {
            reject('error');
        }
    }, 1000);
})


//async await
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
consumePromiseFive();


async function getAllUser(){
    await response= await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await response.json()
    console.log(data);
}
getAllUser()
 